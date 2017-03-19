'use strict';

/**
 * @ngdoc function
 * @name SmbDashboard.controller:SettingsController
 * @description
 * # SettingsController
 */
module.exports = [
    '$scope', '$ionicLoading', '$ionicModal',

    function( $scope, $ionicLoading, $ionicModal )
    {
        // do something with $scope
        
        $scope.items = [
		    { id: 0 },
		    { id: 1 },
		    { id: 2 },
		    { id: 3 },
		    { id: 4 },
		    { id: 5 }
		  ];

		 $scope.moveItem = function(item, fromIndex, toIndex) {
		    $scope.items.splice(fromIndex, 1);
		    $scope.items.splice(toIndex, 0, item);
		 };
		  
		  $scope.onItemDelete = function(item) {
		    $scope.items.splice($scope.items.indexOf(item), 1);
		  };

			$scope.data = {
		    showDelete: false
		  };

	  	$ionicLoading.show({
	      template: 'Loading...',
	      duration: 3000
	    }).then(function(){
	       console.log("The loading indicator is now displayed");
	    });

		$ionicModal.fromTemplateUrl('templates/views/modal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});
    }
];
