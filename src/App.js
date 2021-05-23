import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import SinglePosr from "./components/SinglePost";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from './components/Project';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component= {Home} path = '/' exact/>
      <Route component= {About} path = '/about'/>
      <Route component= {SinglePosr} path = '/post/:slug'/>
      <Route component= {Post} path = '/post'/>
      <Route component= {Project} path = '/project'/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
