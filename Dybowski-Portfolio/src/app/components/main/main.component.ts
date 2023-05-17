import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const box = document.querySelector('.about');
    const nav = document.querySelector('.navbar');

    function isInViewport(element: any) {
      const elementRect = element.getBoundingClientRect();
      return (
          elementRect.bottom >= 150
      );
    };   

    document.addEventListener('scroll', function () {
      if (isInViewport(box)) {
        nav?.classList.add('nav-OFF');
      } else {
        nav?.classList.remove('nav-OFF');
      }
    });


    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar .left-bar .list .item .icon i');

    window.onscroll = () => {
      section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('visible');
            document.querySelector('.navbar .left-bar .list .item .icon a[href*=' + id + '] i')?.classList.add('visible');
          })
        }
      })
    };
  }

}
