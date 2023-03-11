import "./App.css";
import Card from "./features/card";

function App() {
  return (
    <div className='flex flex-col h-full'>
      <h1 className='h-[10%] text-primary font-extrabold'>
        Framer Motion Samples
      </h1>
      <div className='h-[90%]'>
        <Card />
      </div>
    </div>
  );
}

export default App;
