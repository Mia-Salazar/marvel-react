import { Switch, Route, BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import { Header } from '../src/components/Header/Header';
import { Home } from '../src/page/Home/Home';
import { getComicsAxios, getComics } from './services/comicService';
import './App.scss';


const App = () => {
  getComics().then((json) => console.log(json))
  //getComicsAxios().then((json) => console.log(json))
  return (
    <div>
      <Header/>
      <main className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App;
