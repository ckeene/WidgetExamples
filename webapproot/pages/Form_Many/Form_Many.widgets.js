Form_Many.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel36: ["wm.Panel", {"height":"600px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel37: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label22: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"One To Many Relationship","padding":"4","width":"317px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel38: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel40: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label28: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label23: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> select an employee to see the vacations for that employee, each employee can have zero to many related vacations.","height":"34px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel41: ["wm.Panel", {"height":"150px","horizontalAlign":"left","margin":"0,0,0,0","verticalAlign":"top","width":"100%"}, {}, {
						empGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"eid","title":"Eid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstname","title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastname","title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"street","title":"Street","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"state","title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"zip","title":"Zip","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"birthdate","title":"Birthdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"picurl","title":"Picurl","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"twitterid","title":"Twitterid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"localizationStructure":{},"margin":"4","selectFirstRow":true}, {"onClick":"vacationLiveVar"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.empLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label31: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label35: ["wm.Label", {"border":"0","caption":"Vacations taken by this employee","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					dojoGrid2: ["wm.DojoGrid", {"columns":[{"show":false,"id":"id","title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"startdate","title":"Startdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"enddate","title":"Enddate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"95px","margin":"4"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"empGrid.selectedItem.vacations","targetProperty":"dataSet"}, {}]
						}]
					}],
					label36: ["wm.Label", {"border":"0","caption":"Employees who are managed by this employee","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					dojoGrid4: ["wm.DojoGrid", {"columns":[{"show":false,"id":"eid","title":"Eid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstname","title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastname","title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"street","title":"Street","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"state","title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"zip","title":"Zip","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"birthdate","title":"Birthdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"picurl","title":"Picurl","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"dojoGrid4PicurlFormat"},{"show":false,"id":"twitterid","title":"Twitterid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"empGrid.selectedItem.employees","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel78: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel10: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel79: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html9: ["wm.Html", {"border":"0","height":"100%","html":"Form widgets provide an easy way to input data into a database. Supported features include<br>\n<ul>\n<li>Automatic validation of form fields</li>\n<li>Create, Update, Delete database records from form</li>\n<li>Manage required fields and required relationships</li>\n</ul>\n<p>This example shows onSelected event for a grid to display the related vacations and employees managed by the selected employee and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/LiveForm\" target=\"_blank\">Live Form Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=grid&amp;layer=basic\">Grid</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}