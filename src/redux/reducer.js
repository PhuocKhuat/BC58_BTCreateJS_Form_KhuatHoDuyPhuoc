import { ADD, DELETE, SEARCH, UPDATE } from "../Types/contains";

const initialState = {
  //1. Mảng này ở phần hiển thị, phần hiển thị ban đầu rỗng nên mảng rỗng, tạo ví dụ user đã nhập.
  mangSinhVien: [
    {
      maSV: "12345",
      hoTen: "Duy Phuoc",
      sdt: "0994923045",
      email: "abc@gmail.com",
    },
    {
      maSV: "12346",
      hoTen: "Phuoc",
      sdt: "0999454045",
      email: "abcd@gmail.com",
    },
  ],
  searchSV: "",
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
      let index = cloneTable.findIndex(
        (sinhVien) => sinhVien.maSV === payload.maSV
      );
      if(index !== -1){
        cloneTable[index] = payload;
      }
      return {...state, mangSinhVien: cloneTable};
      // cloneTable[index] = payload;
      // cloneTable.splice(index, 2, payload);
      
    };
    case SEARCH: {
      let search = payload.toLowerCase();
      let resultFilter = state.mangSinhVien.filter(sinhVien => sinhVien.maSV.toLowerCase().includes(search));
      return {...state, mangSinhVien: resultFilter };
    }
    default:
      return state;
  }
};
