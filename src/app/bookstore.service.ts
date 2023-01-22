
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookstoreService {

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any> {
    return this._http.get<any>("http://localhost:8081/bookStore")
  }
  addBook(book: Book):Observable<any> {
    return this._http.post<any>("http://localhost:8081/bookStore", book)
  }
  deleteBook(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8081/bookStore/${id}`);
  }
  getOldest(): Observable<any> {
    return this._http.get<any>('http://localhost:8081/bookStore/get/oldest');
  }
  getLatest(): Observable<any> {
    return this._http.get<any>(
      'http://localhost:8081/bookStore/get/latest'
    );
  }
}
