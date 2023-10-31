import PropTypes from "prop-types";

export default function Inputs({ type, placeholder, onChangeHandler, value }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className=" px-1 pb-2 bg-black text-white mt-1 w-[300px] bg-transparent border-b-[1px]"
      />
    </div>
  );
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
