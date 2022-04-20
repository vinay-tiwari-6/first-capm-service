/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comvinaypractices/sapui5nodejs/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
