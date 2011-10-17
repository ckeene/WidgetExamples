editor.widgets = {
	rightClickDialog: ["wm.GenericDialog", {"button1Caption":"OK","button1Close":true,"corner":"tc","height":"105px","title":"Right Click Dialog","userPrompt":"Button right click detected"}, {}],
	leftClickDialog: ["wm.GenericDialog", {"button1Caption":"OK","button1Close":true,"corner":"tc","height":"105px","title":"Left Click Dialog","userPrompt":"Button left click detected"}, {}],
	popupButtonDialog: ["wm.DesignableDialog", {"corner":"tc","height":"120px","modal":false,"title":"Popup Button Dialog","width":"300px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			label19: ["wm.Label", {"border":"0","caption":"You clicked the Popup Button ","padding":"4"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			panel19: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				label21: ["wm.Label", {"border":"0","caption":"Selected item = ","padding":"4","width":"116px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label20: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","padding":"4","width":"64px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":false,"source":"popupMenuButton1.caption","targetProperty":"caption"}, {}]
					}],
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			button4: ["wm.Button", {"caption":"OK","margin":"4"}, {"onclick":"popupButtonDialog.hide"}]
		}]
	}],
	howButtonDialog: ["wm.DesignableDialog", {"corner":"tc","height":"200px","modal":false,"title":"Button Widget","containerWidgetId":"containerWidget1","buttonBarId":""}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			html1: ["wm.Html", {"border":"0","height":"100%","html":"Pushing a button creates an onClick event. <br><br>\nIn this example, the onClick event calls a custom Javascript function that increments a counter using the following code:<br><br>\n<code>\nthis.buttonPushVar.setValue('dataValue',this.buttonPushVar.getValue('dataValue')+1);\n</code>","width":"100%"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel12: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label8: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Editor Widget Examples","height":"100%","padding":"4","width":"287px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			basic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Basic Editors","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Editor_Basic"}, {}]
			}],
			radio: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Radio Button","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Editor_Radio"}, {}]
			}],
			dates: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Dates","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pageContainer3: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Editor_Dates"}, {}]
				}]
			}],
			text: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Text","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel33: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pageContainer4: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Editor_Text"}, {}]
				}]
			}],
			validation: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Validation","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel49: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					pageContainer5: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Editor_Validation"}, {}]
				}]
			}]
		}]
	}]
}