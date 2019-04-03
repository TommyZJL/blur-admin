let baSidebarToggleMenu = function(baSidebarService) {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            elem.on('click', function ($evt) {
                $evt.originalEvent.$sidebarEventProcessed = true;
                scope.$apply(function () {
                    baSidebarService.toggleMenuCollapsed();
                });
            });
        }
    };
}

/** @ngInject */
let baSidebarCollapseMenu = function(baSidebarService) {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            elem.on('click', function ($evt) {
                $evt.originalEvent.$sidebarEventProcessed = true;
                if (!baSidebarService.isMenuCollapsed()) {
                    scope.$apply(function () {
                        baSidebarService.setMenuCollapsed(true);
                    });
                }
            });
        }
    };
}

/** @ngInject */
let baSidebarTogglingItem = function() {
    return {
        restrict: 'A',
        controller: 'BaSidebarTogglingItemCtrl'
    };
}

/** @ngInject */
let BaSidebarTogglingItemCtrl = function($scope, $element, $attrs, $state, baSidebarService) {
    var vm = this;
    var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem);
    if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
        vm.$$expandSubmenu = function () { console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu') };
        vm.$$collapseSubmenu = function () { console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu') };

        var subItemsStateRefs = baSidebarService.getAllStateRefsRecursive(menuItem);

        vm.$expand = function () {
            vm.$$expandSubmenu();
            $element.addClass('ba-sidebar-item-expanded');
        };

        vm.$collapse = function () {
            vm.$$collapseSubmenu();
            $element.removeClass('ba-sidebar-item-expanded');
        };

        vm.$toggle = function () {
            $element.hasClass('ba-sidebar-item-expanded') ?
                vm.$collapse() :
                vm.$expand();
        };

        if (_isState($state.current)) {
            $element.addClass('ba-sidebar-item-expanded');
        }

        $scope.$on('$stateChangeStart', function (event, toState) {
            if (!_isState(toState) && $element.hasClass('ba-sidebar-item-expanded')) {
                vm.$collapse();
                $element.removeClass('ba-sidebar-item-expanded');
            }
        });

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if (_isState(toState) && !$element.hasClass('ba-sidebar-item-expanded')) {
                vm.$expand();
                $element.addClass('ba-sidebar-item-expanded');
            }
        });
    }

    function _isState(state) {
        return state && subItemsStateRefs.some(function (subItemState) {
            return state.name.indexOf(subItemState) == 0;
        });
    }
}

let baUiSrefTogglingSubmenu = function($state) {
    return {
        restrict: 'A',
        require: '^baSidebarTogglingItem',
        link: function (scope, el, attrs, baSidebarTogglingItem) {
            baSidebarTogglingItem.$$expandSubmenu = function () { el.slideDown(); };
            baSidebarTogglingItem.$$collapseSubmenu = function () { el.slideUp(); };
        }
    };
}

let baUiSrefToggler = function(baSidebarService) {
    return {
        restrict: 'A',
        require: '^baSidebarTogglingItem',
        link: function (scope, el, attrs, baSidebarTogglingItem) {
            el.on('click', function () {
                if (baSidebarService.isMenuCollapsed()) {
                    // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
                    // This should not affect mobiles, because on mobiles sidebar should be hidden at all
                    scope.$apply(function () {
                        baSidebarService.setMenuCollapsed(false);
                    });
                    baSidebarTogglingItem.$expand();
                } else {
                    baSidebarTogglingItem.$toggle();
                }
            });
        }
    };
};

export {
    baSidebarToggleMenu,
    baSidebarCollapseMenu,
    baSidebarTogglingItem,
    BaSidebarTogglingItemCtrl,
    baUiSrefTogglingSubmenu,
    baUiSrefToggler,
};