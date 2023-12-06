import React, { Component } from "react";

export default class ModalSinhVien extends Component {
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
                  left: "460px",
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
                        <p>Mã SV</p>
                    </div>
                    <input type="text" placeholder="Nhập mã sinh viên" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <p>Họ tên</p>
                    </div>
                    <input type="text" placeholder="Nhập họ và tên" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <p>Mã SV</p>
                    </div>
                    <input type="text" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <p>Mã SV</p>
                    </div>
                    <input type="text" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
