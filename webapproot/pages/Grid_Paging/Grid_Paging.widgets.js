Grid_Paging.widgets = {
	filmLiveVar: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.sampledatadb.data.Film","maxResults":10}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel34: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel35: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label28: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Grid Paging","padding":"4","width":"166px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel36: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel38: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label29: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label30: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> this grid shows 10 films at a time.","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					dataNavigator1: ["wm.DataNavigator", {"border":"0","height":"32px","horizontalAlign":"center","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"filmLiveVar","targetProperty":"liveSource"}, {}]
						}]
					}],
					panel39: ["wm.Panel", {"height":"236px","horizontalAlign":"left","verticalAlign":"middle","width":"100%"}, {}, {
						dojoGrid4: ["wm.DojoGrid", {"columns":[{"show":false,"id":"filmId","title":"FilmId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"title","title":"Title","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"description","title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"releaseYear","title":"ReleaseYear","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"rentalDuration","title":"RentalDuration","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rentalRate","title":"RentalRate","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"length","title":"Length","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"replacementCost","title":"ReplacementCost","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rating","title":"Rating","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"specialFeatures","title":"SpecialFeatures","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"filmLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label31: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel41: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						label32: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"You selected","padding":"4","width":"82px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						gridLabel1: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							format: ["wm.DataFormatter", {}, {}],
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"dojoGrid4.selectedItem.title","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}],
				panel75: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel8: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel76: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html9: ["wm.Html", {"border":"0","height":"100%","html":"<p>The Data Navigator makes it possible to page through a large set of rows without having to display all of them at once. This example shows 10 rows at a time from a 1,000 row table.</p>\n<p>This example shows using the data navigator widget tied to a database live variable to fetch 10 rows of data at a time and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/DataNavigator\" target=\"_blank\">Data Navigator</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\">Select Menu</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}