import { Component } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent {
  focus = `<tree-root [nodes]="nodes" [focused]="true" [options]="options"></tree-root>`;
}
