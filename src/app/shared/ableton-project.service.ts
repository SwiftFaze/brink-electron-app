import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AbletonProject} from "../models/ableton-project";

@Injectable({
    providedIn: 'root'
})
export class AbletonProjectService {
    constructor(private http: HttpClient) {
    }

    private basePath = environment.apiApp;

    getProject(xmlString: string): Observable<AbletonProject> {
        return this.http.post<AbletonProject>(this.basePath + '/projects', xmlString);
    }

    // sendFile(file: File): Observable<any> {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //
    //     return this.http.post<any>(this.basePath + '/upload', formData);
    // }

    sendFiles(formData: FormData): Observable<any> {
        return this.http.post<any>(this.basePath + '/upload', formData);
    }


}
