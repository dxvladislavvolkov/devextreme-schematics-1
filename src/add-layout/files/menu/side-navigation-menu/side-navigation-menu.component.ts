import { Component, NgModule, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './side-navigation-menu.component.html',
    styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent {
    @ViewChild(DxTreeViewComponent)
    menu: DxTreeViewComponent;

    @Output()
    selectedItemChanged = new EventEmitter<string>();

    @Input()
    items: any[];

    @Input()
    set selectedItem(value: String) {
        if (this.menu.instance) {
            this.menu.instance.selectItem(value);
        }
    }

    private _compactMode = false;
    @Input()
    get compactMode() {
        return this._compactMode;
    }
    set compactMode(val) {
        this._compactMode = val;
        if (val && this.menu.instance) {
            this.menu.instance.collapseAll();
        }
    }

    constructor() { }

    onItemSelectionChanged(event) {
        this.selectedItemChanged.emit(event);
    }
}

@NgModule({
    imports: [ CommonModule, DxTreeViewModule ],
    declarations: [ SideNavigationMenuComponent ],
    exports: [ SideNavigationMenuComponent ]
})
export class SideNavigationMenuModule { }
