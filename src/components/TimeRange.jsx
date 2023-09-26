function TimeRange( {timeRange, setTimeRange} ) {

    return (

        <div>
        <button 
            onClick={() => setTimeRange('long_term')}
            className={ timeRange === 'long_term' ? 'button-primary' : 'button-secondary' }
            >All Time
        </button>
        <button 
            onClick={() => setTimeRange('medium_term')}
            className={ timeRange === 'medium_term' ? 'button-primary' : 'button-secondary' }
            >Last 6 Months
        </button>
        <button 
            onClick={() => setTimeRange('short_term')}
            className={ timeRange === 'short_term' ? 'button-primary' : 'button-secondary' }
            >Last 4 Weeks
        </button>
        </div>

    )


}

export { TimeRange }