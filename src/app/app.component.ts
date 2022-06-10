import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PaginationModel } from './models/paringation.model';
import { SearchResults } from './models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatable-pager-sample';

  @ViewChild(DatatableComponent) table: DatatableComponent;

  // datatable parameters
  public columns = [];
  public rows:SearchResults[] = [];

  // pagination values
  public pagination: PaginationModel;
  public currentPage: number = 1;
  public offset: number = 1;
  public pageSize:number = 10;

  // PageChange values
  public pageSizeLimits: number[] = [5, 10, 20, 50];

  // Fake API response
  public totalSearchResults:number = 0;

  ngOnInit() {
    this.initDatatableColumns();
    this.setPagination();
  }

private setPagination(): void {
  this.pagination = {
    totalItems: this.totalSearchResults,
    pageSize: this.pageSize,
    activePage: this.currentPage,
  }
}

  public initDatatableColumns(): void {
    this.columns = [
      {
        prop: 'firstName',
        name: 'First name',
        sortable: false,
        draggable: false,
      },
      {
        prop: 'lastName',
        name: 'Last name',
        sortable: false,
        draggable: false,
      },
      {
        prop: 'age',
        name: 'Age',
        sortable: false,
        draggable: false,
      },
      {
        prop: 'location',
        name: 'Area name',
        sortable: false,
        draggable: false,
      },
    ]
  }

}
