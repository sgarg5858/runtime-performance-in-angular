import { Component, OnInit } from '@angular/core';
import { BackendEngineer, FrontendEngineer, GetEngineersService } from '../get-engineers.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private engineerService:GetEngineersService) { }

  ngOnInit(): void {
    this.frontendEngineers=this.engineerService.getFrontendEngineers();
    this.backendEngineers=this.engineerService.getBackendEngineers();
  }
  frontendEngineers:FrontendEngineer[]=[];
  backendEngineers:BackendEngineer[]=[];

}
