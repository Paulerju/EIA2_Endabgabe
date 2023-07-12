var IcecreamShop;
(function (IcecreamShop) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    IcecreamShop.Vector = Vector;
})(IcecreamShop || (IcecreamShop = {}));
//# sourceMappingURL=vector.js.map