Grid_Basic.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel12: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel20: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label13: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Grid Widget","padding":"4","width":"166px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel15: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label20: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label16: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> this grid shows employees - try selecting a row.","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel16: ["wm.Panel", {"height":"180px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"42px"}, {}],
						employeeGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"eid","title":"Eid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstname","title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastname","title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"street","title":"Street","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"state","title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"zip","title":"Zip","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"birthdate","title":"Birthdate","width":"100px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"picurl","title":"Picurl","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"twitterid","title":"Twitterid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.empLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label19: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"0,0,0,40","verticalAlign":"middle","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label14: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"autoSizeWidth":true,"border":"0","caption":"You selected","padding":"4","width":"89px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							gridLabel: ["wm.Label", {"border":"0","padding":"4"}, {}, {
								format: ["wm.DataFormatter", {}, {}],
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":false,"source":"employeeGrid.selectedItem.lastname","targetProperty":"caption"}, {}]
								}]
							}]
						}],
						picture1: ["wm.Picture", {"border":"0","height":"200px","width":"200px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"employeeGrid.selectedItem.picurl","targetProperty":"source"}, {}]
							}]
						}]
					}]
				}],
				panel73: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel7: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel74: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html6: ["wm.Html", {"border":"0","height":"100%","html":"<p>Grid widgets show tablular data, for example employees from a database. Capabilities include:</p>\n<ol>\n<li>Column formatting</li>\n<li>Sort by clicking column heading</li>\n<li>Calculated columns and row subtotals</li>\n<li>Paging and filtering for large datasets</li>\n</ol>\n<p>This example shows using the dataSet property of a grid widget to display database information and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/DojoGrid\" target=\"_blank\">DojoGrid</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\">Select Menu</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}