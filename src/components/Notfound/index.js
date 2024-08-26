import './index.css'
const NotFound = () => (
  <div className="notfound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="notfound-title">Page Not Found</h1>
    <p className="notfound-subtitle">
     We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
