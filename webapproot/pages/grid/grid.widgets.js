grid.widgets = {
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Grid Widget Examples","height":"100%","padding":"4","width":"266px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			basic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Basic Grid","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Basic"}, {}]
			}],
			paging: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Paging","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Paging"}, {}]
			}],
			searching: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Searching","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer3: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Searching"}, {}]
			}],
			sorting: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Sorting","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer4: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Sorting"}, {}]
			}],
			formatting: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Formatting","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer5: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Formatting"}, {}]
			}],
			columns: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Calculated Columns","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer6: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Column"}, {}]
			}],
			subtotal: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Row Subtotal","horizontalAlign":"left","verticalAlign":"top"}, {"onShow":"subtotalShow"}, {
				pageContainer7: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Grid_Subtotals"}, {}]
			}]
		}]
	}]
}