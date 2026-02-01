// book-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Ajout de l'importation
import { CommonModule } from '@angular/common';
import { LibraryService } from '../../services/library.service';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book | undefined;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;
    
    if (id !== null) {
      this.libraryService.getBookById(id).subscribe({
        next: (data) => this.book = data,
        error: () => this.errorMessage = 'Erreur lors de la récupération du livre.'
      });
    } else {
      this.errorMessage = 'ID de livre invalide.';
    }
  }

}
