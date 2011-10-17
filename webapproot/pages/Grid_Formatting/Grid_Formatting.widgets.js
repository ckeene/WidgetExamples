Grid_Formatting.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel19: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel21: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label15: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Grid Formatting","padding":"4","width":"166px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel22: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel24: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label21: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label17: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> there are standard formatters for common data types or you can create custom formatters for example to limit the height of a picture.","height":"42px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel25: ["wm.Panel", {"height":"257px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						empFormatGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"eid","title":"Eid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstname","title":"Firstname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastname","title":"Lastname","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"street","title":"Street","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"state","title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"zip","title":"Zip","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"birthdate","title":"Birthdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"picurl","title":"Picurl","width":"100px","displayType":"Text","noDelete":true,"align":"left","formatFunc":"empFormatGridPicurlFormat","expression":""},{"show":false,"id":"twitterid","title":"Twitterid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.empLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label22: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel27: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						label18: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"You selected","padding":"4","width":"82px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						dataTreeLabel: ["wm.Label", {"border":"0","padding":"4"}, {"onclick":"dataTreeLabelClick"}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"empFormatGrid.selectedItem.firstname","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				panel81: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel11: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel82: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html7: ["wm.Html", {"border":"0","height":"402px","html":"<p>In addition to standard formatting options for dates, currencies and pictures, the developer can create custom formatters.</p>\n<p>This example shows using custom formatters to display database information in a grid and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/DojoGrid\" target=\"_blank\">DojoGrid</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\">Select Menu</a></li>\n</ul>\t","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}