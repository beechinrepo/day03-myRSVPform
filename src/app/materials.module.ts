import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from "@angular/material"

const MATERIAL = [MatInputModule, MatButtonModule, MatIconModule, MatRadioModule, MatSelectModule, 
    MatCheckboxModule, MatDatepickerModule, MatMomentDateModule, MatToolbarModule, MatSliderModule, 
    FlexLayoutModule, MatFormFieldModule ];

@NgModule({
imports: MATERIAL,
exports: MATERIAL
})

export class MaterialModule { }

