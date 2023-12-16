import { ADD, DELETE, SEARCH, UPDATE } from "../Types/contains";

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

// export const actionEdit = (sinhVien) =>{
//     return{
//         type: EDIT,
//         payload: sinhVien,
//     }
// }

export const actionUpdate = (sinhVien) =>{
    return{
        type: UPDATE,
        payload: sinhVien,
    }
}

export const actionSearch = (search) =>{
    return{
        type: SEARCH,
        payload: search,
    }
}