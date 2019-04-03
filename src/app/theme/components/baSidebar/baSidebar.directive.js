import $ from 'jquery';
import template from './ba-sidebar.html';

let baSidebar = function($timeout, baSidebarService, baUtil) {
    let jqWindow = $(window);
    return {
        restrict: 'E',
        template,
        controller: 'BaSidebarCtrl',
        link: function (scope, el) {

            scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
            jqWindow.on('click', _onWindowClick);
            jqWindow.on('resize', _onWindowResize);

            scope.$on('$destroy', function () {
                jqWindow.off('click', _onWindowClick);
                jqWindow.off('resize', _onWindowResize);
            });

            function _onWindowClick($evt) {
                if (!baUtil.isDescendant(el[0], $evt.target) &&
                    !$evt.originalEvent.$sidebarEventProcessed &&
                    !baSidebarService.isMenuCollapsed() &&
                    baSidebarService.canSidebarBeHidden()) {
                    $evt.originalEvent.$sidebarEventProcessed = true;
                    $timeout(function () {
                        baSidebarService.setMenuCollapsed(true);
                    }, 10);
                }
            }

            // watch window resize to change menu collapsed state if needed
            function _onWindowResize() {
                let newMenuCollapsed = baSidebarService.shouldMenuBeCollapsed();
                let newMenuHeight = _calculateMenuHeight();
                if (newMenuCollapsed != baSidebarService.isMenuCollapsed() || scope.menuHeight != newMenuHeight) {
                    scope.$apply(function () {
                        scope.menuHeight = newMenuHeight;
                        baSidebarService.setMenuCollapsed(newMenuCollapsed)
                    });
                }
            }

            function _calculateMenuHeight() {
                return el[0].childNodes[0].clientHeight - 84;
            }
        }
    };
};

export default baSidebar;
