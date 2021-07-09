import { Component } from '@angular/core';
import { Books } from './books';
import { BookserviceService } from './bookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-app';
  books:Books;
  booksArray = [];


  constructor(private booksService: BookserviceService){}

  submit(){
      this.booksService.createBooks(this.books).subscribe((books)=>{
      console.log(this.books);
      this.booksService.getBooks().subscribe((res: any[])=>{
        this.booksArray= res;
      })  
    
    
    },(error)=>{
    console.log(error);
    });
  }

  update(book) {
    this.books.id = book.id;
    this.books.title = book.title;
  }
delete(id){
  this.booksService.deleteBooks(id).subscribe((books)=>{
  console.log(this.books);
  alert('Successfully deleted..!!')
  this.booksService.getBooks().subscribe((res: any[])=>{
    this.booksArray= res;
  })  

},(error)=>{
console.log(error);
});  
}
  
  ngOnInit()
 {
   this.books=this.booksService.getter();
   this.booksService.getBooks().subscribe((res: any[])=>{
    this.booksArray= res;
  })  
 }
}
