import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Order';
  isDisabled =true;
  src='https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png';
  FirstName='Jon';
  LastName ='snow';
  car = ['Toyota', 'BMW', 'Honda', 'Ford', 'Nissan'];
  isPresent:boolean = true;

  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }

  incrementquantity(){
    this.clickCount= ++this.clickCount;
  }
  decrementquantity(){
    this.clickCount= --this.clickCount;
  }

  value = "";
  handleInput(event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  val="";
handleInput1(element) {
  this.val=element.value;
}
value2="";

closeLabel="close";
getColspan() {
   return "2"
}


}

