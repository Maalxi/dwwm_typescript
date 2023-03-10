// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"demo.ts":[function(require,module,exports) {
// Première partie
// Système de constante et variable
// Différent types
// const firstName: string = 'Kévin';
// const lastName: string = 'Wolff'; 
var age = 30;
var isHeWakeUp = false;
// Tableau
var learners = ['Kevin', 30, true];
// Objet
var learner = {
  name: 'Kevin',
  age: 30,
  wakeUp: false
};
// Exercice # 4
var country = "France";
function logCountryName(countryName) {
  console.log("Le pays est ".concat(countryName));
}
logCountryName(country);
// Exercice # 5
var firstName = "Samuel";
var lastName = "DA CONCEICAO";
function nomcomplet() {
  console.log(firstName + " " + lastName);
  console.log("".concat(firstName, " ").concat(lastName));
}
nomcomplet();
// Deuxième partie
// Exercice # 1
function printAddress(address, zipCode) {
  console.log("Address: ".concat(address));
  console.log("Zip Code: ".concat(zipCode));
}
var address = "235 route de myans";
var zipCode = 12345;
var addressFull = "".concat(address, ", ").concat(zipCode);
console.log(address, zipCode);
console.log(addressFull);
// Exercice # 2
function displayFavoriteCountries() {
  var favoriteCountries = ["France", "Japan", "Italy", "Australia", "Canada"];
  for (var _i = 0, favoriteCountries_1 = favoriteCountries; _i < favoriteCountries_1.length; _i++) {
    var country_1 = favoriteCountries_1[_i];
    console.log(country_1);
  }
}
displayFavoriteCountries();
// Exercice # 3
function splitString(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result;
}
// const myString = "developpement";
// const myStringArray = splitString(myString);
// console.log(myStringArray);
// Exercice # 4
function joinString(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
var myStringArray = ["d", "e", "v", "e", "l", "o", "p", "p", "e", "m", "e", "n", "t"];
var myString = joinString(myStringArray);
console.log(myString);
// Troisième partie
// Exercice # 1
var data = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'];
for (var i = 0; i < data.length; i++) {
  if (data[i].length <= 5) {
    console.log(data[i]);
  }
}
// Exercice # 2
var countries = ['France', 'Allemagne', 'Italie', 'Suisse', 'Belgique'];
var sentence = '';
for (var i = 0; i < countries.length; i++) {
  sentence += countries[i];
  if (i !== countries.length - 1) {
    sentence += ', ';
  }
}
console.log(sentence);
// Exercice # 3
var numbers = [123, 999, 340, 12390];
var results = [];
for (var i = 0; i < numbers.length; i++) {
  results.push(numbers[i] * 180);
}
console.log(results);
var person = {
  name: 'Marchal',
  surname: 'Mickeal',
  age: 19
};
if (person.age >= 18) {
  console.log("".concat(person.surname, " est majeur"));
}
// Exercice # 5
var person = {
  name: 'Dupont',
  surname: 'Jean',
  age: 42
};
console.log("Bonjour, mon nom est ".concat(person.name, " ").concat(person.surname, ", j'ai ").concat(person.age, " ans."));
// Exercice # 6
var persons = [{
  name: 'Dupont',
  surname: 'Jean',
  age: 42
}, {
  name: 'Martin',
  surname: 'Lucie',
  age: 28
}, {
  name: 'Girard',
  surname: 'Pierre',
  age: 35
}, {
  name: 'Lefevre',
  surname: 'Sophie',
  age: 20
}, {
  name: 'Robert',
  surname: 'Julien',
  age: 50
}];
for (var i = 0; i < persons.length; i++) {
  console.log("Bonjour, mon nom est ".concat(persons[i].name, " ").concat(persons[i].surname, ", j'ai ").concat(persons[i].age, " ans."));
}
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35025" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","demo.ts"], null)
//# sourceMappingURL=/demo.56710ae6.js.map