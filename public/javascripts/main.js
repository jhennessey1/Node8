angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
		$http.get('/applicants')
			.then(function(returnData){
				$scope.applicants = returnData.data
				console.log('yes')
				console.log(returnData.data)
			})
	}]);
