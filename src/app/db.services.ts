import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }


  public getStudents() {
    return this.httpClient.get(`${this.baseUrl}/students`);
  }
}
