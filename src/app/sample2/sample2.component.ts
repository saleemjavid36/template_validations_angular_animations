import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

// const shakeAnimation =trigger('shake',[
//   state('initial',style({transform:'translateX(0)'})),
//   transition('initial => *',[
//     animate('0.5s',style({transform:'translateX(10px)'})),
//     animate('0.5s',style({transform:'translateX(-10px)'})),
//     animate('0.5s',style({transform:'translateX(0)'})),
//   ])
// ])

const shakeAnimation =trigger('shakeAnimation',[
  state('invalid',style({
    transform:'translateX(0px)',
    borderColor:'red'
  })),

  transition('* => invalid', [
    animate('0.1s', style({ transform: 'translateX(10px)', borderColor:'red' })),
    animate('0.1s', style({ transform: 'translateX(-10px)', borderColor:'red' })),
    animate('0.1s', style({ transform: 'translateX(0px)', borderColor:'red'}))
  ]),
 
  // transition('* => valid', animate('0.10s', style())),


])

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
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  animations:[shakeAnimation,shakeAnimationPassword],
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component {
  registerForm:any =  FormGroup;

  
  constructor(private formBuilder: FormBuilder) { }
  //Form Validables 
  ngOnInit(): void {
    //login form
   //Add User form validations
   this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });
  }
  submitted = false;
  //Add user form actions
  get f() { return this.registerForm.controls; }
  
  
  onSubmit() {
    // this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
        return;
    }else{
      this.submitted = false;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      console.log("Got It")
    }
  
  }
    //login form
  
}
