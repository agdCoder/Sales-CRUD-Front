import PropTypes from "prop-types";

function ModalAdd({ title, children, checkData }) {
  return (
    <div
      id="modalProducts"
      className="modal fade"
      aria-hidden="true"
      data-testid="modal-dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <label className="h5">{title}</label>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input type="hidden" id="id"></input>
            {children}
            <div className="d-grid col-6 mx-auto">
              <button
                className="btn btn-success"
                onClick={checkData}
                data-testid="btn-save"
              >
                <i className="fa-solid fa-floppy-disk"></i> Save
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="btnClose"
              data-testid="btn-close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalAdd.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  checkData: PropTypes.func.isRequired,
};

export default ModalAdd;
