import { Component, Input, OnInit } from '@angular/core';
import { Engineer } from '../get-engineers.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.scss']
})
export class EngineerListComponent implements OnInit {

  @Input() heading:string="";
  @Input() engineers:Engineer[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  getSalary(jobLevel:number):number
  {
    if(jobLevel<=2) {
      if(jobLevel==0) {
      console.log(jobLevel);
        return 0;
      }
      return 1;
    }
    return this.getSalary(jobLevel-1)+this.getSalary(jobLevel-2);
  }
  delete(index:number)
  {
    console.log(index);
  }

}
