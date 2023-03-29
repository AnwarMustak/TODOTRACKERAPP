import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { ArchiveTaskComponent } from './archive-task/archive-task.component';

import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';

import {NgxPaginationModule} from 'ngx-pagination';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTooltipModule} from '@angular/material/tooltip';



import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirstPageComponent } from './first-page/first-page.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SignupComponent } from './signup/signup.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    ViewTaskComponent,
    AddTaskComponent,
    SearchTaskComponent,
    ArchiveTaskComponent,
    ErrorPageComponent,
    HeaderComponent,
    FirstPageComponent,
    FooterComponent,
    SidenavbarComponent,
    SignupComponent,
    ViewProfileComponent,
    ModifyTaskComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxPaginationModule
    

  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
