Grid_Searching.widgets = {
	countryLiveVar: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"com.sampledatadb.data.Country","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"searchText.dataValue","targetProperty":"filter.country"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel40: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel42: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label33: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Grid Searching","padding":"4","width":"166px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel43: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel45: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label34: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label35: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> this grid shows countries. Enter characters into search box to filter the list.","height":"42px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						searchText: ["wm.Text", {"changeOnKey":true,"displayValue":"","placeHolder":"Enter name to search","resetButton":true,"width":"163px"}, {"onchange":"countrySearchLiveVar"}]
					}],
					panel46: ["wm.Panel", {"height":"200px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel47: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}],
						dojoGrid5: ["wm.DojoGrid", {"columns":[{"show":true,"id":"countryId","title":"CountryId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"country","title":"Country","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"localizationStructure":{},"margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"countryLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label36: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel48: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						label37: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"You selected","padding":"4","width":"82px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						gridLabel2: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"dojoGrid5.selectedItem.country","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				panel77: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel9: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel78: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html10: ["wm.Html", {"border":"0","height":"100%","html":"<p>Adding a search box makes it possible to search for specific data in a grid.</p>\n<p>This example shows using a text editor to get a search string and then filter a database live variable by that string to display database information and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/DojoGrid\" target=\"_blank\">DojoGrid</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\">Select Menu</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}