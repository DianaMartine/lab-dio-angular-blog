import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { NewPostCardComponent } from './components/template/new-post-card/new-post-card.component';
import { NewPostFormComponent } from './components/template/new-post-form/new-post-form.component';
import { NewPostActionsComponent } from './components/template/new-post-actions/new-post-actions.component';
import { PostsComponent } from './views/posts/posts.component';
import { AboutComponent } from './components/template/about/about.component';
import { SidenavInfoComponent } from './components/template/sidenav-info/sidenav-info.component';
import { PostsButtonComponent } from './views/posts-button/posts-button.component';
import { EditPostFormComponent } from './views/posts/edit-post-form/edit-post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostCardComponent,
    NewPostFormComponent,
    NewPostActionsComponent,
    PostsComponent,
    AboutComponent,
    SidenavInfoComponent,
    PostsButtonComponent,
    EditPostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
