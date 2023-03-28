import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

import {  Subscription } from 'rxjs';

@Directive({
  selector: '[Diasabled]'
})
export class DiasabledDirective {
  
  private loaderElement:HTMLElement | any
  
  
  private subscription: Subscription = new Subscription();
  
  @Input() loaderVisible: boolean = true;

  ngOnChanges(){
   if (!this.loaderVisible) {
      // window.alert('element clicked')
      this.renderer.removeChild(this.elementRef.nativeElement, this.loaderElement);
      this.loaderElement = null;
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer :Renderer2,
    ) {
    }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    ngOnInit(){
  
      if (this.loaderVisible) {
        this.loaderElement = this.renderer.createElement('div');
        this.renderer.addClass(this.loaderElement,'spin')
        this.renderer.appendChild(this.elementRef.nativeElement, this.loaderElement);
      }else if (this.loaderElement) {
        // window.alert('element clicked')
        this.renderer.removeChild(this.elementRef.nativeElement, this.loaderElement);
        this.loaderElement = null;
      }

     
    }

    ngAfterViewInit(): void {
    }  
    
    
    
    @HostListener('click') onClick(){
      
      setTimeout(() => {  
        console.log(this.loaderVisible)
        if (this.loaderVisible) {
          this.loaderElement = this.renderer.createElement('div');
          this.renderer.addClass(this.loaderElement,'spin')
          this.renderer.appendChild(this.elementRef.nativeElement, this.loaderElement);
        } else if (this.loaderElement) {
          // window.alert('element clicked')
          this.renderer.removeChild(this.elementRef.nativeElement, this.loaderElement);
          this.loaderElement = null;
        }
      }, 10);
    console.log(this.elementRef.nativeElement);
  }
}

// this.subscription = interval(3000)
//   .pipe(take(1))
//   .subscribe(() => {
  //     this.loaderVisible = false;
      //     this.renderer.setAttribute(this.elementRef.nativeElement,'disabled',true)
      //   });
      //   console.log(this.elementRef.nativeElement);
      // console.log(this.loaderVisible)
      
      
      
      
      
      // window.alert('element clicked')
      
      
      // if (this.loaderVisible) {
        //     this.loaderElement = this.renderer.createElement('div');
          
      //     this.renderer.addClass(this.loaderElement,'spin')
      //     this.renderer.appendChild(this.elementRef.nativeElement, this.loaderElement);
      // } else if (this.loaderElement) {
      //     this.renderer.removeChild(this.elementRef.nativeElement, this.loaderElement);
      //     this.loaderElement = null;
      // }