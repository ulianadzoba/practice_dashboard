import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'; 
import PracticeBoard from './components/PracticeBoard/PracticeBoard';
import Navigation from './components/Navigation/Navigation';
import {Route, Switch} from 'react-router-dom';
// import { PracticesData } from './data/data';
import PracticePage from './components/PracticePage/PracticePage';

function App() {
  return (
      <Layout>   
        <Navigation/>
        <Switch>
          <Route path='/' exact component={PracticeBoard}/>
          <Route path='/practice' exact component={PracticePage}/>
        </Switch>
      </Layout>
      
  );
}

export default App;
