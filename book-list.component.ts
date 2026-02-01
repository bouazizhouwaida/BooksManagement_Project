// src/app/components/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibraryService } from '../../services/library.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  errorMessage: string = '';

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: () => this.errorMessage = 'Erreur lors de la récupération des livres.'
    });
  }
}
