dojo.declare("tree", wm.Page, {
	start: function() {
		try {
            // If layer is specified, go to that layer
            var layerName = app.layerNameVar.getValue('dataValue');
            if (layerName !== '') {
                app.layerNameVar.setValue('dataValue','');                
                var layerArray = ['propertyTree','objectTree'];
                if (dojo.indexOf(layerArray, layerName) >=0)                
                    this.tabLayers1.setLayer(layerName);
                else
                    app.toastError("Unrecognized Page parameter in url = "+ layerName);
            }
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},			

  _end: 0
});