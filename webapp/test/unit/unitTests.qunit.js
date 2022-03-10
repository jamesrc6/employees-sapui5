/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"axelera/employees/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
