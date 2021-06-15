import { Switch, Route, BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import { Header } from '../src/components/Header/Header';
import './App.scss';
import {Home} from '../src/page/Home/Home';


const App = () => {
  return (
    <div>
      <Header/>
      <main className="main">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App;
