import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/HomePage";
import DetailMovies from "./Pages/DetailMovies/DetailMovies";
import Layout from "./Template/Layout";

function App() {
    return (
       <div>
           <BrowserRouter>
               <Switch>
                   <Route exact path='/' component={HomePage}/>
                   <Route exact path='/signup' component={SignUpPage}/>
                   <Route exact path='/signin' component={SignInPage}/>
                   <Route exact path='/movie/:id' render={({match}) => {
                       return <Layout maPhim={match.params.id} Component={DetailMovies}/>
                   }}/>
               </Switch>
           </BrowserRouter>
       </div>
    );
}

export default App;