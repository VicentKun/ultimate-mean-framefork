import { NgModule, ModuleWithProviders } from '@angular/core';

import { MetadataLoader, MetadataStaticLoader, MetadataService } from './metadata.service';

export * from '../models/page-title-positioning';
export * from '../models/metadata-settings';
export * from './metadata.service';

export function metadataLoaderFactory(): MetadataLoader {
    return new MetadataStaticLoader();
}

@NgModule()
export class MetadataModule {
    static forRoot(providedLoader: any = {
                       provide: MetadataLoader,
                       useFactory: (metadataLoaderFactory)
                   }): ModuleWithProviders {
        return {
            ngModule : MetadataModule,
            providers : [
                providedLoader,
                MetadataService
            ]
        };
    }
}