import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {
  isHover:Boolean
  @Input() index:number;
  constructor() { 
    this.isHover=false;
    this.index=0;
  }

  ngOnInit(): void {
  }
  mouseLeaveAction():void{
    this.isHover=false;
  }
  mouseEnterAction():void{
    this.isHover=true
  }
}
