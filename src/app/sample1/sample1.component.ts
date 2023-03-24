import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';


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
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  // animations:[shakeAnimation,shakeAnimationPassword],
  animations:[shakeAnimation],
  styleUrls: ['./sample1.component.scss']
})

// trigger('shake',[
//   state('true', style({})),
//   state('false', style({})),
//   transition('* => true', useAnimation(shake)),
  
// ])
export class Sample1Component {

  valid:boolean=false;


  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  onSubmit(event:any): void {
    console.log(JSON.stringify(this.form, null, 2));

    if (event.valid) {
     console.log(event.status)
     this.valid=true
    } else {
      console.log(event.status)
      console.log(event)
      this.valid=false
      setTimeout(() => {
        this.valid=true
      }, 400);
    }
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}

