import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})

export class ScrollDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    // this.el.nativeElement.style.display = 'none';
  }

  @HostListener('click', ['$event']) onClick($event) {
    window.scroll(0, 0);
    console.info('clicked: ' + $event);
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {

    console.log(document.documentElement.scrollTop);
    this.showHideButton(document.documentElement.scrollTop >= 400);
  }

  showHideButton(action: boolean) {
    this.el.nativeElement.style.display = action ? 'block' : 'none';
  }

}
