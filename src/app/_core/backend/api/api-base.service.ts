import { AppConfigService } from '@/_core/services/app-config.service';
import { PopupHandlerService } from '@/_core/services/popup-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../../_shared/models/api-response.model';

export abstract class ApiBaseService<T> {

    /**
     * This param starts and ends with no slash `/`
     */
    protected path: string;
    protected headerReq: HttpHeaders;
    private appSettings = AppConfigService.Settings;

    constructor(protected http: HttpClient, protected wsNotifSvc: PopupHandlerService) {
        this.headerReq = new HttpHeaders({ 'Content-Type': 'application/json'});
    }

    protected getAll(): Observable<Array<T>> {
        const response = this.http.get<ApiResponse<Array<T>>>(`${this.appSettings.apiUrl}/${this.path}`,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected getListById(id: any): Observable<Array<T>> {
        const response = this.http.get<ApiResponse<Array<T>>>(this.getFullPath(id), { headers: this.headerReq });
        return response.pipe(map(a => a.data));
    }

    protected getListByIdString(id: string): Observable<Array<T>> {
        const response = this.http.get<ApiResponse<Array<T>>>(this.getFullPath(id), { headers: this.headerReq });
        return response.pipe(map(a => a.data));
    }

    protected getSingleById(id: any): Observable<T> {
        const response = this.http.get<ApiResponse<T>>(`${this.appSettings.apiUrl}/${this.path}/${id}`,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected post(body: T): Observable<T> {
        const response = this.http.post<ApiResponse<T>>(`${this.appSettings.apiUrl}/${this.path}`, body,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected put(objId: any, body: T): Observable<boolean> {
        const response = this.http.put<ApiResponse<boolean>>(`${this.appSettings.apiUrl}/${this.path}/${objId}`, body,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected patch(objId: any, body: T): Observable<boolean> {
        const response = this.http.put<ApiResponse<boolean>>(`${this.appSettings.apiUrl}/${this.path}/${objId}`, body,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected delete(objId: any): Observable<boolean> {
        const response = this.http.delete<ApiResponse<boolean>>(`${this.appSettings.apiUrl}/${this.path}/${objId}`,
            { headers: this.headerReq });

        return response.pipe(map(a => a.data));
    }

    protected getFullPath(id: any = null): string {
        const partial = `${this.appSettings.apiUrl}/${this.path}`;
        return id === null ? partial : `${partial}/${id}`;
    }

    protected askForWSNotificaiton(): void {
        const wsconnectionid = this.wsNotifSvc.connectionId;
        const wscallbackname = this.wsNotifSvc.callbackName;
        this.headerReq.set('wsconnectionid', wsconnectionid);
        this.headerReq.set('wscallbackname', wscallbackname)
    }
}
