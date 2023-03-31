import { Component, OnInit, Input ,ViewEncapsulation, Output} from '@angular/core';
import { RowArgs, RowSelectedFn, SelectableSettings, SelectionEvent } from '@progress/kendo-angular-grid';
import { Users } from '../users';

@Component({
  selector: 'app-grid-kendo',
  templateUrl: './grid-kendo.component.html',
  styleUrls: ['./grid-kendo.component.scss']
})
export class GridKendoComponent {
  name:any;
  //SecondGrid:any;
  //Data:any[]=[];
  rowIndex:any;
 selected!:any;
  opened:boolean=false;
  gridData:any[]=Users;
 isHeight:any; 
  constructor() { }
  ngOnInit(): void {
this.isHeight=true;
   }
   cellClickHandler(event:any){
  this.opened=true 
  this.isHeight=false;
  this.selected=event.dataItem;
  this.rowIndex=event.rowIndex;
  //this.name=this.gridData.valueOf();
  console.log(this.name);
// for(let rowIndex=0;rowIndex<this.gridData.length;rowIndex++){
//   this.SecondGrid=this.Data.push(this.gridData[rowIndex]);
// }
// console.log(this.SecondGrid);
  
  //this.FullName=event.dataItem.FirstName+' '+event.dataItem.LastName;
  
   }
   ReSize(){
    this.isHeight=true;
   }
  changeSelection(ev:any){
if(ev=='Previous'&&this.rowIndex>0){
  this.rowIndex=this.rowIndex-1;
  this.selected=this.gridData[this.rowIndex];
}
else if(ev=='Next'&&this.rowIndex<this.gridData.length){
this.rowIndex=this.rowIndex+1;
this.selected=this.gridData[this.rowIndex];
}
  }
}
