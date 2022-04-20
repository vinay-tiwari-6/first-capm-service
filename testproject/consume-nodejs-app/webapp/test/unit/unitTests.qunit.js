/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comvinaypractices/consume-nodejs-app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
