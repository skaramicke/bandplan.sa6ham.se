import "./App.css";
import BandPlan from "./BandPlan";
import { bands, blocks } from "./frequencies";

function App() {
  bands.forEach((band) => {
    const frequencies = blocks.filter(
      (block) => block.from >= band.from && block.to <= band.to
    );
    band.frequencies = frequencies;
  });

  console.log(bands);

  return (
    <div className="App">
      <BandPlan bands={bands} />
    </div>
  );
}

export default App;
