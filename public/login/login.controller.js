(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$http', '$scope'];
    function LoginController($location, $http, $scope) {
        var vm = this;
        vm.login = login;
        vm.register = register;
        var users;
        
        function register(){
            $location.path('/register');
        }
        
        function login() {
            $scope.enteredUser = {
                "username": $scope.vm.username,
                "password": $scope.vm.password,
            };
            $http.post('/getUser', $scope.enteredUser)
                .then(function(res){
                if(res.data.length != 0){
                    if(res.data.userType == 'Company'){
                       $location.path('/home');
                        $http.get('/sessions').then(function(res){
                            console.log(res.data);
                        });
                    } else {
                        $location.path('/home1');
                         $http.get('/sessions').then(function(res){
                            console.log(res.data);
                        });
                    }
                       
                }
            },
            function(err){
                alert("UserId or Password is Incorrect");
                document.getElementById("form").reset();
                
            });
            
        }
    }

})();
