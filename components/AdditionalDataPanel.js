import React from 'react';

const AdditionalDataPanel = ({ item, additionalData, loading, error }) => {
  if (loading) return <div>Loading additional data...</div>;
  if (error) return <div>Error loading additional data: {error.message}</div>;
  if (!additionalData) return null;

  return (
    <div className="additional-data-panel">
      <h2>Additional Information</h2>
      <p>Brand: {additionalData.brand}</p>
      <p>Category: {additionalData.category}</p>
      <p>Rating: {additionalData.rating} ({additionalData.reviewCount} reviews)</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default AdditionalDataPanel;