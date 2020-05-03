import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        MatAutocompleteModule,
        MatStepperModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        MatAutocompleteModule,
        MatStepperModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class MaterialModule { }