document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const romInput = document.getElementById("romInput");
  const emulatorFrame = document.getElementById("emulatorFrame");

  playButton.addEventListener("click", () => {
    const romUrl = romInput.value.trim();

    if (!romUrl) {
      alert("Por favor, cole o link da ROM.");
      return;
    }

    emulatorFrame.style.display = "block";
    emulatorFrame.src = `emulatorjs/?core=snes&rom=${encodeURIComponent(romUrl)}`;
  });
});
