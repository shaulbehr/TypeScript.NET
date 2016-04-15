define(["require","exports","../Time/TimeSpan"],function(e,t,n){"use strict";function r(){return(new Date).getTime()}var i=function(){function e(){this.reset()}return e.getTimestampMilliseconds=function(){return r()},Object.defineProperty(e.prototype,"isRunning",{get:function(){return this._isRunning},enumerable:!0,configurable:!0}),e.startNew=function(){var t=new e;return t.start(),t},e.measure=function(e){var t=r();return e(),new n["default"](r()-t)},e.prototype.record=function(t){var n=e.measure(t);return this._elapsed+=n.milliseconds,n},e.prototype.start=function(){var e=this;e._isRunning||(e._startTimeStamp=r(),e._isRunning=!0)},e.prototype.stop=function(){var e=this;e._isRunning&&(e._elapsed+=e.currentLapMilliseconds,e._isRunning=!1)},e.prototype.reset=function(){var e=this;e._elapsed=0,e._isRunning=!1,e._startTimeStamp=NaN},e.prototype.lap=function(){var e=this;if(e._isRunning){var t=r(),i=e._startTimeStamp,u=t-i;return e._startTimeStamp=t,e._elapsed+=u,new n["default"](u)}return n["default"].zero},Object.defineProperty(e.prototype,"currentLapMilliseconds",{get:function(){return this._isRunning?r()-this._startTimeStamp:0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentLap",{get:function(){return this._isRunning?new n["default"](this.currentLapMilliseconds):n["default"].zero},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"elapsedMilliseconds",{get:function(){var e=this,t=e._elapsed;return e._isRunning&&(t+=e.currentLapMilliseconds),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"elapsed",{get:function(){return new n["default"](this.elapsedMilliseconds)},enumerable:!0,configurable:!0}),e}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});
//# sourceMappingURL=Stopwatch.js.map
