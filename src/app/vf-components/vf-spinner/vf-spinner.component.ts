import { Component } from '@angular/core';

@Component({
  selector: 'vf-spinner',
  templateUrl: './vf-spinner.component.html',
  styleUrls: ['./vf-spinner.component.scss']
})
export class VfSpinnerComponent {
  public loaderVisible = false;

  public onButtonClick(): void {
    this.loaderVisible = !this.loaderVisible;
    if (this.loaderVisible){
      // alert("SuccessFUlly adde")
    }
  }
}
