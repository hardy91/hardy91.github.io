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
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._checkBounds = function () {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight - 65) {
                this.y = config.Screen.HEIGHT - this.halfHeight - 65;
                alert("plane  crash");
            }
            // check top boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Plane.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 100;
        };
        Plane.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Plane.prototype.Reset = function () { };
        Plane.prototype.Move = function () {
            //Mouse Controls  
            //  this.x  = objects.Game.stage.mouseX;
            console.log("move left : " + managers.Game.KeyboardManager.moveLeft);
            //Keyboard Controls
            if (managers.Game.KeyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (managers.Game.KeyboardManager.moveRight) {
                this.x += 5;
            }
        };
        return Plane;
    }(objects.GameObjectTemp));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map