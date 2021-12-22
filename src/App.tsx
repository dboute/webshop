import Products from './components/Products/Products';
import { Route, Switch } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import 'bootstrap';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


function App() {
    library.add(fas, far, fab);
    dom.i2svg()
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Products/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
