import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {GridDataType} from './type'
import {environment} from '../../environments/environment'

@Injectable()

export class GridService {
    constructor(private http:HttpClient){

    }
    getGridData():Observable<GridDataType[]>{
        return this.http.get<GridDataType[]>(`${environment.baseUrl}/homegrid`)
    }
}