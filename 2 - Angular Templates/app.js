// Define the `phonecatApp` module
var phonecatApp=angular.module('phonecatApp',[]);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController',function PhoneListController($scope)
{
	$scope.phones=[
	{
		name:'Nexus S',
		snippet:'Fast just got faster with Nexus S.'
	},{
		name:'Motorola XOOM with Wi-Fi',
		snippet: 'The Next, Next Generation tablet.'
	},{
		name: 'MOTOROLA XOOM™',
      	snippet: 'The Next, Next Generation tablet.'
	}
	];
	$scope.name = 'world';
	/*$scope.0[
		{0:34},{1:45},{2:56},{3:5},{4:44},{5:49},{6:92},{7:99}
	]*/
	$scope=[0,1,2,3,4,5,6,7];
	
});