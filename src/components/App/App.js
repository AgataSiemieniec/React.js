import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info.js';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import FAQ from '../FAQ/FAQ.js';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer.js';

//app.js to główne "centrum dowodzenia" routingiem w naszym projekcie. Ten plik informuje aplikację, jakie komponenty powinna wyświetlić, gdy użytkownik znajduje się na określonej podstronie (lub, bardziej precyzyjnie, na określonej ścieżce, czyli path). 
const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/list/:id" component={List} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;

