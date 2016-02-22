System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DataFormComponent;
    function cusvali(control) {
        if (!control.value.match('\\d+')) {
            return { no: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataFormComponent = (function () {
                function DataFormComponent(_fBu) {
                    this._fBu = _fBu;
                    this.user = { mail: '', password: '' };
                }
                DataFormComponent.prototype.ngOnInit = function () {
                    this.mForm = this._fBu.group({
                        'mail': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                cusvali
                            ])],
                        'cpassword': ['', common_1.Validators.required]
                    });
                };
                DataFormComponent.prototype.onSubmit = function (form) {
                    //console.log(this.mForm);
                    this.user = this.mForm.value;
                };
                DataFormComponent = __decorate([
                    core_1.Component({
                        selector: 'data-form',
                        template: "\n    <form [ngFormModel]=\"mForm\"(ngSubmit)=\"onSubmit()\">\n    <label for=\"mail\">mail</label>\n    <input [ngFormControl]=\"mForm.controls['mail']\" type=\"text\" id=\"mail\" #mail=\"ngForm\">\n    <span class=\"error\" *ngIf=\"!mail.valid\" >not valid</span>\n        <label for=\"password\">pass</label>\n    <input [ngFormControl]=\"mForm.controls['password']\"  type=\"text\" id=\"password\" #password=\"ngForm\" >\n     <span class=\"error\" *ngIf=\"!password.valid\"  >not valid</span>\n        <label for=\"cpassword\">confirm</label>\n    <input  [ngFormControl]=\"mForm.controls['cpassword']\" type=\"text\" id=\"cpassword\" #cpassword=\"ngForm\">\n     <span class=\"error\" *ngIf=\"!cpassword.valid\" >not valid</span>\n    <button type=\"submit\" >submit</button>\n    </form>\n    {{user.mail}}{{user.password}}\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataFormComponent);
                return DataFormComponent;
            })();
            exports_1("DataFormComponent", DataFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJjdXN2YWxpIiwiRGF0YUZvcm1Db21wb25lbnQiLCJEYXRhRm9ybUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkRhdGFGb3JtQ29tcG9uZW50Lm5nT25Jbml0IiwiRGF0YUZvcm1Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQThDQSxpQkFBaUIsT0FBZTtRQUM1QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDN0JBLE1BQU1BLENBQUNBLEVBQUNBLEVBQUVBLEVBQUNBLElBQUlBLEVBQUNBLENBQUNBO1FBQ3JCQSxDQUFDQTtJQUNMQSxDQUFDQTs7Ozs7Ozs7OztZQTVDRDtnQkFxQklDLDJCQUFvQkEsSUFBZ0JBO29CQUFoQkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBWUE7b0JBRnBDQSxTQUFJQSxHQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxFQUFFQSxFQUFDQSxRQUFRQSxFQUFDQSxFQUFFQSxFQUFDQSxDQUFDQTtnQkFJM0JBLENBQUNBO2dCQUVERCxvQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO3dCQUN6QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsRUFBRUEsRUFBQ0EsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUMvQkEsVUFBVUEsRUFBQ0EsQ0FBQ0EsRUFBRUEsRUFBQ0EsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBO2dDQUM5QkEsbUJBQVVBLENBQUNBLFFBQVFBO2dDQUN2QkEsT0FBT0E7NkJBQ05BLENBQUNBLENBQUNBO3dCQUNIQSxXQUFXQSxFQUFDQSxDQUFDQSxFQUFFQSxFQUFDQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7cUJBQ3ZDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBQ0RGLG9DQUFRQSxHQUFSQSxVQUFTQSxJQUFJQTtvQkFDVEcsMEJBQTBCQTtvQkFDMUJBLElBQUlBLENBQUNBLElBQUlBLEdBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBdENMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxXQUFXQTt3QkFDcEJBLFFBQVFBLEVBQUNBLHMwQkFjUkE7cUJBQ0pBLENBQUNBOztzQ0FzQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7WUF2Q0QsaURBdUNDLENBQUEiLCJmaWxlIjoiZGF0YWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIyLlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsVmFsaWRhdG9ycyxDb250cm9sfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonZGF0YS1mb3JtJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJtRm9ybVwiKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+bWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibUZvcm0uY29udHJvbHNbJ21haWwnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgI21haWw9XCJuZ0Zvcm1cIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cIiFtYWlsLnZhbGlkXCIgPm5vdCB2YWxpZDwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5wYXNzPC9sYWJlbD5cclxuICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJtRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiICB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIiA+XHJcbiAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCIgID5ub3QgdmFsaWQ8L3NwYW4+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImNwYXNzd29yZFwiPmNvbmZpcm08L2xhYmVsPlxyXG4gICAgPGlucHV0ICBbbmdGb3JtQ29udHJvbF09XCJtRm9ybS5jb250cm9sc1snY3Bhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwiY3Bhc3N3b3JkXCIgI2NwYXNzd29yZD1cIm5nRm9ybVwiPlxyXG4gICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cIiFjcGFzc3dvcmQudmFsaWRcIiA+bm90IHZhbGlkPC9zcGFuPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgPnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAge3t1c2VyLm1haWx9fXt7dXNlci5wYXNzd29yZH19XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHVzZXI9e21haWw6JycscGFzc3dvcmQ6Jyd9O1xyXG4gICAgbUZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZkJ1OkZvcm1CdWlsZGVyKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnl7XHJcbiAgICAgICAgdGhpcy5tRm9ybSA9IHRoaXMuX2ZCdS5ncm91cCh7XHJcbiAgICAgICAgICAgICdtYWlsJzpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6WycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICBjdXN2YWxpXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgJ2NwYXNzd29yZCc6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1Gb3JtKTtcclxuICAgICAgICB0aGlzLnVzZXI9dGhpcy5tRm9ybS52YWx1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjdXN2YWxpKGNvbnRyb2w6Q29udHJvbCk6e1tzOnN0cmluZ106Ym9vbGVhbn17XHJcbiAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaCgnXFxcXGQrJykpe1xyXG4gICAgICAgIHJldHVybiB7bm86dHJ1ZX07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
