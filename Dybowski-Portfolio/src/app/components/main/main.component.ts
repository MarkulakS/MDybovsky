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
    // const msg = document.querySelector('.tex');
  
    function isInViewport(element: any) {
      const elementRect = element.getBoundingClientRect();
      // console.log(elementRect)
      return (
          elementRect.top <= 100
      );
    }
  
    document.addEventListener('scroll', function () {
      if (isInViewport(box)) {
        // console.log("Widoczny");
        // msg!.textContent = "widoczny";
      } else {
        // console.log("Niewidoczny");
        // msg!.textContent = "niewidoczny";
      }
    });
  }

}
