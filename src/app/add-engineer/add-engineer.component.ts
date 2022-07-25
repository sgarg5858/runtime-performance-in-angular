import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Engineer } from '../get-engineers.service';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddEngineerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() add = new EventEmitter<Engineer>();
  engineerName=new FormControl('',[Validators.required])
  addEngineer()
  {
    let engineer = new Engineer(this.engineerName.value,25,30*Math.random());
    this.add.emit(engineer);
  }
}
