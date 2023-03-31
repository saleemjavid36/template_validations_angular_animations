import { Component, OnInit,Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-grid-controls',
  templateUrl: './grid-controls.component.html',
  styleUrls: ['./grid-controls.component.scss']
})
export class GridControlsComponent {
  id!:string;
  firstname!:string;
  lastname!:string;
  address!:string;
selectedDataId!:string;
  constructor( 
     ) { }
  ngOnInit(): void {
      
  }
  @Input() selectedData:any;
  @Output() isHeight=new EventEmitter<any>();
  @Output() rowselect=new EventEmitter<any>();

  ngOnChanges(changes:SimpleChanges){
if(changes['selectedData'].isFirstChange())
{
  if(changes['selectedData'].currentValue=="changes"){
 this.selectedData=changes;
 
  }
  else
  {
    this.selectedData=changes['selectedData'].previousValue
  }
}
   this.id=changes['selectedData'].currentValue.ID;
   this.firstname=changes['selectedData'].currentValue.FirstName;
   this.lastname=changes['selectedData'].currentValue.LastName;
     this.address=changes['selectedData'].currentValue.Address; 
   }
closeComponent(){
this.isHeight.emit();
}
moveOnNextRecord(){
this.rowselect.emit("Next");
}
moveOnPreviousRecord(){
  this.rowselect.emit("Previous");

}
}
