// Register `phoneList` component, along with its associated controller and template

angular.
  module('phoneDetail').
  component('phoneDetail',  {
	template:'TBD:Details view for <span>{{$ctrl.phoneId}}</span>',
	controller:['$routeParams',function phoneDetailController($routeParams){
		this.phoneId=$routeParams.phoneId;
	}]
}); // end of component bracket