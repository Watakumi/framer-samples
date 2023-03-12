import "./App.css";
import BrandCard from "./features/brandcard";
import Card from "./features/card";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-extrabold text-primary">Framer Motion Samples</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-left text-2xl font-bold text-[#212121]">Card</h2>
          <hr className="mb-4 border-[1.5px] text-[#000] opacity-[0.87]" />
          <Card />
        </div>
        <div>
          <h2 className="text-left text-2xl font-bold text-[#212121]">
            BrandCard
          </h2>
          <hr className="mb-4 border-[1.5px] text-[#000] opacity-[0.87]" />
          <BrandCard />
        </div>
      </div>
    </div>
  );
}

export default App;
