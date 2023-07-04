import React from 'react';

interface ThreeDotMenuProps {
  onDelete: () => void;
}

const ThreeDotMenu: React.FC<ThreeDotMenuProps> = ({ onDelete }) => {
  return (
    <div className="three-dot-menu">
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ThreeDotMenu;