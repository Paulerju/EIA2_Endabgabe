var IcecreamShop;
(function (IcecreamShop) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        subtract(vector) {
            return new Vector(this.x - vector.x, this.y - vector.y);
        }
        add(vector) {
            return new Vector(this.x + vector.x, this.y + vector.y);
        }
        magnitude() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        normalize() {
            const magnitude = this.magnitude();
            return new Vector(this.x / magnitude, this.y / magnitude);
        }
        scale(value) {
            return new Vector(this.x * value, this.y * value);
        }
    }
    IcecreamShop.Vector = Vector;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=vector.js.map