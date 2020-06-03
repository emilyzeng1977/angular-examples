import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.bookService.getBooks()
    //   .subscribe(books => this.books = heroes.slice(1, 5));
  }
}
