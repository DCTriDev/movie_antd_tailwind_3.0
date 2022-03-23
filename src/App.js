import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovies from "./Pages/DetailMovies/DetailMovies";
import Layout from "./Template/Layout";
import LoadingAnimation from "./Components/LoadingAnimation/LoadingAnimation";
import MovieBookingTicket from "./MovieTicket/MovieBookingTicket";

function App() {
    return (
       <div>
           {/*<LoadingAnimation/>*/}
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
