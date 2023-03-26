let regionValue = null;

const setRegionValue = (initialState) => {
  regionValue = new Proxy(initialState, handler);

  const handler = {
    set(target, key) {
      if (prop !== null) {
        regionValue = prop;
      }
      return Reflect.get(...arguments);
    },
  };
};

const getRegionValue = (initialState) => {
  regionValue = new Proxy(initialState, handler);

  const handler = {
    get(target, prop) {
      if (prop === null) {
        return "hello";
      }
    },
  };
};

export { regionValue, setRegionValue };
