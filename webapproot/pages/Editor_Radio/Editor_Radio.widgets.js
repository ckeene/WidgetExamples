Editor_Radio.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel2: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel21: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label22: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","DemoHeader"]},"border":"0","caption":"Radio Button","padding":"4","width":"120px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label38: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label26: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> select your favorite ice cream.","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel15: ["wm.Panel", {"height":"86px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel25: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}],
						panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							radioButton2: ["wm.RadioButton", {"caption":"Chocolate","checkedValue":"chocolate","dataType":undefined,"displayValue":false,"radioGroup":"radiotest","startChecked":true}, {}],
							radioButton1: ["wm.RadioButton", {"caption":"Vanilla","checkedValue":"vanilla","displayValue":"","radioGroup":"radiotest"}, {}],
							radioButton3: ["wm.RadioButton", {"caption":"Strawberry","checkedValue":"strawberry","dataType":undefined,"displayValue":false,"radioGroup":"radiotest"}, {}]
						}]
					}],
					label50: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel11: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"top","width":"100%"}, {}, {
						label9: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"The ice cream you like is = ","padding":"4","width":"166px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						label11: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"radioButton1.groupValue","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				panel69: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel7: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel70: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html3: ["wm.Html", {"border":"0","height":"100%","html":"<p>Radio buttons allow users to select from a set of checkbox widgets.</p>\n<p>This example shows using radio editors to input information and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/Text\" target=\"_blank\">Text Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\" target=\"_blank\">Select Menu/Combo Boxes</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}