import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.css']
})
export class RichTextComponent implements OnInit {

  html:string="<p>Hello, world!</p>"
  public Editor = ClassicEditor;



  constructor() { }

  ngOnInit(): void {
  }

}
