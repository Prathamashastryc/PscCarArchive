/* ================= CAR DATA ================= */

const cars = {

/* ================= TOYOTA ================= */

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

      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>

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

    <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>

    <p><b>Power:</b> 276 hp</p>

    <p>
      Japan’s ultimate luxury sedan, hand-assembled for dignitaries and royalty,
      featuring the only production V12 engine ever built by Toyota and unmatched
      ride comfort focused on silence and refinement rather than performance.
    </p>
  `
},


  /* ================= NISSAN ================= */

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
        Improved stability and high-speed endurance over the R32,
        making it a strong long-distance performer.
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

  /* ================= HONDA ================= */

  civictyper: {
    name: "Honda Civic Type R",
    img: "images/civictyper.png",
    power: 315,
    popularity: 9,
    engine: `
      <h2>K20C1 Turbo Inline-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>

      <p><b>Drive / Layout:</b> FF / FWD</p>

      <p><b>Power:</b> 306–315 hp</p>

      <p>
        Benchmark front-wheel-drive performance car with
        exceptional chassis tuning and aerodynamics.
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

      <p><b>Drive / Layout:</b> FF / FWD</p>

      <p><b>Power:</b> 217 hp</p>

      <p>
        High-revving Type R legend famous for precision handling
        and mechanical purity.
      </p>
    `
  },

  nsx: {
    name: "Honda NSX (NA1)",
    img: "images/nsx.png",
    power: 270,
    popularity: 8,
    engine: `
      <h2>C30A Naturally Aspirated V6</h2>
      <p><b>Displacement:</b> 3.0 Liters</p>

      <p><b>Drive / Layout:</b> MR / RWD</p>

      <p><b>Power:</b> 270 hp</p>

      <p>
        Honda’s first supercar, engineered for balance,
        reliability, and everyday usability.
      </p>
    `
  },

  /* ================= SUBARU / MITSUBISHI ================= */

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
        Rally-derived performance sedan featuring Subaru’s
        symmetrical all-wheel-drive system.
      </p>
    `
  },

  evox: {
    name: "Mitsubishi Lancer Evo X",
    img: "images/evox.png",
    power: 291,
    popularity: 9,
    engine: `
      <h2>4B11T Turbo Inline-4</h2>
      <p><b>Displacement:</b> 2.0 Liters</p>

      <p><b>Drive / Layout:</b> AWD</p>

      <p><b>Power:</b> 291 hp</p>

      <p>
        Final evolution of Mitsubishi’s rally icon,
        combining aggressive AWD traction with turbo punch.
      </p>
    `
  },

    /* ================= BMW ================= */

  bmwm3e46: {
    name: "BMW M3 E46",
    img: "images/bmwm3e46.png",
    power: 343,
    popularity: 9,
    engine: `
      <h2>S54 Naturally Aspirated Inline-6</h2>
      <p><b>Displacement:</b> 3.2 Liters</p>

      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>

      <p><b>Power:</b> 343 hp</p>

      <p>
        Widely regarded as one of the greatest M cars ever built,
        combining a high-revving engine with perfectly balanced handling.
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

      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>

      <p><b>Power:</b> 493 hp</p>

      <p>
        Homologation special created for endurance racing,
        featuring a rare race-derived V8 in a road-going M3.
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

      <p><b>Drive / Layout:</b> Front-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> 617 hp</p>

      <p>
        A luxury executive sedan capable of supercar acceleration,
        blending comfort with immense turbocharged power.
      </p>
    `
  },

  /* ================= LOTUS ================= */

  exige: {
    name: "Lotus Exige",
    img: "images/exige.png",
    power: 430,
    popularity: 8,
    engine: `
      <h2>2GR-FE Supercharged V6</h2>
      <p><b>Displacement:</b> 3.5 Liters</p>

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> 345–430 hp</p>

      <p>
        Track-focused lightweight sports car built around minimal mass,
        sharp steering feel, and maximum driver engagement.
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

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> 400 hp</p>

      <p>
        Lotus’ final internal-combustion sports car,
        combining modern usability with classic lightweight handling.
      </p>
    `
  },

  /* ================= LEXUS ================= */

  lexuslfa: {
    name: "Lexus LFA",
    img: "images/lexuslfa.png",
    power: 552,
    popularity: 10,
    engine: `
      <h2>1LR-GUE Naturally Aspirated V10</h2>
      <p><b>Displacement:</b> 4.8 Liters</p>

      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive (FR / RWD)</p>

      <p><b>Power:</b> 552 hp</p>

      <p>
        An engineering masterpiece renowned for its instantaneous throttle
        response and one of the greatest engine sounds ever produced.
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

      <p><b>Drive / Layout:</b> Front-engine, Rear-wheel drive / AWD</p>

      <p><b>Power:</b> 354 hp</p>

      <p>
        Flagship Lexus luxury sedan focused on refinement,
        comfort, and smooth hybrid-assisted performance.
      </p>
    `
  },

  /* ================= HYPERCARS ================= */

  agera: {
    name: "Koenigsegg Agera",
    img: "images/agera.png",
    power: 1140,
    popularity: 8,
    engine: `
      <h2>5.0L Twin-Turbo V8</h2>
      <p><b>Displacement:</b> 5.0 Liters</p>

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> 960–1140 hp</p>

      <p>
        Carbon-fiber hypercar pushing the limits of power-to-weight
        ratios and active aerodynamics.
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

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> 1341 hp</p>

      <p>
        The world’s first true megacar,
        achieving a perfect one-to-one power-to-weight ratio.
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

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> ~1500 hp</p>

      <p>
        Revolutionary single-gear hyper GT designed to deliver
        effortless acceleration with extreme hybrid-assisted output.
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

      <p><b>Drive / Layout:</b> Mid-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> ~1700 hp</p>

      <p>
        Four-seat megacar combining extreme performance
        with everyday usability and advanced electrification.
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

      <p><b>Drive / Layout:</b> Mid-engine, Rear-wheel drive (MR / RWD)</p>

      <p><b>Power:</b> 1280–1600 hp</p>

      <p>
        A top-speed-focused hypercar engineered to push the
        theoretical limits of maximum velocity.
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

      <p><b>Drive / Layout:</b> Mid-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> 1001–1200 hp</p>

      <p>
        The car that redefined the limits of speed and luxury,
        becoming the first production vehicle to exceed 400 km/h.
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

      <p><b>Drive / Layout:</b> Mid-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> 1479 hp</p>

      <p>
        Track-focused Bugatti prioritizing handling and downforce
        over outright top speed.
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

      <p><b>Drive / Layout:</b> Mid-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> 1600 hp</p>

      <p>
        Limited-production homage to the EB110,
        combining retro inspiration with modern Bugatti engineering.
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

      <p><b>Drive / Layout:</b> Mid-engine, All-wheel drive (AWD)</p>

      <p><b>Power:</b> 1479 hp</p>

      <p>
        One-off ultra-luxury hypercar representing the
        absolute peak of bespoke automotive craftsmanship.
      </p>
    `
  },

};

/* ================= DOM ELEMENTS ================= */

const grid = document.getElementById("grid");
const viewer = document.getElementById("viewer");
const title = document.getElementById("title");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

/* ================= GRID RENDER ================= */

function renderGrid(list) {
  grid.innerHTML = "";

  list.forEach(([key, car]) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${car.name}</h2>`;
    card.onclick = () => showCar(key);
    grid.appendChild(card);
  });
}

/* ================= SEARCH + SORT ================= */

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

/* ================= VIEW HANDLING ================= */

function showGrid() {
  title.innerText = "SELECT YOUR CAR";
  viewer.style.display = "none";
  grid.style.display = "grid";
}

function showCar(key, push = true) {
  const car = cars[key];
  if (!car) return;

  title.innerText = car.name;
  document.getElementById("carImg").src = car.img;
  document.getElementById("engineInfo").innerHTML = car.engine;

  grid.style.display = "none";
  viewer.style.display = "block";

  if (push) {
    history.pushState({ car: key }, "", `#${key}`);
  }
}

/* ================= BROWSER BACK / FORWARD ================= */

window.onpopstate = (e) => {
  if (e.state && e.state.car) {
    showCar(e.state.car, false);
  } else {
    showGrid();
  }
};

/* ================= EVENTS ================= */

searchInput.addEventListener("input", updateGrid);
sortSelect.addEventListener("change", updateGrid);

/* ================= INIT ================= */

updateGrid();

/* Load car directly from URL hash */
if (location.hash) {
  const key = location.hash.replace("#", "");
  if (cars[key]) {
    showCar(key, false);
  }
}
