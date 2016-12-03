import { NgModule, /*enableProdMode*/ }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MetadataModule, MetadataLoader, MetadataStaticLoader, PageTitlePositioning, MetadataService } from 'ng2-metadata';


import { PostListComponent } from '../post/post-list/post-list.component';
import { PostViewComponent } from '../post/post-view/post-view.component';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/*enableProdMode();*/ // Descomentar para el modo producción

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, PostListComponent, PostViewComponent ],
  bootstrap: [ AppComponent]
})

export class AppModule { 



}