import PropTypes from "prop-types";

function ModalField({
  valueField,
  setValueField,
  placeholderValue,
  idValue,
  typeValue,
  classIconValue,
}) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <i className={classIconValue} data-testid={classIconValue}></i>
      </span>
      <input
        type={typeValue}
        id={idValue}
        className="form-control"
        placeholder={placeholderValue}
        value={valueField}
        onChange={(e) => setValueField(e.target.value)}
      ></input>
    </div>
  );
}

ModalField.propTypes = {
  valueField: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setValueField: PropTypes.func.isRequired,
  placeholderValue: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired,
  typeValue: PropTypes.string.isRequired,
  classIconValue: PropTypes.string.isRequired,
};

export default ModalField;
