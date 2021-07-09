import { Injectable } from '@angular/core';
import { Books } from './books';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private books = new Books();
  private baseUrl:string="https://277jks0m43.execute-api.eu-central-1.amazonaws.com/books"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpclient : HttpClient) { }
  getBooks()
  {
    return  this.httpclient.get(`${this.baseUrl + '/getbooks'}`)
  }

  createBooks(books : Books)
  {
    return this.httpclient.post(`${this.baseUrl + '/postbooks'}`,books)
  }

  updateBooks(id, books:Books) {
    return this.httpclient.put(`${this.baseUrl + '/updatebook/' + id}`, books);
  }

  deleteBooks(id): Observable<any> {
   
    return this.httpclient.delete<any>(`${this.baseUrl + '/deletebook/' + id}`, this.httpOptions);
  }

  setter(books:Books){
    this.books=books;
  }

 getter(){
   return this.books;
 }
}
