const autoFocus = function($timeout, $parse) {
    return {
        link: function (scope, element, attrs) {
            let model = $parse(attrs.autoFocus);
            scope.$watch(model, function (value) {
                if (value === true) {
                    $timeout(function () {
                        element[0].focus();
                        element[0].select();
                    });
                }
            });
            element.bind('blur', function () {
                scope.$apply(model.assign(scope, false));
            });
        }
    };
};

export default autoFocus;