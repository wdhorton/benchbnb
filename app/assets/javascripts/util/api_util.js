ApiUtil = {
  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      data: { bounds: bounds },
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: { bench: bench },
      success: function (bench) {
        ApiActions.receiveNew(bench);
      }
    });
  }
};
