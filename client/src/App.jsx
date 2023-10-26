import UserDisplay from "./components/UserDisplay";

export default function App() {
  return (
    <div>
      <div className="flex flex-1 mt-10 justify-center items-center w-full">
        <div className="w-full">
          <h1 className="flex items-center justify-center text-3xl font-bold text-white font-mono mb-5 text-center">
            Finding User
          </h1>
          <UserDisplay />
        </div>
      </div>
    </div>
  );
}
