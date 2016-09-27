describe('PhoneCat Application',function(){
	describe('phoneList',function(){
		beforeEach(function(){
			browser.get('index.html');
		});
		it('should filter the phone list as user types into search box',function()){
			var phoneList=element.all(by.repeater('phone in $ctrl.phones'));
			var query=element(by.model('$ctrl.query'));
			expect(phoneList.count()).toBe(3);
			query.sendKey('nexus');
			expect(phoneList.count()).toBe(1);
			query.clear();
			query.sendKey('motorola');
			expect(phoneList.count().toBe(2));
		});

	});
});
	