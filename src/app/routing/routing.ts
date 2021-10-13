import { Routes } from "@angular/router";
import {HomeComponent} from "../componentHome/home/home.component";
import { PostDetailsComponent } from "../componentPosts/post-details/post-details.component";
import {PostsComponent} from "../componentPosts/posts/posts.component";
import { UserDetailsComponent } from "../componentUsers/user-details/user-details.component";
import {UsersComponent} from "../componentUsers/users/users.component";
import {PostsResolveService} from "../services/posts-resolve.service";
import {UsersResolveService} from "../services/users-resolve.service";

export let routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, resolve: {data: UsersResolveService},
  children: [{path: ':id', component: UserDetailsComponent}]
  },
  {path: 'posts', component: PostsComponent, resolve: {data: PostsResolveService},
    children: [{path: ':id', component: PostDetailsComponent }]

  },


]
