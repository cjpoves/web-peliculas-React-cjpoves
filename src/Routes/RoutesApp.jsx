import { Route, Routes } from "react-router"
import { Billboard } from "../pages/Billboard"
import { NextMovies } from "../pages/NextMovies"
import { SearchMovies } from "../pages/SearchMovies"
import { Trending } from "../pages/Trending"
import { LogIn } from "../auth/pages/LogIn"
import { SignUp } from "../auth/pages/SignUp"


export const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element= {<LogIn/>}/>
            <Route path="/signUp" element= {<SignUp/>}/>
            <Route path="/searchMovies" element= {<SearchMovies/>}/>
            <Route path="/billboard" element= {<Billboard/>}/>
            <Route path="/nextMovies" element= {<NextMovies/>}/>
            <Route path="/trending" element= {<Trending/>}/>
        </Routes>
    )
}