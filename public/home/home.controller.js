(function () {
    'use strict';
    var app= angular.module('app');
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$rootScope', '$http', '$scope', '$route'];
    function HomeController($location, $rootScope, $http, $scope, $route) {
        var vm = this;
        vm.sessionOut = sessionOut;
        vm.postJob = postJob;
        vm.search = search;
        
        $http.get('/sessions').then(function(res){
            console.log(res.data);
        });
                
        function sessionOut() {
            $http.post('/logOut').then(function(res){
                console.log(res.data);
            });
            $location.path('/');
            $route.reload();
        }
        
        function postJob() {
            vm.dataLoading = true;
            $http.post('/postJob', 
                {"jobTitle":$scope.jobTitle,
                 "jobDescription":$scope.jobDescription,
                 "location":$scope.location,
                 "keywords":$scope.keywords
                });
            document.getElementById("form").reset();
            $location.path('/message');
        }
        
        function search() {
            $scope.filtering1 = {
                "jobTitle": $scope.vm.filtering,
                "location": $scope.vm.filtering 
            };
            $http.post('/searchResult', $scope.filtering1)
                .then(function(res){
                $scope.jobsbyDB = res.data; 
                console.log(res.data);
                });
            }; 
        }
        
    angular.module('app').directive('navbar',function(){
        return{
            templateUrl: 'navbar.html',
            restrict: 'E'
        }
    });
    
    angular.module('app').directive('postJob',function(){
        return{
            templateUrl: 'postJob.html',
            restrict: 'E'
        }
    });
    
    angular.module('app').directive('searchJob', function(){
        return{
            templateUrl: 'jobSearch.html',
            restrict: 'E'
        }
    });

})();