import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'ng2-metadata';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription } from 'rxjs';

@Component({
	moduleId: module.id,
	selector: 'my-post',
	template: '<h3>Post {{ nPost }} view.</h3>'
})

export class PostViewComponent implements OnInit {


	private item;
	private nPost:number;
	private subscription: Subscription;

	constructor(private metadataService: MetadataService, private activateRoute: ActivatedRoute,)  { 

	}

	ngOnInit() {

		//console.log(+params['id']);

		// subscribe to router event
    	this.subscription = this.activateRoute.params.subscribe( (param: any) => {

    		this.nPost = param['id'];

	        this.item = { name: 'Post', description: 'Descripción del post' }//HTTP GET for "item" in the repository

		    this.metadataService.setTitle(this.item.name + ' ' + param['id']);

		    this.metadataService.setTag('description', this.item.description + ' ' + param['id']);

      	});

	    
  	}

}