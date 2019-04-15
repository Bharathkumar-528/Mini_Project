
        (function () {
        var app = angular.module('evevntManagementApp', []);

        var evevntManagementCntrl = function ($scope, $http,$interval,$anchorScroll,$location) {

            var oncompleteResponse = function () {                
                $http.get("http://localhost:8080/api/connections").then(OnuserResponse, eRROR);
            };          
            
            var OnuserResponse = function (response) {
                $scope.responsedata = response.data;                
            };

            var eRROR = function (reason) {
                $scope.error = "Coud not fetch user data";
            }            

            $scope.firstName= "John";
            $scope.lastName= "Doe";
        }

        app.controller('myCtrl', evevntManagementCntrl);
    }());
