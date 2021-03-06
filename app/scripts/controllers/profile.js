'use strict';

/**
 * @ngdoc function
 * @name fictiontree2App.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the fictiontree2App
 */
angular.module('fictiontree2App').controller('ProfileCtrl', function ($scope,$http,userService,userDataService,$rootScope,API_URL) {


  $scope.post = function()
  {
    var comment = $scope.comment;
    var url = API_URL + 'post';
    $scope.comment = '';
    $http.post(url,{user: userService.userdata,msg:comment}).success(function(data, status) {

    })
    $rootScope.$broadcast('post', { from:'post' , message: 'post' });
  }

  $scope.publish = function(msg){
    $rootScope.$broadcast('imgtype', { from:'accountImageSelected' , message: msg });
  }

  var url = API_URL + 'getcoverpicdata';
  $http.post(url,userService.userdata).success(function(data, status) {
    $scope.coverpicdata =  data;
  })

  var url = API_URL + 'getprofilepicdata';
  $http.post(url,userService.userdata).success(function(data, status) {
    $scope.profilepicdata =  data;
  })

  $rootScope.$on('picupload', function (event, args,API_URL) {
    switch(args.from)
    {
      case 'coverpicupload':
        if(args.for == 'cover')
        {
          $scope.coverpicdata = args.message;}
        else
        if(args.for == 'profile'){
          $scope.profilepicdata = args.message}
        break;
      case 'searchMovie':

        break;
      case 'searchPerson':
        break;
      case 'searchthing':
        break;
    }
  });
  });
