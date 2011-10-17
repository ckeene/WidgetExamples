Form_Master.widgets = {
	employeeDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"320px","title":"employee","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			employeeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"captionSize":"100px","fitToContentHeight":true,"height":"238px","horizontalAlign":"center","liveEditing":false,"margin":"4,5,0,0","verticalAlign":"top"}, {"onSuccess":"employeeLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"employeeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				eidEditor1: ["wm.Number", {"caption":"Eid","formField":"eid","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
				firstnameEditor1: ["wm.Text", {"caption":"Firstname","formField":"firstname","height":"26px","width":"100%"}, {}],
				lastnameEditor1: ["wm.Text", {"caption":"Lastname","formField":"lastname","height":"26px","width":"100%"}, {}],
				streetEditor1: ["wm.Text", {"caption":"Street","formField":"street","height":"26px","width":"100%"}, {}],
				cityEditor1: ["wm.Text", {"caption":"City","formField":"city","height":"26px","width":"100%"}, {}],
				stateEditor1: ["wm.Text", {"caption":"State","formField":"state","height":"26px","width":"100%"}, {}],
				zipEditor1: ["wm.Text", {"caption":"Zip","formField":"zip","height":"26px","width":"100%"}, {}],
				birthdateEditor1: ["wm.DateTime", {"caption":"Birthdate","dateMode":"Date","formField":"birthdate","height":"26px","width":"100%"}, {}],
				picurlEditor1: ["wm.Text", {"caption":"Picurl","formField":"picurl","height":"26px","width":"100%"}, {}],
				twitteridEditor1: ["wm.Text", {"caption":"Twitterid","formField":"twitterid","height":"26px","width":"100%"}, {}],
				tenantidEditor1: ["wm.Number", {"caption":"Tenantid","formField":"tenantid","height":"26px","showing":false,"width":"100%"}, {}]
			}],
			picture1: ["wm.Picture", {"aspect":"h","border":"0","height":"200px","width":"200px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"picurlEditor1.dataValue","targetProperty":"source"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			employeeSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"employeeLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"employeeLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			employeeCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"employeeDialog.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel44: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel45: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label25: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"border":"0","caption":"Master Detail","padding":"4","width":"340px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel46: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel48: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label26: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> double-click an employee to see the details for that employee in a pop-up window.","height":"42px","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel49: ["wm.Panel", {"height":"220px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						employeeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"employeeDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"employeeLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"employeeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"employeeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							employeeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"eid","title":"Eid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstname","title":"Firstname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastname","title":"Lastname","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"street","title":"Street","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"city","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"state","title":"State","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"zip","title":"Zip","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"birthdate","title":"Birthdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"picurl","title":"Picurl","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"twitterid","title":"Twitterid","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {"onCellDblClick":"employeeLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.empLiveVar","targetProperty":"dataSet"}, {}]
								}]
							}],
							employeeGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								employeeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"employeeLivePanel1.popupLivePanelInsert"}],
								employeeUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"employeeLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"employeeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								employeeDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"employeeLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"employeeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}],
					label30: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel51: ["wm.Panel", {"height":"42px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,100","verticalAlign":"middle","width":"100%"}, {}, {
						label27: ["wm.Label", {"border":"0","caption":"You selected","padding":"4","width":"133px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						dbLabel1: ["wm.Label", {"border":"0","height":"26px","padding":"4","width":"202px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":false,"source":"employeeDojoGrid.selectedItem.firstname","targetProperty":"caption"}, {}]
							}],
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				panel72: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel9: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel77: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html8: ["wm.Html", {"border":"0","height":"100%","html":"<p>The database widget automates the creation of a list-detail form with a popup window.</p>\n<p>This example shows using the database widget generated when a data schema is imported and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/DojoGrid\" target=\"_blank\">DojoGrid</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#&page=select&amp;layer=list\">Select Menu</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}