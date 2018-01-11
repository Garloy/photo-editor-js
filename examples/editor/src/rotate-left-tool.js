import { Tool } from 'photo-editor';

class RotateLeft extends Tool {
  onAfterEnable() {
    const ctx = this.el.getContext('2d');

    const {
      width,
      height,
    } = this.el;

    const otherCanvas = document.createElement('canvas');
    otherCanvas.width = height;
    otherCanvas.height = width;

    const otherCtx = otherCanvas.getContext('2d');

    otherCtx.clearRect(0, 0, width, height);
    otherCtx.translate(height / 2, width / 2);
    otherCtx.rotate(-Math.PI / 2);
    otherCtx.translate(-width / 2, -height / 2);
    otherCtx.drawImage(this.el, 0, 0);

    canvas.width = height;
    canvas.height = width;

    ctx.drawImage(otherCanvas, 0, 0);

    this.pushState(this.el.toDataURL());

    this.disable();
  }
}

export default RotateLeft;