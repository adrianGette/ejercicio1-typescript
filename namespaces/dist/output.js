"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
        // variables
        Taxes.PI = 3.14;
        // function
        function generateRandomNumber() {
            return Math.floor(Math.random() * 100);
        }
        Taxes.generateRandomNumber = generateRandomNumber;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
System.register("myModules", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", [], function (exports_2, context_2) {
    "use strict";
    var utils, user;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            utils = Utility.Taxes;
            user = {
                id: 1,
                name: "Adrian"
            };
            console.log(utils.calculateIva(100));
            console.log(utils.calculatePenaltyIva(200));
            console.log(utils.PI);
            console.log(user);
        }
    };
});
