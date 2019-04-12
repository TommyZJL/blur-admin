import controller from './MsgCenterCtrl';
import template from './mgsCenter.html';

const msgCenter = function() {
    return {
        restrict: 'E',
        template,
        controller,
    };
};

export default msgCenter;
