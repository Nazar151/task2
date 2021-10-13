import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Post } from '../intrerface/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private Url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpclient : HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.httpclient.get<Post[]>(this.Url)
}
}
