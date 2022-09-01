import React from 'react'
import "./App.css";
import Navbar from './Common/Navbar/Navbar'
import Home from './components/Pages/Home';
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/Destinations/Home';
import SinglePages from './SinglePage/SinglePages';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/blog-single-page/BlogSingle';
import Testimonial from './components/Testimonial/Testimonial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Login from './components/login/Login';
import Register from './components/login/Register';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ Home }></Route>
          <Route path='/about' exact component={ About }></Route>
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePages} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          {/* <Route path='/'></Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App