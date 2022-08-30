import { PersonalState } from "../interfaces/interfaces";

export type PersonalAction =
    |{type:'add',payload:{data:PersonalState}}

export const doAdd = (data:PersonalState):PersonalAction => {
    return {
        type:'add',
        payload:{data}
    }
}