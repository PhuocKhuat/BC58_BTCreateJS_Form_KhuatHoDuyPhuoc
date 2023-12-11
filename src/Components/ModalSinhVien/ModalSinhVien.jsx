import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css'

class ModalSinhVien extends Component {
  // state=
  // {
  //   hoTen: "Phước",
  //   maSV: "12345",
  //   sdt: "0994923045",
  //   email: "abc@gmail.com",
  // }
  handleOnChange = (e) => {
    // let {value} = e.target;
    this.setState({
      editMangSinhVien: e.target.value,
    })
  }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ minWidth: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title"
                id="exampleModalLabel"
                style={{
                  fontSize: "30px",
                  position: "absolute",
                  left: "215px",
                }}
              >
                Chỉnh sửa sinh viên
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <h6>Mã SV</h6>
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập mã sinh viên"
                    value={this.props.editMangSinhVien.maSV}  
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <h6>Họ tên</h6>
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={this.props.editMangSinhVien.hoTen}
                    name="hoTen"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <h6>Số điện thoại</h6>
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={this.props.editMangSinhVien.sdt}
                    name="sdt"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <h6>Email</h6>
                  </div>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    value={this.props.editMangSinhVien.email}
                    name="email"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex">
              <button type="button" className="btn btn-success btnUpdate">
                Cập nhật
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState){
    //So sánh this.props.editMangSinhVien.maSV của SV A (props cũ) với this.props.editMangSinhVien.maSV của SV B (props hiện tại).
    if(prevProps.editMangSinhVien.maSV !== this.props.editMangSinhVien.maSV){
      this.setState({
        // ...this.state.mangSinhVien,
        editMangSinhVien: this.props.editMangSinhVien.maSV,
      })
    }
    // console.log("componentDidUpdate");
    // console.log(this.props.editMangSinhVien);
    // console.log(this.props.maSV);
  }
}

let mapStateToProps = (state) => {
  return {
    editMangSinhVien: state.formReducer.editMangSinhVien,
  };
};

export default connect(mapStateToProps)(ModalSinhVien);
