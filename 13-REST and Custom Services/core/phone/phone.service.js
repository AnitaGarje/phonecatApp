angular.
module('core.phone').
factory('Phone',['$resource',function($resource){
	return $resource('phones/:phoneId.json',{},{
		query:{
			method:'GET',
			param:{phoneId:'phones'},
			isArray:true
		}
	});
	}

]);
