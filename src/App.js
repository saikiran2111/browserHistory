import {Component} from 'react'
import './App.css'
import UserHistory from './components/UserHistory'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    userHistoryList: initialHistoryList,
  }

  onSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {userHistoryList} = this.state
    const filteredUserList = userHistoryList.filter(each => each.id !== id)

    this.setState({userHistoryList: filteredUserList})
  }

  render() {
    const {searchInput, userHistoryList} = this.state
    // console.log(searchInput)

    const searchResults = userHistoryList.filter(eachItem =>
      eachItem.title.includes(searchInput),
    )

    return (
      <div className="main-container">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="search-img-container">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onSearchValue}
              className="searchInputContainer"
            />
          </div>
        </div>
        <div className="content-container">
          {userHistoryList.length === 0 ? (
            <div className="no-items">
              <p>There is no history to show</p>
            </div>
          ) : (
            <ul className="list-container">
              {searchResults.map(eachResult => (
                <UserHistory
                  key={eachResult.id}
                  historyDetails={eachResult}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
