let baPanelSelf = function(baPanel) {
    return angular.extend({}, baPanel, {
        link: function (scope, el, attrs) {
            el.addClass('panel panel-white');
            if (attrs.baPanelClass) {
                el.addClass(attrs.baPanelClass);
            }
        }
    });
};

export default baPanelSelf;
