(function () {
    'use strict';

    angular
        .module('app')
        .factory('companySessionService', companySessionService);

    companySessionService.$inject = ['$http','$location', '$q'];
    
    function companySessionService($http, $location, $q) {
        
        var storedObject = {
            
            sessionSet : function(){
                var deferred = $q.defer();
                $http.get('/sessions').then(function(res){
                if(res.data.companyloggedIn === 'true') {
                    deferred.resolve();
                } else {
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
