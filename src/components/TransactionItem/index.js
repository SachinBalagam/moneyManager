// Write your code here
import './index.css'

const TransactionItem = props => {
  const {ItemDetails} = props
  const {type, title, amount} = ItemDetails
  return (
    <li className="each-transaction-list">
      <p className="each-transaction">{title}</p>
      <p className="each-transaction">Rs {amount}</p>
      <p className="each-transaction">{type}</p>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
