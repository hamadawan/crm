
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Service from './components/Service';
import BeautyWithWivo from './components/BeautyWithWivo';
import Consulation from './components/Consulation'
import WhatsNew from './components/WhatsNew'
import Footer from './components/Footer'
import ShortBanner from './components/ShortBanner';

import {
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './components/Login';

function App() {



  return (
    <>
      <Switch>
        <Route path="/login">
              <Login />
        </Route>
        <Route path="/">
          <Navbar />
          <Banner />
          <ShortBanner/>
          <Service />
          <Consulation/>
          <WhatsNew/>
          <BeautyWithWivo />
          <Footer/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
