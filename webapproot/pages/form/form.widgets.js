form.widgets = {
	employeeDialog: ["wm.DesignableDialog", {"height":368,"title":"employee","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			employeeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"294px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"employeeLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"employeeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				eidEditor1: ["wm.Number", {"border":"0","caption":"Eid","captionSize":"200px","formField":"eid","height":"26px","required":true,"width":"100%"}, {}],
				firstnameEditor1: ["wm.Text", {"caption":"Firstname","captionSize":"200px","formField":"firstname","height":"26px","width":"100%"}, {}],
				lastnameEditor1: ["wm.Text", {"caption":"Lastname","captionSize":"200px","formField":"lastname","height":"26px","width":"100%"}, {}],
				streetEditor1: ["wm.Text", {"caption":"Street","captionSize":"200px","formField":"street","height":"26px","width":"100%"}, {}],
				cityEditor1: ["wm.Text", {"caption":"City","captionSize":"200px","formField":"city","height":"26px","width":"100%"}, {}],
				stateEditor1: ["wm.Text", {"caption":"State","captionSize":"200px","formField":"state","height":"26px","width":"100%"}, {}],
				zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"200px","formField":"zip","height":"26px","width":"100%"}, {}],
				birthdateEditor1: ["wm.DateTime", {"caption":"Birthdate","captionSize":"200px","dateMode":"Date","formField":"birthdate","height":"26px","width":"100%"}, {}],
				picurlEditor1: ["wm.Text", {"caption":"Picurl","captionSize":"200px","formField":"picurl","height":"26px","width":"100%"}, {}],
				twitteridEditor1: ["wm.Text", {"caption":"Twitterid","captionSize":"200px","formField":"twitterid","height":"26px","width":"100%"}, {}],
				tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"200px","formField":"tenantid","height":"26px","width":"100%"}, {}]
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
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel1: ["wm.MainContentPanel", {"border":"1","borderColor":"#ffffff","height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"800px"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["SectionHeader"]},"autoSizeWidth":true,"border":"0","caption":"Form Widget Examples","height":"100%","padding":"4","width":"278px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		tabLayers1: ["wm.TabLayers", {"width":"800px"}, {}, {
			basic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Basic Form","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_Basic"}, {}]
			}],
			search: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Search List Detail","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_Search"}, {}]
			}],
			master: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Master Detail","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer3: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_Master"}, {}]
			}],
			toMany: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"One To Many Relations","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer4: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_Many"}, {}]
			}],
			toOne: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"One To One Relations","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				pageContainer5: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_One"}, {}]
			}],
			related: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Set Related","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
				pageContainer6: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Form_Related"}, {}]
			}]
		}]
	}]
}