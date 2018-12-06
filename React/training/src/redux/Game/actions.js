export const actions = {
  BLA: 'SUMAR',
  JUAS: 'RESTAR'
};

const gameActions = {
  restar: (i) => ({
    type: actions.JUAS,
    foo: i
  }),

  sumar: (i) => ({
    type: actions.BLA,
    leela: i
  }),
};

export default gameActions;
