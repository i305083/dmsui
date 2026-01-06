sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    // Implement the event handler for componentCreate event and use the ReuseUI component to request navigation to repositories or folders during runtime. Set a home folder.
    return Controller.extend("ui5.controller.TargetView", {
        onInit: function () {
            // OPTIONAL: pass the same settings here, if not added in 'manifest.json' as per previous steps
            // this.getView().byId("sdi-container").setSettings({
            //     "repositoryId": "718ab2a9-cf7d-4b79-b959-9812947f1c53",
            //     "objectId": "51e08f8000f1c57011f6a396",
            //     "forceLoad": false
            // });
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("WebLink").attachPatternMatched(this.onObjectMatched, this);
        },
        // registered event handler for 'componentCreated' event of Component Container
        onComponentCreated: function (oEvent) {
            this._oDocumentTable = oEvent.getParameter("component");
            // OPTIONAL: set a folder as home folder
            this._oDocumentTable.setHomeFolderId(this.sObjectId);
            // OPTIONAL: request a navigation to a repository & folder during runtime
            if (this.sObjectId !== undefined) {
                this._oDocumentTable.requestNavigationAndOpen("61fb98b1-db80-4295-b63e-740fe93d0326", this.sObjectId);
            }
        },
        onObjectMatched(oEvent) {
            // const oContainer = this.getView().byId("sdi-container");
            this.sObjectId = window.decodeURIComponent(oEvent.getParameter("arguments").objectId);
            if (this._oDocumentTable !== undefined) {
                this._oDocumentTable.requestNavigationAndOpen("61fb98b1-db80-4295-b63e-740fe93d0326", this.sObjectId);
            }
        }
    })
});