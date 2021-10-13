import { Component, OnInit } from '@angular/core';
import {Post} from "../../intrerface/Post";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post : Post

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      this.post = this.router.getCurrentNavigation()?.extras.state as Post
    })
  }

  ngOnInit(): void {
  }

}
