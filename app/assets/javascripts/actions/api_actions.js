ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveNew: function (bench) {
    AppDispatcher.dispathc({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      bench: bench
    });
  }
};
