import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Engineer } from '../get-engineers.service';
import {List} from 'immutable'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() engineers:List<Engineer>=List.of();
  delete(index:number)
  {
    console.log(index);
  }
  fibonacci(n:number):number
  {
    if(n<=2) {
      if(n==0) {
        return 0;
      }
      return 1;
    }
    return this.fibonacci(n-1)+this.fibonacci(n-2);
  }
  getSalary(jobLevel:number):number
  {
    console.log(jobLevel);
    return this.fibonacci(jobLevel);
  }
  ngOnInit(): void {
  }
  trackByName(index:number,item:Engineer)
  {
    return item.name;
  }

}
