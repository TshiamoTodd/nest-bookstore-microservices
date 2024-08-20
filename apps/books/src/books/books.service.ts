import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BookDto } from '@app/contracts/books/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 4.7
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      rating: 4.8
    }
  ]
  create(createBookDto: CreateBookDto) {
    const newBook: BookDto ={
      ...createBookDto,
      id: this.books.length + 1
    }

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex(book => book.id === id); 
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updateBookDto
    }

    return this.books[bookIndex];
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex(book => book.id === id);
    const removedBook = this.books[bookIndex];
    this.books = this.books.filter(book => book.id !== id);
    return removedBook;
  }
}
