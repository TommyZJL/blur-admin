let stopableInterval = function($window) {
  return {
    start: function (interval, calback, time) {
      function startInterval() {
        return interval(calback, time);
      }

      let i = startInterval();

      angular.element($window).bind('focus', function () {
        if (i) interval.cancel(i);
        i = startInterval();
      });

      angular.element($window).bind('blur', function () {
        if (i) interval.cancel(i);
      });
    },
  };
};