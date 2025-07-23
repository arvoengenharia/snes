const romFolder = "emulatorjs/roms/";
const romListEl = document.getElementById("romList");

async function fetchRomList() {
  try {
    const res = await fetch("roms.json");
    const roms = await res.json();

    roms.forEach(rom => {
      const li = document.createElement("li");
      li.textContent = rom;
      li.onclick = () => loadRom(romFolder + rom);
      romListEl.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao carregar roms.json:", err);
  }
}

function loadRom(romFileName) {
  const emulatorFrame = document.getElementById("emulatorFrame");
  emulatorFrame.style.display = "block";
  emulatorFrame.src = `emulatorjs/?core=snes&rom=emulatorjs/roms/${encodeURIComponent(romFileName)}`;
}

fetchRomList();
