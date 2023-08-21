const k = (f) => f * 1000;
const M = (f) => f * 1000000;

export const legend = {
  CW: "Continuous Wave, morse",
  MGM: "Machine Generated Mode, beteckning f;r digitala moder som Packet/AX25, RTTY, AMTOR, PSK31, FSK441 etc",
  NBDM: "Narrow band digital modes",
  NBM: "All modes using up to 500 Hz bandwidth, including CW, RTTY, PSK, etc.",
};

export const bands = [
  { from: k(135.7), to: k(137, 8), name: "2200m" },
  { from: k(472), to: k(479), name: "600m" },
  { from: k(1810), to: k(1838), name: "160m" },
  { from: k(3500), to: k(3580), name: "80m" },
  { from: k(7000), to: k(7040), name: "40m" },
  { from: k(10100), to: k(10140), name: "30m" },
  { from: k(14000), to: k(14070), name: "20m" },
  { from: k(18068), to: k(18109), name: "17m" },
  { from: k(21000), to: k(21150), name: "15m" },
  { from: k(24890), to: k(24931), name: "12m" },
  { from: k(28000), to: k(29700), name: "10m" },
  { from: M(50), to: M(52), name: "6m" },
  { from: M(144), to: M(146), name: "2m" },
  { from: M(432), to: M(438), name: "70cm" },
  { from: M(1240), to: M(1300), name: "23cm" },
];

export const blocks = [
  {
    from: k(135.7),
    to: k(137.8),
    bandwidth: 200,
    mode: "CW",
    commment: "CW, QRSS and narrow band digital modes",
  },
  { from: k(472), to: k(475), bandwidth: 200, mode: "CW" },
  {
    from: k(475),
    to: k(479),
    suggestedBandwidth: 500,
    mode: "Narrow band modes",
    commment: "CW, digimodes",
  },
  {
    from: k(1810),
    to: k(1838),
    bandwidth: 200,
    mode: "CW",
    commment: "1836 kHz - CW QRP Centre of Activity",
  },
  { from: k(1838), to: k(1840), bandwidth: 500, mode: "Narrow band modes" },
  {
    from: k(1840),
    to: k(1843),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "Digimodes. Lowest dial setting for LSB Voice mode: 1843, 3603, 7053 kHz",
  },
  {
    from: k(1843),
    to: k(2000),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Lowest dial setting for LSB Voice mode: 1843, 3603, 7053 kHz",
  },
  {
    from: k(3500),
    to: k(3510),
    bandwidth: 200,
    mode: "CW",
    commment: "Priority for inter-continental operation",
  },
  {
    from: k(3510),
    to: k(3560),
    bandwidth: 200,
    mode: "CW",
    commment: "CW contest preferred, 3555 kHz - CW QRS Centre of Activity",
  },
  {
    from: k(3560),
    to: k(3570),
    bandwidth: 200,
    mode: "CW",
    commment: "3560 kHz - CW QRP Centre of Activity",
  },
  {
    from: k(3570),
    to: k(3580),
    bandwidth: 200,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(3580),
    to: k(3590),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(3590),
    to: k(3600),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(3600),
    to: k(3620),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "Digimodes, automatically controlled data stations (unattended). Lowest dial setting for LSB Voice mode: 1843, 3603, 7053 kHz",
  },
  {
    from: k(3600),
    to: k(3650),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "SSB contest preferred, 3630 kHz - Digital Voice Centre of Activity. Lowest dial setting for LSB Voice mode: 1843, 3603, 7053 kHz",
  },
  {
    from: k(3650),
    to: k(3700),
    bandwidth: 2700,
    mode: "All modes",
    commment: "3690 kHz - SSB QRP Centre of Activity",
  },
  {
    from: k(3700),
    to: k(3775),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "SSB contest preferred, 3735 kHz - Image Centre of Activity, 3760 kHz - R1 Emergency Centre of Activity",
  },
  {
    from: k(3775),
    to: k(3800),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "SSB contest preferred - Priority for inter-continental operation",
  },
  { from: k(5351.5), to: k(5354.0), bandwidth: 200, mode: "CW" },
  { from: k(5351.5), to: k(5354.0), bandwidth: 200, mode: "Narrow band modes" },
  {
    from: k(5354.0),
    to: k(5366.0),
    bandwidth: 2700,
    mode: "All modes",
    commment: "USB recommended for voice operation. ",
  },
  {
    from: k(5366.0),
    to: k(5366.5),
    bandwidth: 20,
    mode: "Weak signal narrow band modes",
  },
  {
    from: k(7000),
    to: k(7040),
    bandwidth: 200,
    mode: "CW",
    commment: "7030 kHz - CW, QRP Centre of Activity",
  },
  {
    from: k(7040),
    to: k(7047),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(7047),
    to: k(7050),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(7050),
    to: k(7053),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "Digimodes, automatically controlled data stations (unattended). Lowest dial setting for LSB Voice mode: 1843, 3603, 7053 kHz",
  },
  {
    from: k(7053),
    to: k(7060),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Digimodes",
  },
  {
    from: k(7060),
    to: k(7100),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "SSB contest preferred, 7070 kHz - Digital Voice Centre of Activity, 7090 kHz - SSB QRP Centre of Activity",
  },
  {
    from: k(7100),
    to: k(7130),
    bandwidth: 2700,
    mode: "All modes",
    commment: "7110 kHz - Region 1 Emergency Centre",
  },
  {
    from: k(7130),
    to: k(7175),
    bandwidth: 2700,
    mode: "All modes",
    commment: "SSB contest preferred, 7165 kHz - Image Centre of Activity",
  },
  {
    from: k(7175),
    to: k(7200),
    bandwidth: 2700,
    mode: "All modes",
    commment: "SSB contest preferred - Priority for inter-continental Activity",
  },
  {
    from: k(10100),
    to: k(10130),
    bandwidth: 200,
    mode: "CW",
    commment: "10116 kHz - CW QRP Centre of Activity",
  },
  {
    from: k(10130),
    to: k(10150),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(14000),
    to: k(14060),
    bandwidth: 200,
    mode: "CW",
    commment: "CW contest preferred, 14055 kHz - QRS Centre of Activity",
  },
  {
    from: k(14060),
    to: k(14070),
    bandwidth: 200,
    mode: "CW",
    commment: "14060 kHz - CW QRP Centre of Activity",
  },
  {
    from: k(14070),
    to: k(14089),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(14089),
    to: k(14099),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(14099),
    to: k(14101),
    bandwidth: 0,
    mode: "",
    comment: "International Beacon Project Beacons exclusively",
  },
  {
    from: k(14101),
    to: k(14112),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  { from: k(14112), to: k(14125), bandwidth: 2700, mode: "All modes" },
  {
    from: k(14125),
    to: k(14300),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "SSB contest preferred, 14130 kHz - Digital Voice Centre of Activity, 14195 ±5 kHz - Priority for DX-peditions, 14230 kHz - Image Centre of Activity, 14285 kHz - SSB QRP Centre of Activity",
  },
  {
    from: k(14300),
    to: k(14350),
    bandwidth: 2700,
    mode: "All modes",
    commment: "14300 kHz - Global Emergency, Centre of Activity",
  },
  {
    from: k(18068),
    to: k(18095),
    bandwidth: 200,
    mode: "CW",
    commment: "18086 kHz - CW QRP Centre of Activity",
  },
  {
    from: k(18095),
    to: k(18105),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(18105),
    to: k(18109),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(18109),
    to: k(18111),
    bandwidth: 0,
    mode: "",
    comment: "International Beacon Project Beacons exclusively",
  },
  {
    from: k(18111),
    to: k(18120),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(18120),
    to: k(18168),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "18130 kHz - SSB QRP Centre of Activity, 18150 kHz - Digital Voice Centre of Activity, 18160 kHz - Emergency Centre of Activity",
  },
  {
    from: k(21000),
    to: k(21070),
    bandwidth: 200,
    mode: "CW",
    commment:
      "21055 kHz - QRS Centre of Activity,  21060 kHz - QRP Centre of Activity",
  },
  {
    from: k(21070),
    to: k(21090),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(21090),
    to: k(21110),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(21110),
    to: k(21120),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "Digimodes, automatically controlled data stations (unattended), (not SSB)",
  },
  { from: k(21120), to: k(21149), bandwidth: 500, mode: "Narrow band modes" },
  {
    from: k(21149),
    to: k(21151),
    bandwidth: 0,
    mode: "",
    comment: "International Beacon Project Beacons exclusively",
  },
  {
    from: k(21151),
    to: k(21450),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "21180 kHz - Digital Voice Centre of Activity, 21285 kHz - SSB QRP Centre of Activity, 21340 kHz - Image Centre of Activity, 21360 kHz - Global Emergency Centre of Activity",
  },
  {
    from: k(24890),
    to: k(24915),
    bandwidth: 200,
    mode: "CW",
    commment: "24906 kHz - CW QRP Centre of Activity",
  },
  {
    from: k(24915),
    to: k(24925),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(24925),
    to: k(24929),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(24929),
    to: k(24931),
    bandwidth: 0,
    mode: "",
    comment: "International Beacon Project Beacons exclusively",
  },
  {
    from: k(24931),
    to: k(24940),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(24940),
    to: k(24990),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "24950 kHz - Centre of Activity SSB QRP, 24960 kHz - Digital Voice Centre of Activity",
  },
  {
    from: k(28000),
    to: k(28070),
    bandwidth: 200,
    mode: "CW",
    commment:
      "28055 kHz - QRS Centre of Activity, 28060 kHz - QRP Centre of Activity",
  },
  {
    from: k(28070),
    to: k(28120),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes",
  },
  {
    from: k(28120),
    to: k(28150),
    bandwidth: 500,
    mode: "Narrow band modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  { from: k(28150), to: k(28190), bandwidth: 500, mode: "Narrow band modes" },
  {
    from: k(28190),
    to: k(28199),
    bandwidth: 0,
    mode: "",
    comment:
      "International Beacon Project Regional time shared beacons, exclusively",
  },
  {
    from: k(28199),
    to: k(28201),
    bandwidth: 0,
    mode: "",
    comment:
      "International Beacon Project Worldwide time shared beacons, exclusively",
  },
  {
    from: k(28201),
    to: k(28225),
    bandwidth: 0,
    mode: "",
    comment:
      "International Beacon Project Continuous duty beacons, exclusively",
  },
  {
    from: k(28225),
    to: k(28300),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Beacons",
  },
  {
    from: k(28300),
    to: k(28320),
    bandwidth: 2700,
    mode: "All modes",
    commment: "Digimodes, automatically controlled data stations (unattended)",
  },
  {
    from: k(28320),
    to: k(29000),
    bandwidth: 2700,
    mode: "All modes",
    commment:
      "28330 kHz - Digital Voice Centre of Activity, 28360 kHz - SSB QRP Centre of Activity, 28680 kHz - Image Centre of Activity",
  },
  {
    from: k(29000),
    to: k(29100),
    mode: "All modes",
    commment: "Unrestricted bandwidth",
  },
  {
    from: k(29100),
    to: k(29200),
    mode: "All modes",
    commment: "FM simplex - 10 kHz channels. Unrestricted bandwidth",
  },
  {
    from: k(29200),
    to: k(29300),
    mode: "All modes",
    commment:
      "Digimodes, automatically controlled data stations (unattended). Unrestricted bandwidth",
  },
  {
    from: k(29300),
    to: k(29510),
    mode: "Satellite Links",
    commment: "Unrestricted bandwidth",
  },
  {
    from: k(29510),
    to: k(29520),
    bandwidth: 0,
    mode: "",
    comment: "Guard Channel",
  },
  {
    from: k(29520),
    to: k(29590),
    bandwidth: 6000,
    mode: "All modes",
    commment: "FM Repeater input (RH1- RH8)",
  },
  {
    from: k(29600) - 6000 / 2,
    to: k(29600) + 6000 / 2,
    bandwidth: 6000,
    mode: "All modes",
    commment: "FM Calling channel",
  },
  {
    from: k(29610) - 6000 / 2,
    to: k(29610) + 6000 / 2,
    bandwidth: 6000,
    mode: "All modes",
    commment: "FM Simplex Repeater (parrot, input + output",
  },
  {
    from: k(29620),
    to: k(29700),
    bandwidth: 6000,
    mode: "All modes",
    commment: "FM Repeater output (RH1- RH8)",
  },

  // 6m
  {
    from: M(50.0),
    to: M(50.01),
    bandwidth: 500,
    mode: "",
    comment:
      "Coordinated Beacon Project 000 - 010 Region 1, 010-020 Region 2, 020-030 Region 3",
  },
  {
    from: M(50.01),
    to: M(50.1),
    bandwidth: 500,
    mode: "CW",
    comment:
      "50,050 centre of activity 50,090 intercontinental centre of activity",
  },
  {
    from: M(50.1),
    to: M(50.2),
    bandwidth: 2700,
    mode: "CW",
    comment:
      "50,100-50,130: intercontental.Centre of activity: 50,110, 50,130-50,200: international. Centre of activity: 50,150",
  },
  {
    from: M(50.1),
    to: M(50.2),
    bandwidth: 2700,
    mode: "SSB",
    comment:
      "50,100-50,130: intercontental.Centre of activity: 50,110, 50,130-50,200: international. Centre of activity: 50,150",
  },
  {
    from: M(50.2),
    to: M(50.3),
    bandwidth: 2700,
    mode: "CW",
    comment: "General use. 50,285: crossband",
  },
  {
    from: M(50.2),
    to: M(50.3),
    bandwidth: 2700,
    mode: "SSB",
    comment: "General use. 50,285: crossband",
  },
  {
    from: M(50.3),
    to: M(50.4),
    bandwidth: 2700,
    mode: "Narrow band modes",
    comment:
      "50.305 PSK Center of activity, 50.310 - 320 EME center of activity, 50.320 - 380 MS center of activity",
  },
  {
    from: M(50.3),
    to: M(50.4),
    bandwidth: 2700,
    mode: "MGM",
    comment:
      "50.305 PSK Center of activity, 50.310 - 320 EME center of activity, 50.320 - 380 MS center of activity",
  },
  {
    from: M(50.4),
    to: M(50.5),
    bandwidth: 1000,
    mode: "CW",
    comment: "Beacons exclusive (50.401 MHz +/- 500Hz WSPR Beacons)",
  },
  {
    from: M(50.4),
    to: M(50.5),
    bandwidth: 1000,
    mode: "MGM",
    comment: "Beacons exclusive (50.401 MHz +/- 500Hz WSPR Beacons)",
  },
  {
    from: M(50.5),
    to: M(52.0),
    bandwidth: k(12),
    mode: "All modes",
    comment:
      "50.510 SSTV, 50.520 - 540 Simplex FM Internet Voice Gateways, 50.550 Image working frequency, 50.600 RTTY (FSK), 50.620 - 750 Digital communications, 50.630 Digital Voice (DV) calling, 51.210 - 390 FM/DV Repeater Inputs, 51.410 - 590 FM/DV Simplex, 51.510 FM calling frequency, 51.810 - 51.990 FM repeaters output channels",
  },
  {
    from: M(50.5),
    to: M(50.7),
    mode: "All modes",
    comment: "50.540 - 580 Simplex FM/DV Internet Voice Gateways",
  },
  {
    from: M(50.6),
    to: M(50.7),
    mode: "Digital modes",
    comment: "including 50.630 DV calling",
  },
  {
    from: M(50.7),
    to: M(50.9),
    bandwidth: k(12),
    mode: "FM",
    comment: "50.710 - 50.890 FM repeater output channels",
  },
  {
    from: M(50.7),
    to: M(50.9),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "50.710 - 50.890 DV repeater output channels",
  },
  {
    from: M(50.9),
    to: M(51.2),
    mode: "All modes",
    comment: "For wideband digital experiments",
  },
  {
    from: M(51.2),
    to: M(51.4),
    bandwidth: k(12),
    mode: "FM",
    comment: "51.210 - 390 FM Repeater Input channels",
  },
  {
    from: M(51.2),
    to: M(51.4),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "51.210 - 390 DV Repeater Input channels",
  },
  {
    from: M(51.4),
    to: M(52.0),
    mode: "All modes",
    comment:
      "51.410 - 590 FM/DV Simplex, 51.510 FM calling frequency, 51.810 – 990 FM/DV repeaters output channels,, For wideband digital experiments",
  },
  { from: M(52.0), to: M(54.0), bandwidth: 500, mode: "All modes" },

  // 4m
  {
    from: M(70.0),
    to: M(70.09),
    bandwidth: 1000,
    mode: "CW",
    comment: "Coordinated beacons",
  },
  {
    from: M(70.0),
    to: M(70.09),
    bandwidth: 1000,
    mode: "MGM",
    comment: "Coordinated beacons",
  },
  {
    from: M(70.09),
    to: M(70.1),
    bandwidth: 1000,
    mode: "CW",
    comment: "Temporary and personal beacons, 70.091 Personal WSPR beacons",
  },
  {
    from: M(70.09),
    to: M(70.1),
    bandwidth: 1000,
    mode: "MGM",
    comment: "Temporary and personal beacons, 70.091 Personal WSPR beacons",
  },
  {
    from: M(70.1),
    to: M(70.25),
    bandwidth: 2700,
    mode: "CW",
    comment:
      "70.185 Crossband center of activity, 70.200 Centre of activity CW/SSB calling, 70.250 Centre of activity MS",
  },
  {
    from: M(70.1),
    to: M(70.25),
    bandwidth: 2700,
    mode: "MGM",
    comment:
      "70.185 Crossband center of activity, 70.200 Centre of activity CW/SSB calling, 70.250 Centre of activity MS",
  },
  {
    from: M(70.1),
    to: M(70.25),
    bandwidth: 2700,
    mode: "SSB",
    comment:
      "70.185 Crossband center of activity, 70.200 Centre of activity CW/SSB calling, 70.250 Centre of activity MS",
  },
  {
    from: M(70.25),
    to: M(70.294),
    bandwidth: k(12),
    mode: "AM",
    comment: "70.260 AM calling, 70.270 MGM centre of activity",
  },
  {
    from: M(70.25),
    to: M(70.294),
    bandwidth: k(12),
    mode: "FM",
    comment: "70.260 FM calling, 70.270 MGM centre of activity",
  },
  {
    from: M(70.294),
    to: M(70.5),
    bandwidth: k(12),
    mode: "FM",
    comment:
      "Channels 12,5 KHz spacing, 70.3125 digital communications, 70.3250 digital communications, 70.4500 FM calling, 70.4875 digital communications",
  },

  // 2m
  {
    from: M(144.0),
    to: M(144.025),
    bandwidth: 2700,
    mode: "All modes",
    comment: "sattelite downlink only",
  },
  {
    from: M(144.025),
    to: M(144.1),
    bandwidth: 500,
    mode: "CW",
    comment: "144.050 Telagraphy calling, 144.100 Random MS",
  },
  {
    from: M(144.1),
    to: M(144.15),
    bandwidth: 500,
    mode: "CW",
    comment: "144.110-144-160 CW and MGM EME",
  },
  {
    from: M(144.1),
    to: M(144.15),
    bandwidth: 500,
    mode: "MGM",
    comment: "144.110-144-160 CW and MGM EME",
  },
  {
    from: M(144.15),
    to: M(144.4),
    bandwidth: 2700,
    mode: "CW",
    comment: "144.195-144.205 Random MS SSB, 144.300 SSB Centre of activity",
  },
  {
    from: M(144.15),
    to: M(144.4),
    bandwidth: 2700,
    mode: "MGM",
    comment: "144.195-144.205 Random MS SSB, 144.300 SSB Centre of activity",
  },
  {
    from: M(144.15),
    to: M(144.4),
    bandwidth: 2700,
    mode: "SSB",
    comment: "144.195-144.205 Random MS SSB, 144.300 SSB Centre of activity",
  },
  {
    from: M(144.4),
    to: M(144.49),
    bandwidth: 500,
    mode: "CW",
    comment: "Beacons exclusive",
  },
  {
    from: M(144.4),
    to: M(144.49),
    bandwidth: 500,
    mode: "MGM",
    comment: "Beacons exclusive",
  },
  {
    from: M(144.491),
    to: M(144.493),
    bandwidth: 500,
    mode: "MGM",
    comment: "Personal weak signal, Beacons Experimental",
  },
  {
    from: M(144.5),
    to: M(144.794),
    bandwidth: k(20),
    mode: "All modes",
    comment:
      "144.500 Image mode centre (SSTV, Fax,...), 144.600 Data Centre of activity (MGM, RTTY,..), 144.750 ATV Talk back",
  },
  {
    from: M(144.794),
    to: M(144.9625),
    bandwidth: k(12),
    mode: "MGM",
    comment: "144.800 APRS",
  },
  {
    from: M(144.794),
    to: M(144.9625),
    bandwidth: k(12),
    mode: "Digital modes",
    comment:
      "144.8125 DV internet voice gateway, 144.8250 DV internet voice gateway, 144.8375 DV internet voice gateway, 144.8500 DV internet voice gateway, 144.8625 DV internet voice gateway",
  },
  {
    from: M(144.975),
    to: M(145.194),
    bandwidth: k(12),
    mode: "FM",
    comment: "Repeater input exclusive",
  },
  {
    from: M(144.975),
    to: M(145.194),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "Repeater input exclusive",
  },
  {
    from: M(145.194),
    to: M(145.206),
    bandwidth: k(12),
    mode: "FM",
    comment: "Space Communication",
  },
  {
    from: M(145.194),
    to: M(145.206),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "Space Communication",
  },
  {
    from: M(145.206),
    to: M(145.5625),
    bandwidth: k(12),
    mode: "FM",
    comment:
      "145.2375 FM Internet Voice Gateway, 145.2875 FM Internet Voice Gateway, 145.3375 FM Internet Vocie Gatway, 145.375 digital voice calling, 145.500 FM calling",
  },
  {
    from: M(145.206),
    to: M(145.5625),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment:
      "145.2375 FM Internet Voice Gateway, 145.2875 FM Internet Voice Gateway, 145.3375 FM Internet Vocie Gatway, 145.375 digital voice calling, 145.500 FM calling",
  },
  {
    from: M(145.575),
    to: M(145.7935),
    bandwidth: k(12),
    mode: "FM",
    comment: "Repeater output exclusive",
  },
  {
    from: M(145.575),
    to: M(145.7935),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "Repeater output exclusive",
  },
  {
    from: M(145.794),
    to: M(145.806),
    bandwidth: k(12),
    mode: "FM",
    comment: "Space Communication",
  },
  {
    from: M(145.794),
    to: M(145.806),
    bandwidth: k(12),
    mode: "Digital Voice",
    comment: "Space Communication",
  },
  {
    from: M(145.806),
    to: M(146.0),
    bandwidth: k(12),
    mode: "All modes",
    comment: "Sattelite exclusive",
  },
];
