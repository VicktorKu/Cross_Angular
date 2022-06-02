import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage {
  public result: Map<number,number>;
  public result1: Map<number,number>;
  public result2: Map<number,number>;

  ReceiveFromChild(event){
    this.result = event;
  }
  ReceiveFromChild1(event1){
    this.result1 = event1;
  }
  ReceiveFromChild2(event2){
    this.result2 = event2;
  }

  constructor() {}
}
