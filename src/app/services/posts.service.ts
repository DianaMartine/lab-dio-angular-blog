import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Post } from '../components/template/new-post-form/post-form.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public baseUrl: string = 'http://localhost:3001/posts';
  public selectedPost: Post[] = [];

  private _postHandler!: Post;

  getPost(): Post {
    return this._postHandler;
  }

  setPost(post: Post) {
    this._postHandler = post;
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  deletePost(id: string): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Post>(url);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-success'] : ['msg-error'],
    });
  }
}
