(function (){
  'use strict';
  angular.module('NameCalculator', [])
  .controller('NameCalculatorController', function ($scope){
    $scope.name = "";
    $scope.totalvalue=0;
    $scope.displayNumeric= function () {
      var totalnamevalue =
      calculateTotalValue($scope.name);
      $scope.totalvalue = totalnamevalue;
    };

      function calculateTotalValue(string){
         var totalstringvalue=0;
        for (var i=0;i<string.length;i++)
        {
          totalstringvalue += string.charCodeAt(i);
        }
        return totalstringvalue;
      };

  });

})();
