(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LCController', LCController);

    LCController.$inject = ['$scope'];

    function LCController ($scope){
        $scope.lunchList = "";
        $scope.message = "";
        $scope.color = "black";

        $scope.checkITM = function () {
            if($scope.lunchList == ""){
                $scope.message = 'Please enter data first';
                $scope.color = 'red';
                return;
            }
            var lunchArray = $scope.lunchList.split(',');
            console.log(lunchArray);
            var count=0;
            for (var x in lunchArray){
                if(lunchArray[x].trim() != ''){
                    count++;
                }
            }
            if(count == 0){
                $scope.message = 'Please enter data first';
                $scope.color = 'red';
            }else if(count<=3){
                $scope.message = 'Enjoy!';
                $scope.color = 'Green';
            }else{
                $scope.message = 'Too much!'
                $scope.color = 'Green';
            }
        }
    }
})();