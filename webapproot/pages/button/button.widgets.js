button.widgets = {
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"label1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"800px"}, {}, {
		panel12: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"770px"}, {}, {
			label8: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Button Widget Examples","height":"100%","padding":"4","width":"294px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"headerHeight":"28px","width":"770px"}, {}, {
			button: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Button","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Button_Button"}, {}]
			}],
			toggle: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Toggle","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer4: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Button_Toggle"}, {}]
			}],
			busy: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Busy Button","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Button_Busy"}, {}]
			}],
			popup: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Popup Button","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				pageContainer3: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Button_Popup"}, {}]
			}],
			right: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Right Click","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer5: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Button_Right"}, {}]
			}]
		}]
	}]
}