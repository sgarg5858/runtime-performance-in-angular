import { Injectable } from '@angular/core';

export class Engineer{
  name:string="";
  age:number=0;
  jobLevel:number=0;
  salary:number=0;
  constructor(name:string,age:number,jobLevel:number)
  {
    this.name=name;
    this.age=age;
    this.jobLevel=jobLevel;
    
  }
}
export class FrontendEngineer extends Engineer{
  readonly domain:string="Frontend"
}
export class BackendEngineer extends Engineer{
  readonly domain:string="Backend"
}

@Injectable({
  providedIn: 'root'
})
export class GetEngineersService {

  constructor() { }

  getFrontendEngineers()
  {
    let frontendEngineers=[];
    for(let i=0;i<100;i++)
    {
      frontendEngineers.push(new FrontendEngineer(`FE-${i+1}`,20+(i%10),Math.trunc(30*Math.random())))
    }
    return frontendEngineers;
  }
  getBackendEngineers()
  {
    let backendEngineers=[];
    for(let i=0;i<100;i++)
    {
      backendEngineers.push(new BackendEngineer(`BE-${i+1}`,20+(i%10),Math.trunc(30*Math.random())))
    }
    return backendEngineers;
  }
}
