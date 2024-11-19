import React, { useMemo } from 'react';
import './usericon.css';

interface UserIconProps {
  name: string;
  available: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({ name, available }) => {
  const text = useMemo(
    () =>
      name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase(),
    [name]
  );

  return (
    <div className="usericon-container">
      <div className="usericon-text">{text}</div>
      <div className={`user-status ${available ? 'available' : ''}`}></div>
    </div>
  );
};

export default UserIcon;
