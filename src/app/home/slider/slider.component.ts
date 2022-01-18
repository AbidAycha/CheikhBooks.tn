import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 
  imagePath="/src/assets/sliderimg.png";
  sliders = [
    {id: 2, text1:' Bostorek Bookstore22222222222',text2:'For All Your',text3:'Reading Needs',text4:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',imagePath:'sliderimg.png'},
    {id: 3, text1:' Bostorek Bookstore3333333',text2:'For All Your',text3:'Reading Needs',text4:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',imagePath:'sliderimg.png'},
    {id: 4, text1:' Bostorek Bookstore4444444444',text2:'For All Your',text3:'Reading Needs',text4:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',imagePath:'sliderimg.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
