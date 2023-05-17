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
    const contact = document.querySelector('.footer');

    const sect3 = document.getElementById('section-3');
    const sect4 = document.getElementById('section-4');
    const sect5 = document.getElementById('section-5');
    const sect6 = document.getElementById('section-6');
    const sect7 = document.getElementById('section-7');
    const sect8 = document.getElementById('section-8');
    const sect9 = document.getElementById('section-9');
    const sect10 = document.getElementById('section-10');
    const sect11 = document.getElementById('section-11');
    const sect12 = document.getElementById('section-12');
    const sect13 = document.getElementById('section-13');
    const sect14 = document.getElementById('section-14');

    const ico_sect3 = document.querySelector('.fa-cube');
    const ico_sect4 = document.querySelector('.fa-brush');
    const ico_sect5 = document.querySelector('.fa-pencil');
    const ico_sect6 = document.querySelector('.fa-laptop-code');
    const ico_sect7 = document.querySelector('.fa-microscope');
    const ico_sect8 = document.querySelector('.fa-note-sticky');
    const ico_sect9 = document.querySelector('.fa-wine-bottle');
    const ico_sect10 = document.querySelector('.fa-chess-board');
    const ico_sect11 = document.querySelector('.fa-book-open-reader');
    const ico_sect12 = document.querySelector('.fa-chair');
    const ico_sect13 = document.querySelector('.fa-shirt');
    const ico_sect14 = document.querySelector('.fa-signature');
    const ico_contact = document.querySelector('.fa-envelope');
  
    function navIsInViewport(element: any) {
      const elementRect = element.getBoundingClientRect();
      return (
           elementRect.bottom >= 150
      );
    }

    function isInViewport(element: any) {
      const elementRect = element.getBoundingClientRect();
      // console.log(elementRect)
      return (
          elementRect.top >= -500,
          elementRect.bottom >= 150
      );
    }
  
    document.addEventListener('scroll', function () {
      if (navIsInViewport(box)) {
        // console.log("Widoczny");
        // msg!.textContent = "widoczny";
        nav?.classList.add('nav-OFF');
      } else {
        // console.log("Niewidoczny");
        nav?.classList.remove('nav-OFF');
      }

      if(isInViewport(sect3)) {
        ico_sect3?.classList.add('visible');
      }else{
        ico_sect3?.classList.remove("visible");
      }

      if(isInViewport(sect4) && (!isInViewport(sect3) || !isInViewport(sect5))) {
        ico_sect4?.classList.add('visible');
      } else if(isInViewport(sect5)){
        ico_sect4?.classList.remove("visible");
      } else if(isInViewport(sect3)) {
        ico_sect4?.classList.remove("visible");
      }

      if(isInViewport(sect5) && (!isInViewport(sect4) || !isInViewport(sect6))) {
        ico_sect5?.classList.add('visible');
      }else {
        ico_sect5?.classList.remove("visible");
      }

      if(isInViewport(sect6) && (!isInViewport(sect5) || !isInViewport(sect7))) {
        ico_sect6?.classList.add('visible');
      }else{
        ico_sect6?.classList.remove("visible");
      }

      if(isInViewport(sect7) && (!isInViewport(sect6) || !isInViewport(sect8))) {
        ico_sect7?.classList.add('visible');
      }else {
        ico_sect7?.classList.remove("visible");
      }

      if(isInViewport(sect8) && (!isInViewport(sect7) || !isInViewport(sect9))) {
        ico_sect8?.classList.add('visible');
      }else {
        ico_sect8?.classList.remove("visible");
      }

      if(isInViewport(sect9) && (!isInViewport(sect8) || !isInViewport(sect10))) {
        ico_sect9?.classList.add('visible');
      }else {
        ico_sect9?.classList.remove("visible");
      }

      if(isInViewport(sect10) && (!isInViewport(sect9) || !isInViewport(sect11))) {
        ico_sect10?.classList.add('visible');
      }else {
        ico_sect10?.classList.remove("visible");
      }

      if(isInViewport(sect11) && (!isInViewport(sect10) || !isInViewport(sect12))) {
        ico_sect11?.classList.add('visible');
      }else {
        ico_sect11?.classList.remove("visible");
      }

      if(isInViewport(sect12) && (!isInViewport(sect11) || !isInViewport(sect13))) {
        ico_sect12?.classList.add('visible');
      }else {
        ico_sect12?.classList.remove("visible");
      }

      if(isInViewport(sect13) && (!isInViewport(sect12) || !isInViewport(sect14))) {
        ico_sect13?.classList.add('visible');
      }else {
        ico_sect13?.classList.remove("visible");
      }

      if(isInViewport(sect14) && (!isInViewport(sect13) || !isInViewport(contact))) {
        ico_sect14?.classList.add('visible');
      }else {
        ico_sect14?.classList.remove("visible");
      }

      if(isInViewport(contact)) {
        ico_contact?.classList.add('visible');
      }else {
        ico_contact?.classList.remove("visible");
      }

    });
  }

}
