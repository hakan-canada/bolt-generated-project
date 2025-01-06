export function ErrorDisplay({ error, onRetry }) {
      return (
        <div className="error-display">
          <div className="error-icon">⚠️</div>
          <h3>Something went wrong</h3>
          <p>{error.message}</p>
          {onRetry && (
            <button onClick={onRetry}>
              Try Again
            </button>
          )}
        </div>
      )
    }
