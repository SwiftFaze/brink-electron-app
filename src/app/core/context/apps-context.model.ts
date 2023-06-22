import {UserSettings} from "../../models/user-settings";

export class AppsContext {

    constructor() {
        this.userSetting = new UserSettings();
    }

    activeMenu = 0;
    userSetting: UserSettings;


}
