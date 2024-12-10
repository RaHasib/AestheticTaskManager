import React from 'react';

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#E0D8C3] z-50">
      <div className="text-center">
        <div className="vintage-loader mb-4"></div>
        <p className="text-[#065125] font-serif italic">Loading elegance...</p>
      </div>
    </div>
  );
}

export default Loader; 