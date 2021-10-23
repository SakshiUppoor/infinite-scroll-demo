import './App.css';
import InfiniteScroll from "./InfiniteScroll";

function App() {
  return (
    <div className="App">
      <div className="app-details">
        <div className="app-title">
          Infinite Scrolling Demo
        </div>
        <div className="app-desc">A simple React JS + Appwrite project to demonstrate infinite scroll paging</div>
        {/* 'Made with Appwrite' badge */}        
        <a href="https://appwrite.io/" target="_blank" style={{position: "fixed", right: "18px", bottom: "18px", zIndex: 999}}>
          <img style={{width: "130px"}} src="https://appwrite.io/images-ee/press/badge-pink-box.svg" alt="Built with Appwrite" />
        </a>
      </div>
      <InfiniteScroll />
    </div>
  );
}

export default App;
