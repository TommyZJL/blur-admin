let preloader = function($q) {
  return {
    loadImg: function (src) {
      let d = $q.defer();
      let img = new Image();
      img.src = src;
      img.onload = function () {
        d.resolve();
      };
      return d.promise;
    },
    
    loadAmCharts: function () {
      let d = $q.defer();
      AmCharts.ready(function () {
        d.resolve();
      });
      return d.promise;
    },
  };
};
