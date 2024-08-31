import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useList } from '../context/ListContext';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

// Image Modal Component
const ImageModal = ({ src, alt, onClose }) => (
  <div className="image-modal-overlay" onClick={onClose}>
    <div className="image-modal-content" onClick={e => e.stopPropagation()}>
      <img src={src} alt={alt} className="image-modal-img" />
      <button className="image-modal-close" onClick={onClose}>&times;</button>
    </div>
  </div>
);

const ListPage = () => {
  const { list, updateQuantity, removeFromList, addNote, refreshList, lastRefresh } = useList();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const initialRefreshDone = useRef(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!initialRefreshDone.current) {
      refreshList();
      initialRefreshDone.current = true;
    }
  }, [refreshList]);

  const getEnlargedWalmartImage = (url) => {
    try {
      const parsedUrl = new URL(url);
      parsedUrl.pathname = parsedUrl.pathname.replace(/\/\d+x\d+\./, '/');
      parsedUrl.searchParams.set('odnHeight', '450');
      parsedUrl.searchParams.set('odnWidth', '450');
      parsedUrl.searchParams.set('odnBg', 'FFFFFF');
      return parsedUrl.toString();
    } catch (error) {
      console.error('Error parsing Walmart image URL:', error);
      return url;
    }
  };

  const ImageWithFallback = ({ src, alt, width, height, item }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
      if (item.source === 'walmart') {
        setImageSrc(getEnlargedWalmartImage(src));
      }
    }, [src, item.source]);

    const handleImageClick = () => {
      const modalSrc = item.source === 'walmart' ? getEnlargedWalmartImage(src) : src;
      setModalImage({ src: modalSrc, alt });
    };

    try {
      return (
        <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
          <Image src={imageSrc} alt={alt} width={width} height={height} />
        </div>
      );
    } catch (error) {
      return (
        <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
          <img src={imageSrc} alt={alt} style={{ width, height, objectFit: 'contain' }} />
        </div>
      );
    }
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const calculateSubtotal = useCallback((price, quantity) => {
    const numericPrice = parseFloat((price || '0').replace(/[^0-9.-]+/g,""));
    return (numericPrice * quantity).toFixed(2);
  }, []);

  const handleQuantityChange = useCallback((uniqueId, newQuantity) => {
    console.log("Quantity change:", uniqueId, newQuantity);
    updateQuantity(uniqueId, parseInt(newQuantity));
  }, [updateQuantity]);

  const sortItems = useCallback((items, sortConfig) => {
    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        if (sortConfig.key === 'price' || sortConfig.key === 'lastVerifiedPrice') {
          aValue = parseFloat((aValue || '0').replace(/[^0-9.-]+/g,""));
          bValue = parseFloat((bValue || '0').replace(/[^0-9.-]+/g,""));
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, []);

  const requestSort = useCallback((key) => {
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending' };
      }
      return { key, direction: 'ascending' };
    });
  }, []);

  const getSortIndicator = useCallback((columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
    }
    return '';
  }, [sortConfig]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshList();
    setIsRefreshing(false);
  };

  const sortedItems = useMemo(() => sortItems(list.items, sortConfig), [list.items, sortConfig, sortItems]);

  const totalItems = useMemo(() => list.items.reduce((sum, item) => sum + item.quantity, 0), [list.items]);
  const totalPrice = useMemo(() => 
    list.items.reduce((sum, item) => sum + parseFloat(calculateSubtotal(item.lastVerifiedPrice || item.price, item.quantity)), 0).toFixed(2),
    [list.items, calculateSubtotal]
  );

  return (
    <div className="page-container">
      <Header />
      <main className="list-page">
        <h1>Your List</h1>
        <button onClick={handleRefresh} disabled={isRefreshing}>
          {isRefreshing ? 'Refreshing...' : 'Refresh List'}
        </button>
        {lastRefresh && <p>Last refreshed: {new Date(lastRefresh).toLocaleString()}</p>}
        {list.items.length === 0 ? (
          <p>Your list is empty</p>
        ) : (
          <div className="list-table-container">
            <table className="list-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th onClick={() => requestSort('title')}>Item{getSortIndicator('title')}</th>
                  <th onClick={() => requestSort('price')}>Original Price{getSortIndicator('price')}</th>
                  <th onClick={() => requestSort('lastVerifiedPrice')}>Last Verified Price{getSortIndicator('lastVerifiedPrice')}</th>
                  <th>Last Updated</th>
                  <th onClick={() => requestSort('quantity')}>Quantity{getSortIndicator('quantity')}</th>
                  <th>Subtotal</th>
                  <th onClick={() => requestSort('rating')}>Avg. Rating{getSortIndicator('rating')}</th>
                  <th onClick={() => requestSort('ratingsTotal')}>Review Count{getSortIndicator('ratingsTotal')}</th>
                  <th onClick={() => requestSort('brand')}>Brand{getSortIndicator('brand')}</th>
                  <th onClick={() => requestSort('source')}>Source{getSortIndicator('source')}</th>
                  <th>Retailer ID</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item) => (
                  <tr key={item.uniqueId}>
                    <td>
                      <ImageWithFallback 
                        src={item.image} 
                        alt={item.title} 
                        width={50} 
                        height={50} 
                        item={item}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.originalPrice}</td>
                    <td>
                      {item.lastVerifiedPrice}
                      {item.lastVerifiedPrice !== item.originalPrice && (
                        <span className={item.lastVerifiedPrice > item.originalPrice ? 'price-increase' : 'price-decrease'}>
                          {item.lastVerifiedPrice > item.originalPrice ? '▲' : '▼'}
                        </span>
                      )}
                    </td>
                    <td>{new Date(item.lastUpdated).toLocaleString()}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.uniqueId, e.target.value)}
                        min="1"
                      />
                      <br />
                      <a 
                        href="#" 
                        className="remove-link" 
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromList(item.uniqueId);
                        }}
                      >
                        Remove
                      </a>
                    </td>
                    <td>${calculateSubtotal(item.lastVerifiedPrice || item.originalPrice, item.quantity)}</td>
                    <td>{item.rating || 'N/A'}</td>
                    <td>{item.ratingsTotal ? formatNumber(item.ratingsTotal) : 'N/A'}</td>
                    <td>{item.brand || 'N/A'}</td>
                    <td>{item.source || (item.link?.includes('amazon.com') ? 'Amazon' : 'Walmart')}</td>
                    <td>{item.asin || item.id || 'N/A'}</td>
                    <td>
                      <input
                        type="text"
                        value={item.note || ''}
                        onChange={(e) => addNote(item.uniqueId, e.target.value)}
                        placeholder="Add note..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="list-summary">
          <h2>List Summary</h2>
          <p>Total Items: {formatNumber(totalItems)}</p>
          <p>Total Price: ${formatNumber(parseFloat(totalPrice))}</p>
        </div>
      </main>
      <Footer />
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
};

export default ListPage;