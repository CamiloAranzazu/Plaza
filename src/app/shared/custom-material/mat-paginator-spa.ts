import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
//import { MatPaginatorIntl } ;
//import { TranslateService } from "@ngx-translate/core";
@Injectable()
export class MatPaginatorIntlSpa extends MatPaginatorIntl {
    itemsPerPageLabel = 'Items por página:';
    nextPageLabel     = 'Siguiente';
    previousPageLabel = 'Anterior';
  
    getRangeLabel = function (page, pageSize, length) {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return startIndex + 1 + ' a ' + endIndex + ' de ' + length;
    };
  
  }