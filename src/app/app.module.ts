import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
// import { AddBlogComponent } from './add-blog/add-blog.component';
// import { AddConnectionsComponent } from './add-connections/add-connections.component';
import { ConnectionsComponent } from './connections/connections.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FeedComponent } from './feed/feed.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectFollowersComponent } from './select-followers/select-followers.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    // AddBlogComponent,
    // AddConnectionsComponent,
    ConnectionsComponent,
    EditPostComponent,
    EditProfileComponent,
    FeedComponent,
    FollowersComponent,
    FollowingComponent,
    LoginComponent,
    LogoutComponent,
    MyAccountComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    SelectFollowersComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
