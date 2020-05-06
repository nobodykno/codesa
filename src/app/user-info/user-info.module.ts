import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutingModule } from './user-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserInfoRoutingModule
  ],
  declarations: [UserInfoComponent],
  exports: [UserInfoComponent],
  providers: []
})
export class UserInfoModule {}
