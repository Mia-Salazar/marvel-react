import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../src/components/Header/Header';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';


const App = () => {
  return (
    <div>
      <Header/>
      <main className="main">
        <BrowserRouter>
          <Switch>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App;
