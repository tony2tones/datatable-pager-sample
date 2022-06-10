import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PaginationModel } from './models/paringation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatable-pager-sample';

  @ViewChild(DatatableComponent) table: DatatableComponent;

  // datatable parameters
  public columns = [];
  public rows = [];

  // pagination values
  public pagination: PaginationModel;
  public currentPage: number = 1;
  public offset: number = 1;

  // PageChange values
  public pageSizeLimits: number[] = [5, 10, 20, 50];




}
