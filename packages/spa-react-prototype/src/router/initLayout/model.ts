const model: Model = {
  state: {
    name: 'lwq',
  },
  namespace: 'lwq',
  // effect: {},
  reducer: {
    setName: state => {
      debugger;
      state.name = 'qwe';
    },
  },
};

export default model;
