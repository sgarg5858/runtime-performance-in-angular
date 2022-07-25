import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Engineer } from '../get-engineers.service';
import {List} from 'immutable'
@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EngineerListComponent implements OnInit {

  @Input() heading:string="";
  @Input() engineers:List<Engineer>=List.of();
  @Output() addEngineer = new EventEmitter<Engineer>();
  constructor() { }

  ngOnInit(): void {
  }
  
  delete(index:number)
  {
    console.log(index);
  }
  add(engineer:Engineer)
  {
    this.addEngineer.emit(engineer);
  }

}
