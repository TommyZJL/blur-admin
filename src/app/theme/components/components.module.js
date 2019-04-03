import angular from 'angular';

import baSidebar from './baSidebar/baSidebar.directive';
import baSidebarServiceProvider from './baSidebar/baSidebar.service';
import {baSidebarToggleMenu, baSidebarCollapseMenu, baSidebarTogglingItem, BaSidebarTogglingItemCtrl,
    baUiSrefTogglingSubmenu, baUiSrefToggler} from './baSidebar/baSidebarHelpers.directive';
import BaSidebarCtrl from './baSidebar/BaSidebarCtrl';

const themeComponentsModule = 'app.theme.components';

angular.module(themeComponentsModule, [])
    .directive('baSidebar', baSidebar)
    .provider('baSidebarService', baSidebarServiceProvider)
    .directive('baSidebarToggleMenu', baSidebarToggleMenu)
    .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
    .directive('baSidebarTogglingItem', baSidebarTogglingItem)
    .controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl)
    .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
    .directive('baUiSrefToggler', baUiSrefToggler)
    .controller('BaSidebarCtrl', BaSidebarCtrl);;

export default themeComponentsModule;
