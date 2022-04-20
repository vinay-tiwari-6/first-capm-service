sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.vinay.practices.sapui5nodejs.controller.App", {
            onInit: function () {
                alert("in onInit()")
            },

            nodejsAPICall: function () {
                debugger;
                var url = "/NODEJS_API_TEST";
                jQuery
                    .ajax({
                        url: url,
                        type: "GET",
                        dataType: "json",
                        success: function (result) {
                            debugger
                            console.log("*****************Inside success " + result);
                        },
                        error: function (e) {
                            debugger
                            // log error in browser
                            console.log(e.message);
                        }
                    });
            }
        });
    });
