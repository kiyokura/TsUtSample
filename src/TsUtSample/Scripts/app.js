/// <reference path="typings/jquery/jquery.d.ts" />
var App;
(function (App) {
    var Hoge = (function () {
        function Hoge() {
            this.addNameSpan = function (selector, name) {
                $(selector).append('<span>' + name + '</span>');
            };
        }
        return Hoge;
    })();
    App.Hoge = Hoge;
})(App || (App = {}));
//# sourceMappingURL=app.js.map
