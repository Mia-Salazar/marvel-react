import { Switch, Route, BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import { Header } from '../src/components/Header/Header';
import { Home } from '../src/page/Home/Home';
import { Comics } from '../src/page/Comics/Comics';
import { Details } from '../src/page/Details/Details';
import './App.scss';


const App = () => {
  //getComics().then((json) => console.log(json))
  //getComicsAxios().then((json) => console.log(json))
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/comics" component={Comics} />
            <Route exact path="/comics/:id" component={Details} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
