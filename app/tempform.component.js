System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TemplateFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateFormComponent = (function () {
                function TemplateFormComponent() {
                    this.user = { mail: '', password: '' };
                }
                TemplateFormComponent.prototype.onSubmit = function (form) {
                    this.user.mail = form.value['mail'];
                    this.user.password = form.controls['password'].value;
                };
                TemplateFormComponent = __decorate([
                    core_1.Component({
                        selector: 'temp-form',
                        template: "\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    <label for=\"mail\">mail</label>\n    <input ngControl=\"mail\" type=\"text\" id=\"mail\" required #mail=\"ngForm\">\n    <span class=\"error\" *ngIf=\"!mail.valid\">not valid</span>\n        <label for=\"password\">pass</label>\n    <input ngControl=\"password\" type=\"text\" id=\"password\" required #password=\"ngForm\">\n     <span class=\"error\" *ngIf=\"!password.valid\">not valid</span>\n        <label for=\"cpassword\">confirm</label>\n    <input ngControl=\"cpassword\" type=\"text\" id=\"cpassword\" required #cpassword=\"ngForm\">\n     <span class=\"error\" *ngIf=\"!cpassword.valid\">not valid</span>\n    <button type=\"submit\" [disabled]=\"!f.valid||password.value!==cpassword.value\">submit</button>\n    </form>\n    {{user.mail}}{{user.password}}\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateFormComponent);
                return TemplateFormComponent;
            })();
            exports_1("TemplateFormComponent", TemplateFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJUZW1wbGF0ZUZvcm1Db21wb25lbnQiLCJUZW1wbGF0ZUZvcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJUZW1wbGF0ZUZvcm1Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtvQkFtQklDLFNBQUlBLEdBQUNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLFFBQVFBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBO2dCQUsvQkEsQ0FBQ0E7Z0JBSkdELHdDQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVEUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDdkRBLENBQUNBO2dCQXZCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsV0FBV0E7d0JBQ3BCQSxRQUFRQSxFQUFDQSxtMEJBY1JBO3FCQUNKQSxDQUFDQTs7MENBT0RBO2dCQUFEQSw0QkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQseURBd0JDLENBQUEiLCJmaWxlIjoidGVtcGZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIyLlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjondGVtcC1mb3JtJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwibWFpbFwiPm1haWw8L2xhYmVsPlxyXG4gICAgPGlucHV0IG5nQ29udHJvbD1cIm1haWxcIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHJlcXVpcmVkICNtYWlsPVwibmdGb3JtXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCIhbWFpbC52YWxpZFwiPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5wYXNzPC9sYWJlbD5cclxuICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkICNwYXNzd29yZD1cIm5nRm9ybVwiPlxyXG4gICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cIiFwYXNzd29yZC52YWxpZFwiPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY3Bhc3N3b3JkXCI+Y29uZmlybTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgbmdDb250cm9sPVwiY3Bhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cImNwYXNzd29yZFwiIHJlcXVpcmVkICNjcGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cclxuICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCIhY3Bhc3N3b3JkLnZhbGlkXCI+bm90IHZhbGlkPC9zcGFuPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkfHxwYXNzd29yZC52YWx1ZSE9PWNwYXNzd29yZC52YWx1ZVwiPnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAge3t1c2VyLm1haWx9fXt7dXNlci5wYXNzd29yZH19XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUZvcm1Db21wb25lbnR7XHJcbiAgICB1c2VyPXttYWlsOicnLHBhc3N3b3JkOicnfTtcclxuICAgIG9uU3VibWl0KGZvcm0pIHtcclxuICAgICAgICB0aGlzLnVzZXIubWFpbD1mb3JtLnZhbHVlWydtYWlsJ107XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkPWZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
