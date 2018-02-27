import {Component, Input, OnInit} from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-collapsible',
  templateUrl: './example-collapsible.component.html',
  styleUrls: ['./example-collapsible.component.scss']
})
export class ExampleCollapsibleComponent implements OnInit {
  @Input('text') text = null;
  @Input('content') content = null;
  @Input('endpoint') endpoint: AppEndPoint = null;

  public collapsed = false;

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

}
