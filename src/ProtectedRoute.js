import { Route } from "react-router-dom";
import Login from "./Login";



function ProtectedRoute(props)
{
    var isLogIn=false;
    var isLogginFromSessionStorage = sessionStorage.getItem("isLoggedIn");

    if(isLogginFromSessionStorage!=null)
    {
        if(isLogginFromSessionStorage=="true")
        {
            isLogIn=true;
        }
       
    }

    if(isLogIn)
    {
        return <Route path={props.path} exact component={props.component}/>
    }
    else
    {
        return <Login></Login>
    }
}

export default ProtectedRoute;