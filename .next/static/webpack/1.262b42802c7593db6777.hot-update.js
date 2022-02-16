webpackHotUpdate_N_E(1,{

/***/ "./src/components/AvatarTyping.js":
/*!****************************************!*\
  !*** ./src/components/AvatarTyping.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\nvar _jsxFileName = \"/Users/dub_ceo/Desktop/spacesPortfolio/src/components/AvatarTyping.js\",\n    _s = $RefreshSig$();\n\n/*\nAuto-generated by: https://github.com/pmndrs/gltfjsx\n*/\n\n\nfunction Model() {\n  _s();\n\n  var group = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useGLTF = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__[\"useGLTF\"])(\"/avatarTyping.glb\"),\n      nodes = _useGLTF.nodes,\n      materials = _useGLTF.materials,\n      animations = _useGLTF.animations;\n\n  var _useAnimations = Object(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__[\"useAnimations\"])(animations, group),\n      actions = _useAnimations.actions;\n\n  var materialKeys = Object.keys(materials);\n  materialKeys.map(function (materialKey) {\n    return materials[materialKey].skinning = true;\n  }); //rotation={[0, 0.6, 0]}\n  //position={[13, -1.1, -13]}\n  //scale={[1.5, 1.5, 1.5]}\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    actions[\"Armature|mixamo.com|Layer0\"].play();\n    group.current.rotation.y = 0.6;\n    group.current.position.x = 13;\n    group.current.position.y = -1.1;\n    group.current.position.z = -13;\n    group.current.scale.x = 1.5;\n    group.current.scale.y = 1.5;\n    group.current.scale.z = 1.5;\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"group\", {\n    ref: group,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"primitive\", {\n      object: nodes.Hips\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Body.geometry,\n      material: materials.Wolf3D_Body,\n      skeleton: nodes.Wolf3D_Body.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Bottom.geometry,\n      material: materials.Wolf3D_Outfit_Bottom,\n      skeleton: nodes.Wolf3D_Outfit_Bottom.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Footwear.geometry,\n      material: materials.Wolf3D_Outfit_Footwear,\n      skeleton: nodes.Wolf3D_Outfit_Footwear.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      geometry: nodes.Wolf3D_Outfit_Top.geometry,\n      material: materials.Wolf3D_Outfit_Top,\n      skeleton: nodes.Wolf3D_Outfit_Top.skeleton\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeLeft\",\n      geometry: nodes.EyeLeft.geometry,\n      material: nodes.EyeLeft.material,\n      skeleton: nodes.EyeLeft.skeleton,\n      morphTargetDictionary: nodes.EyeLeft.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeLeft.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"EyeRight\",\n      geometry: nodes.EyeRight.geometry,\n      material: nodes.EyeRight.material,\n      skeleton: nodes.EyeRight.skeleton,\n      morphTargetDictionary: nodes.EyeRight.morphTargetDictionary,\n      morphTargetInfluences: nodes.EyeRight.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Head\",\n      geometry: nodes.Wolf3D_Head.geometry,\n      material: materials.Wolf3D_Skin,\n      skeleton: nodes.Wolf3D_Head.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Head.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Head.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"skinnedMesh\", {\n      name: \"Wolf3D_Teeth\",\n      geometry: nodes.Wolf3D_Teeth.geometry,\n      material: materials.Wolf3D_Teeth,\n      skeleton: nodes.Wolf3D_Teeth.skeleton,\n      morphTargetDictionary: nodes.Wolf3D_Teeth.morphTargetDictionary,\n      morphTargetInfluences: nodes.Wolf3D_Teeth.morphTargetInfluences\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Model, \"KxDxGPal5drP5ChuU0de21QKYCw=\", false, function () {\n  return [_react_three_drei__WEBPACK_IMPORTED_MODULE_2__[\"useGLTF\"], _react_three_drei__WEBPACK_IMPORTED_MODULE_2__[\"useAnimations\"]];\n});\n\n_c = Model;\n_react_three_drei__WEBPACK_IMPORTED_MODULE_2__[\"useGLTF\"].preload(\"/avatarTyping.glb\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Model\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXZhdGFyVHlwaW5nLmpzP2VkNmIiXSwibmFtZXMiOlsiTW9kZWwiLCJncm91cCIsInVzZVJlZiIsInVzZUdMVEYiLCJub2RlcyIsIm1hdGVyaWFscyIsImFuaW1hdGlvbnMiLCJ1c2VBbmltYXRpb25zIiwiYWN0aW9ucyIsIm1hdGVyaWFsS2V5cyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJtYXRlcmlhbEtleSIsInNraW5uaW5nIiwidXNlRWZmZWN0IiwicGxheSIsImN1cnJlbnQiLCJyb3RhdGlvbiIsInkiLCJwb3NpdGlvbiIsIngiLCJ6Iiwic2NhbGUiLCJIaXBzIiwiV29sZjNEX0JvZHkiLCJnZW9tZXRyeSIsInNrZWxldG9uIiwiV29sZjNEX091dGZpdF9Cb3R0b20iLCJXb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyIiwiV29sZjNEX091dGZpdF9Ub3AiLCJFeWVMZWZ0IiwibWF0ZXJpYWwiLCJtb3JwaFRhcmdldERpY3Rpb25hcnkiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJFeWVSaWdodCIsIldvbGYzRF9IZWFkIiwiV29sZjNEX1NraW4iLCJXb2xmM0RfVGVldGgiLCJwcmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUE4QjtBQUFBOztBQUMzQyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQUQyQyxpQkFFRkMsaUVBQU8sQ0FBQyxtQkFBRCxDQUZMO0FBQUEsTUFFbkNDLEtBRm1DLFlBRW5DQSxLQUZtQztBQUFBLE1BRTVCQyxTQUY0QixZQUU1QkEsU0FGNEI7QUFBQSxNQUVqQkMsVUFGaUIsWUFFakJBLFVBRmlCOztBQUFBLHVCQUd2QkMsdUVBQWEsQ0FBQ0QsVUFBRCxFQUFhTCxLQUFiLENBSFU7QUFBQSxNQUduQ08sT0FIbUMsa0JBR25DQSxPQUhtQzs7QUFLM0MsTUFBTUMsWUFBWSxH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L2NvbXBvbmVudHMvQXZhdGFyVHlwaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkF1dG8tZ2VuZXJhdGVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vcG1uZHJzL2dsdGZqc3hcbiovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlR0xURiwgdXNlQW5pbWF0aW9ucyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCguLi5Hcm91cFByb3BzKSB7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscywgYW5pbWF0aW9ucyB9ID0gdXNlR0xURihcIi9hdmF0YXJUeXBpbmcuZ2xiXCIpO1xuICBjb25zdCB7IGFjdGlvbnMgfSA9IHVzZUFuaW1hdGlvbnMoYW5pbWF0aW9ucywgZ3JvdXApO1xuXG4gIGNvbnN0IG1hdGVyaWFsS2V5cyA9IE9iamVjdC5rZXlzKG1hdGVyaWFscyk7XG4gIG1hdGVyaWFsS2V5cy5tYXAoKG1hdGVyaWFsS2V5KSA9PiAobWF0ZXJpYWxzW21hdGVyaWFsS2V5XS5za2lubmluZyA9IHRydWUpKTtcbiAgLy9yb3RhdGlvbj17WzAsIDAuNiwgMF19XG4gIC8vcG9zaXRpb249e1sxMywgLTEuMSwgLTEzXX1cbiAgLy9zY2FsZT17WzEuNSwgMS41LCAxLjVdfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGlvbnNbXCJBcm1hdHVyZXxtaXhhbW8uY29tfExheWVyMFwiXS5wbGF5KCk7XG4gICAgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ID0gMC42O1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueCA9IDEzO1xuICAgIGdyb3VwLmN1cnJlbnQucG9zaXRpb24ueSA9IC0xLjE7XG4gICAgZ3JvdXAuY3VycmVudC5wb3NpdGlvbi56ID0gLTEzO1xuICAgIGdyb3VwLmN1cnJlbnQuc2NhbGUueCA9IDEuNTtcbiAgICBncm91cC5jdXJyZW50LnNjYWxlLnkgPSAxLjU7XG4gICAgZ3JvdXAuY3VycmVudC5zY2FsZS56ID0gMS41O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9PlxuICAgICAgPHByaW1pdGl2ZSBvYmplY3Q9e25vZGVzLkhpcHN9IC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9Cb2R5Lmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9Cb2R5fVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX0JvZHkuc2tlbGV0b259XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIGdlb21ldHJ5PXtub2Rlcy5Xb2xmM0RfT3V0Zml0X0JvdHRvbS5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfT3V0Zml0X0JvdHRvbX1cbiAgICAgICAgc2tlbGV0b249e25vZGVzLldvbGYzRF9PdXRmaXRfQm90dG9tLnNrZWxldG9ufVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX091dGZpdF9Gb290d2Vhci5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfT3V0Zml0X0Zvb3R3ZWFyfVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX091dGZpdF9Gb290d2Vhci5za2VsZXRvbn1cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9PdXRmaXRfVG9wLmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLldvbGYzRF9PdXRmaXRfVG9wfVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuV29sZjNEX091dGZpdF9Ub3Auc2tlbGV0b259XG4gICAgICAvPlxuICAgICAgPHNraW5uZWRNZXNoXG4gICAgICAgIG5hbWU9XCJFeWVMZWZ0XCJcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkV5ZUxlZnQuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXtub2Rlcy5FeWVMZWZ0Lm1hdGVyaWFsfVxuICAgICAgICBza2VsZXRvbj17bm9kZXMuRXllTGVmdC5za2VsZXRvbn1cbiAgICAgICAgbW9ycGhUYXJnZXREaWN0aW9uYXJ5PXtub2Rlcy5FeWVMZWZ0Lm1vcnBoVGFyZ2V0RGljdGlvbmFyeX1cbiAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtub2Rlcy5FeWVMZWZ0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlc31cbiAgICAgIC8+XG4gICAgICA8c2tpbm5lZE1lc2hcbiAgICAgICAgbmFtZT1cIkV5ZVJpZ2h0XCJcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkV5ZVJpZ2h0Lmdlb21ldHJ5fVxuICAgICAgICBtYXRlcmlhbD17bm9kZXMuRXllUmlnaHQubWF0ZXJpYWx9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5FeWVSaWdodC5za2VsZXRvbn1cbiAgICAgICAgbW9ycGhUYXJnZXREaWN0aW9uYXJ5PXtub2Rlcy5FeWVSaWdodC5tb3JwaFRhcmdldERpY3Rpb25hcnl9XG4gICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17bm9kZXMuRXllUmlnaHQubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBuYW1lPVwiV29sZjNEX0hlYWRcIlxuICAgICAgICBnZW9tZXRyeT17bm9kZXMuV29sZjNEX0hlYWQuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV29sZjNEX1NraW59XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfSGVhZC5za2VsZXRvbn1cbiAgICAgICAgbW9ycGhUYXJnZXREaWN0aW9uYXJ5PXtub2Rlcy5Xb2xmM0RfSGVhZC5tb3JwaFRhcmdldERpY3Rpb25hcnl9XG4gICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17bm9kZXMuV29sZjNEX0hlYWQubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgLz5cbiAgICAgIDxza2lubmVkTWVzaFxuICAgICAgICBuYW1lPVwiV29sZjNEX1RlZXRoXCJcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLldvbGYzRF9UZWV0aC5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5Xb2xmM0RfVGVldGh9XG4gICAgICAgIHNrZWxldG9uPXtub2Rlcy5Xb2xmM0RfVGVldGguc2tlbGV0b259XG4gICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17bm9kZXMuV29sZjNEX1RlZXRoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeX1cbiAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtub2Rlcy5Xb2xmM0RfVGVldGgubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgLz5cbiAgICA8L2dyb3VwPlxuICApO1xufVxuXG51c2VHTFRGLnByZWxvYWQoXCIvYXZhdGFyVHlwaW5nLmdsYlwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AvatarTyping.js\n");

/***/ })

})