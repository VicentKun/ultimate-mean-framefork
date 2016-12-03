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
var PostListComponent = (function () {
    function PostListComponent(metadataService) {
        this.metadataService = metadataService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.item = { name: 'Página Principal', description: 'Descripción de la página principal.' }; //HTTP GET for "item" in the repository
        this.metadataService.setTitle(this.item.name);
        this.metadataService.setTag('description', this.item.description);
    };
    PostListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post-list',
            template: '<h3>Lista de los post</h3>'
        }), 
        __metadata('design:paramtypes', [ng2_metadata_1.MetadataService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map