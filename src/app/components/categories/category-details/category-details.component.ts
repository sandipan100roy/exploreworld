import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  categorySelected;
  categoryDetailsList;
  categoryId;
  constructor(private activatedRoute : ActivatedRoute, 
  	private categoriesService : CategoriesService) { }

  ngOnInit() {
  	this.categorySelected = this.activatedRoute.snapshot.params['category'];
    this.categoryId = this.activatedRoute.snapshot.params['cid'];

  	this.categoriesService.getCategoryListData(this.categoryId)
  	.subscribe((data) => {
  		console.log(data);
      this.categoryDetailsList = data;
  	},
    err =>{
      console.log("Error from Server : ",err);
    });

  }

}