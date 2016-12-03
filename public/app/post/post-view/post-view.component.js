"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_metadata_1 = require('ng2-metadata');
var router_1 = require('@angular/router');
var PostViewComponent = (function () {
    function PostViewComponent(metadataService, activateRoute) {
        this.metadataService = metadataService;
        this.activateRoute = activateRoute;
    }
    PostViewComponent.prototype.ngOnInit = function () {
        //console.log(+params['id']);
        var _this = this;
        // subscribe to router event
        this.subscription = this.activateRoute.params.subscribe(function (param) {
            _this.nPost = param['id'];
            _this.item = { name: 'Post', description: 'Descripción del post' }; //HTTP GET for "item" in the repository
            _this.metadataService.setTitle(_this.item.name + ' ' + param['id']);
            _this.metadataService.setTag('description', _this.item.description + ' ' + param['id']);
        });
    };
    PostViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-post',
            template: '<h3>Post {{ nPost }} view.</h3>'
        }), 
        __metadata('design:paramtypes', [ng2_metadata_1.MetadataService, router_1.ActivatedRoute])
    ], PostViewComponent);
    return PostViewComponent;
}());
exports.PostViewComponent = PostViewComponent;
//# sourceMappingURL=post-view.component.js.map