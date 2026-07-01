function drawGrid(ctx, x, y, size) {
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 1;

  // 外框
  ctx.strokeRect(x, y, size, size);

  // 十字
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.moveTo(x, y + size / 2);
  ctx.lineTo(x + size, y + size / 2);
  ctx.stroke();
}