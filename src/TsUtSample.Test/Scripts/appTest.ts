/// <reference path="_reference.ts" />

test("指定した要素に名前を表示するspanを追加する", function () {

    // #qunit-fixtureにテスト用のDOMツリーを作成
    $("#qunit-fixture").append("<div id=\"target\"></div>");

    var app = new App.Hoge();
    app.addNameSpan("#target", "kiyokura");

    // 雑だけどとりあえずこれでテストOKとする
    var actual = $("#target").children("span").text();
    var expected = "kiyokura";

    equal(actual, expected, "innerTextが'kiyokura'なspanが追加されている");
});
