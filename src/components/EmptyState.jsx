export function EmptyState({ message, icon }) {
      return (
        <div className="empty-state">
          <div className="empty-state-icon">{icon}</div>
          <h3>{message}</h3>
        </div>
      )
    }
