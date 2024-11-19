import React from 'react';
import './loader.css';

interface LoaderProps {
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullscreen = true }) => {
  return (
    <div className={`loader-container ${fullscreen ? 'fullscreen' : ''}`}>
      <span className="loader">Loading...</span>
    </div>
  );
};

export default Loader;
