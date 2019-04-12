import angular from 'angular';

import baSidebar from './baSidebar/baSidebar.directive';
import baSidebarServiceProvider from './baSidebar/baSidebar.service';
import {baSidebarToggleMenu, baSidebarCollapseMenu, baSidebarTogglingItem, BaSidebarTogglingItemCtrl,
    baUiSrefTogglingSubmenu, baUiSrefToggler} from './baSidebar/baSidebarHelpers.directive';
import BaSidebarCtrl from './baSidebar/BaSidebarCtrl';
import backTop from './backTop/backTop.directive';
import contentTop from './contentTop/contentTop.directive';
import msgCenter from './msgCenter/msgCenter.directive';
import pageTop from './pageTop/pageTop.directive';
import toastrLibConfig from './toastrLibConfig';

const themeComponentsModule = 'app.theme.components';

angular.module(themeComponentsModule, [])
    .config(toastrLibConfig)
    .directive('baSidebar', baSidebar)
    .provider('baSidebarService', baSidebarServiceProvider)
    .directive('baSidebarToggleMenu', baSidebarToggleMenu)
    .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
    .directive('baSidebarTogglingItem', baSidebarTogglingItem)
    .controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl)
    .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
    .directive('baUiSrefToggler', baUiSrefToggler)
    .directive('backTop', backTop)
    .directive('msgCenter', msgCenter)
    .directive('contentTop', contentTop)
    .directive('progressBarRound', progressBarRound)
    .directive('pageTop', pageTop)
    .directive('widgets', widgets)
    .controller('BaSidebarCtrl', BaSidebarCtrl);

export default themeComponentsModule;
