function drawChar(ctx, char, x, y, size) {
  ctx.font = `${size * 0.7}px KaiTi`;
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(char, x + size / 2, y + size / 2);
}