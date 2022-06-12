import FeedHistories from "./FeedHistories/FeedHistories"
import './MainFeed.css'
import MainPosts from "./MainPosts/MainPosts"

function MainFeed() {
  return (
    <div className="MainFeed">
        <FeedHistories/>
        <MainPosts/>
    </div>
  )
}

export default MainFeed