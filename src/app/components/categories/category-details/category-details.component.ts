import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  categorySelected;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
  	this.categorySelected = this.activatedRoute.snapshot.params['category'];
  }

}