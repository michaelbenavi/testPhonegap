
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);		
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
		document.location.href = "./kabaut/index.html";
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

    },
	navigate: function(){		
		launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function(isAvailable){
		var app;
		if(isAvailable){
			app = launchnavigator.APP.WAZE;
		}else{
			console.warn("Google Maps not available - falling back to user selection");
			app = launchnavigator.APP.USER_SELECT;
		}
		launchnavigator.navigate([32.008021, 34.800660], {
			app: app
		});
		});		
	}
};

app.initialize();