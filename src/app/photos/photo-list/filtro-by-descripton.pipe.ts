import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({
  name: "filtroByDescripton",
})
export class FiltroByDescriptonPipe implements PipeTransform {
  transform(photos: Photo[], descriptonQuery: string) {
    descriptonQuery = descriptonQuery.trim().toLowerCase();

    if (descriptonQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptonQuery)
      );
    } else {
      return photos;
    }
  }
}
