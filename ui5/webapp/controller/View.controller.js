sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.controller.View", {
        onInit() {
            this.getView().byId("sdi-container-default").setSettings({
                "repositoryId": "61fb98b1-db80-4295-b63e-740fe93d0326",
                "objectId": "a6bac380007cbb3f03f0b596",
                "forceLoad": false
            });
        }
    });
});