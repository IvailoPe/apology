async function drawHeart() {
    let x = 0;
    let y = 0

    const xMin = -Math.sqrt(2);
    const xMax = Math.sqrt(2);
    const yMin = -1;
    const yMax = 2;

    const canvas = document.getElementById("canvas");

    const scale = Math.min(canvas.width, canvas.height);
    const xOffset = canvas.width / 3.5;
    const yOffset = canvas.height / 2 - 100;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        x = -Math.sqrt(2) * Math.pow(Math.sin(t), 3)
        y = 2 * Math.cos(t) - Math.pow(Math.cos(t), 2) - Math.pow(Math.cos(t), 3)

        let canvasX = xOffset + ((x - xMin) / (xMax - xMin)) * scale / 2;
        let canvasY = yOffset - ((y - yMin) / (yMax - yMin)) * scale / 2;

        await new Promise((resolve) => setTimeout(resolve, 9));
        ctx.fillRect(canvasX, canvasY, 7, 7);
    }

    await drawWords()
}

async function drawWords() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    ctx.font = "50px Cursive";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("1.0", "red");
    gradient.addColorStop("0.3", "orange");
    gradient.addColorStop("1.0", "red");

    // Fill with gradient
    ctx.fillStyle = gradient;

    ctx.fillText("Извинявай💖", 335, 700);
}

drawHeart()
