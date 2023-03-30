import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';


import {
  LoaderType,
  LoaderThemeColor,
  LoaderSize,
} from "@progress/kendo-angular-indicators";

const shakeAnimation = trigger('shakeAnimation', [
  state('invalid', style({
    transform: 'translateX(0px)',
    borderColor: 'red'
  })),
  state('invalid', style({
    transform: 'translateX(0px)',
  })),
  transition('* => invalid', [
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor: 'red' })),
    animate('0.1s', style({ transform: 'translateX(0px)', borderColor: 'red' })),
  ]),
  transition('invalid => *', [
    animate('0.1s', style({ transform: 'translateX(0px)'})),
  ])
]);


const shakeAnimationPassword =trigger('shakeAnimationPassword',[
  state('invalid',style({
    transform:'translateX(0px)',
    borderColor:'red'
  })),
  
  
  transition('* => invalid', [
    animate('0.1s', style({ transform: 'translateX(10px)' , borderColor:'red'})),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor:'red' })),
    animate('0.1s', style({ transform: 'translateX(0px)', borderColor:'red' }))
  ]),
])

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  animations:[shakeAnimation],
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  
  valid:boolean=false;
  loaderVisible = true;
  disabled = true;

   // public loaderVisible = true;

   constructor(){
    
   }


   ngOnInit(){
    this.timeout()
   }

   timeout(){
    setTimeout(()=>{
       this.loaderVisible=false
       this.disabled=false
    }, 2000);
  }

  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  
  onSubmit(event:any): void {
  //  console.log(JSON.stringify(this.form, null, 2));

    if (event.valid) {
     this.valid=true
    } else {
      this.valid=false
      setTimeout(() => {
        this.valid=true
      }, 400);
    }
  }
   
 
  
// ngDoCheck(){
//   console.log(this.loaderVisible)
// }

  onReset(form: NgForm): void {
    form.reset();
  }

  public onButtonClick(): void {
    this.loaderVisible = !this.loaderVisible;
    this.disabled = !this.disabled;
  }

}
