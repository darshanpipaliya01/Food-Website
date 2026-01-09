import logo from './logo.svg';
import './App.css';
import Sign from './Food.jsx/Sign'
import Header from './Food.jsx/Header'
import Hero from './Food.jsx/Hero'
import Fodbox from './Food.jsx/Fodbox'
import Softdrink from './Food.jsx/Softdrink'
import Menu from './Food.jsx/Menu'
import Bottle from './Food.jsx/Bottle'
import Table from './Food.jsx/Table'
import Juices from './Food.jsx/Juices'
import Tea from './Food.jsx/Tea'
import Feedback from './Food.jsx/Feedback'
import Image from './Food.jsx/Image'
import Footer from './Food.jsx/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aboutpg from './Food.jsx/Page.jsx/Aboutpg'
import Menupg from './Food.jsx/Page.jsx/Menupg'
import Error from './Food.jsx/Page.jsx/Error'
import Blogpg from './Food.jsx/Page.jsx/Blogpg'
import Contact from './Food.jsx/Page.jsx/Contact'
import Coldrinks from './Coldrinks';

function App() {
  return (
 
    <>
     {/* <Header></Header> 
    <Hero></Hero>
    <Fodbox></Fodbox>
    <Softdrink></Softdrink>
    <Menu></Menu>
    <Bottle></Bottle>
    <Table></Table>
    <Juices></Juices>
    <Tea></Tea>
    <Feedback></Feedback>
    <Image></Image>
    <Footer></Footer>    */}
     {/* <Sign></Sign>  */}

    
     {/* <Homepg></Homepg>  */}
      {/* <Menupg></Menupg>  */}
     {/* <Error></Error> */}
     {/* <Blogpg></Blogpg> */}
     {/* <Contact></Contact> */}


     <Router>

        <Switch>
          <Route exact path="/">
            <Coldrinks />
          </Route>
          <Route path="/Aboutpg">
            < Aboutpg/>
          </Route>
          <Route path="/Error">
            <  Error/>
          </Route>
          <Route path="/Menupg">
            <Menupg />
          </Route>
          <Route path="/Blogpg">
            <Blogpg/>
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>

    </>

  );
}

export default App;
