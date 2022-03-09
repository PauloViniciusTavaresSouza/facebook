import './App.css';
import Header from './Header';
import Stories from './Stories';
import paulo_bg from './resources/IMG_6679.jpg';
import primeiroPost from './resources/Sw.jpg';

import {
  AiFillVideoCamera,
  AiOutlineFileImage,
  AiOutlineMeh,
} from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <div className="container-left"></div>

        <div className="container-mid">
          <Header />
          <Stories />

          <div className="feed">
            <div className="feedForm">
              <img src={paulo_bg} />
              <input type="text" placeholder="No que você está pensando?" />
            </div>
            <div className="feedIcons">
              <div className="iconSingle">
                <AiFillVideoCamera />
                <span>Video ao vivo</span>
              </div>
              <div className="iconSingle img">
                <AiOutlineFileImage />
                <span>Video ao vivo</span>
              </div>
              <div className="iconSingle emoji">
                <AiOutlineMeh />
                <span>Video ao vivo</span>
              </div>
            </div>
          </div>

          <div className="feedPosts">
            <div className="feedPostSingle">
              <div className="feedPost__profile">
                <img src={paulo_bg} />
                <h3>
                  Paulo Vinicius
                  <br /> <span>4h</span>
                </h3>
              </div>

              <div className="feedPost__content">
                <p>Foto nova do Paulo Vinicius</p>
                <img src={primeiroPost} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-right"></div>
      </div>
    </div>
  );
}

export default App;
