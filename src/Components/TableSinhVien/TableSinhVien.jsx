import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { actionDelete, actionEdit } from "../../actions/actions";
import ModalSinhVien from "../ModalSinhVien/ModalSinhVien";


class TableSinhVien extends Component {
  render() {
    let { mangSinhVien, handleDelete, handleEdit} = this.props;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-11">
            <input
              type="text"
              className="searchMa"
              placeholder="Tìm kiếm theo mã sinh viên"
            />
          </div>
          <div className="col">
            <i class="fa fa-search"></i>
          </div>
        </div>
        <table className="table mt-2">
          <thead>
            <tr>
              <th className="cssTh">Mã SV</th>
              <th className="cssTh">Họ tên</th>
              <th className="cssTh">Số điện thoại</th>
              <th className="cssTh">Email</th>
              <th className="cssTh">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {mangSinhVien.map((sinhVien, index) => (
              <tr key={index}>
                <td className="cssTd">{sinhVien.maSV}</td>
                <td className="cssTd">{sinhVien.hoTen}</td>
                <td className="cssTd">{sinhVien.sdt}</td>
                <td className="cssTd">{sinhVien.email}</td>
                <td className="cssTd">
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => {
                      handleEdit(sinhVien);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sửa
                  </button>
                  <ModalSinhVien maSV={this.props.maSV}/>
                  {/* {console.log(this.props.maSV)} */}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(sinhVien);
                    }}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mangSinhVien: state.formReducer.mangSinhVien,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (sinhVien) => {
      dispatch(actionDelete(sinhVien));
    },
    handleEdit: (sinhVien) => {
      dispatch(actionEdit(sinhVien));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
