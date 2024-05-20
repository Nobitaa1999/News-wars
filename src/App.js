import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
const App=()=> {
  const [progress, setProgress] = useState(0);

    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
          <Navbar />
          <Routes>

            <Route exact path="/" element={<NewsContainer setProgress={setProgress} key='general' PageSize={5} country='in' category='general' />}>

            </Route>
            <Route exact path="/business" element={<NewsContainer setProgress={setProgress} key='business' PageSize={5} country='in' category='business' />}>

            </Route>
            <Route exact path="/entertainment" element={<NewsContainer setProgress={setProgress} key='entertainment' PageSize={5} country='in' category='entertainment' />}>

            </Route>
            <Route exact path="/health" element={<NewsContainer setProgress={setProgress} key='health' PageSize={5} country='in' category='health' />}>

            </Route>
            <Route exact path="/science" element={<NewsContainer setProgress={setProgress} key='science' PageSize={5} country='in' category='science' />}>

            </Route>
            <Route exact path="/sports" element={<NewsContainer setProgress={setProgress} key='sports' PageSize={5} country='in' category='sports' />}>

            </Route>
            <Route exact path="/technology" element={<NewsContainer setProgress={setProgress} key='technology' PageSize={5} country='in' category='technology' />}>

            </Route>

          </Routes>
        </Router>
      </>
    )
  }

export default App;


