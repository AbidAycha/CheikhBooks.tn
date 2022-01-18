import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {

  blogs = [
    {id: 1, date:'19 January 2021',text1:' Eius, dolor? Vel velit sed doloremque',text2:'Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro',imagePath:'b1.jpg'},
    {id: 2, date:'19 January 2021',text1:' Eius, dolor? Vel velit sed doloremque',text2:'Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro',imagePath:'b2.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
