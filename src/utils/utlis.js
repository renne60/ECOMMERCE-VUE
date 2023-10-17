import Router from '../router'
import Apirou from './constante'
console.log(Router)
//localstoragange
export const setToLocalStorange = (key, value) => {
    localStorage.setItem(key, JSON.stringify((value)));
};

export const getFromLocalStorage = (key) => {
    const  value = localStorage.getItem(key);
    // console.log(value)
    return value ? JSON.parse(value) : null;
}



//registro 
export const authRegister = async({username, email, password}) => {
   
    const credentials = {
        username,
        email,
        password,
    };
    try {
        const response = await fetch(
            `${Apirou.ApiRouter}auth/local/register`,
             {
                 method: "POST",
                 body: JSON.stringify(credentials),
                 headers: {
                     "content-type": "application/json",
                 },
             }

        );
        if(response.status === 400){
             alert("su usuario o correo electronico ya esta en uso")
        }
        // if (response.status === 200){
        //     window.location.href = "http://localhost:8080/login"
        // }
        console.log(response);

        // if (!response.ok){
        //     throw new Error();
        // }
        
        // window.location.href = "http://localhost:8080/login";
    } catch (e) {
        console.log("Error", e.message);
        
    }
};
const getme = async() => {
    const token = getFromLocalStorage("token");
    const userinfo = await fetch("https://blooming-stream-18181.herokuapp.com/api/users/me?populate=role,carritos", {
            headers: {
                // con se autentifica el token
                "Authorization": `Bearer ${token}`,
            },
        });
       const infouser = await userinfo.json();
       localStorage.setItem("user", JSON.stringify(infouser));
    //    console.log(infouser)
    return infouser
}

export const login = async ({ password,  identifier }) => {
    try {
        const response = await fetch("https://blooming-stream-18181.herokuapp.com/api/auth/local", {
            method: "POST",
            body: JSON.stringify({ identifier, password}),
            headers: {
                "content-type": "application/json",
            },
        });
        if(!response.status === 200){
            alert("usuario o contraseña incorrectas")
            window.location.href = "http://localhost:8080/Profile"
        }
        const { jwt } = await response.json();
        setToLocalStorange("token", jwt);
        // setToLocalStorange("users", user);
        // console.log(response);
       const get = await getme();
       return get
    } catch(e){
        console.log(e);
    }
    
}

export const searchproducts = async (id) =>{
    const token = getFromLocalStorage("token");
    const searchp = await fetch(`https://blooming-stream-18181.herokuapp.com/api/productos/${id}`, {
            headers: {
                // con se autentifica el token
                "Authorization": `Bearer ${token}`,
            },
        });
       const res = await searchp.json();
       localStorage.setItem("user", JSON.stringify(res));
    //    console.log(infouser)
    return res
}


// export const MostUser = async({identifier, email}) => {
//     try{
//         const response = await fetch('https://blooming-stream-18181.herokuapp.com/api/users/me',
//         {
//            headers:{
//             "content-type": "application/json",
//            },
//         });
//         console.log(identifier,email)
//         const {jwt, user} = await response.json();
//         // this.user = {
//         //     username: user[0],
//         //     Email: user[1]
//         // }
//         getFromLocalStorage("token", jwt);
//         getFromLocalStorage("user",user)
//     }catch(e){
//         console.log(e)
//     }
// }