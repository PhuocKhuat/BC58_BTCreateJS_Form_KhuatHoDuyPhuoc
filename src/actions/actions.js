import { ADD, DELETE, EDIT } from "../Types/contains";

export const actionForm = (sinhVien) =>{
    return{
        type: ADD,
        payload: sinhVien,
    };
}

export const actionDelete = (sinhVien) =>{
    return{
        type: DELETE,
        payload: sinhVien,
    }
}

export const actionEdit = (sinhVien) =>{
    return{
        type: EDIT,
        payload: sinhVien,
    }
}