export const actionEvent = (type: string): ActionEvent => ({
  type,
});

export const actionTypes = {
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
};
