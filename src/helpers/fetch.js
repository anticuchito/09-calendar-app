 const baseUrl = process.env.REACT_APP_API_URL;



 const fetchWithoutToken = (endpoint,data,method = 'GET') => {
   
    const url = `${baseUrl}/${endpoint}`; //loacalhost:4000/api/auth

    if(method === 'GET'){
        return fetch(url);
    }else{
         return fetch(url,{
             method,
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         });
    }

}


export {
    fetchWithoutToken,
}