!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var n=t(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","./IndexEnumerator","../../Types","../../../extends"],function(e,t){"use strict";/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var n=e("./IndexEnumerator"),r=e("../../Types"),o=e("../../../extends"),u=o["default"],i=function(e){function t(t,n,o){return void 0===n&&(n=0),void 0===o&&(o=1),e.call(this,function(){var e=r.Type.isFunction(t)?t():t;return{source:e,pointer:n,length:e?e.length:0,step:o}})||this}return u(t,e),t}(n.IndexEnumerator);t.ArrayEnumerator=i,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});
//# sourceMappingURL=ArrayEnumerator.js.map