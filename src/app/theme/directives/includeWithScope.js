const includeWithScope = function() {
    return {
        restrict: 'AE',
        templateUrl: function (ele, attrs) {
            return attrs.includeWithScope;
        }
    };
};

export default includeWithScope;
