Select_List.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel12: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel20: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label13: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Simple Select Widget","padding":"4","width":"220px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel15: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label12: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label16: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> select from a list of options \"red\", \"green\", \"blue\"","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel16: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}],
						staticSelectMenu: ["wm.SelectMenu", {"caption":"Select from list","captionSize":"120px","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"Red, Green, Blue"}, {}]
					}],
					label15: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel18: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						label14: ["wm.Label", {"border":"0","caption":"You selected","padding":"4","width":"151px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						selectLabel: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"staticSelectMenu.dataValue","targetProperty":"caption"}, {}]
							}],
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				panel73: ["wm.MainContentPanel", {"height":"734px","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel7: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel74: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html6: ["wm.Html", {"border":"0","height":"100%","html":"<p>Select Menu widgets provide a drop-down list of choices for the user to select. Supported features include</p>\n<ul>\n<li>Auto-completion and type-ahead to filter a list of selections</li>\n<li>Paging to handle long selection lists</li>\n<li>Custom formatting of display values</li>\n</ul>\n<p>This example shows using the options property of a select menu to display choices and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href='http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/SelectMenu' target='_blank'>Select Menu Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=editor&layer=radio'>Radio Button</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}