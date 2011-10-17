Select_Filter.widgets = {
	filmLiveVar: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"liveSource":"com.sampledatadb.data.Film","startUpdate":false}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel44: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel45: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label25: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Filter Select Results","padding":"4","width":"340px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel46: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel48: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label26: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> type in characters and note that the list of 1,000 films is automatically filtered","height":"38px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel49: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel50: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}],
						filteringLookup1: ["wm.FilteringLookup", {"autoDataSet":false,"caption":"Film Title","displayField":"title","displayValue":""}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"filmLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label30: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel51: ["wm.Panel", {"height":"200px","horizontalAlign":"left","padding":"20,0,0,20","verticalAlign":"top","width":"100%"}, {}, {
						label27: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Description for selected film","padding":"4","width":"248px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						dbLabel1: ["wm.Label", {"border":"0","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"filteringLookup1.selectedItem.description","targetProperty":"caption"}, {}]
							}],
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				panel77: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel9: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel78: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html8: ["wm.Html", {"border":"0","height":"100%","html":"<p>Filtering Lookup\t widgets  allow auto-completion and type-ahead to filter a list of selections. As characters are entered into the select editor, the list of 1,000 films is automatically filtered.</p>\n<p>This example shows using the dataSet property of the lookup widget to query a database and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href='http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/FilteringLookup' target='_blank'>Filtering Lookup Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=editor&layer=radio'>Radio Button</a></li>\n</ul>","margin":"5"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}