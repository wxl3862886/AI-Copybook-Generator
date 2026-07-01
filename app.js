function generate() {
  const text = document.getElementById("inputText").value;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const size = 80;
  let x = 20;
  let y = 20;

  for (let char of text) {

    drawGrid(ctx, x, y, size);
    drawChar(ctx, char, x, y, size);

    x += size + 10;

    if (x + size > canvas.width) {
      x = 20;
      y += size + 10;
    }
  }
}