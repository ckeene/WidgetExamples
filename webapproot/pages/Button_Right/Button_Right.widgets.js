Button_Right.widgets = {
	leftClickDialog: ["wm.GenericDialog", {"button1Caption":"OK","button1Close":true,"corner":"cr","height":"105px","positionNear":"rightClickButton","title":"Left Click Dialog","userPrompt":"Button left click detected"}, {}],
	rightClickDialog: ["wm.GenericDialog", {"button1Caption":"OK","button1Close":true,"corner":"cr","height":"105px","positionNear":"rightClickButton","title":"Right Click Dialog","userPrompt":"Button right click detected"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel2: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel24: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label25: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","DemoHeader"]},"autoSizeWidth":true,"border":"0","caption":"Right Clicking a Button","padding":"4","width":"174px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel39: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel41: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label32: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label38: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> right click this button, then left click the button","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel42: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","verticalAlign":"middle","width":"100%"}, {}, {
						rightClickButton: ["wm.Button", {"caption":"Right Click Me","margin":"4","width":"129px"}, {"onRightClick":"rightClickDialog.show","onclick":"leftClickDialog.show"}]
					}],
					label33: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel44: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						label39: ["wm.Label", {"border":"0","caption":"Clicking the button brings up dialog windows","height":"48px","padding":"0,0,0,20","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				panel32: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel6: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel26: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html6: ["wm.Html", {"border":"0","height":"100%","html":"<p>Button widgets can respond to both left and right click buttons.</p>\n<p>This example shows using the onRightClick event of a button to show a dialog window and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href='http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/Button'>Button Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=button&layer=toggle'>Toggle Button</a></li>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=button&layer=busy'>Busy Button</a></li>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=button&layer=popup'>Popup Button</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}