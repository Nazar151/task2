import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './componentUsers/users/users.component';
import { UserComponent } from './componentUsers/user/user.component';
import { HomeComponent } from './componentHome/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routing/routing";
import { PostsComponent } from './componentPosts/posts/posts.component';
import { PostComponent } from './componentPosts/post/post.component';
import { UserDetailsComponent } from './componentUsers/user-details/user-details.component';
import { PostDetailsComponent } from './componentPosts/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
