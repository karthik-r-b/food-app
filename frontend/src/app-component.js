import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/layouts/header-component';
import Login from './pages/login/login-component';
import MenuItems from './pages/menu-items/menu-items';
import Cart from './pages/cart/cart';
import store from './redux/store';
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/menu-items" component={MenuItems} />
            <Route exact path="/mycart" component={Cart} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
