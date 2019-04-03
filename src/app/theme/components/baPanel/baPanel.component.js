import angular from 'angular';

let baPanel = function(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
        template: function (el, attrs) {
            var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
            res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
            res += baPanel.template(el, attrs);
            res += '</div>';
            return res;
        }
    });
}

export default baPanel;
