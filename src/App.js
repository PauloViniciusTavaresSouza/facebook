import './App.css';
import Header from './Header';
import Stories from './Stories';
import paulo_bg from './resources/IMG_6679.jpg';

import { AiFillVideoCamera } from 'react-icons/ai ';

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />

      <div className="feed">
        <div className="feedForm">
          <img src={paulo_bg} />
          <input type="text" placeholder="No que você está pensando?" />
        </div>
        <div className="feedIcons">
          <div className="video">
            <AiFillVideoCamera />
            <span>Video ao vivo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
