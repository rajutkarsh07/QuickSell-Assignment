import React, { useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';
import { Ticket, User } from '../../interfaces';

interface GridProps {
  gridData: Record<string, Ticket[]>;
  grouping: string;
  userIdToData: Record<string, User>;
}

const Grid: React.FC<GridProps> = ({ gridData, grouping, userIdToData }) => {
  const keys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className="grid">
      {keys.map((groupKey) => (
        <Column
          key={groupKey}
          tickets={gridData[groupKey]}
          grouping={grouping}
          groupBy={groupKey}
          userIdToData={userIdToData}
        />
      ))}
    </div>
  );
};

export default Grid;
