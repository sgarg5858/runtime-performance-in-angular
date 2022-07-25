import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.scss']
})
export class AddEngineerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  engineerName=new FormControl('',[Validators.required])
  addEngineer()
  {
    console.log(this.engineerName)
  }
}
