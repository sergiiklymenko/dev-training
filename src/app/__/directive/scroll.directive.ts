import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})

export class ScrollDirective {

  @Input() condition = false;

  constructor(private el: ElementRef) {
  }


  @HostListener('scroll', ['$event']) scroll(event) {
    console.log(event);
    this.condition = this.el.nativeElement.scrollTop;
    this.showHideButton('block')
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    console.log(event);
    if (event >= 400) {
      console.log('This is event');
      this.showHideButton('block')
    }
  }

  showHideButton(action: string ) {
    this.el.nativeElement.style.display = action;
  }


}
