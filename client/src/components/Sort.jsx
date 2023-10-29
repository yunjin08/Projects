export default function Sort({ setSortOption, filterUsers }) {
  return (
    <div>
      <div className="flex items-center justify-center space-x-3 pt-10">
        <input
          type="text"
          placeholder="Search "
          className="bg-transparent border-b-2 border-x-2 border-t-[0.5px] rounded-lg w-[150px] pl-10"
        />
        <button className="text-white w-[100px] rounded-xl border-[1px] hover:bg-slate-400 hover:text-black">
          {" "}
          Search
        </button>
      </div>
      <div className="space-x-3 flex items-center justify-center mt-4">
        <select
          name="Sort by Age"
          id="age"
          onChange={(event) => {
            setSortOption(event.target.value);
          }}
          className="w-28 bg-slate-900 text-white  border-[1px] rounded-sm "
        >
          <option value="none"> None </option>
          <option value="option1"> Age &ge; 60</option>
          <option value="option2"> Age &lt; 60 and &ge; 30 </option>
          <option value="option3"> Age &lt; 30 and &ge; 18 </option>
          <option value="option4"> Age &lt; 18 and &ge; 0 </option>
        </select>
        <button
          onClick={filterUsers}
          className="text-white font-mono border-[1px] px-3  hover:text-black hover:bg-slate-400 rounded-xl"
        >
          {" "}
          Filter User
        </button>
      </div>
    </div>
  );
}
