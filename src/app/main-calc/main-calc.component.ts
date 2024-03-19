import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-calc',
  templateUrl: './main-calc.component.html',
  styleUrls: ['./main-calc.component.css']
})
export class MainCalcComponent implements OnInit {

  calcout:string = '';
  IgnoreArr:any = ['Error', 'Infinity', 'NaN'];

  crntYr:string = '';

  uodateUE(){
    const crntYear = new Date();
    const crntYear1 = crntYear.getFullYear();
    if(crntYear1 == 2024){
      this.crntYr = ''+crntYear1;
    }else{
      this.crntYr = '2024 - '+crntYear1;
    }
  }

  subVal(num:string){

    if(num == 'cc'){
      this.calcout = '';
    }else if(num == 'c'){
      this.calcout = this.calcout.slice(0, -1);
    }else if(num == '='){
      try {
        this.calcout = eval(this.calcout);        
      } catch (error) {
        console.log('A'+error);
        alert(error);
        this.calcout = 'Error';
      }
    }else{
      if(this.calcout == 'Error' || this.calcout == 'Infinity' || this.calcout == 'NaN'){
        this.calcout  = '';
        this.calcout  = this.calcout +num;
      }else{
        this.calcout  = this.calcout +num;
      }
    }

  }

  constructor(){
    this.uodateUE();
  }
  ngOnInit(): void {
      
  }

}
