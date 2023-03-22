let regionValue = null;

const setRegionValue = (initialState) => {
  regionValue = new Proxy(initialState, handler);

  const handler = {
    set(target, prop) {
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

const getHandler = {
  get(target, prop) {
    if (prop === null) {
      all = []; // 지역 모든 번호를 리스트안으로
    }
  },
};

export { regionValue, setRegionValue };
