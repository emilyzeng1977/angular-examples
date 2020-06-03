import { Injectable } from '@angular/core';
import { Book } from "./book";
import { BOOKS } from "./mock-books";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = '/api/book1s';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    // return this.http.get<Book[]>(this.booksUrl);
    return this.http.get<any>('http://localhost:8083/books1');
    // return this.http.post('/api/v1/test');
    // this.http.post(this.booksUrl, this.httpOptions);
  }
}
