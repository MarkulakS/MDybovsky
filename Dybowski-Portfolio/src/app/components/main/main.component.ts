import { Component, HostListener, OnInit } from '@angular/core';
import icons  from '../icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  activeLinkId: string | null = null;
  iconList = icons;

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

    var burger = document.getElementById('hamburger');
    var list = document.getElementById('list-mobile');

    document.addEventListener('scroll', function () {
      if (isInViewport(box)) {
        nav?.classList.add('nav-OFF');
        nav?.classList.remove('nav-flex');
      } else {
        nav?.classList.remove('nav-OFF');
        nav?.classList.add('nav-flex');
      }

      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      let actualPosition = 0;

      if (burger?.classList.contains("clicked")) {
        actualPosition = scrollPositionY;
        if (actualPosition != 0) {
          burger?.classList.remove("clicked");
          list?.classList.remove("list-display-on")
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.setActiveLink();
  }

  setActiveLink() {
    const sectionElements = document.querySelectorAll('section');
    let activeLink = null;

    sectionElements.forEach((sec: HTMLElement) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        activeLink = id;
        return;
      }
    });

    this.activeLinkId = activeLink;
  }

  isLinkActive(id: string): boolean {
    return this.activeLinkId === id;
  }

  focusHamburger() {
    var burger = document.getElementById('hamburger');
    var list = document.getElementById('list-mobile');

    if (!burger?.classList.contains("clicked")) 
    {
      burger?.classList.add("clicked");
      list?.classList.add("list-display-on")
    }
    else if (burger?.classList.contains("clicked")) 
    {
      burger?.classList.remove("clicked");
      list?.classList.remove("list-display-on")
    }
  }

}
