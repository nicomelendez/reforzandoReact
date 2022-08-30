import React, { useReducer } from 'react'
import { doAdd } from './actions/actions'
import { PersonalState } from './interfaces/interfaces'
import { personalReducer } from './state/personalReducer'

const INITIAL_STATE:PersonalState = {
    _id:0,
    primer_nombre:"",
    segundo_nombre:"",
    primer_apellido:"",
    segundo_apellido:"",
    cedula:0,
    password:"",
    rol:0,
}

export const PersonalReducer = () => {

    const [PersonalState, dispatch] = useReducer(personalReducer,INITIAL_STATE);

    const handleAdd = (e:any) => {
        e.preventDefault();

        const {primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,cedula,rol} = e.target;

        let personal:PersonalState = {
            _id:10,
            primer_nombre:primer_nombre.value,
            segundo_nombre:segundo_nombre.value,
            primer_apellido:primer_apellido.value,
            segundo_apellido:segundo_apellido.value,
            cedula:cedula.value,
            password:cedula.value+cedula.value,
            rol:rol.value
        }
        dispatch(doAdd(personal));
    }

  return (
    <div>
        <h2>Añadir personal</h2>
        <form onSubmit={handleAdd}>
            <input type="text" name="primer_nombre"/>
            <input type="text" name="segundo_nombre"/>
            <input type="text" name="primer_apellido"/>
            <input type="text" name="segundo_apellido"/>
            <input type="number" name="cedula"/>
            <input type="number" name="rol" />
            <button type="submit">Guardar</button>
        </form>

        <pre>
            {JSON.stringify(PersonalState,null,2)}
        </pre>
    </div>
  )
}
