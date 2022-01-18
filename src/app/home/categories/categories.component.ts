import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  categories = [
  
    {id: 1,name:' Textbooks',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat1.png'},
    {id: 2,name:' Science',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat2.png'},
    {id: 3,name:'  History',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat3.png'},
    {id: 4,name:' Biography',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat4.png'},
    {id: 5,name:' Adventure',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat5.png'},
    {id: 6,name:' Fantasy',des:'fact that a reader will be distracted by the readable content of a page when looking at its layout.Thepoint of using',imagePath:'cat6.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
