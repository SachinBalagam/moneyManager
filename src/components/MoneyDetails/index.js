// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {text, amount, imgUrl} = details
  return (
    <li className="each-list">
      <img src={imgUrl} alt="balance" className="image" />
      <div className="amount-container">
        <p className="each-text">{text}</p>
        <h1 className="each-amount">Rs {amount}</h1>
      </div>
    </li>
  )
}

export default MoneyDetails
