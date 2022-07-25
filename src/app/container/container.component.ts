import { Component, OnInit } from '@angular/core';
import { BackendEngineer, Engineer, FrontendEngineer, GetEngineersService } from '../get-engineers.service';
import {List} from 'immutable'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private engineerService:GetEngineersService) { }

  ngOnInit(): void {
    this.frontendEngineers=List(this.engineerService.getFrontendEngineers());
    this.backendEngineers=List(this.engineerService.getBackendEngineers());
  }
  frontendEngineers:List<FrontendEngineer>=List.of();
  backendEngineers:List<BackendEngineer>=List.of();

  addFrontend(engineer:Engineer)
  {
   this.frontendEngineers = this.frontendEngineers.unshift({...engineer,domain:'Frontend'});
  }
  addBackend(engineer:Engineer)
  {
   this.backendEngineers= this.backendEngineers.unshift({...engineer,domain:'Backend'});
  }
}
