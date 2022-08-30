import { PersonalAction } from "../actions/actions";
import { PersonalState } from "../interfaces/interfaces";

// const URL_API = "http://localhost:3900/api/crear-personal";

// async function agregarPersonal(data:PersonalState){

//     const response = await fetch(URL_API, {
//         method: 'POST', // *GET, POST, PUT, DELETE
//         mode: 'cors', 
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer', // 
//         body: JSON.stringify(data) 
//         });
//         return response.json(); 
// }

// const add = async (personal:PersonalState) =>{
//     let peticion = await agregarPersonal(personal);
//      return peticion
// }

export const personalReducer = (state:PersonalState,action:PersonalAction):PersonalState =>{

    const {_id, primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,cedula,password,rol} = action.payload.data;

    switch(action.type){
        case 'add':
            return{
                _id:_id, 
                primer_nombre:primer_nombre,
                segundo_nombre:segundo_nombre,
                primer_apellido:primer_apellido,
                segundo_apellido:segundo_apellido,
                cedula:cedula,
                password:password,
                rol:rol
            }
        default:
            return state;
    }

}