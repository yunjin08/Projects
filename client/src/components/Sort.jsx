export default function Sort({ setSortOption, filterUsers }) {
  return (
    <div className="space-x-3 flex items-center justify-center mt-4">
      <select
        name="Sort by Age"
        id="age"
        onChange={(event) => {
          setSortOption(event.target.value);
        }}
        className="w-28 bg-black text-white"
      >
        <option value="none"> None </option>
        <option value="option1"> Age &ge; 60</option>
        <option value="option2"> Age &lt; 60 and &ge; 30 </option>
        <option value="option3"> Age &lt; 30 and &ge; 18 </option>
        <option value="option4"> Age &lt; 18 and &ge; 0 </option>
      </select>
      <button
        onClick={filterUsers}
        className="text-white font-mono border-[1px] px-2  hover:text-black hover:bg-white"
      >
        {" "}
        Filter User
      </button>
    </div>
  );
}
