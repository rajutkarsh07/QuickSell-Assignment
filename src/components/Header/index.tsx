import React from 'react';
import './header.css';
import DisplayDropdown from '../Dropdowns/DisplayDropdown';

interface HeaderProps {
  grouping: string;
  ordering: string;
  setGrouping: (grouping: string) => void;
  setOrdering: (ordering: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  grouping,
  ordering,
  setGrouping,
  setOrdering,
}) => {
  return (
    <header>
      <DisplayDropdown
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
    </header>
  );
};

export default Header;
