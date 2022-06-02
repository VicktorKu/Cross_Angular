import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private XYcor = new Map();
  private XYcor1 = new Map();
  constructor() { }

  getTab(start:number, end:number, h:number):Map<number,number>{
    let x = start,
    y = 0.0;
    while(x <= end){
      y = (this.fun1(x,h)-this.fun1(x,-h))/(2*h);
      this.XYcor.set(x,y);
      x += h;
    }
    return this.XYcor;
  }
  getTab1(start:number, end:number, h:number):Map<number,number>{
    let 
    x1=start,
    y = 0.0;
    while(x1 <= end){
      y = (this.fun2(x1,h)-this.fun2(x1,-h))/(2*h);
      this.XYcor.set(x1,y);
      x1 += h;
    }
    return this.XYcor1;
  }
  getTab2(start:number, end:number, h:number):Map<number,number>{
    let 
    x1=start,
    y = 0.0;
    while(x1 <= end){
      y = (this.fun3(x1,h)-this.fun3(x1,-h))/(2*h);
      this.XYcor.set(x1,y);
      x1 += h;
    }
    return this.XYcor;
  }
  fun1(x,h){
    x+=h;
    return x*x
  }
  fun2(x,h){
    x+=h;
    return x*x*x
  }
  fun3(x,h){
    x+=h;
    return x*x*x*x
  }
}
