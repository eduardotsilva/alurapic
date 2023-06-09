
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FiltroByDescriptonPipe } from './photo-list/filtro-by-descripton.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FiltroByDescriptonPipe
  ],

  imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {




}
