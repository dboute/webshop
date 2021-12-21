import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
