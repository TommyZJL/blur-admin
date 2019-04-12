const autoExpand = function() {
    return {
        restrict: 'A',
        link: function ($scope, elem) {
            elem.bind('keydown', function ($event) {
                let element = $event.target;
                $(element).height(0);
                let height = $(element)[0].scrollHeight;
                height = (height < 16) ? 16 : height;
                $(element).height(height);
            });

            // Expand the textarea as soon as it is added to the DOM
            setTimeout(function () {
                let element = elem;
                $(element).height(0);
                let height = $(element)[0].scrollHeight;
                height = (height < 16) ? 16 : height;
                $(element).height(height);
            }, 0)
        }
    };
}

export default autoExpand;
