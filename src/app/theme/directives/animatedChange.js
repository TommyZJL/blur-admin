const animatedChange = function($timeout) {
    return {
        link: function (scope, element) {
            $timeout(function () {
                let newValue = element.attr('new-value');
                let oldvalue = parseInt(element.html());

                function changeValue(val) {
                    $timeout(function () {
                        element.html(val);
                    }, 30);
                }

                if (newValue > oldvalue) {
                    for (let i = oldvalue; i <= newValue; i++) {
                        changeValue(i);
                    }
                } else {
                    for (let j = oldvalue; j >= newValue; j--) {
                        changeValue(j);
                    }
                }
                $timeout(function () {
                    element.next().find('i').addClass('show-arr');
                }, 500);
            }, 3500);
        }
    };
}

export default animatedChange;
