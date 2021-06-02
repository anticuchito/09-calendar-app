import Swal from "sweetalert2";
import { fetchWithToken, fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types";


//actions asynchronous

export const startLogin = (email, password) =>{

    return async(dispatch) =>{
        const resp = await fetchWithoutToken('auth',{email,password},'POST');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name:body.name
            }))
        }else{
            Swal.fire('Error',body.msg,'error'); 
        }
    }
}


export const startRegister =  (name,email,password) =>{
    return async (dispatch)=>{
        const resp = await fetchWithoutToken('auth/new', {name,email, password},"POST");
        const body = await resp.json();
        
        if(body.ok){
            //set token in local storage
        
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-date',new Date().getTime());

        dispatch(login({
            uid:body.uid,
            name:body.name
        }));

        }else{
            dispatch(checkingFinish());
        }

    }
}

export const startChecking= ()=>{
    return async(dispatch) =>{
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();
        
        if(body.ok){
            //set token in local storage
        
        localStorage.setItem('token',body.token);
        localStorage.setItem('token-init-date',new Date().getTime());

        dispatch(login({
            uid:body.uid,
            name:body.name
        }))

        }else{
            Swal.fire('Error',body.msg,'error');
        }


    }
}
const checkingFinish = () =>({
    type:types.authCheckingFinish
})
//actions synchronous
const login = (user)=>({
 type:types.authLogin,
 payload:user
})
