var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        /**
         * Creates an instance of Ocean.
         * @memberof Ocean
         */
        function Ocean() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("parallax-bg")) || this;
            _this.scaleX = .35;
            _this.scaleY = .26;
            _this.Start();
            return _this;
        }
        // private methods
        Ocean.prototype._checkBounds = function () {
            // check top boundary
            if (Math.abs(this.x) >= this.getBounds().width * this.scaleX - 1410) {
                this.Reset();
            }
        };
        // public methods
        Ocean.prototype.Start = function () {
            this._horizontalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        Ocean.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Ocean.prototype.Reset = function () {
            this.x = -70;
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map