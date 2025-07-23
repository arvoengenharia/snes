const romFolder = "/roms/";
const romExtensions = [".smc", ".sfc"];

async function fetchRomList() {
  try {
    const res = await fetch(romFolder);
    const text = await res.text();
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, 'text/html');
    const links = htmlDoc.querySelectorAll('a');
    const romList = document.getElementById('romList');

    links.forEach(link => {
      const file = link.getAttribute('href');
      if (romExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        const li = document.createElement('li');
        li.textContent = file;
        li.onclick = () => loadRom(romFolder + file);
        romList.appendChild(li);
      }
    });
  } catch (err) {
    console.error("Erro ao listar ROMs:", err);
  }
}

function loadRom(romUrl) {
  const emulatorFrame = document.getElementById('emulatorFrame');
  emulatorFrame.style.display = 'block';
  emulatorFrame.src = `/emulatorjs/?core=snes&rom=${encodeURIComponent(romUrl)}`;
}

fetchRomList();
