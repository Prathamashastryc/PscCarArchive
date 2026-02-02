/* ===EMAILJS=== */

(function () {
  if (window.emailjs) {
    emailjs.init("s6jJ382KrECEUiDeR");
    console.log("✅ EmailJS initialized");
  } else {
    console.error("❌ EmailJS library not loaded");
  }
})();

console.log("script.js loaded");

/* === CARS=== */

const cars = {

  ae86: {
    name: "Toyota AE86 Trueno",
    img: "images/ae86.png",
    power: 112,
    popularity: 10,
    engine: `
      <h2>4A-GE Inline-4</h2>
      <p><b>Displacement:</b> 1.6 Liters</p>
      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>
      <p><b>Power:</b> 112 hp</p>
      <p>
        Lightweight balance icon that defined drifting culture and inspired
        generations of rear-wheel-drive sports cars.
      </p>
    `
  },

  gr86: {
    name: "Toyota GT86 / GR86",
    img: "images/gr86.png",
    power: 228,
    popularity: 8,
    engine: `
      <h2>FA24 Boxer-4</h2>
      <p><b>Displacement:</b> 2.4 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 228 hp</p>
      <p>
        Modern evolution of the AE86 philosophy with a low center of gravity
        and improved torque delivery.
      </p>
    `
  },

  mk1: {
    name: "Toyota Supra MK1 (A40/A50)",
    img: "images/mk1.png",
    power: 145,
    popularity: 6,
    engine: `
      <h2>M-Series Inline-6</h2>
      <p><b>Displacement:</b> 2.0–2.8 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 110–145 hp</p>
      <p>
        The origin of the Supra nameplate, focused on smooth
        grand touring performance.
      </p>
    `
  },

  mk2: {
    name: "Toyota Supra MK2 (A60)",
    img: "images/mk2.png",
    power: 178,
    popularity: 7,
    engine: `
      <h2>5M-GE / 6M-GE Inline-6</h2>
      <p><b>Displacement:</b> 2.8–3.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 145–178 hp</p>
      <p>
        Aggressive wedge design with pop-up headlights,
        pushing Supra toward performance identity.
      </p>
    `
  },

  mk3: {
    name: "Toyota Supra MK3 (A70)",
    img: "images/mk3.png",
    power: 232,
    popularity: 8,
    engine: `
      <h2>7M-GTE Turbo Inline-6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 200–232 hp</p>
      <p>
        First turbocharged Supra generation bridging GT comfort
        and boost-driven performance.
      </p>
    `
  },

  mk4: {
    name: "Toyota Supra MK4 (A80)",
    img: "images/mk4.png",
    power: 320,
    popularity: 10,
    engine: `
      <h2>2JZ-GTE Twin-Turbo Inline-6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 276–320 hp</p>
      <p>
        Legendary tuning platform known for extreme durability
        and massive aftermarket potential.
      </p>
    `
  },

  mk5: {
    name: "Toyota Supra MK5 (A90/A91)",
    img: "images/mk5.png",
    power: 382,
    popularity: 9,
    engine: `
      <h2>B58 Turbo Inline-6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 382 hp</p>
      <p>
        Modern Supra reborn with refined turbo performance
        and contemporary chassis engineering.
      </p>
    `
  },

  centuryv12: {
    name: "Toyota Century V12 (JGZ100)",
    img: "images/centuryv12.png",
    power: 276,
    popularity: 7,
    engine: `
      <h2>1GZ-FE Naturally Aspirated V12</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 276 hp</p>
      <p>
        Japan’s ultimate luxury sedan, hand-assembled for royalty and
        dignitaries with unmatched refinement and silence.
      </p>
    `
  },


  sileighty: {
    name: "Nissan Silvia Sileighty",
    img: "images/sileighty.png",
    power: 205,
    popularity: 8,
    engine: `
      <h2>SR20DET Turbo Inline-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 205 hp</p>
      <p>
        Drift culture icon known for balance, turbo response,
        and massive tuning support.
      </p>
    `
  },

  gtr32: {
    name: "Nissan Skyline GT-R R32",
    img: "images/gtrr32.png",
    power: 276,
    popularity: 9,
    engine: `
      <h2>RB26DETT Twin-Turbo Inline-6</h2>
      <p><b>Displacement:</b> 2.6 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 276 hp</p>
      <p>
        The original Godzilla that dominated Group A racing
        and redefined Japanese performance.
      </p>
    `
  },

  gtr33: {
    name: "Nissan Skyline GT-R R33",
    img: "images/gtrr33.png",
    power: 276,
    popularity: 8,
    engine: `
      <h2>RB26DETT Twin-Turbo Inline-6</h2>
      <p><b>Displacement:</b> 2.6 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 276 hp</p>
      <p>
        Improved stability and long-distance endurance
        over the R32 generation.
      </p>
    `
  },

  gtr34: {
    name: "Nissan Skyline GT-R R34",
    img: "images/gtrr34.png",
    power: 276,
    popularity: 10,
    engine: `
      <h2>RB26DETT Twin-Turbo Inline-6</h2>
      <p><b>Displacement:</b> 2.6 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 276 hp</p>
      <p>
        The most iconic GT-R ever built, combining advanced technology
        with timeless design.
      </p>
    `
  },

  gtr35: {
    name: "Nissan GT-R R35",
    img: "images/gtrr35.png",
    power: 600,
    popularity: 9,
    engine: `
      <h2>VR38DETT Twin-Turbo V6</h2>
      <p><b>Displacement:</b> 3.8 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 565–600 hp</p>
      <p>
        Hand-built engine and advanced AWD system delivering
        supercar-level performance at a fraction of the cost.
      </p>
    `
  },

  gtr35nismo: {
    name: "Nissan GT-R R35 NISMO",
    img: "images/gtrr35nismo.png",
    power: 600,
    popularity: 9,
    engine: `
      <h2>VR38DETT Twin-Turbo V6</h2>
      <p><b>Displacement:</b> 3.8 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 600 hp</p>
      <p>
        Track-focused evolution of the GT-R with extensive
        carbon fiber and race-derived tuning.
      </p>
    `
  },

  nissans30z: {
  name: "Nissan S30 Z (Fairlady Z / 240Z)",
  img: "images/s30z.png",
  power: 151,
  popularity: 10,
  engine: `
    <h2>L24 Naturally Aspirated Inline-6</h2>
    <p><b>Displacement:</b> 2.4 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 151 hp</p>
    <p>
      Also Known as "THE DEVILS Z" is the car that launched the Z legacy — lightweight, affordable,
      and beautifully balanced. A Japanese sports car icon that
      reshaped the global market.
    </p>
  `
},



  civictyper: {
    name: "Honda Civic Type R",
    img: "images/civictyper.png",
    power: 315,
    popularity: 9,
    engine: `
      <h2>K20C1 Turbo Inline-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>
      <p><b>Drive / Layout:</b> FWD</p>
      <p><b>Power:</b> 306–315 hp</p>
      <p>
        Benchmark front-wheel-drive performance car
        with exceptional chassis tuning.
      </p>
    `
  },

  integra: {
    name: "Honda Integra Type R",
    img: "images/integratyper.png",
    power: 217,
    popularity: 9,
    engine: `
      <h2>B18C Naturally Aspirated Inline-4</h2>
      <p><b>Displacement:</b> 1.8 Liters</p>
      <p><b>Drive / Layout:</b> FWD</p>
      <p><b>Power:</b> 217 hp</p>
      <p>
        High-revving Type R legend celebrated for
        precision handling and mechanical purity.
      </p>
    `
  },

  nsx: {
    name: "Acura NSX (NA1)",
    img: "images/acuransx.png",
    power: 270,
    popularity: 8,
    engine: `
      <h2>C30A Naturally Aspirated V6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 270 hp</p>
      <p>
        Honda’s first supercar, engineered for balance,
        reliability, and daily usability.
      </p>
    `
  },

  hondansxmodern: {
    name: "Honda NSX (NC1)",
    img: "images/hondansx.png",
    power: 573,
    popularity: 8,
    engine: `
      <h2>3.5L Twin-Turbo V6 + Hybrid</h2>
      <p><b>Displacement:</b> 3.5 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 573 hp</p>
      <p>
        Technologically advanced supercar blending electric torque
        with turbocharged precision.
      </p>
    `
  },


  wrxsti: {
    name: "Subaru WRX STI",
    img: "images/wrxsti.png",
    power: 310,
    popularity: 9,
    engine: `
      <h2>EJ25 Turbo Boxer-4</h2>
      <p><b>Displacement:</b> 2.5 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 310 hp</p>
      <p>
        Rally-derived performance sedan featuring
        Subaru’s symmetrical AWD system.
      </p>
    `
  },

  evox: {
    name: "Mitsubishi Lancer Evolution X",
    img: "images/evox.png",
    power: 291,
    popularity: 9,
    engine: `
      <h2>4B11T Turbo Inline-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 291 hp</p>
      <p>
        Final evolution of Mitsubishi’s rally-bred performance icon.
      </p>
    `
  },


  bmwm3e46: {
    name: "BMW M3 E46",
    img: "images/bmwm3e46.png",
    power: 343,
    popularity: 9,
    engine: `
      <h2>S54 Naturally Aspirated Inline-6</h2>
      <p><b>Displacement:</b> 3.2 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 343 hp</p>
      <p>
        Widely regarded as one of the greatest M cars ever built.
      </p>
    `
  },

  bmwm3gtr: {
    name: "BMW M3 GTR (E46)",
    img: "images/bmwm3gtr.png",
    power: 493,
    popularity: 9,
    engine: `
      <h2>P60B40 Naturally Aspirated V8</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 493 hp</p>
      <p>
        Homologation special built for endurance racing dominance.
      </p>
    `
  },

  bmwm3e92: {
    name: "BMW M3 E92",
    img: "images/m3e92.png",
    power: 414,
    popularity: 9,
    engine: `
      <h2>S65 Naturally Aspirated V8</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 414 hp</p>
      <p>
        The only V8-powered M3, famed for its sound and response.
      </p>
    `
  },

  bmwm5comp: {
    name: "BMW M5 Competition",
    img: "images/bmwm5comp.png",
    power: 617,
    popularity: 8,
    engine: `
      <h2>S63 Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 4.4 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 617 hp</p>
      <p>
        Executive sedan capable of supercar acceleration.
      </p>
    `
  },

  bmwm6f13: {
    name: "BMW M6 F13",
    img: "images/m6f13.png",
    power: 560,
    popularity: 7,
    engine: `
      <h2>4.4L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 4.4 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 560 hp</p>
      <p>
        High-performance luxury coupe with immense torque.
      </p>
    `
  },

  bmwi8: {
    name: "BMW i8",
    img: "images/bmwi8.png",
    power: 369,
    popularity: 7,
    engine: `
      <h2>1.5L Turbo I3 + Hybrid</h2>
      <p><b>Displacement:</b> 1.5 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 369 hp</p>
      <p>
        Futuristic plug-in hybrid sports car with carbon construction.
      </p>
    `
  },


  lexuslfa: {
    name: "Lexus LFA",
    img: "images/lexuslfa.png",
    power: 552,
    popularity: 10,
    engine: `
      <h2>1LR-GUE Naturally Aspirated V10</h2>
      <p><b>Displacement:</b> 4.8 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 552 hp</p>
      <p>
        Engineering masterpiece with one of the greatest engine sounds ever.
      </p>
    `
  },

  lexuslc500: {
    name: "Lexus LC 500",
    img: "images/lc500.png",
    power: 471,
    popularity: 8,
    engine: `
      <h2>5.0L Naturally Aspirated V8</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 471 hp</p>
      <p>
        Luxury grand tourer blending design, refinement, and V8 character.
      </p>
    `
  },

  ls500h: {
    name: "Lexus LS 500h",
    img: "images/ls500h.png",
    power: 354,
    popularity: 6,
    engine: `
      <h2>3.5L V6 Hybrid</h2>
      <p><b>Displacement:</b> 3.5 Liters</p>
      <p><b>Drive / Layout:</b> RWD / AWD</p>
      <p><b>Power:</b> 354 hp</p>
      <p>
        Flagship luxury sedan focused on comfort and refinement.
      </p>
    `
  },


  exige: {
    name: "Lotus Exige S",
    img: "images/exige.png",
    power: 430,
    popularity: 8,
    engine: `
      <h2>2GR-FE Supercharged V6</h2>
      <p><b>Displacement:</b> 3.5 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 345–430 hp</p>
      <p>
        Track-focused lightweight sports car with extreme driver engagement.
      </p>
    `
  },

  emira: {
    name: "Lotus Emira",
    img: "images/emira.png",
    power: 400,
    popularity: 8,
    engine: `
      <h2>2GR-FE Supercharged V6</h2>
      <p><b>Displacement:</b> 3.5 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 400 hp</p>
      <p>
        Lotus’ final internal-combustion sports car.
      </p>
    `
  },


  porsche911gt3: {
    name: "Porsche 911 GT3",
    img: "images/911gt3.png",
    power: 502,
    popularity: 9,
    engine: `
      <h2>4.0L Naturally Aspirated Flat-6</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> RR / RWD</p>
      <p><b>Power:</b> 502 hp</p>
      <p>
        Motorsport-derived road car focused on precision and balance.
      </p>
    `
  },

  porsche911carrera4gts: {
    name: "Porsche 911 Carrera 4 GTS",
    img: "images/carrera4gts.png",
    power: 473,
    popularity: 9,
    engine: `
      <h2>3.0L Twin-Turbo Flat-6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 473 hp</p>
      <p>
        Ideal balance of daily usability and performance.
      </p>
    `
  },

  porsche718cayman: {
    name: "Porsche 718 Cayman",
    img: "images/718caymen.png",
    power: 300,
    popularity: 8,
    engine: `
      <h2>2.0L Turbo Flat-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 300 hp</p>
      <p>
        Perfectly balanced mid-engine sports car.
      </p>
    `
  },


  amggts: {
    name: "Mercedes-AMG GT S",
    img: "images/amggts.png",
    power: 522,
    popularity: 8,
    engine: `
      <h2>4.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 522 hp</p>
      <p>
        Grand touring AMG balancing comfort and V8 performance.
      </p>
    `
  },

  amggtr: {
    name: "Mercedes-AMG GT R",
    img: "images/amggtr.png",
    power: 577,
    popularity: 9,
    engine: `
      <h2>4.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 577 hp</p>
      <p>
        Nürburgring-focused hardcore AMG GT variant.
      </p>
    `
  },


  alfaromeo4c: {
    name: "Alfa Romeo 4C",
    img: "images/alfa4c.png",
    power: 237,
    popularity: 7,
    engine: `
      <h2>1.75L Turbo Inline-4</h2>
      <p><b>Displacement:</b> 1.75 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 237 hp</p>
      <p>
        Ultra-lightweight carbon monocoque sports car.
      </p>
    `
  },

  alpinea110: {
    name: "Alpine A110",
    img: "images/alpa110.png",
    power: 249,
    popularity: 8,
    engine: `
      <h2>1.8L Turbo Inline-4</h2>
      <p><b>Displacement:</b> 1.8 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 249 hp</p>
      <p>
        Modern lightweight French sports car revival.
      </p>
    `
  },

  alpinea110s: {
    name: "Alpine A110 S",
    img: "images/alpa110s.png",
    power: 292,
    popularity: 8,
    engine: `
      <h2>1.8L Turbo Inline-4</h2>
      <p><b>Displacement:</b> 1.8 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 292 hp</p>
      <p>
        Sharpened, track-focused evolution of the A110.
      </p>
    `
  },

  ferrari488gtb: {
    name: "Ferrari 488 GTB",
    img: "images/488gtb.png",
    power: 661,
    popularity: 9,
    engine: `
      <h2>3.9L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 3.9 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 661 hp</p>
      <p>
        Turbocharged Ferrari benchmark for balance and speed.
      </p>
    `
  },

  audir8v10plus: {
    name: "Audi R8 V10 Plus",
    img: "images/AudiR8V10plus.png",
    power: 610,
    popularity: 9,
    engine: `
      <h2>5.2L Naturally Aspirated V10</h2>
      <p><b>Displacement:</b> 5.2 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 610 hp</p>
      <p>
        Daily-drivable supercar with a high-revving V10.
      </p>
    `
  },

  astonmartinvantage: {
    name: "Aston Martin Vantage",
    img: "images/martinvantage.png",
    power: 503,
    popularity: 8,
    engine: `
      <h2>4.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 4.0 Liters</p>
      <p><b>Drive / Layout:</b> FR / RWD</p>
      <p><b>Power:</b> 503 hp</p>
      <p>
        Compact British sports car with sharp handling.
      </p>
    `
  },

  lamborghinilp610: {
    name: "Lamborghini Huracán LP 610-4",
    img: "images/lambolp610.png",
    power: 610,
    popularity: 9,
    engine: `
      <h2>5.2L Naturally Aspirated V10</h2>
      <p><b>Displacement:</b> 5.2 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 610 hp</p>
      <p>
        High-revving Italian supercar with razor-sharp response.
      </p>
    `
  },

  agera: {
    name: "Koenigsegg Agera",
    img: "images/agera.png",
    power: 1140,
    popularity: 8,
    engine: `
      <h2>5.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 960–1140 hp</p>
      <p>
        Carbon-fiber hypercar pushing power-to-weight limits.
      </p>
    `
  },

  oneofone: {
    name: "Koenigsegg One:1",
    img: "images/oneofone.png",
    power: 1341,
    popularity: 9,
    engine: `
      <h2>5.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 1341 hp</p>
      <p>
        World’s first true megacar.
      </p>
    `
  },

  regera: {
    name: "Koenigsegg Regera",
    img: "images/regera.png",
    power: 1500,
    popularity: 8,
    engine: `
      <h2>5.0L Twin-Turbo V8 + Hybrid</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> ~1500 hp</p>
      <p>
        Single-gear hyper GT focused on effortless acceleration.
      </p>
    `
  },

  gemera: {
    name: "Koenigsegg Gemera",
    img: "images/gemera.png",
    power: 1700,
    popularity: 8,
    engine: `
      <h2>2.0L Twin-Turbo Inline-3 + Hybrid</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> ~1700 hp</p>
      <p>
        Four-seat megacar with extreme performance.
      </p>
    `
  },

  jeskoabsolute: {
    name: "Koenigsegg Jesko Absolute",
    img: "images/jeskoabsolute.png",
    power: 1600,
    popularity: 9,
    engine: `
      <h2>5.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 1280–1600 hp</p>
      <p>
        Extreme top-speed-focused hypercar.
      </p>
    `
  },

  veyron: {
    name: "Bugatti Veyron",
    img: "images/veyron.png",
    power: 1200,
    popularity: 9,
    engine: `
      <h2>8.0L Quad-Turbo W16</h2>
      <p><b>Displacement:</b> 8.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 1001–1200 hp</p>
      <p>
        The car that redefined speed and luxury.
      </p>
    `
  },

  divo: {
    name: "Bugatti Divo",
    img: "images/divo.png",
    power: 1479,
    popularity: 8,
    engine: `
      <h2>8.0L Quad-Turbo W16</h2>
      <p><b>Displacement:</b> 8.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 1479 hp</p>
      <p>
        Track-focused Bugatti prioritizing handling.
      </p>
    `
  },

  centodieci: {
    name: "Bugatti Centodieci",
    img: "images/centodieci.png",
    power: 1600,
    popularity: 8,
    engine: `
      <h2>8.0L Quad-Turbo W16</h2>
      <p><b>Displacement:</b> 8.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 1600 hp</p>
      <p>
        EB110 tribute with modern Bugatti engineering.
      </p>
    `
  },

  lavoiturenoire: {
    name: "Bugatti La Voiture Noire",
    img: "images/lavoiturenoire.png",
    power: 1479,
    popularity: 9,
    engine: `
      <h2>8.0L Quad-Turbo W16</h2>
      <p><b>Displacement:</b> 8.0 Liters</p>
      <p><b>Drive / Layout:</b> AWD</p>
      <p><b>Power:</b> 1479 hp</p>
      <p>
        One-off ultra-luxury hypercar.
      </p>
    `
  },

  apolloie: {
    name: "Apollo Intensa Emozione",
    img: "images/apolloie.png",
    power: 769,
    popularity: 8,
    engine: `
      <h2>6.3L Naturally Aspirated V12</h2>
      <p><b>Displacement:</b> 6.3 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 769 hp</p>
      <p>
        Extreme track-only hypercar focused on emotion and sound.
      </p>
    `
  },

  apolloprojectevo: {
    name: "Apollo Project EVO",
    img: "images/apolloprojectevo.png",
    power: 769,
    popularity: 8,
    engine: `
      <h2>6.3L Naturally Aspirated V12</h2>
      <p><b>Displacement:</b> 6.3 Liters</p>
      <p><b>Drive / Layout:</b> MR / RWD</p>
      <p><b>Power:</b> 769 hp</p>
      <p>
        Aerodynamically enhanced evolution of the Apollo IE.
      </p>
    `
  },

  alfa8c: {
  name: "Alfa Romeo 8C Competizione",
  img: "images/alfa8ccomp.png",
  power: 444,
  popularity: 9,
  engine: `
    <h2>4.7L Naturally Aspirated V8</h2>
    <p><b>Displacement:</b> 4.7 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 444 hp</p>
    <p>
      Hand-built Italian grand tourer with Ferrari-derived V8
      and timeless design.
    </p>
  `
},

alfagiuliaquadrifoglio: {
  name: "Alfa Romeo Giulia Quadrifoglio",
  img: "images/alfagiuliaquadrifoglio.png",
  power: 505,
  popularity: 9,
  engine: `
    <h2>2.9L Twin-Turbo V6</h2>
    <p><b>Displacement:</b> 2.9 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 505 hp</p>
    <p>
      Ferrari-engineered sports sedan delivering extreme
      performance with everyday usability.
    </p>
  `
},

aventadorsvj: {
  name: "Lamborghini Aventador SVJ",
  img: "images/aventadorsvj.png",
  power: 770,
  popularity: 10,
  engine: `
    <h2>6.5L Naturally Aspirated V12</h2>
    <p><b>Displacement:</b> 6.5 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 770 hp</p>
    <p>
      Track-focused Aventador variant holding Nürburgring
      lap records with extreme aero.
    </p>
  `
},

cadillacct5v: {
  name: "Cadillac CT5-V",
  img: "images/cadict5-v.png",
  power: 640,
  popularity: 8,
  engine: `
    <h2>6.2L Supercharged V8</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 640 hp</p>
    <p>
      American muscle sedan combining luxury with
      brutal straight-line performance.
    </p>
  `
},

cadillacct4vblackwing: {
  name: "Cadillac CT4-V Blackwing",
  img: "images/cadict4-vblackwing.png",
  power: 472,
  popularity: 8,
  engine: `
    <h2>3.6L Twin-Turbo V6</h2>
    <p><b>Displacement:</b> 3.6 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 472 hp</p>
    <p>
      Modern American sports sedan focused on
      driver engagement and track capability.
    </p>
  `
},

camarozl1: {
  name: "Chevrolet Camaro ZL1",
  img: "images/cameroZL1.png",
  power: 650,
  popularity: 9,
  engine: `
    <h2>6.2L Supercharged V8</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 650 hp</p>
    <p>
      Track-ready American muscle car with extreme
      cooling and aero package.
    </p>
  `
},

challengerscatpack: {
  name: "Dodge Challenger Scat Pack",
  img: "images/ChallengerScatPack3.png",
  power: 485,
  popularity: 8,
  engine: `
    <h2>6.4L Naturally Aspirated V8 (HEMI)</h2>
    <p><b>Displacement:</b> 6.4 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 485 hp</p>
    <p>
      Classic muscle car experience with modern
      chassis and big displacement power.
    </p>
  `
},

challengersrthellcat: {
  name: "Dodge Challenger SRT Hellcat",
  img: "images/ChallengerSRTHellcat.png",
  power: 717,
  popularity: 9,
  engine: `
    <h2>6.2L Supercharged V8 (HEMI)</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 717 hp</p>
    <p>
      Supercharged muscle icon delivering insane
      straight-line acceleration.
    </p>
  `
},

chargerrthemi: {
  name: "Dodge Charger R/T HEMI",
  img: "images/ChargerRHemi.png",
  power: 370,
  popularity: 7,
  engine: `
    <h2>5.7L Naturally Aspirated V8 (HEMI)</h2>
    <p><b>Displacement:</b> 5.7 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 370 hp</p>
    <p>
      Four-door muscle sedan blending practicality
      with classic V8 character.
    </p>
  `
},

ferrari458italia: {
  name: "Ferrari 458 Italia",
  img: "images/458italia.png",
  power: 562,
  popularity: 10,
  engine: `
    <h2>4.5L Naturally Aspirated V8</h2>
    <p><b>Displacement:</b> 4.5 Liters</p>
    <p><b>Drive / Layout:</b> MR / RWD</p>
    <p><b>Power:</b> 562 hp</p>
    <p>
      Last naturally aspirated V8 Ferrari berlinetta,
      celebrated for sound and balance.
    </p>
  `
},

chargersrthellcat: {
  name: "Dodge Charger SRT Hellcat",
  img: "images/chargersrthellcat.png",
  power: 717,
  popularity: 9,
  engine: `
    <h2>6.2L Supercharged HEMI V8</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 717 hp</p>
    <p>
      Four-door muscle sedan delivering outrageous straight-line speed
      with supercharged aggression.
    </p>
  `
},

corvettez06: {
  name: "Chevrolet Corvette Z06 (C8)",
  img: "images/corvettez06.png",
  power: 670,
  popularity: 9,
  engine: `
    <h2>LT6 Naturally Aspirated V8</h2>
    <p><b>Displacement:</b> 5.5 Liters</p>
    <p><b>Drive / Layout:</b> MR / RWD</p>
    <p><b>Power:</b> 670 hp</p>
    <p>
      Flat-plane crank V8 delivering race-car sound and track-focused performance.
    </p>
  `
},

escaladev: {
  name: "Cadillac Escalade-V",
  img: "images/escaladev.png",
  power: 682,
  popularity: 8,
  engine: `
    <h2>6.2L Supercharged V8</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 682 hp</p>
    <p>
      Full-size luxury SUV infused with supercharged muscle and performance tuning.
    </p>
  `
},

ferrarisf90: {
  name: "Ferrari SF90 Stradale",
  img: "images/ferrarisf90.png",
  power: 986,
  popularity: 9,
  engine: `
    <h2>4.0L Twin-Turbo V8 + Hybrid</h2>
    <p><b>Displacement:</b> 4.0 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 986 hp</p>
    <p>
      Ferrari’s first plug-in hybrid supercar with extreme acceleration
      and cutting-edge technology.
    </p>
  `
},


focusrs: {
  name: "Ford Focus RS",
  img: "images/focusrs.png",
  power: 350,
  popularity: 8,
  engine: `
    <h2>2.3L Turbo Inline-4</h2>
    <p><b>Displacement:</b> 2.3 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 350 hp</p>
    <p>
      Rally-inspired hot hatch with aggressive AWD dynamics.
    </p>
  `
},

fordgt: {
  name: "Ford GT",
  img: "images/fordgt.png",
  power: 660,
  popularity: 9,
  engine: `
    <h2>3.5L Twin-Turbo EcoBoost V6</h2>
    <p><b>Displacement:</b> 3.5 Liters</p>
    <p><b>Drive / Layout:</b> MR / RWD</p>
    <p><b>Power:</b> 660 hp</p>
    <p>
      Le Mans–winning carbon-fiber supercar built for pure aerodynamic efficiency.
    </p>
  `
},

gladiatorrubicon: {
  name: "Jeep Gladiator Rubicon",
  img: "images/gladiatorrubicon.png",
  power: 285,
  popularity: 7,
  engine: `
    <h2>3.6L Pentastar V6</h2>
    <p><b>Displacement:</b> 3.6 Liters</p>
    <p><b>Drive / Layout:</b> 4WD</p>
    <p><b>Power:</b> 285 hp</p>
    <p>
      Hardcore off-road pickup combining Wrangler capability with utility.
    </p>
  `
},

jeeptrackhawk: {
  name: "Jeep Grand Cherokee Trackhawk",
  img: "images/jeeptrackhwak.png",
  power: 707,
  popularity: 9,
  engine: `
    <h2>6.2L Supercharged HEMI V8</h2>
    <p><b>Displacement:</b> 6.2 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 707 hp</p>
    <p>
      Supercharged SUV delivering Hellcat power in a family-friendly package.
    </p>
  `
},

golfgti: {
  name: "Volkswagen Golf GTI",
  img: "images/golfgti.png",
  power: 241,
  popularity: 8,
  engine: `
    <h2>2.0L Turbo Inline-4</h2>
    <p><b>Displacement:</b> 2.0 Liters</p>
    <p><b>Drive / Layout:</b> FWD</p>
    <p><b>Power:</b> 241 hp</p>
    <p>
      Hot hatch icon balancing daily comfort with sporty handling.
    </p>
  `
},

maseratigranturismo: {
  name: "Maserati GranTurismo",
  img: "images/masgt.png",
  power: 454,
  popularity: 8,
  engine: `
    <h2>4.7L Naturally Aspirated V8</h2>
    <p><b>Displacement:</b> 4.7 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 454 hp</p>
    <p>
      Italian grand tourer blending luxury, sound,
      and long-distance performance.
    </p>
  `
},

maseratiquattroporte: {
  name: "Maserati Quattroporte GTS",
  img: "images/masquattroporte.png",
  power: 523,
  popularity: 8,
  engine: `
    <h2>3.8L Twin-Turbo V8</h2>
    <p><b>Displacement:</b> 3.8 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 523 hp</p>
    <p>
      Luxury performance sedan with Ferrari-derived
      V8 character and comfort.
    </p>
  `
},

viperacr: {
  name: "Dodge Viper ACR",
  img: "images/ViperACR133.png",
  power: 645,
  popularity: 9,
  engine: `
    <h2>8.4L Naturally Aspirated V10</h2>
    <p><b>Displacement:</b> 8.4 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 645 hp</p>
    <p>
      Extreme track-focused American supercar with
      massive aero and raw performance.
    </p>
  `
},

viperta: {
  name: "Dodge Viper Time Attack",
  img: "images/SRTViperTA.png",
  power: 640,
  popularity: 9,
  engine: `
    <h2>8.4L Naturally Aspirated V10</h2>
    <p><b>Displacement:</b> 8.4 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 640 hp</p>
    <p>
      Lightweight special edition built for track
      dominance and driver engagement.
    </p>
  `
},

vipermopar: {
  name: "Dodge Viper Mopar Edition",
  img: "images/SRTViperMoparized.png",
  power: 645,
  popularity: 8,
  engine: `
    <h2>8.4L Naturally Aspirated V10</h2>
    <p><b>Displacement:</b> 8.4 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 645 hp</p>
    <p>
      Factory-custom Mopar Viper with unique styling
      and aggressive road presence.
    </p>
  `
},

lamborghiniaventador: {
  name: "Lamborghini Aventador",
  img: "images/lamboaventador.png",
  power: 740,
  popularity: 10,
  engine: `
    <h2>6.5L Naturally Aspirated V12</h2>
    <p><b>Displacement:</b> 6.5 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 700–740 hp</p>
    <p>
      Iconic V12 supercar delivering drama,
      sound, and brutal acceleration.
    </p>
  `
},

mazdarx7fd3s: {
  name: "Mazda RX-7 FD3S",
  img: "images/rx7fd3s.png",
  power: 276,
  popularity: 9,
  engine: `
    <h2>1.3L Twin-Rotor Twin-Turbo</h2>
    <p><b>Displacement:</b> 1.3 Liters (Rotary)</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 255–276 hp</p>
    <p>
      Legendary rotary sports car known for
      lightweight balance and high-revving character.
    </p>
  `
},

nissan350z: {
  name: "Nissan 350Z",
  img: "images/350z.png",
  power: 306,
  popularity: 8,
  engine: `
    <h2>3.5L Naturally Aspirated V6</h2>
    <p><b>Displacement:</b> 3.5 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 287–306 hp</p>
    <p>
      Pure driver-focused coupe with strong torque
      and classic front-engine balance.
    </p>
  `
},

nissan370znismo: {
  name: "Nissan 370Z Nismo",
  img: "images/370znismo.png",
  power: 350,
  popularity: 8,
  engine: `
    <h2>3.7L Naturally Aspirated V6</h2>
    <p><b>Displacement:</b> 3.7 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 350 hp</p>
    <p>
      Track-focused Z with aggressive tuning,
      sharper handling, and Nismo styling.
    </p>
  `
},

nissan370z: {
  name: "Nissan 370Z",
  img: "images/370z.png",
  power: 332,
  popularity: 7,
  engine: `
    <h2>3.7L Naturally Aspirated V6</h2>
    <p><b>Displacement:</b> 3.7 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 332 hp</p>
    <p>
      Classic Japanese sports coupe with sharp handling
      and a raw naturally aspirated V6 character.
    </p>
  `
},

infinitiq50: {
  name: "Infiniti Q50",
  img: "images/inifinitiq50.png",
  power: 400,
  popularity: 6,
  engine: `
    <h2>3.0L Twin-Turbo V6</h2>
    <p><b>Displacement:</b> 3.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD / AWD</p>
    <p><b>Power:</b> 300–400 hp</p>
    <p>
      Luxury sports sedan blending comfort
      with strong twin-turbo performance.
    </p>
  `
},

lamborghinirevuelto: {
  name: "Lamborghini Revuelto",
  img: "images/lamborevolto.png",
  power: 1001,
  popularity: 10,
  engine: `
    <h2>6.5L V12 Hybrid (NA + Electric)</h2>
    <p><b>Displacement:</b> 6.5 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 1001 hp</p>
    <p>
      Lamborghini’s next-gen hybrid flagship,
      combining a screaming V12 with electric motors.
    </p>
  `
},

lamborghiniveneno: {
  name: "Lamborghini Veneno",
  img: "images/lambovaneno.png",
  power: 750,
  popularity: 10,
  engine: `
    <h2>6.5L Naturally Aspirated V12</h2>
    <p><b>Displacement:</b> 6.5 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> 750 hp</p>
    <p>
      Ultra-rare hypercar focused on aerodynamics,
      extreme design, and raw V12 aggression.
    </p>
  `
},

maseratisc30: {
  name: "Maserati MC20",
  img: "images/massc30.png",
  power: 621,
  popularity: 7,
  engine: `
    <h2>3.0L Twin-Turbo V6 (Nettuno)</h2>
    <p><b>Displacement:</b> 3.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 621 hp</p>
    <p>
      Italian supercar featuring Maserati’s
      innovative twin-combustion Nettuno engine.
    </p>
  `
},

mustanggt: {
  name: "Ford Mustang GT",
  img: "images/mustanggt.png",
  power: 450,
  popularity: 9,
  engine: `
    <h2>5.0L Naturally Aspirated V8 (Coyote)</h2>
    <p><b>Displacement:</b> 5.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 450–480 hp</p>
    <p>
      Iconic American muscle car delivering
      V8 sound, power, and daily usability.
    </p>
  `
},

shelbygt500: {
  name: "Ford Mustang Shelby GT500",
  img: "images/shelbygt500.png",
  power: 760,
  popularity: 10,
  engine: `
    <h2>5.2L Supercharged V8</h2>
    <p><b>Displacement:</b> 5.2 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 760 hp</p>
    <p>
      Extreme Mustang variant built for straight-line
      dominance and track-ready muscle performance.
    </p>
  `
},

jeepwranglerrubicon: {
  name: "Jeep Wrangler Rubicon",
  img: "images/wranglerrubicon.png",
  power: 285,
  popularity: 8,
  engine: `
    <h2>3.6L Naturally Aspirated V6</h2>
    <p><b>Displacement:</b> 3.6 Liters</p>
    <p><b>Drive / Layout:</b> 4x4</p>
    <p><b>Power:</b> 285 hp</p>
    <p>
      Hardcore off-road SUV built for trails,
      rock crawling, and extreme terrain.
    </p>
  `
},

mazdarx7fc: {
  name: "Mazda RX-7 FC3S",
  img: "images/rx7fc3s.png",
  power: 200,
  popularity: 8,
  engine: `
    <h2>1.3L Twin-Rotor Rotary</h2>
    <p><b>Displacement:</b> 1.3 Liters (Rotary)</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> 160–200 hp</p>
    <p>
      Second-generation RX-7 featuring a lightweight chassis,
      smooth rotary power delivery, and iconic 80s styling.
    </p>
  `
},

mazdamx5: {
  name: "Mazda MX-5 Miata",
  img: "images/mx5.png",
  power: 181,
  popularity: 9,
  engine: `
    <h2>2.0L Skyactiv-G Inline-4</h2>
    <p><b>Displacement:</b> 2.0 Liters</p>
    <p><b>Drive / Layout:</b> FR / RWD</p>
    <p><b>Power:</b> 155–181 hp</p>
    <p>
      The definition of lightweight driving fun — perfectly balanced,
      naturally aspirated, and built for pure connection between car and driver.
    </p>
  `
},

celicagt: {
  name: "Toyota Celica GT-Four",
  img: "images/celicagt.png",
  power: 300,
  popularity: 7,
  engine: `
    <h2>2.0L Turbo Inline-4 (3S-GTE)</h2>
    <p><b>Displacement:</b> 2.0 Liters</p>
    <p><b>Drive / Layout:</b> AWD</p>
    <p><b>Power:</b> ~300 hp (tuned)</p>
    <p>
      Legendary rally-bred machine with turbo punch
      and unbeatable AWD grip.
    </p>
  `
},

fiesta: {
  name: "Ford Fiesta ST",
  img: "images/fiesta.png",
  power: 197,
  popularity: 6,
  engine: `
    <h2>1.6L Turbo Inline-4</h2>
    <p><b>Displacement:</b> 1.6 Liters</p>
    <p><b>Drive / Layout:</b> FWD</p>
    <p><b>Power:</b> ~197 hp</p>
    <p>
      Lightweight hot hatch that delivers massive fun
      with sharp handling and turbo torque.
    </p>
  `
},

s15specr: {
  name: "Nissan Silvia S15 Spec-R",
  img: "images/s15specr.png",
  power: 250,
  popularity: 9,
  engine: `
    <h2>2.0L Turbo Inline-4 (SR20DET)</h2>
    <p><b>Displacement:</b> 2.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~250 hp</p>
    <p>
      Drift icon known for perfect balance,
      high revs, and insane tuning potential.
    </p>
  `
},

datsun240z: {
  name: "Datsun 240Z",
  img: "images/240zg.png",
  power: 150,
  popularity: 8,
  engine: `
    <h2>2.4L Naturally Aspirated Inline-6</h2>
    <p><b>Displacement:</b> 2.4 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~150 hp</p>
    <p>
      Timeless Japanese classic that defined
      affordable sports cars worldwide.
    </p>
  `
},

nissan180sx: {
  name: "Nissan 180SX",
  img: "images/180sx.png",
  power: 205,
  popularity: 9,
  engine: `
    <h2>1.8L / 2.0L Turbo Inline-4</h2>
    <p><b>Displacement:</b> 1.8–2.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~205 hp</p>
    <p>
      Underground drift legend with pop-up headlights
      and massive mod culture.
    </p>
  `
},

skyline2000gtr: {
  name: "Nissan Skyline 2000 GT-R",
  img: "images/2000gtr.png",
  power: 160,
  popularity: 10,
  engine: `
    <h2>2.0L Naturally Aspirated Inline-6</h2>
    <p><b>Displacement:</b> 2.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~160 hp</p>
    <p>
      The origin of the GT-R legend —
      pure motorsport DNA from the 70s.
    </p>
  `
},

boss302: {
  name: "Ford Mustang Boss 302",
  img: "images/boss302.png",
  power: 444,
  popularity: 9,
  engine: `
    <h2>5.0L Naturally Aspirated V8</h2>
    <p><b>Displacement:</b> 5.0 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~444 hp</p>
    <p>
      Track-focused muscle car with raw V8 sound
      and aggressive handling.
    </p>
  `
},

brz: {
  name: "Subaru BRZ",
  img: "images/brz.png",
  power: 228,
  popularity: 8,
  engine: `
    <h2>2.4L Naturally Aspirated Boxer-4</h2>
    <p><b>Displacement:</b> 2.4 Liters</p>
    <p><b>Drive / Layout:</b> RWD</p>
    <p><b>Power:</b> ~228 hp</p>
    <p>
      Driver-focused coupe built for balance,
      precision, and pure cornering joy.
    </p>
  `
},

rasertachyon: {
  name: "Raser Tachyon Speed",
  img: "images/rasertacycan.png",
  power: 1250,
  popularity: 8,
  engine: `
    <h2>Electric Quad-Motor Hypercar</h2>
    <p><b>Powertrain:</b> Fully Electric</p>
    <p><b>Drive / Layout:</b> AWD (4 Motors)</p>
    <p><b>Power:</b> ~1250 hp</p>
    <p>
      Experimental electric hypercar designed to push
      the limits of acceleration, aerodynamics, and
      extreme futuristic design.
    </p>
  `
},

ktmxbowgtxr: {
  name: "KTM X-Bow GT-XR",
  img: "images/ktmxbowgtxr.png",
  power: 500,
  popularity: 8,
  engine: `
    <h2>2.5L Turbo Inline-5 (Audi-sourced)</h2>
    <p><b>Displacement:</b> 2.5 Liters</p>
    <p><b>Drive / Layout:</b> MR / RWD</p>
    <p><b>Power:</b> ~500 hp</p>
    <p>
      Street-legal track weapon combining lightweight
      carbon construction with race-car aerodynamics
      and brutal performance.
    </p>
  `
},

};

/* === DOM === */

const grid = document.getElementById("grid");
const viewer = document.getElementById("viewer");
const title = document.getElementById("title");
const carImg = document.getElementById("carImg");
const engineInfo = document.getElementById("engineInfo");
const carTitle = document.getElementById("carTitle");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

/* ===IMAGE PRELOADER=== */

function preloadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  });
}

/* === GRID RENDER=== */

function renderGrid(list) {
  grid.innerHTML = "";
  list.forEach(([key, car]) => {
    const card = document.createElement("div");
    card.className = `card ${car.brand ? `brand-${car.brand}` : ""}`;
    card.innerHTML = `
  <img class="card-bg" src="${car.img}" alt="${car.name}">
  <h2>${car.name}</h2>
   `;
    card.onclick = () => showCar(key);
    grid.appendChild(card);
  });
}

/* === SEARCH + SORT === */

function updateGrid() {
  let list = Object.entries(cars);

  const q = searchInput.value.toLowerCase();
  if (q) {
    list = list.filter(([_, car]) =>
      car.name.toLowerCase().includes(q)
    );
  }

  const sort = sortSelect.value;
  if (sort === "name") {
    list.sort((a, b) => a[1].name.localeCompare(b[1].name));
  }
  if (sort === "power") {
    list.sort((a, b) => (b[1].power || 0) - (a[1].power || 0));
  }
  if (sort === "popularity") {
    list.sort((a, b) => (b[1].popularity || 0) - (a[1].popularity || 0));
  }

  renderGrid(list);
}

/* === VIEW LOGIC === */

function showCar(key, push = true) {
  const car = cars[key];
  if (!car) return;

  grid.classList.add("fade-out");

  const imagePromise = preloadImage(car.img);

  setTimeout(async () => {
    grid.style.display = "none";
    grid.classList.remove("fade-out");

    document.body.classList.add("lock-scroll"); //lockscroll
    viewer.style.display = "block";
    viewer.scrollTop = 0;

    title.innerText = car.name;
    carTitle.innerText = car.name;


    viewer.classList.add("loading");
    carImg.style.display = "none";
    engineInfo.innerHTML = `<div class="loading-placeholder"></div>`;

    await imagePromise;

    carImg.loading = "lazy";
carImg.decoding = "async";
carImg.src = car.img;

    carImg.style.display = "block";
    engineInfo.innerHTML = car.engine;

    viewer.classList.remove("loading");
    viewer.classList.add("fade-in");

    if (push) {
      history.pushState({ car: key }, "", `#${key}`);
    }
  }, 250);
}


function showGrid() {
  viewer.style.display = "none";
  grid.style.display = "grid";
  title.innerText = "SELECT YOUR CAR";

  document.body.classList.remove("lock-scroll"); // ✅ UNLOCK SCROLL
}


/* === HISTORY === */

window.onpopstate = e => {
  if (e.state && e.state.car) {
    showCar(e.state.car, false);
  } else {
    showGrid();
  }
};

/* === INIT GRID === */

updateGrid();
searchInput.addEventListener("input", updateGrid);
sortSelect.addEventListener("change", updateGrid);

/* === SUGGEST CAR FORM === */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("car-suggestion-form");
  const statusText = document.getElementById("form-status");

  console.log("Form found:", form);

  if (!form || !window.emailjs) {
    console.warn("⚠️ Suggest form or EmailJS missing");
    return;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    statusText.textContent = "Sending...";
    statusText.style.color = "#aaa";

    emailjs
      .send("service_hwbze4y", "template_t56g2pc", {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      })
      .then(() => {
        statusText.textContent = "✅ Suggestion sent!";
        statusText.style.color = "#4cec3b";
        form.reset();
      })
      .catch(err => {
        console.error("EmailJS error:", err);
        statusText.textContent = "❌ Failed to send.";
        statusText.style.color = "red";
      });
  });
});
