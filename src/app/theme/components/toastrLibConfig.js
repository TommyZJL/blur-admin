import angular from 'angular';

const extendToastrConfig = function(toastrConfig) {
    angular.extend(toastrConfig, {
        closeButton: true,
        closeHtml: '<button>&times;</button>',
        timeOut: 5000,
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 0,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
};

export default extendToastrConfig;
