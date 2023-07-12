import PropTypes from "prop-types";

function ButtonAdd({ openModal }) {
  return (
    <button
      className="btn btn-dark"
      data-bs-toggle="modal"
      data-bs-target="#modalProducts"
      onClick={() => openModal(1)}
      data-testid="btn-add"
    >
      <i className="fa-solid fa-circle-plus"></i> Add
    </button>
  );
}

ButtonAdd.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default ButtonAdd;
