import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../intrerface/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.postsService.getPost().subscribe(value => this.posts = value)
  }

}
