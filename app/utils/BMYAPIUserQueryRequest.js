import BMYAPIRequest from './BMYAPIRequest';
import ENV from 'bmy-new-web/config/environment';

export default BMYAPIRequest.extend({
	init: function(obj) {
		if(typeof(obj.queryid) !== "undefined")
			this.url = ENV.endpoint + 'api/user/query?queryid='+obj.queryid;
		else
			this.url = ENV.endpoint + 'api/user/query?';

		if(typeof(obj.async) !== "undefined") {
			this.async = obj.async;
		}
	}
});
