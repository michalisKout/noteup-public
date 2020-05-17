export function actionCreator(constantType) {
  return {
    success(payload) {
      return {
        type: constantType.SUCCESS,
        payload,
      };
    },
    request() {
      return {
        type: constantType.REQUEST,
      };
    },
    failure() {
      return {
        type: constantType.FAILURE,
      };
    },
  };
}
