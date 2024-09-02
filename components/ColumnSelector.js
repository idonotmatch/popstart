const ColumnSelector = ({ visibleColumns, setVisibleColumns, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    const toggleColumn = (columnName) => {
      setVisibleColumns(prev => ({
        ...prev,
        [columnName]: !prev[columnName]
      }));
    };
  
    return (
      <div className="column-selector">
        <h3>Select Columns</h3>
        {Object.entries(visibleColumns).map(([columnName, isVisible]) => (
          <div key={columnName}>
            <label>
              <input
                type="checkbox"
                checked={isVisible}
                onChange={() => toggleColumn(columnName)}
              />
              {columnName.charAt(0).toUpperCase() + columnName.slice(1)}
            </label>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    );
  };