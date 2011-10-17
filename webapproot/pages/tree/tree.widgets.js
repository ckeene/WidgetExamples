tree.widgets = {
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Tree Widget Examples","height":"100%","padding":"4","width":"270px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			propertyTree: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Property Tree","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Tree_Property"}, {}]
			}],
			objectTree: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Object Tree","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Tree_Object"}, {}]
			}]
		}]
	}]
}