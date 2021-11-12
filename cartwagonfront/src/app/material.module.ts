import {NgModule} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:[MatInputModule, MatFormFieldModule, MatButtonModule],
  exports:[MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class MaterialModule{}
