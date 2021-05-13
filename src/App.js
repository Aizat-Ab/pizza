import Header from "./components/header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {Route, link} from 'react-router-dom';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

export default App;
