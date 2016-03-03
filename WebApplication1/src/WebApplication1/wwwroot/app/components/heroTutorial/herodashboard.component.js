System.register(["angular2/core", "angular2/src/common/directives/core_directives"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_directives_1;
    var HeroDashBoardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_directives_1_1) {
                core_directives_1 = core_directives_1_1;
            }],
        execute: function() {
            HeroDashBoardComponent = (function () {
                function HeroDashBoardComponent() {
                }
                HeroDashBoardComponent.prototype.ngOnInit = function () {
                };
                HeroDashBoardComponent = __decorate([
                    core_1.Component({
                        selector: 'herodashboard',
                        template: '<h3>My Dashboard</h3>',
                        //templateUrl: 'partial/herodashboard',
                        directives: [core_directives_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDashBoardComponent);
                return HeroDashBoardComponent;
            })();
            exports_1("HeroDashBoardComponent", HeroDashBoardComponent);
        }
    }
});
//# sourceMappingURL=herodashboard.component.js.map