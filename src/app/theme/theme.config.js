let appThemeConfig = function(baConfigProvider) {
  baConfigProvider.changeTheme({blur: true});
    
  baConfigProvider.changeColors({
   default: 'rgba(#000000, 0.2)',
   defaultText: '#ffffff',
   dashboard: {
     white: '#ffffff',
   },
  });
};

export default appThemeConfig;
