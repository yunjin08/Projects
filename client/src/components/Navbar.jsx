import Sort from "./Sort";

export default function Navbar({ setSortOption, filterUsers }) {
  return (
    <div className="mt-4 flex flex-col md:flex-row space-x-7">
      <h1 className="flex  justify-center text-4xl p-5 font-bold text-white font-mono text-center">
        Finding User
      </h1>
      <div className="flex justify-center space-x-20 pt-7 text-white text-lg">
        <div>Home</div>
        <div>Menu</div>
        <div>Contact</div>
        <div>About</div>
      </div>
      <Sort setSortOption={setSortOption} filterUsers={filterUsers} />
    </div>
  );
}
