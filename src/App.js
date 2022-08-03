import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Componant/Layout/Layout';
import Fruit from './Container/Fruit/Fruit';
import Vegetable from './Container/Vegetable/Vegetable';

function App() { 
  return (
   <Layout>
    <Switch>
      <Route path={'/Fruit'} exact component={Fruit}></Route>
      <Route path={'/Vegetable'} exact component={Vegetable}></Route>
    </Switch>
   </Layout>
  );
}

export default App;
