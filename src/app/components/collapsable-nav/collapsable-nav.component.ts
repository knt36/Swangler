import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SwaggerService } from '../../services/swagger.service';

@Component({
  selector: 'app-collapsable-nav',
  templateUrl: './collapsable-nav.component.html',
  styleUrls: ['./collapsable-nav.component.scss']
})
export class CollapsableNavComponent implements OnInit {

  @Input() routes: Object;
  @Input() tag: string;
  Object = null;
  isCollapsed = false;

  constructor(private swaggerService: SwaggerService) { }

  ngOnInit() {
    this.Object = Object;
  }

  collapsed(event: any): void {
  }

  expanded(event: any): void {
  }

}
