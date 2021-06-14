goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.loader.activeModuleManager");
  goog.module.declareLegacyNamespace();
  const AbstractModuleManager = goog.require("goog.loader.AbstractModuleManager");
  const asserts = goog.require("goog.asserts");
  let moduleManager = null;
  let getDefault = null;
  function get() {
    if (!moduleManager && getDefault) {
      moduleManager = getDefault();
    }
    asserts.assert(moduleManager != null, "The module manager has not yet been set.");
    return moduleManager;
  }
  function set(newModuleManager) {
    asserts.assert(moduleManager == null, "The module manager cannot be redefined.");
    moduleManager = newModuleManager;
  }
  function setDefault(fn) {
    getDefault = fn;
  }
  const reset = function() {
    moduleManager = null;
  };
  exports = {get, set, setDefault, reset};
  return exports;
});

//# sourceMappingURL=goog.loader.activemodulemanager.js.map
