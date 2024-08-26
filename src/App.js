import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import RegisterContext from './Context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/Notfound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showError: false,
  }
  topicsList = [
    {
      id: 'ARTS_AND_CULTURE',
      displayText: 'Arts and Culture',
    },
    {
      id: 'CAREER_AND_BUSINESS',
      displayText: 'Career and Business',
    },
    {
      id: 'EDUCATION_AND_LEARNING',
      displayText: 'Education and Learning',
    },
    {
      id: 'FASHION_AND_BEAUTY',
      displayText: 'Fashion and Learning',
    },
    {
      id: 'GAMES',
      displayText: 'Games',
    },
  ]

  changeTopic = topic => {
    this.setState({topic})
  }
  changeName = name => {
    this.setState({name})
  }
  registerName = () => {
    this.setState({isRegistered: true})
  }
  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {topic, name, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          changeTopic: this.changeTopic,
          changeName: this.changeName,
          isRegistered,
          showError,
          registerName: this.registerName,
          updateError: this.updateError,
          topicsList: this.topicsList,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
