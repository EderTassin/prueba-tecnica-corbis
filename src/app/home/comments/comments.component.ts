import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  @Input() comments: Comments[] = [];
  newComment: string = "";
  collapse: boolean = true;

  ngOnInit() {
  }

  editComment(comment: Comments): void {

    console.log('Editar comentario:', comment);
  }

  deleteComment(comment: Comments) {
    this.comments = this.comments.filter(element => element.id !== comment.id)
    console.log('Eliminar comentario:', comment);
  }

  addComment(){
    const objComment: Comments = {
      id: this.comments.length + 1,
      date: new Date().toISOString(),
      author: "Autor test",
      comment: this.newComment
    }

    this.comments.push(objComment);
    console.log(this.newComment)
    this.newComment = "";
  }

  clickCollapse(){
    this.collapse = !this.collapse;
  }
}
