Select_DB.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel28: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel29: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label19: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"autoSizeWidth":true,"border":"0","caption":"Populate Select Options from Database Query","padding":"4","width":"417px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel30: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel32: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
					label17: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label20: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> select from a list of departments","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel33: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel34: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96px"}, {}],
						dbSelectMenu: ["wm.SelectMenu", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"autoComplete":false,"caption":"Select department","captionSize":"120px","displayField":"name","displayValue":"Sales","pageSize":4}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.deptLiveVar","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					label29: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label21: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Detailed information for selected Department","height":"42px","margin":"10,0,0,20","padding":"4","width":"331px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					liveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"182px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"dbSelectMenu.selectedItem","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.employees"}, {}]
						}],
						deptidEditor1: ["wm.Number", {"caption":"Deptid","captionSize":"200px","formField":"deptid","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
						nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"200px","formField":"name","height":"26px","readonly":true,"width":"100%"}, {}],
						budgetEditor1: ["wm.Number", {"caption":"Budget","captionSize":"200px","formField":"budget","height":"26px","readonly":true,"width":"100%"}, {}],
						q1Editor1: ["wm.Number", {"caption":"Q1","captionSize":"200px","formField":"q1","height":"26px","readonly":true,"width":"100%"}, {}],
						q2Editor1: ["wm.Number", {"caption":"Q2","captionSize":"200px","formField":"q2","height":"26px","readonly":true,"width":"100%"}, {}],
						q3Editor1: ["wm.Number", {"caption":"Q3","captionSize":"200px","formField":"q3","height":"26px","readonly":true,"width":"100%"}, {}],
						q4Editor1: ["wm.Number", {"caption":"Q4","captionSize":"200px","formField":"q4","height":"26px","readonly":true,"width":"100%"}, {}],
						deptcodeEditor1: ["wm.Text", {"caption":"Deptcode","captionSize":"200px","formField":"deptcode","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						locationEditor1: ["wm.Text", {"caption":"Location","captionSize":"200px","formField":"location","height":"26px","readonly":true,"width":"100%"}, {}],
						tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"200px","formField":"tenantid","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
						liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"liveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1","showing":false}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
									}]
								}],
								cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
								updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}],
								deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"liveForm1EditPanel.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				panel75: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
					fancyPanel8: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel76: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html7: ["wm.Html", {"border":"0","height":"100%","html":"<p>A select menu can get its options from the result of a database query, Java or web service call.</p>\n<p>This example shows using the dataSet property of the select menu to query a database table and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href='http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/SelectMenu' target='_blank'>Select Menu Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=editor&layer=radio'>Radio Button</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}