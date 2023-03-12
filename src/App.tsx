import "./App.css";
import Card from "./features/card";

function App() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="h-[10%] font-extrabold text-primary">
        Framer Motion Samples
      </h1>
      <div className="h-[90%]">
        <div>
          <h2 className="text-left text-2xl font-bold text-[#212121]">Card</h2>
          <hr className="mb-4 border-[1.5px] text-[#000] opacity-[0.87]" />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
