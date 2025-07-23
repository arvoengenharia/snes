document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const romInput = document.getElementById("romInput");
  const emulatorFrame = document.getElementById("emulatorFrame");

  playButton.addEventListener("click", () => {
    let romUrl = romInput.value.trim();

    if (!romUrl) {
      alert("Cole o link da ROM.");
      return;
    }

    // Se colar um link completo do próprio GitHub Pages, simplifica
    const localBase = "https://arvoengenharia.github.io/snes/";
    if (romUrl.startsWith(localBase)) {
      romUrl = romUrl.replace(localBase, "");
    }

    emulatorFrame.style.display = "block";
    emulatorFrame.src = `emulatorjs/?core=snes&rom=${encodeURIComponent(romUrl)}`;
  });
});
