import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DbService } from './db.services';
import { PaginationModel } from './models/paringation.model';
import { Students } from './models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datatable-pager-sample';

  @ViewChild(DatatableComponent) table: DatatableComponent;

  // datatable parameters
  public columns = [];
  public rows: Students[] = [];

  // pagination values
  public pagination: PaginationModel;
  public currentPage: number = 1;
  public offset: number = 1;
  public pageSize: number = 5;

  // PageChange values
  public pageSizeLimits: number[] = [5, 10, 20, 50];

  // Fake API response
  public totalSearchResults: number = 0;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.initDatatableColumns();
    this.setPagination();
    this.getStudentData();
  }



  private setPagination(): void {
    this.pagination = {
      totalItems: this.totalSearchResults,
      pageSize: this.pageSize,
      activePage: this.currentPage,
    }
  }

  public getStudentData() {
    console.log('HAS THIS BEEN TRIGGERED ');
    this.dbService.getStudents().subscribe((students:Students[]) => {
      console.log('WHAT IS THIS ', students);
      this.rows = students;

    });
  }

  public initDatatableColumns(): void {
    this.columns = [
      {
        prop: 'id',
        name: 'id',
        sortable: false,
        display: false,
        draggable: false,
      },
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
        prop: 'email',
        name: 'Email',
        sortable: false,
        draggable: false,
      },
      {
        prop: 'gender',
        name: 'Gender',
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
