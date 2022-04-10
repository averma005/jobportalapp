(function () {
    'use strict';

    angular
        .module('app')
        .factory('sessionService', sessionService);

    sessionService.$inject = ['$http','$location', '$q'];
    
    function sessionService($http, $location, $q) {
        
        var storedObject = {
            
            sessionSet : function(){
                var deferred = $q.defer();
                $http.get('/sessions').then(function(res){
                if(res.data.loggedIn === 'true') {
                    deferred.resolve();
                } 
                else {
                    deferred.reject();
                    $location.path('/login');
                }
                });
                return deferred.promise;
            } 
        }
        return storedObject;
    }
})();
