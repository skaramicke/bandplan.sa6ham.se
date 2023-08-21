import React from "react";

const frequencyText = (f, short = true) => {
  if (f < 1000) {
    return `${f}${short ? "" : " Hz"}`;
  }
  if (f < 1000000) {
    return `${f / 1000}${short ? "k" : " kHz"}`;
  }
  return `${f / 1000000}${short ? "M" : " MHz"}`;
};

const FrequencyBlock = ({ frequency, min, max, width, offset }) => {
  const size = `${((frequency.to - frequency.from) / (max - min)) * 100}%`;
  const fontSize = 0.5 + 0.5 * ((frequency.to - frequency.from) / (max - min));
  const top = `${((frequency.from - min) / (max - min)) * 100}%`;
  const left = `${offset}%`;
  return (
    <div
      className="frequency-block"
      style={{
        top,
        left,
        width,
        height: size,
      }}
      title={`${frequencyText(frequency.from, false)} - ${frequencyText(
        frequency.to,
        false
      )}${frequency.comment ? "\n" + frequency.comment : ""}`}
    >
      <span className="frequency">
        {frequencyText(frequency.from)} - {frequencyText(frequency.to)}
      </span>
      <br />
      <span className="comment">{frequency.comment}</span>
    </div>
  );
};

const BandPlan = ({ bands }) => {
  const modes = [];

  bands.forEach((band) => {
    band.min = Math.min(...band.frequencies.map((frequency) => frequency.from));
    band.max = Math.max(...band.frequencies.map((frequency) => frequency.to));
    band.frequencies.forEach((frequency) => {
      if (!modes.includes(frequency.mode)) {
        modes.push(frequency.mode);
      }
    });
  });

  const modeOffsets = {};
  const modeColors = {}; // rotate hue
  modes.forEach((mode) => {
    modeOffsets[mode] = (modes.indexOf(mode) + 1) * (100 / (modes.length + 1));
    modeColors[mode] = `hsla(${
      (360 / modes.length) * modes.indexOf(mode)
    }, 100%, 50%, 20%)`;
  });

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      {modes.map((mode) => (
        <div
          style={{
            display: "block",
            position: "fixed",
            backgroundColor: modeColors[mode],
            top: 0,
            left: `${modeOffsets[mode]}%`,
            height: "100vh",
            width: `${100 / (modes.length + 1)}vw`,
          }}
          key={mode}
        >
          <h3 style={{ margin: 0, padding: "0.25rem", textAlign: "center" }}>
            {mode}
          </h3>
        </div>
      ))}
      <div>
        {bands.map((band) => (
          <div className="band" key={band.name}>
            <h2>{band.name}</h2>
            <div
              key={band.name}
              style={{
                display: "block",
                position: "relative",
                flex: 1,
                height: `${(band.max - band.min) / 50}px`,
              }}
            >
              {band.frequencies.map((frequency) => (
                <FrequencyBlock
                  key={`${frequency.from}-${frequency.to}-${frequency.mode}-${frequency.comment}`}
                  frequency={frequency}
                  min={band.min}
                  max={band.max}
                  offset={modeOffsets[frequency.mode]}
                  width={`${100 / (modes.length + 1)}vw`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div style={{position: 'relative'}}>
  //     {modeOffsets.map((mode) => (
  //       <>
  //       <div
  //         style={{
  //           display: "block",
  //           position: "absolute",
  //           top: 0,
  //           left: `${mode}%`,
  //           height: "100%",
  //           width: `${100/modes.length}px`,
  //         }}
  //       >
  //         {mode}
  //       </div>
  //     <div>
  //       {bands.map((band) => (
  //         <>
  //           <h2>{band.name}</h2>
  //           <div
  //             key={band.name}
  //             style={{
  //               display: "block",
  //               position: "relative",
  //               flex: 1,
  //               height: "200px",
  //             }}
  //           >
  //             {band.frequencies.map((frequency) => (
  //               <FrequencyBlock
  //                 key={`${frequency.from}-${frequency.to}-${frequency.mode}-${frequency.comment}`}
  //                 frequency={frequency}
  //                 min={band.min}
  //                 max={band.max}
  //                 offset={modeOffsets[frequency.mode]}
  //               />
  //             ))}
  //           </div>
  //         </>
  //       )}
  //     </div>
  //     </>
  //   </div>
  // );
};

export default BandPlan;
