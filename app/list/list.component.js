System.register(['angular2/core', "./new.component", "./item.component", "./item.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_component_1, item_component_1, item_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_component_1_1) {
                new_component_1 = new_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_iSer) {
                    this._iSer = _iSer;
                }
                //onAdd(item:listItem){
                //    this.listItems.push({name:item.name,amount:item.amount});
                //}
                ListComponent.prototype.onSelect = function (item) {
                    this.selectItem = item;
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._iSer.getItems();
                };
                //onRemove(item:listItem){
                //    this.listItems.splice(this.listItems.indexOf(item),1);
                //    this.selectItem=null;
                //}
                ListComponent.prototype.onRemove = function () {
                    this.selectItem = null;
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "\n    <section>\n    <new-item ></new-item>\n    </section>\n    <section>\n    list\n    <div class=\"list\">\n    <ul><li *ngFor=\"#item of listItems\" (click)=\"onSelect(item)\">\n    {{item.name}}{{item.amount}}\n    </li></ul></div>\n    </section>\n    <section *ngIf=\"selectItem !=null\">\n    <items [item]=\"selectItem\" (removed)=\"onRemove()\">\n\n    </items></section>\n    ",
                        directives: [new_component_1.NewComponent, item_component_1.ItemComponent],
                        providers: [item_service_1.ItemService]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsIkxpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJMaXN0Q29tcG9uZW50Lm9uU2VsZWN0IiwiTGlzdENvbXBvbmVudC5uZ09uSW5pdCIsIkxpc3RDb21wb25lbnQub25SZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQTBCSUEsdUJBQW9CQSxLQUFpQkE7b0JBQWpCQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFZQTtnQkFBRUEsQ0FBQ0E7Z0JBQ3hDRCx1QkFBdUJBO2dCQUN2QkEsK0RBQStEQTtnQkFDL0RBLEdBQUdBO2dCQUNIQSxnQ0FBUUEsR0FBUkEsVUFBU0EsSUFBYUE7b0JBQ2xCRSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUVERixnQ0FBUUEsR0FBUkE7b0JBQ0lHLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBQ0RILDBCQUEwQkE7Z0JBQzFCQSw0REFBNERBO2dCQUM1REEsMkJBQTJCQTtnQkFDM0JBLEdBQUdBO2dCQUVIQSxnQ0FBUUEsR0FBUkE7b0JBQ0lJLElBQUlBLENBQUNBLFVBQVVBLEdBQUNBLElBQUlBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBNUNMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxNQUFNQTt3QkFDZkEsUUFBUUEsRUFBQ0Esc1lBZVJBO3dCQUNEQSxVQUFVQSxFQUFDQSxDQUFDQSw0QkFBWUEsRUFBQ0EsOEJBQWFBLENBQUNBO3dCQUN2Q0EsU0FBU0EsRUFBQ0EsQ0FBQ0EsMEJBQVdBLENBQUNBO3FCQUMxQkEsQ0FBQ0E7O2tDQXlCREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQTdDQSxBQTZDQ0EsSUFBQTtZQTdDRCx5Q0E2Q0MsQ0FBQSIsImZpbGUiOiJsaXN0L2xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE5LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZXdDb21wb25lbnR9IGZyb20gXCIuL25ldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtsaXN0SXRlbX0gZnJvbSBcIi4uL2l0ZW10eXBlXCI7XHJcbmltcG9ydCB7SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxuZXctaXRlbSA+PC9uZXctaXRlbT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgbGlzdFxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgIDx1bD48bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XHJcbiAgICB7e2l0ZW0ubmFtZX19e3tpdGVtLmFtb3VudH19XHJcbiAgICA8L2xpPjwvdWw+PC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdEl0ZW0gIT1udWxsXCI+XHJcbiAgICA8aXRlbXMgW2l0ZW1dPVwic2VsZWN0SXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKClcIj5cclxuXHJcbiAgICA8L2l0ZW1zPjwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltOZXdDb21wb25lbnQsSXRlbUNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W0l0ZW1TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgIC8vIGxpc3RJdGVtcyA9IG5ldyBBcnJheTxsaXN0SXRlbT4oKTtcclxuICAgIGxpc3RJdGVtczpBcnJheTxsaXN0SXRlbT47XHJcbiAgICBzZWxlY3RJdGVtOiBsaXN0SXRlbTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2lTZXI6SXRlbVNlcnZpY2Upe31cclxuICAgIC8vb25BZGQoaXRlbTpsaXN0SXRlbSl7XHJcbiAgICAvLyAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOml0ZW0ubmFtZSxhbW91bnQ6aXRlbS5hbW91bnR9KTtcclxuICAgIC8vfVxyXG4gICAgb25TZWxlY3QoaXRlbTpsaXN0SXRlbSl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtPWl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXM9dGhpcy5faVNlci5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG4gICAgLy9vblJlbW92ZShpdGVtOmxpc3RJdGVtKXtcclxuICAgIC8vICAgIHRoaXMubGlzdEl0ZW1zLnNwbGljZSh0aGlzLmxpc3RJdGVtcy5pbmRleE9mKGl0ZW0pLDEpO1xyXG4gICAgLy8gICAgdGhpcy5zZWxlY3RJdGVtPW51bGw7XHJcbiAgICAvL31cclxuXHJcbiAgICBvblJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbT1udWxsO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
