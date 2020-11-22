var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var CustomLayoutDemo = (function (_super) {
    __extends(CustomLayoutDemo, _super);
    function CustomLayoutDemo() {
        var _this = _super.call(this) || this;
        _this.degree = 0; // 度数
        _this.hypotenuse = 100; // 斜边的长度
        return _this;
    }
    CustomLayoutDemo.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    CustomLayoutDemo.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //egret.startTick(this.onTicker, this);
        this.myTimer = new egret.Timer(1);
        this.myTimer.start();
        this.myTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        setTimeout(function () { console.log("555"); }, 1000);
    };
    CustomLayoutDemo.prototype.$onAddToStage = function (stage, nest) {
        _super.prototype.$onAddToStage.call(this, stage, nest);
        this.once(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    };
    CustomLayoutDemo.prototype.onRemoveFromStage = function () {
    };
    CustomLayoutDemo.prototype.onTicker = function (timeStamp) {
        this.degree = (this.degree + 3) % 360;
        this.magnifier.x = -this.hypotenuse * (Math.sin(this.degree * Math.PI / 180)) + 320;
        this.magnifier.y = -this.hypotenuse * (Math.cos(this.degree * Math.PI / 180)) + 568;
        return false;
    };
    CustomLayoutDemo.prototype.onTimer = function (evt) {
        this.degree = (this.degree + 2) % 360;
        this.magnifier.x = -this.hypotenuse * (Math.sin(this.degree * Math.PI / 180)) + 320;
        this.magnifier.y = -this.hypotenuse * (Math.cos(this.degree * Math.PI / 180)) + 568;
    };
    return CustomLayoutDemo;
}(eui.Component));
__reflect(CustomLayoutDemo.prototype, "CustomLayoutDemo", ["eui.UIComponent", "egret.DisplayObject"]);
