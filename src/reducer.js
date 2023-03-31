const reducer = (state,action) => {
    switch(action.type){
        case 'LOGGEDIN' :
            return {...state, loggedin: true};

        case 'LOGGEDOUT' :
            return {...state, loggedin: false};
        
        case 'verifying' :
            return {...state, verifingStudent: true};
    
        case 'verified' :
            return {...state, verifingStudent: false}
    }
}

export default reducer;