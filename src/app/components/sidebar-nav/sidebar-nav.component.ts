import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SidebarNavModel } from '../../models/sidebar/sidebar-nav.model';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit, OnChanges {

  @Input() tags: SidebarNavModel[];
  @Input() sectionToExpand: string = null;

  arrayOfTags: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tags && changes.tags.currentValue) {
      this.arrayOfTags = Object.keys(changes.tags.currentValue).map(function (key) {
         return {
           'tagName': key,
           'tagValue': changes.tags.currentValue[key]
          };
        });
    }
  }
}
