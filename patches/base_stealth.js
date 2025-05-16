(() => {
  // === Spoof navigator.languages ===
  const getLanguages = () => ["en-US", "en"];
  Object.defineProperty(Navigator.prototype, "languages", {
    get: getLanguages,
    configurable: true,
    enumerable: false,
  });

  // === Spoof navigator.plugins ===
  const fakePluginArray = {
    0: {
      name: "Chrome PDF Plugin",
      filename: "internal-pdf-viewer",
      description: "Portable Document Format",
    },
    1: {
      name: "Chrome PDF Viewer",
      filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
      description: "",
    },
    2: {
      name: "Native Client",
      filename: "internal-nacl-plugin",
      description: "",
    },
    length: 3,
    item: function (index) {
      return this[index];
    },
    namedItem: function (name) {
      return Object.values(this).find((p) => p.name === name) || null;
    },
  };
  Object.defineProperty(Navigator.prototype, "plugins", {
    get: () => fakePluginArray,
    configurable: true,
    enumerable: false,
  });

  // === Spoof navigator.webdriver ===
  Object.defineProperty(Navigator.prototype, "webdriver", {
    get: () => false,
    configurable: true,
  });

  // === Patch permissions.query for notifications ===
  const originalQuery = window.navigator.permissions.query;
  window.navigator.permissions.query = function (params) {
    if (params.name === "notifications") {
      return Promise.resolve({ state: Notification.permission });
    }
    return originalQuery.apply(this, arguments);
  };
})();
