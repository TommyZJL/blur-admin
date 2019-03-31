import angular from 'angular';
import ngAnimate from 'angular-animate';

import 'angular-xeditable';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import appThemeModuleName from './theme/theme.module';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';
const dependencies = [
  ngAnimate,
  'ui.bootstrap',
  'ui.router',
  'xeditable',

  appThemeModuleName,
  // 'BlurAdmin.pages',
];

angular.module('app', dependencies)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;