import React, { Component } from "react";
import "./style.css";
import { actionForm } from "../../actions/actions";
import { connect } from "react-redux";
// import { ADD } from "../../Types/contains";

class FormSinhVien extends Component {
  //Lớp đối tượng sinh viên bây giờ là values, cũng là NGUỒN.
  state = {
    values: {
      // Giá trị mà user nhập.
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    errors: {
      // Lỗi khi nhập sai, ban đầu là rỗng.
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    valid: false,
  };
  //5. Nhận vào tham số là e (event), từ đâu ?
  handleEnterInput = (e) => {
    //6. Lấy giá trị của ô input mỗi lần được user thay đổi ô input đó.
    let tagInut = e.target;
    //7. Bóc tách phần tử (ES6), lấy giá trị name và value từ tagInput.
    let { name, value, type } = tagInut;
    let errorMessage = ""; //đúng thì thông báo không có gì.

    //Kiểm tra rỗng, trim() là xác định khoảng trắng đầu cuối.
    if (value.trim() === "") {
      errorMessage = `${name} không được để trống`;
    }

    //Kiểm tra email.
    if (type === "email") {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (!re.test(value)) {
        //react tự hiểu nên không cần else.
        errorMessage = `${name} không đúng định dạng`;
      }
    }

    //Kiểm tra sdt.
    if (name === "sdt" || name === "maSV") {
      const re = /\d+/;
      if (!re.test(value)) {
        errorMessage = `${name} nhập phải là số`;
      }
    }

    //Kiểm tra hoTen.
    if (name === "hoTen") {
      const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
      if (!re.test(value)) {
        errorMessage = `Họ tên nhập phải là chữ gồm họ và tên không dấu`;
      }
    }

    let values = { ...this.state.values, [name]: value }; //cập nhật giá trị value cho state.
    let errors = { ...this.state.errors, [name]: errorMessage }; //cập nhật lỗi cho state.
    //8. setState các key values và errors.
    this.setState(
      {
        ...this.state, //(Giữ lại thuộc tính valid trừ những cái muốn thay đổi, để ở trên).
        values: values,
        errors: errors,
      },
      () => {
        this.handleCheckError();
      }
    );
  };
  //11. Tạo hàm handleSubmit, tham số là e.
  handleSubmit = (e) => {
    //12. Ngăn load trang khi ấn button submit.
    e.preventDefault();
    //13. Truyền kiểu tham số (this.state) là đối tượng sinh viên xuống bảng (dispatch).
    this.props.themSinhVien(this.state.values);
  };

  //KIỂM TRA LỖI RỒI HIỆN NÚT.
  handleCheckError = () => {
    let valid = true;
    //Duyệt các thuộc tính của đối tượng errors, key là từng thuộc tính.
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === ""){
        //Khác rỗng là có nhập, không cho nhập, nhưng cái nhập đúng hay sai validate.
        valid = false;
      }
    }
    this.setState(
      {
        ...this.state, //Giữ lại 2 key values và errors.
        valid: valid,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header text-white bg-dark">
            <h3 className="infoSV">Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            {/* 10. Ấn enter tự kích hoạt button submit */}
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6 form-group">
                  <h6 className="alignTitle">Mã SV</h6>
                  <input
                    type="text"
                    className="form-control"
                    //2. Đặt tên trùng với lớp đối tượng trong reducer state.
                    name="maSV"
                    //3. Tạo state ở reducer và lấy giá trị từ đó.
                    value={this.state.values.maSV}
                    //4. Tạo hàm onChange.
                    onChange={this.handleEnterInput}
                  />
                  <p className="text-danger text-left">{this.state.errors.maSV}</p>
                </div>
                <div className="col-6 form-group">
                  <h6 className="alignTitle">Họ tên</h6>
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleEnterInput}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6 form-group">
                  <h6 className="alignTitle">Số điện thoại</h6>
                  <input
                    type="text"
                    className="form-control"
                    name="sdt"
                    value={this.state.values.sdt}
                    onChange={this.handleEnterInput}
                  />
                  <p className="text-danger">{this.state.errors.sdt}</p>
                </div>
                <div className="col-6 form-group">
                  <h6 className="alignTitle">Email</h6>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleEnterInput}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                {/* 9. Thêm type submit để khi user enter tự động cập nhật */}
                {this.state.valid ? (
                  <button
                    type="submit"
                    className="btn btn-success mt-4 w-25"
                    style={{ position: "relative", left: "950px" }}
                  >
                    Thêm sinh viên
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success mt-4 w-25"
                    style={{ position: "relative", left: "950px" }}
                    disabled
                  >
                    Thêm sinh viên
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
   return{
    editMangSinhVien: state.formReducer.editMangSinhVien,
   }
}

let mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      dispatch(actionForm(sinhVien));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien);
