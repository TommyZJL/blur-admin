import template from './baWizard.html'

let baWizard = function() {
    return {
        restrict: 'E',
        transclude: true,
        template,
        controllerAs: '$baWizardController',
        controller: 'baWizardCtrl'
    };
};

export default baWizard;
