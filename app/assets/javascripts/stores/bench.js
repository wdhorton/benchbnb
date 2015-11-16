(function(root) {
  var _benches = [];

  var resetBenches = function (benches) {
    _benches = benches;
  };

  var addNewBench = function (bench) {
    _benches.push(bench);
  };

  CHANGE_EVENT = "change";

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.off(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case BenchConstants.NEW_BENCH_RECEIVED:
          addNewBench(payload.bench);
          BenchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
