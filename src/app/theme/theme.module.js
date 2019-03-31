import angular from 'angular';
import constants from './theme.constants';
import configProvider from './theme.configProvider';
import config from './theme.config';
import baUtil from './services/baUtil';
import fileReader from './services/fileReader';
import preloader from './services/preloader';
import stopableInterval from './services/stopableInterval';
import inputsModuleName from './inputs/inputs.module';

const appThemeModuleName = 'app.theme';
const dependencies = [
	inputsModuleName,
];

angular.module(appThemeModuleName, dependencies)
	.config(config)
	.constant('layoutSizes', constants.layoutSizes)
	.constant('layoutPaths', constants.layoutPaths)
	.constant('colorHelper', constants.colorHelper)
	.provider('baConfig', configProvider)
	.service('baUtil', baUtil)
	.service('fileReader', fileReader)
	.service('preloader', preloader)
	.service('stopableInterval', stopableInterval);

export default appThemeModuleName;
