webpackHotUpdate_N_E(1,{

/***/ "./src/components/AvatarTyping.js":
/*!****************************************!*\
  !*** ./src/components/AvatarTyping.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/spacesPortfolio/src/components/AvatarTyping.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/avatarTyping.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(actions[\"Armature|mixamo.com|Layer0\"].play());\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"primitive\", {\n      object: nodes.Hips\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Body.geometry,\n      material: materials.Wolf3D_Body,\n      skeleton: nodes.Wolf3D_Body.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Bottom.geometry,\n      material: materials.Wolf3D_Outfit_Bottom,\n      skeleton: nodes.Wolf3D_Outfit_Bottom.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Footwear.geometry,\n      material: materials.Wolf3D_Outfit_Footwear,\n      skeleton: nodes.Wolf3D_Outfit_Footwear.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Top.geometry,\n      material: materials.Wolf3D_Outfit_Top,\n      skeleton: nodes.Wolf3D_Outfit_Top.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeLeft\",\n      geometry: nodes.EyeLeft.geometry,\n      material: nodes.EyeLeft.material,\n      skeleton: nodes.EyeLeft.skeleton,\n      morphTargetDictionary: nodes.EyeLeft.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeLeft.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeRight\",\n      geometry: nodes.EyeRight.geometry,\n      material: nodes.EyeRight.material,\n      skeleton: nodes.EyeRight.skeleton,\n      morphTargetDictionary: nodes.EyeRight.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeRight.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Head\",\n      geometry: nodes.Wolf3D_Head.geometry,\n      material: materials.Wolf3D_Skin,\n      skeleton: nodes.Wolf3D_Head.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Head.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Head.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Teeth\",\n      geometry: nodes.Wolf3D_Teeth.geometry,\n      material: materials.Wolf3D_Teeth,\n      skeleton: nodes.Wolf3D_Teeth.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Teeth.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Teeth.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"KxDxGPal5drP5ChuU0de21QKYCw=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/avatarTyping.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXZhdGFyVHlwaW5nLmpzP2VkNmIiXSwibmFtZXMiOlsiTW9kZWwiLCJwcm9wcyIsImdyb3VwIiwidXNlUmVmIiwidXNlR0xURiIsIm5vZGVzIiwibWF0ZXJpYWxzIiwiYW5pbWF0aW9ucyIsInVzZUFuaW1hdGlvbnMiLCJhY3Rpb25zIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJIaXBzIiwiV29sZjNEX0JvZHkiLCJnZW9tZXRyeSIsInNrZWxldG9uIiwiV29sZjNEX091dGZpdF9Cb3R0b20iLCJXb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyIiwiV29sZjNEX091dGZpdF9Ub3AiLCJFeWVMZWZ0IiwibWF0ZXJpYWwiLCJtb3JwaFRhcmdldERpY3Rpb25hcnkiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJFeWVSaWdodCIsIldvbGYzRF9IZWFkIiwiV29sZjNEX1NraW4iLCJXb2xmM0RfVGVldGgiLCJwcmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUzs7QUFDMUMsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxFQUFwQjs7QUFEMEMsaUJBRURDLGlFQUFPLENBQUMsbUJBQUQsQ0FGTjtBQUFBLE1BRWxDQyxLQUZrQyxZQUVsQ0EsS0FGa0M7QUFBQSxNQUUzQkMsU0FGMkIsWUFFM0JBLFNBRjJCO0FBQUEsTUFFaEJDLFVBRmdCLFlBRWhCQSxVQUZnQjs7QUFBQSx1QkFHdEJDLHVFQUFhLENBQUNELFVBQUQsRUFBYUwsS0FBYixDQUhTO0FBQUEsTUFHbENPLE9BSGtDLGtCQUdsQ0EsT0FIa0M7O0FBSzFDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQU8sQ0FBQyw0QkFBRCxDQUFQLENBQXNDSSxJQUF0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QXFCLEVBQUVaLEtBQUssQ0FBQ3VCLFlBQU4sQ0FBbUJMLHFCQUw1QztBQU1FLDJCQUFxQixFQUFFbEIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQko7QUFONUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlERDs7R0FqRXVCeEIsSztVQUVtQkkseUQsRUFDckJJLCtEOzs7S0FIRVIsSztBQW1FeEJJLHlEQUFPLENBQUN5QixPQUFSLENBQWdCLG1CQUFoQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0F2YXRhclR5cGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5BdXRvLWdlbmVyYXRlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy9nbHRmanN4XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUdMVEYsIHVzZUFuaW1hdGlvbnMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWwoeyAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscywgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihcIi9hdmF0YXJUeXBpbmcuZ2xiXCIpO1xuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWN0aW9uc1tcIkFybWF0dXJlfG1peGFtby5jb218TGF5ZXIwXCJdLnBsYXkoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgcmVmPXtncm91cH0gey4uLnByb3BzfSBkaXNwb3NlPXtudWxsfT5cbiAgICAgIDxwcmltaXRpdmUgb2JqZWN0PXtub2Rlcy5IaXBzfSAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfQm9keS5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfQm9keX1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9Cb2R5LnNrZWxldG9ufVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX091dGZpdF9Cb3R0b20uZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX091dGZpdF9Cb3R0b219XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfT3V0Zml0X0JvdHRvbS5za2VsZXRvbn1cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9PdXRmaXRfRm9vdHdlYXIuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX091dGZpdF9Gb290d2Vhcn1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9PdXRmaXRfRm9vdHdlYXIuc2tlbGV0b259XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfT3V0Zml0X1RvcC5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfT3V0Zml0X1RvcH1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9PdXRmaXRfVG9wLnNrZWxldG9ufVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBuYW1lPVwiRXllTGVmdFwiXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5FeWVMZWZ0Lmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bm9kZXMuRXllTGVmdC5tYXRlcmlhbH1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLkV5ZUxlZnQuc2tlbGV0b259XG4gICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17bm9kZXMuRXllTGVmdC5tb3JwaFRhcmdldERpY3Rpb25hcnl9XG4gICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17bm9kZXMuRXllTGVmdC5tb3JwaFRhcmdldEluZmx1ZW5jZXN9XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIG5hbWU9XCJFeWVSaWdodFwiXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5FeWVSaWdodC5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e25vZGVzLkV5ZVJpZ2h0Lm1hdGVyaWFsfVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuRXllUmlnaHQuc2tlbGV0b259XG4gICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17bm9kZXMuRXllUmlnaHQubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e25vZGVzLkV5ZVJpZ2h0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlc31cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgbmFtZT1cIldvbGYzRF9IZWFkXCJcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9IZWFkLmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9Ta2lufVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX0hlYWQuc2tlbGV0b259XG4gICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17bm9kZXMuV29sZjNEX0hlYWQubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e25vZGVzLldvbGYzRF9IZWFkLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc31cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgbmFtZT1cIldvbGYzRF9UZWV0aFwiXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfVGVldGguZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX1RlZXRofVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX1RlZXRoLnNrZWxldG9ufVxuICAgICAgICBtb3JwaFRhcmdldERpY3Rpb25hcnk9e25vZGVzLldvbGYzRF9UZWV0aC5tb3JwaFRhcmdldERpY3Rpb25hcnl9XG4gICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17bm9kZXMuV29sZjNEX1RlZXRoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc31cbiAgICAgIC8+XG4gICAgPC9ncm91cD5cbiAgKTtcbn1cblxudXNlR0xURi5wcmVsb2FkKFwiL2F2YXRhclR5cGluZy5nbGJcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AvatarTyping.js\n");

/***/ })

})