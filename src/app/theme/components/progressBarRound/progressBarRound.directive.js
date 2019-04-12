import template from 'progressBarRound.html';

let progressBarRound = function(baProgressModal) {
    return {
        restrict: 'E',
        template,
        link: function ($scope, element, attrs) {
            $scope.baProgressDialog = baProgressModal;
            $scope.$watch(function () {
                return baProgressModal.getProgress();
            }, animateBar);

            function animateBar() {
                var circle = element.find('#loader')[0];
                circle.setAttribute("stroke-dasharray", baProgressModal.getProgress() * 180 * Math.PI / 100 + ", 20000");
                $scope.progress = baProgressModal.getProgress();
            }
        }
    }
};

export default progressBarRound;
