(function (root) {

  _params = {};

  CHANGE_EVENT = "change";

  var updateParams = function (params) {
    $.extend(_params, params);
  };

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    getParams: function () {
      return _params;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === FilterParamsConstants.PARAMS_RECEIVED) {
        updateParams(payload.params);
        FilterParamsStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
