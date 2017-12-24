import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

tagList:any = [
  { name : 'Introduction', link : 'html-intro' },
  { name : 'Doctype', link : 'tag-doctype' }]

  constructor() { }

  ngOnInit() {
  }

}
