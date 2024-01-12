import {
  AfterViewInit,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'child-host',
  template: `
    <ng-container #container></ng-container>
  `
})
export class ChildHostComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) vcRef: ViewContainerRef;
  @Input() nodes: TreeNode[];
  @Input() templates: any;
  @Input() treeModel: TreeModel;
  @Input() treeNodeCollectionType: Type<any>;

  public ngAfterViewInit(): void {
    const comp = this.vcRef.createComponent(this.treeNodeCollectionType);
    comp.setInput('nodes', this.nodes);
    comp.setInput('templates', this.templates);
    comp.setInput('treeModel', this.treeModel);
  }
}

@Component({
  selector: 'tree-node-children',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      <div
        [class.tree-children]="true"
        [class.tree-children-no-padding]="node.options.levelPadding"
        *treeAnimateOpen="
          node.isExpanded;
          speed: node.options.animateSpeed;
          acceleration: node.options.animateAcceleration;
          enabled: node.options.animateExpand
        "
      >
        <child-host
          *ngIf="node.children"
          [nodes]="node.children"
          [templates]="templates"
          [treeModel]="node.treeModel"
          [treeNodeCollectionType]="treeNodeCollectionType"
        >
        </child-host>
        <tree-loading-component
          [style.padding-left]="node.getNodePadding()"
          class="tree-node-loading"
          *ngIf="!node.children"
          [template]="templates.loadingTemplate"
          [node]="node"
        ></tree-loading-component>
      </div>
    </ng-container>
  `
})
export class TreeNodeChildrenComponent {
  @Input() node: TreeNode;
  @Input() templates: any;
  @Input() treeNodeCollectionType: Type<any>;
}
