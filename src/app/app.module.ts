import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { PopupComponent } from './c/popup/popup.component';
import { RichTextComponent } from './c/rich-text/rich-text.component';
import { RichTextKolkovComponent } from './c/rich-text-kolkov/rich-text-kolkov.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    RichTextComponent,
    RichTextKolkovComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
