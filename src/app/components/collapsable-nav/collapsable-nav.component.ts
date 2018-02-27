import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { SwaggerService } from '../../services/swagger.service';
import { CollapsableNavEndpointsModel } from '../../models/sidebar/collapsable-nav.model';

@Component({
  selector: 'app-collapsable-nav',
  templateUrl: './collapsable-nav.component.html',
  styleUrls: ['./collapsable-nav.component.scss']
})
export class CollapsableNavComponent implements OnInit, AfterContentInit {

  @Input() tag: string;
  @Input() sectionToExpand: string = null;
  @Input() endpoints: Array<CollapsableNavEndpointsModel>;

  Object = null;
  isCollapsed = true;

  constructor(private swaggerService: SwaggerService) { }

  ngOnInit() {
    this.Object = Object;
  }

  ngAfterContentInit() {
    if ( this.tag === this.sectionToExpand ) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }
}
