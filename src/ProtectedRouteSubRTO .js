import { Route } from "react-router-dom";
import SubRtologin from "./subrto/subrtologin";




function ProtectedRouteSubRTO(props)
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
        return <SubRtologin></SubRtologin>
    }
}

export default ProtectedRouteSubRTO;