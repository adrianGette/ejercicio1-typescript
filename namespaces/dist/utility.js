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
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
