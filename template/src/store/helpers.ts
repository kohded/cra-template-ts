export interface ActionEvent {
  type: string;
}

export const actionEvent = (type: string): ActionEvent => ({
  type,
});
