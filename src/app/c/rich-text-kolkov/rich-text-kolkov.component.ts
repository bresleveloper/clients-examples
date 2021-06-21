import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rich-text-kolkov',
  templateUrl: './rich-text-kolkov.component.html',
  styleUrls: ['./rich-text-kolkov.component.css']
})
export class RichTextKolkovComponent implements OnInit {

  constructor() { }

  htmlContent:FormControl;

  ngOnInit(): void {
  }

}
