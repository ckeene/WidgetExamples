Main.widgets = {
	buttonNavCall: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"button\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	selectNavCall: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"select\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	editorNavCall: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"editor\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	treeNavCall: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"tree\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	aboutDialog: ["wm.GenericDialog", {"borderColor":"#333333","button1Caption":"Ok","button1Close":true,"footerBorder":"2,0,0,0","footerBorderColor":"#333333","height":"106px","title":"About This Application","titlebarBorderColor":"#333333","userPrompt":"This application demonstrates how to use WaveMaker widgets and data services. WaveMaker makes it easy to build a complete web application with minimal coding."}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"1000px"}, {}, {
			panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"border":"0","caption":"WaveMaker Widget Sampler","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				gadgetFacebookLikeButton1: ["wm.gadget.FacebookLikeButton", {"border":"0","colorscheme":"light","height":"100%","href":"http://widgetexamples.cloudfoundry.com","width":"240px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					menuObjectTree: ["wm.ObjectTree", {"border":"0","borderColor":"#222222","connectors":false,"data":{"Button":{"Basic Button":undefined,"Toggle Button":undefined,"Busy Button":undefined,"Popup Button":undefined,"Right Click Button":undefined},"Editor":{"Basic Editors":undefined,"Radio Editors":undefined,"Date Editors":undefined,"Text Editors":undefined,"Validation Editors":undefined},"Form":{"Basic Form":undefined,"Search List":undefined,"Master Detail":undefined,"One To Many":undefined,"One To One":undefined,"Set Related":undefined},"Grid":{"Basic Grid":undefined,"Grid Paging":undefined,"Searching":undefined,"Sorting":undefined,"Formatting":undefined,"Calculated Columns":undefined,"Grid Subtotals":undefined},"Select Menu":{"Select from List":undefined,"Select from DB":undefined,"Filtering Select":undefined,"Fancy Display":undefined},"Social":{"Facebook":undefined,"Twitter":undefined},"Tree":{"Tree from DB":undefined,"Tree from List":undefined},"About This App":undefined},"height":"100%","padding":"15,0,0,10"}, {"onselect":"menuObjectTreeSelect"}]
				}],
				panel4: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"800px"}, {}, {
					mainPageContainer: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"grid","width":"800px"}, {}]
				}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright [company name] 2011","height":"100%","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}