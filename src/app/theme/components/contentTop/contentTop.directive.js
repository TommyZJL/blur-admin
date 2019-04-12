import template from './contentTop.html';

let contentTop = function($state) {
    return {
        restrict: 'E',
        template,
        link: function ($scope) {
            $scope.$watch(function () {
                $scope.activePageTitle = $state.current.title;
            });
        },
    };
};

export default contentTop;
