import { NgModule } from '@angular/core';

import { TasksMongoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TasksMongoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TasksMongoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TasksMongoSharedCommonModule {}
