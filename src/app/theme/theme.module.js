import angular from 'angular';
import constants from './theme.constants';
import configProvider from './theme.configProvider';
import config from './theme.config';
import baUtil from './services/baUtil';
import fileReader from './services/fileReader';
import preloader from './services/preloader';
import stopableInterval from './services/stopableInterval';

import inputsModuleName from './inputs/inputs.module';
import themeComponentsModule from './components/components.module';
import baPanel from './components/baPanel/baPanel.service';
import baPanelDirective from './components/baPanel/baPanel.component';
import baPanelBlur from './components/baPanel/baPanelBlur.component';
import baPanelBlurHelper from './components/baPanel/baPanelBlurHelper.service';
import baPanelSelf from './components/baPanel/baPanelSelf.directive';

const appThemeModuleName = 'app.theme';
const dependencies = [
	inputsModuleName,
	themeComponentsModule,
];

angular.module(appThemeModuleName, dependencies)
	.config(config)
	.constant('layoutSizes', constants.layoutSizes)
	.constant('layoutPaths', constants.layoutPaths)
	.constant('colorHelper', constants.colorHelper)
	.provider('baConfig', configProvider)
	.factory('baPanel', baPanel)
	.service('baUtil', baUtil)
	.service('fileReader', fileReader)
	.service('preloader', preloader)
	.service('stopableInterval', stopableInterval)
	.service('baPanelBlurHelper', baPanelBlurHelper)
	.directive('baPanel', baPanelDirective)
	.directive('baPanelSelf', baPanelSelf)
	.directive('baPanelBlur', baPanelBlur);

export default appThemeModuleName;
