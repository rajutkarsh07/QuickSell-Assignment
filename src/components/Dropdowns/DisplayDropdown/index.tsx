import React, { useCallback, useEffect, useRef, useState } from 'react';
import './displayDropdown.css';
import { LuSettings2 } from 'react-icons/lu';
import { BiChevronDown } from 'react-icons/bi';

interface DisplayDropdownProps {
  grouping: string;
  ordering: string;
  setGrouping: (grouping: string) => void;
  setOrdering: (ordering: string) => void;
}

const GROUPING_OPTIONS = [
  { value: 'status', label: 'Status' },
  { value: 'user', label: 'User' },
  { value: 'priority', label: 'Priority' },
];

const ORDERING_OPTIONS = [
  { value: 'priority', label: 'Priority' },
  { value: 'title', label: 'Title' },
];

const DisplayDropdown: React.FC<DisplayDropdownProps> = ({
  grouping,
  ordering,
  setGrouping,
  setOrdering,
}) => {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node)
    ) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="display-dropdown" ref={componentRef}>
      <div className="dropdown-label-container" onClick={openDropdown}>
        <LuSettings2 color="#6b6f76" />
        <div className="dropdown-label">Display</div>
        <BiChevronDown color="#6b6f76" />
      </div>
      <div className={`dropdown-content-container ${visible ? 'visible' : ''}`}>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Grouping</div>
          <select
            name="grouping"
            id="grouping"
            value={grouping}
            onChange={(e) => setGrouping(e.target.value)}
          >
            {GROUPING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Ordering</div>
          <select
            name="ordering"
            id="ordering"
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
          >
            {ORDERING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisplayDropdown;
