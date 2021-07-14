import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../_shared/configs';
import { settings } from 'cluster';

@Injectable()
export class AppConfigService {

    private static settings: AppConfig;

    constructor(private http: HttpClient) { }

    // https://blogs.msdn.microsoft.com/premier_developer/2018/03/01/angular-how-to-editable-config-files/
    load() {
        const jsonFile = `assets/config/config.${environment.name}.json`;
        return new Promise<void>((resolve, reject) => {
            this.http.get<AppConfig>(jsonFile)
                .toPromise()
                .then((response: AppConfig) => {
                    AppConfigService.settings = response;
                    resolve();
                })
                .catch((response: any) => {
                    reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
                });
        });
    }

    static get Settings(): AppConfig {
        return AppConfigService.settings;
    }
}