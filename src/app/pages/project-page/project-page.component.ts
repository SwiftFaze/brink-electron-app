import {Component, OnInit} from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constants/menu";
import {inflate} from 'pako';
import {AbletonProjectService} from "../../shared/ableton-project.service";

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {


    testing: string = "nothing"
    constructor(private contextService: ContextService, private abletonProjectService: AbletonProjectService) {
        this.contextService.setMenuIndex(Menu.MENU_PROJECTS)
    }


    ngOnInit(): void {
        this.testing = "nothing"
        console.log("Project page!")
    }


    applyFilter($event: KeyboardEvent) {

    }

    async decompressALS(file: File): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                const gzipData = new Uint8Array(event.target?.result as ArrayBuffer);
                const decompressedData = inflate(gzipData, {to: 'string'});
                resolve(decompressedData);
            };

            fileReader.onerror = (event: ProgressEvent<FileReader>) => {
                reject(new Error('Error occurred while reading the file.'));
            };

            fileReader.readAsArrayBuffer(file);
        });
    }

    convertAbletonProject(event: any) {
        const files: FileList = event.target.files;

        // Assuming only one file is selected
        const alsFile: File = files[0];

        this.decompressALS(alsFile)
            .then((decompressedData: string) => {
                console.log(decompressedData);
                this.abletonProjectService.getProject(decompressedData).subscribe(result => {
                    console.log(result)
                });
            })
            .catch((error: Error) => {
                console.error(error);
            });
    }

    getMinorVersionNumber(xmlData: string): string {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const abletonNode = xmlDoc.getElementsByTagName('Ableton')[0];
        const minorVersion = abletonNode.getAttribute('MinorVersion');
        return minorVersion ?? '';
    }

}
