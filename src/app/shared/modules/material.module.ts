import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
