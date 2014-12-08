/**
 * Created by Admin on 12/8/14.
 */
'use strict'


angular.module('swFrontApp')
  .controller('HomeCtrl',ctrlFunctions);

function ctrlFunctions($scope){
  $scope.TodoList = ['Item01','Item02','Item03','Item04','Item05','Item06'];
  $scope.PageTitle = "HomePage";
  console.log('Home Controller Loaded!');

}

