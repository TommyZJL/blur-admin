import angular from 'angular';
import baSwitcher from './baSwitcher/baSwitcher.component';

const themeInputModule = 'app.theme.inputs';

angular.module(themeInputModule, [])
    .component('baSwitcher', baSwitcher);

export default themeInputModule;
