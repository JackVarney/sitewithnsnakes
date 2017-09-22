import { Injectable } from '@angular/core';

@Injectable()
export class GetColourService {

    getColourService(i): string {

        switch (i) {
            case 1:
            return 'whitesmoke';
            case 2:
            return '#86B32D';
            case 3:
            return '#BF3030';
        }
    }
}
