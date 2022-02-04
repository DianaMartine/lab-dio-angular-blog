import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-button',
  templateUrl: './posts-button.component.html',
  styleUrls: ['./posts-button.component.css'],
})
export class PostsButtonComponent implements OnInit {
  liked = false;
  unliked = false;

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.liked = !this.liked;
    this.unliked = false;
  }

  unlike() {
    this.unliked = !this.unliked;
    this.liked = false;
  }
}
