import { AfterViewInit, Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loader]',

})
export class LoaderDirective implements AfterViewInit{

  
  
  constructor(
    private elementRef: ElementRef,
    private renderer :Renderer2,
    private viewContainerRef :ViewContainerRef,
    // private templateRef: TemplateRef <any>
  ) { } 
  
  @Input() loaderVisible: boolean | any;
  @Input() color: string = 'yellow';

  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement);

    // const divElement = this.renderer.createElement('div');
    // // Set the 'loader' class to the new div element
    // this.renderer.addClass(divElement, 'loader');
    // // Replace the current element with the new div element
    // this.renderer.replaceWith(this.elementRef.nativeElement.parentNode, divElement, this.elementRef.nativeElement);
    // // Create a new view from the template with the kendo-loader content
    // const viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
    // // Attach the view to the new div element
    // this.renderer.appendChild(divElement, viewRef.rootNodes[0]);

  }
  
}

// const loaderElement = this.renderer.createElement('div');
// loaderElement.innerHTML = 'hello from loaderDirective!';
// this.renderer.appendChild(this.elementRef.nativeElement,loaderElement)