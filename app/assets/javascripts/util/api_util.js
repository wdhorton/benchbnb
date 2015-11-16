ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  }
};
