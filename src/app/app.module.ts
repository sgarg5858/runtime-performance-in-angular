import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { AddEngineerComponent } from './add-engineer/add-engineer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EngineerListComponent,
    AddEngineerComponent,
    ListComponent,
    SalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
