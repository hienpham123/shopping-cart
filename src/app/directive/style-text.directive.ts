import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleText]',
})
export class StyleTextDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'pink';
  }
}
