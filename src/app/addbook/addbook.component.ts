import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  book: Book = new Book();

  constructor(private _service: BookstoreService, private _route: Router) {}

  addbookFormSubmit() {
    this._service
      .addBook(this.book)
      .subscribe((data) => console.log(data));
    this._route.navigate(['/']);
  }

}
