'use strict';

angular.module('fictiontree2App').controller('LoginCtrl', function ($scope,$http,alert,authToken,API_URL) {

      $scope.submit = function(){
        var url= API_URL + 'login';
        console.log(url);
        var user = {
          email: $scope.email,
          password: $scope.password
        };

        $http.post(url,user)
          .success(function(res){
            alert('success','Welcome', "Thanks for coming back " + user.email + " !");
            authToken.setToken(res.token);
            $scope.isAuthenticated = authToken.isAuthenticated;
          })
          .error(function(err){
            alert('warning','Something went wrong :(',err.message);
          });
      }
  });