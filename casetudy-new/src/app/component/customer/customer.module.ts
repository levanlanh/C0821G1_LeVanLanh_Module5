import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
    declarations: [CreateComponent, ListComponent, DeleteComponent, EditComponent],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ]
})
export class CustomerModule { }
