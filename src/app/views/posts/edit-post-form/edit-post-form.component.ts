import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/components/template/new-post-form/post-form.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.css'],
})
export class EditPostFormComponent implements OnInit {
  disabled = true;
  selectedPost!: Post;
  editedPost: Post = {
    user: '',
    title: '',
    postContent: '',
  };

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditPostFormComponent>,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.selectedPost = this.postService.getPost();
    this.loadPostToEdit();
  }

  update(): void {
    this.postService.updatePost(this.editedPost).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('Post updated!', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  cancelUpdate() {
    this.dialog.closeAll();
  }

  loadPostToEdit() {
    this.editedPost.id = this.selectedPost.id;
    this.editedPost.user = this.selectedPost.user;
    this.editedPost.title = this.selectedPost.title;
    this.editedPost.subtitle = this.selectedPost.subtitle;
    this.editedPost.postContent = this.selectedPost.postContent;
  }
}
