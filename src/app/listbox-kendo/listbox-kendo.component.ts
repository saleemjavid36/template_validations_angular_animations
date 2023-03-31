import { Component } from '@angular/core';
import { ListBoxSize } from '@progress/kendo-angular-listbox/size';
import { ListBoxToolbarConfig } from '@progress/kendo-angular-listbox/toolbar';

@Component({
  selector: 'app-listbox-kendo',
  templateUrl: './listbox-kendo.component.html',
  styleUrls: ['./listbox-kendo.component.scss']
})
export class ListboxKendoComponent {
  // public europeanCountries: string[] = [
  //   "Germany",
  //   "France",
  //   "Austria",
  //   "Belgium",
  //   "Denmark",
  //   "Netherlands",
  // ];
  // public asianCountries: string[] = [
  //   "China",
  //   "India",
  //   "Indonesia",
  //   "Nepal",
  //   "Thailand",
  //   "Yemen",
  // ];


  listArray:any[]=[];
  europeanCountries1:any[]=[];
  checklist:any[]=[];
 checkedItems!:any[];
  constructor(){
  }
  europeanCountries:any[]=[  
    "Germany",
    "France",
    "Austria",
    "Belgium",
    "Denmark",
    "Netherlands",
    "china",
    "bangladesh"
  ]
  // europeanCountries=[
  //   {
  //     countryName: "Albania",
  //     value: 0,
  //   },
  //   {
  //     countryName: "Andorra",
  //     value: 1,
  //   },
  //   {
  //     countryName: "Armenia",
  //     value: 2,
  //   },
  //   {
  //     countryName: "india",
  //     value: 2,
  //   },
  // ]
  public ListBoxToolbarConfig :ListBoxToolbarConfig={
         position:'right',
         tools:["moveDown","moveUp","transferTo","transferFrom","transferAllFrom","transferAllTo"]
       }
  public Size: ListBoxSize = "large";
  public dataItem( europeanCountries:string[]):any{
         return  europeanCountries;
      }
  // public dataItem(item:{countryName:string,value:number}):any{
  //   return item.countryName;
  // }
      MoveToNext(checkbox:any)
      {
        // if(!this.checklist.includes(checkbox)){  
         this.checklist.push(checkbox);
         //} 
      }  
      SendDataToList(event:any,checklist:any){
              if(event=="transferFrom"){
         let newArray=structuredClone(checklist);
         this.checkedItems=newArray;
                   for(let i = 0; i < this.europeanCountries.length; i++) {  
          for(let j = 0; j < checklist.length; j++) {
          if(this.europeanCountries[i]===checklist[j]){
       this.europeanCountries=this.europeanCountries.filter(item=>!checklist.includes(item));
          }
        }
  
            }
            // return false;

           }
      else if(event=="transferTo"){
        debugger;
        let rightCheckedArray=this.listArray.filter(item=>!this.europeanCountries.includes(item))
        console.log(rightCheckedArray);
      this.europeanCountries=this.europeanCountries.concat(rightCheckedArray);
     
      this.checkedItems=this.checkedItems.filter(item=>!this.listArray.includes(item))
      }
      // else if(event=="transferTo"){
      //   debugger;
      //   let rightCheckedArray=structuredClone(this.listArray);
      //   console.log(rightCheckedArray);
      //   this.europeanCountries=this.europeanCountries.concat(rightCheckedArray);
      //   this.checkedItems=this.checkedItems.filter(item=>!this.listArray.includes(item))
      // }
  }
   public  DataItem(checkedItems:string[]):any{
    return checkedItems;
   }
  public  MoveToPreviousList(checkbox:any){
   // if(!this.listArray.includes(checkbox)){
this.listArray.push(checkbox);
//} 
console.log(this.listArray);
   }
   
ngOnInit(): void {
}
}
