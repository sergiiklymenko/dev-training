import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() sentense = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', '2rem');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '1rem');
  }

  private highlight(color: string, font: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = font;
  }

}
