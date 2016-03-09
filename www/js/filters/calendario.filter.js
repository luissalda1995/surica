(function(){
	'use strict';

	angular.module('suricaApp.filters').
		filter('calendarioFilter', calendarioFilter);

	function calendarioFilter(){
		return function(){
			if(! time) return;

			return moment(time).calendar(null, {
				lastDay: '[Yesterday]',
				sameDay: 'LT',
				lastWeek: 'dddd',
				sameElse: 'DD/MM/YY'
			});
		};
	}
})();