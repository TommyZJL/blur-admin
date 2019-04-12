const trackWidth = function() {
    return {
        scope: {
            trackWidth: '=',
            minWidth: '=',
        },
        link: function (scope, element) {
            scope.trackWidth = $(element).width() < scope.minWidth;
            scope.prevTrackWidth = scope.trackWidth;

            $(window).resize(function () {
                let trackWidth = $(element).width() < scope.minWidth;
                if (trackWidth !== scope.prevTrackWidth) {
                    scope.$apply(function () {
                        scope.trackWidth = trackWidth;
                    });
                }
                scope.prevTrackWidth = trackWidth;
            });
        }
    };
};

export default trackWidth;
