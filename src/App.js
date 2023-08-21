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
      <div className="footer">
        Maintained by <a href="https://sa6ham.se">SA6HAM</a>. Source code{" "}
        <a href="https://github.com/skaramicke/bandplan.sa6ham.se">here</a>.
        Please contribute!
      </div>
    </div>
  );
}

export default App;
