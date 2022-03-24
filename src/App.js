import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Template/Layout";
import LoadingAnim from "./Components/LoadingAnim/LoadingAnim";

function App() {
    return (
        <div>
            <LoadingAnim/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => {
                        return <Layout Component={HomePage}/>

                    }}/>
                    <Route exact path='/signup' component={SignUpPage}/>
                    <Route exact path='/login' component={SignInPage}/>
                    {/*<Route exact path='/movie/:id' render={({match}) => {*/}
                    {/*    return <Layout maPhim={match.params.id} Component={DetailMovies}/>*/}
                    {/*}}/>*/}
                </Switch>
            </BrowserRouter>
            {/*<MovieBookingTicket/>*/}
        </div>
    );
}

export default App;
