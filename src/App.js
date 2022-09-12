import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Componant/Layout/Layout';
import Counter from './Container/Counter/Counter';
import Fruit from './Container/Fruit/Fruit';
import Vegetable from './Container/Vegetable/Vegetable';
import { ConfigureStore } from './Redux/Store';
import { Provider } from 'react-redux'

function App() {

  const store=ConfigureStore(state=>state.Counter)

  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path={'/Fruit'} exact component={Fruit}></Route>
          <Route path={'/Vegetable'} exact component={Vegetable}></Route>
          <Route path={'/Counter'} exact component={Counter}></Route>
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
