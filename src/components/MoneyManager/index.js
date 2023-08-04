import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetailsList = [
  {
    id: 1,
    amount: 0,
    text: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
  },
  {
    id: 2,
    amount: 0,
    text: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
  },
  {
    id: 3,
    amount: 0,
    text: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
  },
]

class MoneyManager extends Component {
  state = {transactionList: [], title: '', amount: '', type: 'Income'}

  onFormSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuid(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  ontTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, amount, transactionList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="heading-container">
            <h1 className="title">Hi, Richard</h1>
            <p className="sub-title">
              Welcome back to your
              <span className="span-sub-title"> Money Manager</span>
            </p>
          </div>
          <ul className="moneyDetails-container">
            {moneyDetailsList.map(each => (
              <MoneyDetails key={each.id} details={each} />
            ))}
          </ul>
          <div className="addTransaction-history-container">
            <form
              className="add-transaction-container"
              onSubmit={this.onFormSubmit}
            >
              <h1 className="transaction-title">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
                onChange={this.ontTitleChange}
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                onChange={this.onAmountChange}
                value={amount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select id="type" className="input" onChange={this.onTypeChange}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-title">History</h1>
              <div className="table-heading-container">
                <p className="table-heading">Title</p>
                <p className="table-heading">Amount</p>
                <p className="table-heading">Type</p>
              </div>
              <ul className="transaction-item-container">
                {transactionList.map(each => (
                  <TransactionItem key={each.id} ItemDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
