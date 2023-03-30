import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Diasabled]'
})
export class DiasabledDirective {
  
  private loaderElement: HTMLElement | any;
    
  @Input() loaderVisible: boolean = true;
  @Input() disabled: boolean = true;

  constructor(
    private elementRef: ElementRef,
    private renderer :Renderer2,
  ) {}

  ngOnInit() {
    this.updateLoader();
  }

  ngOnChanges() {
    this.updateLoader();
  }

  private updateLoader() {
    if (this.loaderVisible) {
      this.addLoaderElement();
    } else {
      this.removeLoaderElement();
    }
  }

  private addLoaderElement() {
    if (!this.loaderElement) {
      this.loaderElement = this.renderer.createElement('kendo-loader');
      this.loaderElement.className = 'k-loader-pulsing-2 k-loader-primary k-loader-md loaderKendo';

      const div1 = this.renderer.createElement('div');
      div1.className = 'k-loader-canvas';

      const span = this.renderer.createElement('span');
      span.className = 'k-loader-segment';

      const span1 = this.renderer.createElement('span');
      span1.className = 'k-loader-segment';

      this.renderer.appendChild(div1, span);
      this.renderer.appendChild(div1, span1);
      this.renderer.appendChild(this.loaderElement, div1);

      this.renderer.appendChild(this.elementRef.nativeElement, this.loaderElement);
      // this.renderer.setProperty(this.elementRef.nativeElement,'disabled',this.disabled)
      

      // const dropdownButtonElement = this.elementRef.nativeElement.querySelector('.k-button-group > kendo-dropdownbutton');
      // if (dropdownButtonElement) {
      //   // append the loader element to the dropdown button element
      //   this.renderer.appendChild(dropdownButtonElement, this.loaderElement);
      //   // set the disabled state of the dropdown button element
      //   this.renderer.setProperty(dropdownButtonElement, 'disabled', this.disabled);
      // }
    }
  }

  private removeLoaderElement() {
    if (this.loaderElement) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.loaderElement);
      this.loaderElement = null;
    }
  }

  @HostListener('click') onClick() {
    setTimeout(() => { 
      console.log(this.elementRef.nativeElement) 
      if (this.loaderVisible) {
        this.addLoaderElement();
      } else {
        this.removeLoaderElement();
      }
    }, 10);
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


           // console.log(this.elementRef.nativeElement)
    // if (this.loaderVisible) {
    //   this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', '<div class="spin"></div>');
    // }


    //    kendoDiv.className='k-loader-pulsing-2 k-loader-primary k-loader-md k-loader k-loader-canvas k-loader-segment k-loader-segment'
      //  this.renderer.appendChild(this.elementRef.nativeElement,kendoDiv)   
        // this.loaderElement = this.renderer.createElement('span');
        // this.renderer.addClass(this.loaderElement,'spin')