import "./App.css";
import Card from "./features/card";

function App() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="h-[10%] font-extrabold text-primary">
        Framer Motion Samples
      </h1>
      <div className="h-[90%]">
        <Card />
      </div>
    </div>
  );
}

export default App;
