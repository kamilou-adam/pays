import React from 'react';
import { BrowserRouter,Route,Switch} from "react-router-dom";


import About from './pages/About';
import Home from './pages/Home';


const App = () => {
  return (
     <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/a-propos" component={About}/>
       </Switch>  
     </BrowserRouter>
  );
};

export default App;