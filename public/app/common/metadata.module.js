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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var metadata_service_1 = require('./metadata.service');
__export(require('../models/page-title-positioning'));
__export(require('./metadata.service'));
function metadataLoaderFactory() {
    return new metadata_service_1.MetadataStaticLoader();
}
exports.metadataLoaderFactory = metadataLoaderFactory;
var MetadataModule = (function () {
    function MetadataModule() {
    }
    MetadataModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: metadata_service_1.MetadataLoader,
            useFactory: (metadataLoaderFactory)
        }; }
        return {
            ngModule: MetadataModule,
            providers: [
                providedLoader,
                metadata_service_1.MetadataService
            ]
        };
    };
    MetadataModule = __decorate([
        core_1.NgModule(), 
        __metadata('design:paramtypes', [])
    ], MetadataModule);
    return MetadataModule;
}());
exports.MetadataModule = MetadataModule;
//# sourceMappingURL=metadata.module.js.map