System.register(['angular2/core', '../Services/resource.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, resource_service_1;
    var StandupsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            StandupsComponent = (function () {
                function StandupsComponent(_resourceService) {
                    this._resourceService = _resourceService;
                    this.selectedResource = "test";
                    this.header = "Team Report";
                }
                StandupsComponent.prototype.ngOnInit = function () {
                    this.availableResources = this._resourceService.getResources();
                };
                StandupsComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-standups',
                        templateUrl: 'app/Standup/standups.component.html',
                        providers: [resource_service_1.ResourceService]
                    }), 
                    __metadata('design:paramtypes', [resource_service_1.ResourceService])
                ], StandupsComponent);
                return StandupsComponent;
            }());
            exports_1("StandupsComponent", StandupsComponent);
        }
    }
});
//# sourceMappingURL=standups.component.js.map