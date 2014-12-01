/// <reference path="typings/jquery/jquery.d.ts" />
module App {
    export class Hoge {
        addNameSpan = (selector: string, name: string): void=> {
            $(selector).append('<span>' + name  +'</span>');
        }
    }
}