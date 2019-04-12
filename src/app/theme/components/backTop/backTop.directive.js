import template from './backTop.html'

let backTop = function () {
    return {
        restrict: 'E',
        template,
        controller: function () {
            $('#backTop').backTop({
                'position': 200,
                'speed': 100
            });
        }
    };
};

export default backTop;
