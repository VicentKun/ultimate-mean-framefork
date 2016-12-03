import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetadataModule, MetadataLoader, MetadataStaticLoader, PageTitlePositioning, MetadataService } from 'ng2-metadata';


import { AppComponent } from './app.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { PostViewComponent } from '../post/post-view/post-view.component';

const routes: Routes = [
	//{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
	{ 
		path: '', 
		component: PostListComponent,
		
	},
	{ 
		path: 'inicio', 
		component: PostListComponent,
		
	},
	{ 
		path: 'ver-post/:id', 
		component: PostViewComponent, 
		
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes), MetadataModule.forRoot() ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {

	

}