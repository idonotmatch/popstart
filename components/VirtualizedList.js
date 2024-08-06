import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const VirtualizedList = ({ items, itemHeight, renderItem }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      {renderItem(items[index])}
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={items.length}
          itemSize={itemHeight}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default VirtualizedList;