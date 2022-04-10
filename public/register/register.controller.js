(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', '$rootScope', '$http'];
    function RegisterController($location, $scope, $rootScope, $http) {
        var vm = this;
        vm.register = register;
        vm.back = back;

        function register() {
            console.log(userType.options[userType.selectedIndex].value);
            vm.dataLoading = true;
                $http.post('/postData', 
                    {"fname":$scope.firstName,
                     "lname":$scope.lastName,
                     "emailid":$scope.emailid,
                     "password":$scope.password,
                     "userid":$scope.userid,
                     "phoneno":$scope.phoneno,
                     "userType":userType.options[userType.selectedIndex].value}
                );
            $location.path('/');
        }
        
        function back(){
            $location.path('/home');
        }
    }

})();