import { useContext } from 'react';
import { TimeRangeContext } from '../../context/TimeRangeContext';

function TimeRange() {
  const { timeRange, setTimeRange } = useContext(TimeRangeContext);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center">
        of{' '}
        {timeRange === 'long_term'
          ? 'all time'
          : timeRange === 'medium_term'
          ? 'the last 6 months'
          : 'the last 4 weeks'}
      </h2>
      <div className="text-center">
        <button
          onClick={() => setTimeRange('long_term')}
          className={
            timeRange === 'long_term'
              ? 'menu-item-selected'
              : 'menu-item-deselected'
          }
        >
          All Time
        </button>
        <button
          onClick={() => setTimeRange('medium_term')}
          className={
            timeRange === 'medium_term'
              ? 'menu-item-selected'
              : 'menu-item-deselected'
          }
        >
          6 Months
        </button>
        <button
          onClick={() => setTimeRange('short_term')}
          className={
            timeRange === 'short_term'
              ? 'menu-item-selected'
              : 'menu-item-deselected'
          }
        >
          4 Weeks
        </button>
      </div>
    </div>
  );
}

export { TimeRange };
