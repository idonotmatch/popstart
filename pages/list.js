import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useList } from '../context/ListContext';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { setReturnTo } from '../utils/auth';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from '../styles/ListPage.module.css';

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
  const { user, isLoading: userLoading } = useUser();
  const router = useRouter();
  const { list, updateQuantity, removeFromList, addNote, refreshList, lastRefresh, clearList } = useList();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [columns, setColumns] = useState([
    { id: 'image', title: 'Image', isVisible: true },
    { id: 'title', title: 'Item', isVisible: true },
    { id: 'originalPrice', title: 'Original Price', isVisible: true },
    { id: 'lastVerifiedPrice', title: 'Last Verified Price', isVisible: true },
    { id: 'quantity', title: 'Quantity', isVisible: true },
    { id: 'subtotal', title: 'Subtotal', isVisible: true },
    { id: 'rating', title: 'Avg. Rating', isVisible: true },
    { id: 'ratingsTotal', title: 'Review Count', isVisible: true },
    { id: 'brand', title: 'Brand', isVisible: true },
    { id: 'source', title: 'Source', isVisible: true },
    { id: 'retailerId', title: 'Retailer ID', isVisible: true },
    { id: 'notes', title: 'Notes', isVisible: true },
  ]);

  useEffect(() => {
    if (!userLoading && !user) {
      setReturnTo(router.asPath);
      router.push('/api/auth/login');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isDropdownOpen && !event.target.closest('.column-visibility-dropdown')) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    } else if (typeof price === 'string') {
      const numericPrice = price.replace(/[^0-9.]/g, '');
      const parsedPrice = parseFloat(numericPrice);
      if (!isNaN(parsedPrice)) {
        return `$${parsedPrice.toFixed(2)}`;
      }
    }
    return 'N/A';
  };

  const calculateItemSubtotal = useCallback((price, quantity) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.-]+/g, "")) : price;
    const numericQuantity = parseInt(quantity, 10);
    
    if (isNaN(numericPrice) || isNaN(numericQuantity)) {
      return 0; // Return 0 if either price or quantity is not a valid number
    }
    
    return numericPrice * numericQuantity;
  }, []);

  const calculateTotals = useCallback(() => {
    const sourceSubtotals = {};
    let totalItems = 0;
    let totalPrice = 0;

    list.items.forEach(item => {
      const source = item.source || (item.link?.includes('amazon.com') ? 'Amazon' : 'Walmart');
      const subtotal = calculateItemSubtotal(item.lastVerifiedPrice || item.originalPrice, item.quantity);
      
      if (sourceSubtotals[source]) {
        sourceSubtotals[source] += subtotal;
      } else {
        sourceSubtotals[source] = subtotal;
      }

      totalItems += parseInt(item.quantity, 10) || 0;
      totalPrice += subtotal;
    });

    return { sourceSubtotals, totalItems, totalPrice };
  }, [list.items, calculateItemSubtotal]);

  const { sourceSubtotals, totalItems, totalPrice } = useMemo(() => calculateTotals(), [calculateTotals]);

  const handleQuantityChange = useCallback((uniqueId, newQuantity) => {
    console.log("Quantity change:", uniqueId, newQuantity);
    updateQuantity(uniqueId, parseInt(newQuantity));
  }, [updateQuantity]);

  const sortItems = useCallback((items, sortConfig) => {
    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === 'subtotal') {
          aValue = calculateItemSubtotal(a.lastVerifiedPrice || a.originalPrice, a.quantity);
          bValue = calculateItemSubtotal(b.lastVerifiedPrice || b.originalPrice, b.quantity);
        } else {
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];

          if (sortConfig.key === 'originalPrice' || sortConfig.key === 'lastVerifiedPrice') {
            aValue = parseFloat((String(aValue || '0')).replace(/[^0-9.-]+/g, ""));
            bValue = parseFloat((String(bValue || '0')).replace(/[^0-9.-]+/g, ""));
          }
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
  }, [calculateItemSubtotal]);

  const requestSort = useCallback((key) => {
    if (key === 'image') return; // Ignore sorting for image column
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending' };
      }
      return { key, direction: 'ascending' };
    });
  }, []);

  const getSortIndicator = useCallback((columnName) => {
    if (columnName === 'image') return ''; // Don't show sort indicator for image column
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

  const handleClearList = () => {
    if (window.confirm('Are you sure you want to clear your entire list?')) {
      clearList();
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const sortedItems = useMemo(() => sortItems(list.items, sortConfig), [list.items, sortConfig, sortItems]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    if (result.type === 'column') {
      const newColumns = Array.from(columns);
      const [reorderedColumn] = newColumns.splice(result.source.index, 1);
      newColumns.splice(result.destination.index, 0, reorderedColumn);
      setColumns(newColumns);
    } else if (result.type === 'row') {
      const newItems = Array.from(sortedItems);
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, reorderedItem);
      // You might need to update your list context here
    }
  };

  const toggleColumnVisibility = (columnId) => {
    setColumns(columns.map(column =>
      column.id === columnId ? { ...column, isVisible: !column.isVisible } : column
    ));
  };

  const renderCell = (item, columnId) => {
    switch (columnId) {
      case 'image':
        return (
          <ImageWithFallback 
            src={item.image} 
            alt={item.title} 
            width={50} 
            height={50} 
            item={item}
          />
        );
      case 'title':
        return <div className={styles.titleCell}>{item.title}</div>;
      case 'originalPrice':
        return formatPrice(item.originalPrice);
      case 'lastVerifiedPrice':
        return (
          <>
            {formatPrice(item.lastVerifiedPrice)}
            {item.lastVerifiedPrice !== item.originalPrice && (
              <div className={`price-change ${parseFloat(item.lastVerifiedPrice) > parseFloat(item.originalPrice) ? 'increase' : 'decrease'}`}>
                {(() => {
                  const originalPrice = parseFloat(item.originalPrice);
                  const lastVerifiedPrice = parseFloat(item.lastVerifiedPrice);
                  if (!isNaN(originalPrice) && !isNaN(lastVerifiedPrice) && originalPrice !== 0) {
                    const changePercent = ((lastVerifiedPrice - originalPrice) / originalPrice * 100).toFixed(2);
                    return `${lastVerifiedPrice > originalPrice ? '▲' : '▼'} ${Math.abs(changePercent)}%`;
                  }
                  return '';
                })()}
              </div>
            )}
          </>
        );
      case 'quantity':
        return (
          <>
            <input
              className="quantity-input"
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
          </>
        );
      case 'subtotal':
        const subtotal = calculateItemSubtotal(item.lastVerifiedPrice || item.originalPrice, item.quantity);
        return formatPrice(subtotal);
      case 'rating':
        return item.rating || 'N/A';
      case 'ratingsTotal':
        return item.ratingsTotal ? formatNumber(item.ratingsTotal) : 'N/A';
      case 'brand':
        return item.brand || 'N/A';
      case 'source':
        return item.source || (item.link?.includes('amazon.com') ? 'Amazon' : 'Walmart');
      case 'retailerId':
        return item.asin || item.id || 'N/A';
      case 'notes':
        return (
          <input
            type="text"
            value={item.note || ''}
            onChange={(e) => addNote(item.uniqueId, e.target.value)}
            placeholder="Add note..."
          />
        );
      default:
        return 'N/A';
    }
  };

  const checkForAdditionalFields = useCallback(() => {
    const displayedFields = new Set(columns.map(col => col.id));
    const allFields = new Set();

    list.items.forEach(item => {
      Object.keys(item).forEach(key => {
        if (!displayedFields.has(key)) {
          allFields.add(key);
        }
      });
    });

    const additionalFields = Array.from(allFields);
    if (additionalFields.length > 0) {
      console.log('Additional fields not displayed in the table:', additionalFields);
    } else {
      console.log('No additional fields found.');
    }

    return additionalFields;
  }, [list.items, columns]);

useEffect(() => {
    checkForAdditionalFields();
  }, [checkForAdditionalFields]);

  if (userLoading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="list-page-container">
      <Head>
        <title>Curious Trio - Your List</title>
        <meta name="description" content="View, research, dig into data, and manage your saved items on Curious Trio" />
      </Head>

      <Header />
      <main className="list-page">
        <div className="list-actions">
          <button className="styled-button" onClick={handleRefresh} disabled={isRefreshing}>
            {isRefreshing ? 'Refreshing...' : 'Refresh List'}
          </button>
          <button className="styled-button" onClick={handleClearList}>Clear List</button>
          <div className="column-visibility-dropdown">
            <button className="styled-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Data Selection
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {columns.map(column => (
                  <label key={column.id}>
                    <input
                      type="checkbox"
                      checked={column.isVisible}
                      onChange={() => toggleColumnVisibility(column.id)}
                    />
                    {column.title}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        {lastRefresh && <p>Last refreshed: {formatDate(lastRefresh)}</p>}
        {list.items.length === 0 ? (
          <p>Start populating your list</p>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="table-wrapper">
              <table className="list-table">
                <Droppable droppableId="columns" direction="horizontal" type="column">
                  {(provided) => (
                    <thead {...provided.droppableProps} ref={provided.innerRef}>
                      <tr>
                        {columns.filter(column => column.isVisible).map((column, index) => (
                          <Draggable key={column.id} draggableId={column.id} index={index}>
                            {(provided) => (
                              <th
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => requestSort(column.id)}
                              >
                                {column.title}{getSortIndicator(column.id)}
                              </th>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </tr>
                    </thead>
                  )}
                </Droppable>
                <Droppable droppableId="rows" type="row">
                  {(provided) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                      {sortedItems.map((item, index) => (
                        <Draggable key={item.uniqueId} draggableId={item.uniqueId} index={index}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {columns.filter(column => column.isVisible).map(column => (
                                <td key={column.id}>
                                  {renderCell(item, column.id)}
                                </td>
                              ))}
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
                <tfoot>
                  <tr className="list-summary">
                    <td colSpan="4">List Summary</td>
                    <td>Total Items: {formatNumber(totalItems)}</td>
                    <td colSpan="7">Total Price: {formatPrice(totalPrice)}</td>
                  </tr>
                  {Object.entries(sourceSubtotals).map(([source, subtotal]) => (
                    <tr key={source} className="source-summary">
                      <td colSpan="4"></td>
                      <td>{source} Subtotal:</td>
                      <td colSpan="7">{formatPrice(subtotal)}</td>
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </DragDropContext>
        )}
      </main>
      <Footer />
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
      <style jsx>{`
        .list-table {
          table-layout: fixed;
          width: 100%;
        }
        .list-table th,
        .list-table td {
          padding: 8px;
          border: 1px solid #ddd;
          overflow: hidden;
        }
        .list-table th:nth-child(2),
        .list-table td:nth-child(2) {
          width: 200px; /* Adjust this value as needed */
        }
      `}</style>
    </div>
  );
};

export default ListPage;