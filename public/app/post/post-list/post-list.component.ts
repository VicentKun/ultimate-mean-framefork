import { Component} from '@angular/core';
import { MetadataService } from 'ng2-metadata';

@Component ({
	moduleId: module.id,
	selector: 'post-list',
	template: '<h3>Lista de los post</h3>' 
})

export class PostListComponent {

	private item;	

	constructor(private metadataService: MetadataService)  { 

	}

	ngOnInit() {

	    this.item = { name: 'Página Principal', description: 'Descripción de la página principal.' }//HTTP GET for "item" in the repository
	    this.metadataService.setTitle(this.item.name);
	    this.metadataService.setTag('description', this.item.description);
  	}

}