import angular from 'angular';

import animatedChange from './animatedChange.js';
import autoExpand from './autoExpand.js';
import autoFocus from './autoFocus.js';
import includeWithScope from './includeWithScope.js';
import ionSlider from './ionSlider.js';
import ngFileSelect from './ngFileSelect.js';
import scrollPosition from './trackWidth.js';
import zoomIn from './zoomIn.js';

const themeDirectivesModule = 'app.theme.components';

angular.module(themeComponentsModule, [])
    .directive('animatedChange', animatedChange)
    .directive('autoExpand', autoExpand)
    .directive('autoFocus', autoFocus)
    .directive('includeWithScope', includeWithScope)
    .directive('ionSlider', ionSlider)
    .directive('ngFileSelect', ngFileSelect)
    .directive('scrollPosition', scrollPosition)
    .directive('zoomIn', zoomIn);

export default themeDirectivesModule;
