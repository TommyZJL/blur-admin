import tempalte from './widgets.html';

let widgets = function() {
    return {
        restrict: 'EA',
        scope: {
            ngModel: '='
        },
        templateUrl: 'app/theme/components/widgets/widgets.html',
        replace: true
    };
};

export default widgets;
