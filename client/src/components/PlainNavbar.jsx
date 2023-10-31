import { Link } from "react-router-dom";

export default function PlainNavbar() {
  return (
    <div className="mt-4 flex flex-col ss:flex-row ">
      <h1 className="flex  justify-center text-4xl p-5 font-bold text-white font-mono text-center">
        Finding User
      </h1>
      <div className=" flex flex-1 flex-col items-center justify-center w-full ">
        <div className="flex flex-1 justify-evenly sm:space-x-[60px] w-full  pt-7 text-white text-lg">
          <Link to="/"> Home </Link>
          <div>Menu</div>
          <div>Contact</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
}
