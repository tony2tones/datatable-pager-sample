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
  public totalResults: number = 0;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.initDatatableColumns();
    this.setPagination();
    this.getStudentData();
  }



  private setPagination(): void {
    console.log('triggered');
    this.pagination = {
      totalItems: this.totalResults,
      pageSize: this.pageSize,
      activePage: this.currentPage,
    }
  }

  public getStudentData() {
    this.dbService.getStudents().subscribe((students:Students[]) => {
      console.log('WHAT IS THIS ', students);
      this.rows = students;
      this.totalResults = this.rows.length;

    });
  }

  public onPageChange(page:number) {
    console.log('THE PAGE ',page);
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
