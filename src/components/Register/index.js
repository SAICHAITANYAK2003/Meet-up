import {withRouter} from 'react-router-dom'
import RegisterContext from '../../Context/RegisterContext'
import Header from '../Header'
import './index.css'

const Register = props => {
  return (
    <RegisterContext.Consumer>
      {value => {
        const {
          changeTopic,
          topic,
          changeName,
          name,
          showError,
          registerName,
          updateError,
          topicsList,
        } = value

        const submitRegistration = event => {
          event.preventDefault()
          if (topic !== '' && name !== '') {
            const {history} = props
            history.replace('/')
            registerName()
          } else {
            updateError()
          }
        }

        const onChangeTopic = event => {
          changeTopic(event.target.value)
        }
        const onChangeName = event => {
          changeName(event.target.value)
        }
        return (
          <>
            <Header />
            <div className="register-page-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <div className="form-page-details">
                <h1 className="form-page-heading">Let us join</h1>
                <form className="form-page" onSubmit={submitRegistration}>
                  <div className="input-container">
                    <label htmlFor="userInput" className="label-badge">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input-name"
                      id="userInput"
                      onChange={onChangeName}
                      value={name}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="userSelect" className="label-badge">
                      TOPICS
                    </label>
                    <select
                      className="input-select"
                      id="userSelect"
                      onChange={onChangeTopic}
                      value={topic}
                    >
                      {topicsList.map(eachOption => (
                        <option value={eachOption.id} key={eachOption.id}>
                          {eachOption.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="input-button">
                    Register Now
                  </button>
                  {showError && (
                    <p className="error-msg">Please enter your name</p>
                  )}
                </form>
              </div>
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default withRouter(Register)
