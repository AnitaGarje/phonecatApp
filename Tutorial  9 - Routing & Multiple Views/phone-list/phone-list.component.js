// Register `phoneList` component, along with its associated controller and template

angular.
  module('phoneList').
  component('phoneList',  {
	templateUrl:'phone-list/phone-list.template.html',
controller:function PhoneListController($http){
	var self=this;
	self.orderProb='age';

	$http.get('phones/phones.json').then(function(response){
		self.phones=response.data;
		//self.phones = response.data.slice(0, 5);
	});
   }
}); // end of component bracket