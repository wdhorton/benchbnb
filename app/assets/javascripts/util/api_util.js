ApiUtil = {
  fetchBenches: function (coords) {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      data: { bounds: coords },
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  }
};
