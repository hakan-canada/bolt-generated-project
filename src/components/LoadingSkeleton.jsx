export function LoadingSkeleton() {
      return (
        <div className="skeleton-container">
          <div className="skeleton-header" />
          <div className="skeleton-controls">
            <div className="skeleton-button" />
            <div className="skeleton-select" />
          </div>
          <div className="skeleton-table">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton-row">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="skeleton-cell" />
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    }
