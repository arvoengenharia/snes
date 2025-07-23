const romFolder = "roms/";
const romListEl = document.getElementById("romList");

// Função que carrega a lista de ROMs a partir do roms.json
async function fetchRomList() {
  try {
    const res = await fetch("roms.json");
    const roms = await res.json();

    roms.forEach(rom => {
      const li = document.createElement("li");
      li.textContent = rom;
      li.style.cursor = "pointer";
      li.onclick = () => loadRom(romFolder + rom);
      romListEl.appendChild(li);
    });

  } catch (err) {
    console.error("Erro ao listar ROMs:", err);
  }
}

// Função que carrega a ROM no iframe do EmulatorJS
function loadRom(romUrl) {
  const emulatorFrame = document.getElementById("emulatorFrame");
  emulatorFrame.style.display = "block";
  emulatorFrame.src = `emulatorjs/?core=snes&rom=${encodeURIComponent(romUrl)}`;
}

// Executa ao carregar a página
fetchRomList();
