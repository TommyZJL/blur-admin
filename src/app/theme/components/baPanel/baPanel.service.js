let baPanel = function() {
    return {
        restrict: 'A',
        transclude: true,
        template: function (elem, attrs) {
            var res = '<div class="panel-body" ng-transclude></div>';
            if (attrs.baPanelTitle) {
                var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.baPanelTitle + '</h3></div>';
                res = titleTpl + res; // title should be before
            }

            return res;
        },
    };
};

export default baPanel;
