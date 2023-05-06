import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { 


  }

  ngOnInit(): void {
    const box = document.querySelector('.about');
    const nav = document.querySelector('.navbar');
    // const msg = document.querySelector('.tex');
  
    function isInViewport(element: any) {
      const elementRect = element.getBoundingClientRect();
      // console.log(elementRect)
      return (
           elementRect.bottom >=10
      );
    }
  
    document.addEventListener('scroll', function () {
      if (isInViewport(box)) {
        // console.log("Widoczny");
        // msg!.textContent = "widoczny";
        nav?.classList.add('nav-OFF');
      } else {
        // console.log("Niewidoczny");
        nav?.classList.remove('nav-OFF');
      }
    });
  }

}
