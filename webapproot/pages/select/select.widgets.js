select.widgets = {
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Select Menu Widget Examples","height":"100%","padding":"4","width":"361px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			select: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Select from List","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Select_List"}, {}]
			}],
			populate: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Select from DB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Select_DB"}, {}]
			}],
			filter: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Filtering Select","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer3: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Select_Filter"}, {}]
			}],
			display: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Display Expression","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer4: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Select_Display"}, {}]
			}]
		}]
	}]
}