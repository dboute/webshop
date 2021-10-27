import Products from './components/Products/Products';
import { Route, Switch } from 'react-router-dom';
import Layout from "./components/Layout/Layout";


function App() {
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
