import './index.css'

const UserHistory = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="written-content">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="list-logo" />
        <p className="list-title">{title}</p>
        <p className="list-url">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button
          data-testid="delete"
          onClick={onDelete}
          className="delete-button"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistory
