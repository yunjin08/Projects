export default function Inputs({ type, placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className="w-28 px-1 bg-black text-white"
      />
    </div>
  );
}
