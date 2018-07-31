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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // constructors
        function GameObject(imageString) {
            var _this = _super.call(this, managers.Game.TextureAtlas, imageString) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // private methods
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
        };
        // public methods
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        GameObject.prototype.Reset = function () {
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
    var GameObjectTemp = /** @class */ (function (_super) {
        __extends(GameObjectTemp, _super);
        // constructors
        function GameObjectTemp(imageString) {
            var _this = _super.call(this, managers.Game.AssetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // private methods
        GameObjectTemp.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        };
        // public methods
        GameObjectTemp.prototype.Start = function () {
        };
        GameObjectTemp.prototype.Update = function () {
        };
        GameObjectTemp.prototype.Reset = function () {
        };
        return GameObjectTemp;
    }(createjs.Bitmap));
    objects.GameObjectTemp = GameObjectTemp;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map