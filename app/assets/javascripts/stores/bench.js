(function(root) {
  var _benches = [];

  var resetBenches = function (benches) {
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload){
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
        resetBenches(payload.benches);
      }
    })
  });
})(this);
