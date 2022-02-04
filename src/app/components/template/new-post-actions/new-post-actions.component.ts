import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post-actions',
  templateUrl: './new-post-actions.component.html',
  styleUrls: ['./new-post-actions.component.css'],
})
export class NewPostActionsComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostActionsComponent>,
    private postService: PostsService
  ) {}

  ngOnInit(): void {}

  discard() {
    this.dialog.closeAll();
    this.postService.showMessage('Changes discard!', false);
  }

  back() {
    this.dialogRef.close();
  }
}
