import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/template/about/about.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NewPostActionsComponent } from './components/template/new-post-actions/new-post-actions.component';
import { NewPostCardComponent } from './components/template/new-post-card/new-post-card.component';
import { NewPostFormComponent } from './components/template/new-post-form/new-post-form.component';
import { SidenavInfoComponent } from './components/template/sidenav-info/sidenav-info.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostsButtonComponent } from './views/posts-button/posts-button.component';
import { EditPostFormComponent } from './views/posts/edit-post-form/edit-post-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    NewPostActionsComponent,
    NewPostCardComponent,
    NewPostFormComponent,
    SidenavInfoComponent,
    PostsComponent,
    PostsButtonComponent,
    EditPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
