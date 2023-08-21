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

  return (
    <div className="App">
      <header className="App-header">Bandplan, Sweden</header>
      <BandPlan bands={bands} />
    </div>
  );
}

export default App;
