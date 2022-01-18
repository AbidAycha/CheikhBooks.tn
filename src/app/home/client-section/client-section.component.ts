import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.css']
})
export class ClientSectionComponent implements OnInit {

 
  clients = [
    {id: 1,comment:'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by',fullName:'Jone Mark',job:'Student',imagePath:'c1.jpg'},
    {id: 2,comment:'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by',fullName:'Jone Mark',job:'Student',imagePath:'c2.jpg'},
    {id: 3,comment:'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by',fullName:'Jone Mark',job:'Student',imagePath:'c3.jpg'}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
