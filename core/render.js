export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderGrid(ctx, canvas);
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderGrid(ctx, canvas) {
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    const cellSize = 32;
    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 20; x++) {
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}
