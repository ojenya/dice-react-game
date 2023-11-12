export default class Vector {
  x = 0;
  y = 0;
  z = 0;
  w = 1;

  constructor(x: number, y: number, z: number, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  getCoords() {
    return [this.x, this.y, this.z, this.w];
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
}
