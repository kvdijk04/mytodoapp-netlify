import './App.css';
import './Component/TODOAPP'

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { MenuNgang } from './Component/MenuNgang';
import { routes } from './Component/routes';
function App() {
  return (
    <>
    <div className="App">
          <BrowserRouter>
                <MenuNgang />
                <Switch>
                    {routes.map((item) =>(
                      <Route   path={item.path} component={item.component} />
                    ))}
                </Switch>
          </BrowserRouter>
    </div>
    </>
  );
}

export default App;
