export default function Inputs({ type, placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className=" px-1 pb-2 bg-black text-white mt-1 w-[300px] bg-transparent border-b-[1px]"
      />
    </div>
  );
}
