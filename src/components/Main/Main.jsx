import MainAside from './MainAside/MainAside'
import MainFeed from './MainFeed/MainFeed'
import './Main.css'

function Main() {
  return (
    <div className="Main">
        <MainFeed/>
        <MainAside/>
    </div>
  )
}

export default Main