FilterActions = {
  receiveParams: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterParamsConstants.PARAMS_RECEIVED,
      params: params
    });
  }
};
