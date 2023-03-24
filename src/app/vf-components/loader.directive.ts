import { AfterViewInit, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loader]'
})
export class LoaderDirective implements AfterViewInit{

  
  
  constructor(private elementRef:ViewContainerRef) { }
  @Input() color : string='yellow'
    ngAfterViewInit(): void {

    console.log(this.elementRef)

  }

}
