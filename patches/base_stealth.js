
// Base stealth plugins for site

Object.defineProperty(navigator, 'webdriver', {
    get: () => {
      console.log('[stealth] navigator.webdriver accessed');
      return false;
    },
    configurable: true
  });

  Object.defineProperty(navigator, 'languages', {
    get: () => {
      console.log('[stealth] navigator.languages accessed');
      return ['en-US', 'en'];
    },
    configurable: true
  });

  Object.defineProperty(navigator, 'plugins', {
    get: () => {
      console.log('[stealth] navigator.plugins accessed');
      return {
        length: 3,
        0: { name: "Chrome PDF Plugin" },
        1: { name: "Chrome PDF Viewer" },
        2: { name: "Native Client" },
        item: function(index) { return this[index]; },
        namedItem: function(name) {
          return [...Array(this.length).keys()].map(i => this[i]).find(p => p.name === name);
        }
      };
    },
    configurable: true
  });
