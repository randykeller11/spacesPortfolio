webpackHotUpdate_N_E(1,{

/***/ "./src/components/AvatarTyping/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/AvatarTyping/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var _Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/spacesPortfolio/src/components/AvatarTyping/index.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\nfunction Model(_ref) {\n  _s();\n\n  var props = Object(_Users_dub_ceo_Desktop_spacesPortfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, _ref);\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var _ref2 = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"])(\"/avatarTyping.glb\"),\n      nodes = _ref2.nodes,\n      materials = _ref2.materials,\n      animations = _ref2.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    console.log(actions);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"group\", _objectSpread(_objectSpread({\n    ref: group\n  }, props), {}, {\n    dispose: null,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"primitive\", {\n      object: nodes.Hips\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Body.geometry,\n      material: materials.Wolf3D_Body,\n      skeleton: nodes.Wolf3D_Body.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Bottom.geometry,\n      material: materials.Wolf3D_Outfit_Bottom,\n      skeleton: nodes.Wolf3D_Outfit_Bottom.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Footwear.geometry,\n      material: materials.Wolf3D_Outfit_Footwear,\n      skeleton: nodes.Wolf3D_Outfit_Footwear.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Top.geometry,\n      material: materials.Wolf3D_Outfit_Top,\n      skeleton: nodes.Wolf3D_Outfit_Top.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeLeft\",\n      geometry: nodes.EyeLeft.geometry,\n      material: nodes.EyeLeft.material,\n      skeleton: nodes.EyeLeft.skeleton,\n      morphTargetDictionary: nodes.EyeLeft.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeLeft.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeRight\",\n      geometry: nodes.EyeRight.geometry,\n      material: nodes.EyeRight.material,\n      skeleton: nodes.EyeRight.skeleton,\n      morphTargetDictionary: nodes.EyeRight.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeRight.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Head\",\n      geometry: nodes.Wolf3D_Head.geometry,\n      material: materials.Wolf3D_Skin,\n      skeleton: nodes.Wolf3D_Head.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Head.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Head.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Teeth\",\n      geometry: nodes.Wolf3D_Teeth.geometry,\n      material: materials.Wolf3D_Teeth,\n      skeleton: nodes.Wolf3D_Teeth.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Teeth.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Teeth.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"CcOwC/GrI/lgzhcrebx8FcbcXMw=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useAnimations\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_4__[\"useGLTF\"].preload(\"/avatarTyping.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXZhdGFyVHlwaW5nL2luZGV4LnRzeD8wN2UyIl0sIm5hbWVzIjpbIk1vZGVsIiwicHJvcHMiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJIaXBzIiwiV29sZjNEX0JvZHkiLCJnZW9tZXRyeSIsInNrZWxldG9uIiwiV29sZjNEX091dGZpdF9Cb3R0b20iLCJXb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyIiwiV29sZjNEX091dGZpdF9Ub3AiLCJFeWVMZWZ0IiwibWF0ZXJpYWwiLCJtb3JwaFRhcmdldERpY3Rpb25hcnkiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJFeWVSaWdodCIsIldvbGYzRF9IZWFkIiwiV29sZjNEX1NraW4iLCJXb2xmM0RfVGVldGgiLCJwcmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUE2QmUsU0FBU0EsS0FBVCxPQUE2RDtBQUFBOztBQUFBLE1BQXpDQyxLQUF5Qzs7QUFDMUUsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxFQUFwQjs7QUFEMEUsY0FFakNDLGlFQUFPLENBQzlDLG1CQUQ4QyxDQUYwQjtBQUFBLE1BRWxFQyxLQUZrRSxTQUVsRUEsS0FGa0U7QUFBQSxNQUUzREMsU0FGMkQsU0FFM0RBLFNBRjJEO0FBQUEsTUFFaERDLFVBRmdELFNBRWhEQSxVQUZnRDs7QUFBQSx1QkFLdERDLHVFQUFhLENBQUNELFVBQUQsRUFBYUwsS0FBYixDQUx5QztBQUFBLE1BS2xFTyxPQUxrRSxrQkFLbEVBLE9BTGtFOztBQU8xRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQU8sT0FBRyxFQUFFUDtBQUFaLEtBQXVCRCxLQUF2QjtBQUE4QixXQUFPLEVBQUUsSUFBdkM7QUFBQSw0QkFDRTtBQUFXLFlBQU0sRUFBRUksS0FBSyxDQUFDUTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUNFLGNBQVEsRUFBRVIsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxRQUQ5QjtBQUVFLGNBQVEsRUFBRVQsU0FBUyxDQUFDUSxXQUZ0QjtBQUdFLGNBQVEsRUFBRVQsS0FBSyxDQUFDUyxXQUFOLENBQWtCRTtBQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFPRTtBQUNFLGNBQVEsRUFBRVgsS0FBSyxDQUFDWSxvQkFBTixDQUEyQkYsUUFEdkM7QUFFRSxjQUFRLEVBQUVULFNBQVMsQ0FBQ1csb0JBRnRCO0FBR0UsY0FBUSxFQUFFWixLQUFLLENBQUNZLG9CQUFOLENBQTJCRDtBQUh2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFZRTtBQUNFLGNBQVEsRUFBRVgsS0FBSyxDQUFDYSxzQkFBTixDQUE2QkgsUUFEekM7QUFFRSxjQUFRLEVBQUVULFNBQVMsQ0FBQ1ksc0JBRnRCO0FBR0UsY0FBUSxFQUFFYixLQUFLLENBQUNhLHNCQUFOLENBQTZCRjtBQUh6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFpQkU7QUFDRSxjQUFRLEVBQUVYLEtBQUssQ0FBQ2MsaUJBQU4sQ0FBd0JKLFFBRHBDO0FBRUUsY0FBUSxFQUFFVCxTQUFTLENBQUNhLGlCQUZ0QjtBQUdFLGNBQVEsRUFBRWQsS0FBSyxDQUFDYyxpQkFBTixDQUF3Qkg7QUFIcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixlQXNCRTtBQUNFLFVBQUksRUFBQyxTQURQO0FBRUUsY0FBUSxFQUFFWCxLQUFLLENBQUNlLE9BQU4sQ0FBY0wsUUFGMUI7QUFHRSxjQUFRLEVBQUVWLEtBQUssQ0FBQ2UsT0FBTixDQUFjQyxRQUgxQjtBQUlFLGNBQVEsRUFBRWhCLEtBQUssQ0FBQ2UsT0FBTixDQUFjSixRQUoxQjtBQUtFLDJCQUFxQixFQUFFWCxLQUFLLENBQUNlLE9BQU4sQ0FBY0UscUJBTHZDO0FBTUUsMkJBQXFCLEVBQUVqQixLQUFLLENBQUNlLE9BQU4sQ0FBY0c7QUFOdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQThCRTtBQUNFLFVBQUksRUFBQyxVQURQO0FBRUUsY0FBUSxFQUFFbEIsS0FBSyxDQUFDbUIsUUFBTixDQUFlVCxRQUYzQjtBQUdFLGNBQVEsRUFBRVYsS0FBSyxDQUFDbUIsUUFBTixDQUFlSCxRQUgzQjtBQUlFLGNBQVEsRUFBRWhCLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZVIsUUFKM0I7QUFLRSwyQkFBcUIsRUFBRVgsS0FBSyxDQUFDbUIsUUFBTixDQUFlRixxQkFMeEM7QUFNRSwyQkFBcUIsRUFBRWpCLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZUQ7QUFOeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCRixlQXNDRTtBQUNFLFVBQUksRUFBQyxhQURQO0FBRUUsY0FBUSxFQUFFbEIsS0FBSyxDQUFDb0IsV0FBTixDQUFrQlYsUUFGOUI7QUFHRSxjQUFRLEVBQUVULFNBQVMsQ0FBQ29CLFdBSHRCO0FBSUUsY0FBUSxFQUFFckIsS0FBSyxDQUFDb0IsV0FBTixDQUFrQlQsUUFKOUI7QUFLRSwyQkFBcUIsRUFBRVgsS0FBSyxDQUFDb0IsV0FBTixDQUFrQkgscUJBTDNDO0FBTUUsMkJBQXFCLEVBQUVqQixLQUFLLENBQUNvQixXQUFOLENBQWtCRjtBQU4zQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGLGVBOENFO0FBQ0UsVUFBSSxFQUFDLGNBRFA7QUFFRSxjQUFRLEVBQUVsQixLQUFLLENBQUNzQixZQUFOLENBQW1CWixRQUYvQjtBQUdFLGNBQVEsRUFBRVQsU0FBUyxDQUFDcUIsWUFIdEI7QUFJRSxjQUFRLEVBQUV0QixLQUFLLENBQUNzQixZQUFOLENBQW1CWCxRQUovQjtBQUtFLDJCQUFxQixFQUFFWCxLQUFLLENBQUNzQixZQUFOLENBQW1CTCxxQkFMNUM7QUFNRSwyQkFBcUIsRUFBRWpCLEtBQUssQ0FBQ3NCLFlBQU4sQ0FBbUJKO0FBTjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7O0dBcEV1QnZCLEs7VUFFbUJJLHlELEVBR3JCSSwrRDs7O0tBTEVSLEs7QUFzRXhCSSx5REFBTyxDQUFDd0IsT0FBUixDQUFnQixtQkFBaEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdmF0YXJUeXBpbmcvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkF1dG8tZ2VuZXJhdGVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vcG1uZHJzL2dsdGZqc3hcbiovXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHTFRGLCB1c2VBbmltYXRpb25zIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgeyBHTFRGIH0gZnJvbSBcInRocmVlLXN0ZGxpYlwiO1xuXG50eXBlIEdMVEZSZXN1bHQgPSBHTFRGICYge1xuICBub2Rlczoge1xuICAgIFdvbGYzRF9Cb2R5OiBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICBXb2xmM0RfT3V0Zml0X0JvdHRvbTogVEhSRUUuU2tpbm5lZE1lc2g7XG4gICAgV29sZjNEX091dGZpdF9Gb290d2VhcjogVEhSRUUuU2tpbm5lZE1lc2g7XG4gICAgV29sZjNEX091dGZpdF9Ub3A6IFRIUkVFLlNraW5uZWRNZXNoO1xuICAgIEV5ZUxlZnQ6IFRIUkVFLlNraW5uZWRNZXNoO1xuICAgIEV5ZVJpZ2h0OiBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICBXb2xmM0RfSGVhZDogVEhSRUUuU2tpbm5lZE1lc2g7XG4gICAgV29sZjNEX1RlZXRoOiBUSFJFRS5Ta2lubmVkTWVzaDtcbiAgICBIaXBzOiBUSFJFRS5Cb25lO1xuICB9O1xuICBtYXRlcmlhbHM6IHtcbiAgICBXb2xmM0RfQm9keTogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgV29sZjNEX091dGZpdF9Cb3R0b206IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICAgIFdvbGYzRF9PdXRmaXRfRm9vdHdlYXI6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICAgIFdvbGYzRF9PdXRmaXRfVG9wOiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICBXb2xmM0RfRXllOiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICBXb2xmM0RfU2tpbjogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgV29sZjNEX1RlZXRoOiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgfTtcbn07XG5cbnR5cGUgQWN0aW9uTmFtZSA9IFwiQXJtYXR1cmV8bWl4YW1vLmNvbXxMYXllcjBcIjtcbnR5cGUgR0xURkFjdGlvbnMgPSBSZWNvcmQ8QWN0aW9uTmFtZSwgVEhSRUUuQW5pbWF0aW9uQWN0aW9uPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWwoeyAuLi5wcm9wcyB9OiBKU1guSW50cmluc2ljRWxlbWVudHNbXCJncm91cFwiXSkge1xuICBjb25zdCBncm91cCA9IHVzZVJlZjxUSFJFRS5Hcm91cD4oKTtcbiAgY29uc3QgeyBub2RlcywgbWF0ZXJpYWxzLCBhbmltYXRpb25zIH0gPSB1c2VHTFRGKFxuICAgIFwiL2F2YXRhclR5cGluZy5nbGJcIlxuICApIGFzIEdMVEZSZXN1bHQ7XG4gIGNvbnN0IHsgYWN0aW9ucyB9ID0gdXNlQW5pbWF0aW9ucyhhbmltYXRpb25zLCBncm91cCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25zKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9IHsuLi5wcm9wc30gZGlzcG9zZT17bnVsbH0+XG4gICAgICA8cHJpbWl0aXZlIG9iamVjdD17bm9kZXMuSGlwc30gLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX0JvZHkuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX0JvZHl9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfQm9keS5za2VsZXRvbn1cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9PdXRmaXRfQm90dG9tLmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9PdXRmaXRfQm90dG9tfVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX091dGZpdF9Cb3R0b20uc2tlbGV0b259XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyLmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9PdXRmaXRfRm9vdHdlYXJ9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyLnNrZWxldG9ufVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX091dGZpdF9Ub3AuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX091dGZpdF9Ub3B9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfT3V0Zml0X1RvcC5za2VsZXRvbn1cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgbmFtZT1cIkV5ZUxlZnRcIlxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuRXllTGVmdC5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e25vZGVzLkV5ZUxlZnQubWF0ZXJpYWx9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5FeWVMZWZ0LnNrZWxldG9ufVxuICAgICAgICBtb3JwaFRhcmdldERpY3Rpb25hcnk9e25vZGVzLkV5ZUxlZnQubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e25vZGVzLkV5ZUxlZnQubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBuYW1lPVwiRXllUmlnaHRcIlxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuRXllUmlnaHQuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXtub2Rlcy5FeWVSaWdodC5tYXRlcmlhbH1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLkV5ZVJpZ2h0LnNrZWxldG9ufVxuICAgICAgICBtb3JwaFRhcmdldERpY3Rpb25hcnk9e25vZGVzLkV5ZVJpZ2h0Lm1vcnBoVGFyZ2V0RGljdGlvbmFyeX1cbiAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtub2Rlcy5FeWVSaWdodC5tb3JwaFRhcmdldEluZmx1ZW5jZXN9XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIG5hbWU9XCJXb2xmM0RfSGVhZFwiXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfSGVhZC5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfU2tpbn1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9IZWFkLnNrZWxldG9ufVxuICAgICAgICBtb3JwaFRhcmdldERpY3Rpb25hcnk9e25vZGVzLldvbGYzRF9IZWFkLm1vcnBoVGFyZ2V0RGljdGlvbmFyeX1cbiAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtub2Rlcy5Xb2xmM0RfSGVhZC5tb3JwaFRhcmdldEluZmx1ZW5jZXN9XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIG5hbWU9XCJXb2xmM0RfVGVldGhcIlxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX1RlZXRoLmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9UZWV0aH1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9UZWV0aC5za2VsZXRvbn1cbiAgICAgICAgbW9ycGhUYXJnZXREaWN0aW9uYXJ5PXtub2Rlcy5Xb2xmM0RfVGVldGgubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e25vZGVzLldvbGYzRF9UZWV0aC5tb3JwaFRhcmdldEluZmx1ZW5jZXN9XG4gICAgICAvPlxuICAgIDwvZ3JvdXA+XG4gICk7XG59XG5cbnVzZUdMVEYucHJlbG9hZChcIi9hdmF0YXJUeXBpbmcuZ2xiXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AvatarTyping/index.tsx\n");

/***/ })

})