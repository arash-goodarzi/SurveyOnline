
angularFormsApp.factory('DataService',
    function () {
        var getSurvey = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    dateOfFullfillOfSurvey:"2018-02-24",
                    fullName: "Milton Waddams",
                    place:"Arizona",
                    email:'abc@123.com',
                    notes: "I usally go to provigo",
                    salary: "60001~80000",
                    lastPurchaseTime: "11/11/1979",
                    ratePharmaprix: 10,
                    rateMetro: 8,
                    rateProvigo: 3,
                    price: true,
                    quality: true,
                    brand:false,
                    easyToUse: true,
                    nearToYou: false,
                    advertisement: true,
                    ageRange: "50-64"
                };
            }
            return undefined;
        };

        var insertSurvey = function (newSurvey) {
            return true;
        };

        var updateSurvey = function (survey) {
            return true;
        };

        return {
            insertSurvey: insertSurvey,
            updateSurvey: updateSurvey,
            getSurvey: getSurvey
        };
    });