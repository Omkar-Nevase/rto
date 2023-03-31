import { Route } from "react-router-dom";
import Rtologin from "./rto/rtologin";



function ProtectedRouteRTO(props)
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
        return <Rtologin></Rtologin>
    }
}

export default ProtectedRouteRTO;