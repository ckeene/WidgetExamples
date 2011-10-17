dojo.declare("Select_Filter", wm.Page, {
	start: function() {
		try {
			
			
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},

  filteringLookup1Focus: function(inSender) {
	  try {
        this.filteringLookup1.clear();		  
		  
	  } catch(e) {
		  console.error('ERROR IN filteringLookup1Focus: ' + e); 
	  } 
  },
  _end: 0
});