import { ADD, DELETE, UPDATE } from "../Types/contains";

const initialState = {
  //1. Mảng này ở phần hiển thị, phần hiển thị ban đầu rỗng nên mảng rỗng, tạo ví dụ user đã nhập.
  mangSinhVien: [
    {
      hoTen: "Phước",
      maSV: "12345",
      sdt: "0994923045",
      email: "abc@gmail.com",
    },
  ],
  // editMangSinhVien: {
  //   hoTen: "Phước",
  //   maSV: "12345",
  //   sdt: "0994923045",
  //   email: "abc@gmail.com",
  // },
};


export let formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: {
      let cloneTable = [...state.mangSinhVien, payload];
      return { ...state, mangSinhVien: cloneTable };
    }
    case DELETE: {
      let cloneTable = [...state.mangSinhVien];
      let sinhVienFilter = cloneTable.filter(
        (sinhVien) => sinhVien.maSV !== payload.maSV
      );
      return { ...state, mangSinhVien: sinhVienFilter };
    }
    // case EDIT: {
    //   return {...state, editMangSinhVien: payload};
    // }
    case UPDATE: {
      let cloneTable = [...state.mangSinhVien];
      let indexMaSV = payload.maSV
      console.log(indexMaSV);
      let index = cloneTable.findIndex(sinhVien => sinhVien.maSV === payload.maSV);
      cloneTable[index] = payload;
      cloneTable.splice(index, 1, payload);
      return {...state, mangSinhVien: cloneTable};
    }
    default:
      return state;
  }
};
