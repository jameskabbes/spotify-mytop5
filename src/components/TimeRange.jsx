function TimeRange( {timeRange, setTimeRange} ) {

    return (

        <div className="flex flex-col items-center">
        <h2 
            className="text-center"
            >of { timeRange === 'long_term' ? 'All Time' : timeRange === 'medium_term' ? 'Last 6 Months' : 'Last 4 Weeks' }
        </h2>
        <button 
            onClick={() => setTimeRange('long_term')}
            className={ timeRange === 'long_term' ? 'menu-item-selected' : 'menu-item-deselected' }
            >All Time
        </button>
        <button 
            onClick={() => setTimeRange('medium_term')}
            className={ timeRange === 'medium_term' ? 'menu-item-selected' : 'menu-item-deselected' }
            >6 Months
        </button>
        <button 
            onClick={() => setTimeRange('short_term')}
            className={ timeRange === 'short_term' ? 'menu-item-selected' : 'menu-item-deselected' }
            >4 Weeks
        </button>
        </div>

    )


}

export { TimeRange }