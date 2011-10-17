dojo.declare("grid", wm.Page, {
	start: function() {
		try {
            var layerName;
            // If layer is specified, go to that layer
            if (app instanceof WidgetExamples) {
                layerName = app.layerNameVar.getValue('dataValue');
            } else {
                layerName = '';
            }
            if (layerName !== '') {
                app.layerNameVar.setValue('dataValue','');                
                var layerArray = ['basic','paging','searching','sorting','formatting','columns','subtotal'];
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