(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['$rootScope', '$location'];
    function MessageController($rootScope, $location) {
        var vm = this;
        vm.back = back;
        
        function back(){
            $location.path('/home');
        }
    }
})();