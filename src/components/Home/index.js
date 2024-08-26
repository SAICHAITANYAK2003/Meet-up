import {Link} from 'react-router-dom'
import RegisterContext from '../../Context/RegisterContext'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered, topicsList} = value

        const getDisplayText = id => {
          const topicText = topicsList.find(eachTopic => eachTopic.id === id)
          return topicText ? topic.displayText : ''
        }
        const displayText = getDisplayText(topic)
        return (
          <>
            <Header />
            <div className="home-container">
              {isRegistered ? (
                <>
                  <h1 className="register-title">Hello {name}</h1>
                  <p className="home-subtitle">Welcome to {displayText}</p>
                </>
              ) : (
                <>
                  <h1 className="home-title">Welcome to Meetup</h1>
                  <p className="home-subtitle">Please register for the topic</p>
                </>
              )}

              <Link to="/register">
                <button className="home-register-button">Register</button>
              </Link>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="home-image"
              />
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
