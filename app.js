(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu="";
  $scope.message="";
  $scope.getNumberOfItems=function(){
  var menuStr=$scope.lunchMenu;
  var arrStr;
if(menuStr!=""&&menuStr!=" "){
arrStr=menuStr.split(",");
var arrayLength=arrStr.length;
//The check has been added which doesn't consider the items which are ",," or ", ,"as an item towards to the count
for(var i=0;i<arrStr.length;i++){
  if(arrStr[i]==""||arrStr[i]==" "){
    arrayLength=arrayLength-1;
  }
}
//The check has been added which doesn't consider the items which are ",," or ", ,"as an item towards to the count
if(arrayLength<=3 && arrayLength>=1){
  $scope.message="Enjoy!";
}
else{
  $scope.message="Please enter data first";
}
if(arrayLength>3){
  $scope.message="Too much!";
}
}
else{
$scope.message="Please enter data first";
}
  };
}

})();
