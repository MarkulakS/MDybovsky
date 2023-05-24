import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import icons  from '../icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChildren('item') itemRefs?: QueryList<ElementRef>;
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

    document.addEventListener('scroll', function () {
      if (isInViewport(box)) {
        nav?.classList.add('nav-OFF');
      } else {
        nav?.classList.remove('nav-OFF');
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

}
