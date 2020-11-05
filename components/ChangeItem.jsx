import { useState } from 'react';
import dayjs from 'dayjs';
import ChangeList from './ChangeList';

export default function ChangeItem({ change, defaultCollapsed }) {
  const date = dayjs(change.time);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, null, `#${change.time}`);
    setCollapsed(false);
  };

  return (
    <section
      id={change.time}
      className={`log ${collapsed ? 'collapsed' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="date">
        <div className="day">{date.format('D')}</div>
        <div className="month">{date.format('MMM')}</div>
        <div className="year">{date.format('YYYY')}</div>
      </div>
      <div className="list">
        {change.changes.map((list, i) => <ChangeList key={i} list={list} />)}
      </div>
    </section>
  );
}
