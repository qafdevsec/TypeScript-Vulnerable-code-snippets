import angular from 'angular';

angular.module('app', [])
    .config(['$sceProvider', ($sceProvider: angular.ISCEServiceProvider) => {
        $sceProvider.enabled(false); // BAD
    }])
    .controller('controller', ['$scope', ($scope: angular.IScope) => {
        // ...
        const item: any = getItem(); // Assuming getItem() is a function to retrieve data
        $scope.html = `<ul><li>${item.toString()}</li></ul>`;
    }]);

function getItem(): any {
    // Logic to retrieve item
    return 'Example Item';
}
