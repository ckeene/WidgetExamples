Button_Popup.widgets = {
	popupButtonDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"cr","height":"120px","modal":false,"positionNear":"popupMenuButton1","title":"Popup Button Dialog","width":"300px"}, {"onShow":"popupButtonDialogShow"}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			label19: ["wm.Label", {"border":"0","caption":"You clicked the Popup Button ","padding":"4"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			panel19: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				label21: ["wm.Label", {"border":"0","caption":"Selected item = ","padding":"4","width":"116px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				popupLabel: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"","padding":"4","width":"64px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			button4: ["wm.Button", {"caption":"OK","margin":"4"}, {"onclick":"popupButtonDialog.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel3: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel23: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label24: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","DemoHeader"]},"border":"0","caption":"Popup Button","padding":"4","width":"120px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel33: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel35: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,10","verticalAlign":"top","width":"450px"}, {}, {
					label29: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label34: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> click on arrow to select operation. Click on button to invoke operation.","height":"42px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel36: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","verticalAlign":"middle","width":"100%"}, {}, {
						popupMenuButton1: ["wm.PopupMenuButton", {"caption":"Save","fullStructureStr":"[{\"label\":\"Save\",\"iconClass\":\"app_silkIconList_41\",\"imageList\":\"app.silkIconList\",\"children\":[]},{\"label\":\"Close\",\"iconClass\":\"app_silkIconList_21\",\"imageList\":\"app.silkIconList\",\"children\":[]},{\"label\":\"Help\",\"iconClass\":\"app_silkIconList_56\",\"imageList\":\"app.silkIconList\",\"children\":[]}]","iconClass":"app_silkIconList_41","margin":"4","rememberWithCookie":false}, {"onclick":"popupMenuButton1Click"}]
					}],
					label31: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel13: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","verticalAlign":"middle","width":"100%"}, {}, {
						label12: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"Iem selected is","padding":"4","width":"97px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						label13: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"popupMenuButton1.caption","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				panel31: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel5: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel18: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html5: ["wm.Html", {"border":"0","height":"100%","html":"<p>The popup menu button allows a user to select a particular action from a drop-down menu, then perform that action when the button is clicked.</p>\n<p>This example shows using the onClick event of a popup menu button to display a dialog window and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/PopupMenuButton\">Popup Menu Button Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=button&amp;layer=button\">Button</a></li>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=button&amp;layer=toggle\">Toggle Button</a></li>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=button&amp;layer=busy\">Busy Button</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}