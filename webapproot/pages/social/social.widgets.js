social.widgets = {
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.MainContentPanel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Social Widget Examples","height":"100%","padding":"4","width":"289px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			facebook: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Facebook","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Social_Facebook"}, {}]
			}],
			twitter: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Twitter","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Social_Twitter"}, {}]
			}]
		}]
	}]
}