import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookstoreService } from '../bookstore.service';
import {Book} from '../book';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})

export class ViewbooksComponent implements OnInit {
  books: Array<Book> = [];

  oldestBook: Book = new Book();
  latestBook: Book = new Book();
  
  constructor(private _service: BookstoreService, private _route: Router) { }

  ngOnInit(): void {
    this.getbooks();
    this.getOldest();
    this.getLatest();
  }

  getbooks() {
    this._service.getBooksFromServer().subscribe(
    data=> this.books = data,
    )
  }

  RedirectToAddBook() {
    this._route.navigate(['/addbook'])
  }

  deleteBook(id: number) {
    this._service.deleteBook(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  getOldest() {
    this._service
      .getOldest()
      .subscribe((data) => (this.oldestBook = data));
  }

  getLatest() {
    this._service
      .getLatest()
      .subscribe((data) => (this.latestBook = data));
  }
}
