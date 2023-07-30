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

    convertProject(xmlString: string): Observable<AbletonProject> {
        return this.http.post<AbletonProject>(this.basePath + '/projects/convert', xmlString);
    }

    sendFiles(formData: FormData): Observable<any> {
        return this.http.post<any>(this.basePath + '/projects/upload', formData);
    }

    getUserProjects(): Observable<string[]> {
        return this.http.get<string[]>(this.basePath + '/projects');
    }
}
