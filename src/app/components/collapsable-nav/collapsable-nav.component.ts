import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SwaggerService } from '../../services/swagger.service';
import { CollapsableNavEndpointsModel } from '../../models/sidebar/collapsable-nav.model';

@Component({
  selector: 'app-collapsable-nav',
  templateUrl: './collapsable-nav.component.html',
  styleUrls: ['./collapsable-nav.component.scss']
})
export class CollapsableNavComponent implements OnInit {

  @Input() tag: string;
  @Input() endpoionts: Array<CollapsableNavEndpointsModel>;

  Object = null;
  isCollapsed = false;

  constructor(private swaggerService: SwaggerService) { }

  ngOnInit() {
    this.Object = Object;
  }

}
