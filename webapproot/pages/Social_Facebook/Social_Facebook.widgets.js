Social_Facebook.widgets = {
	buttonPushVar: ["wm.Variable", {"type":"NumberData"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"0","source":false,"targetProperty":"dataValue"}, {}]
		}]
	}],
	buttonClickDialog: ["wm.GenericDialog", {"button1Caption":"Close","button1Close":true,"corner":"cr","height":"106px","positionNear":"basicButton","userPrompt":"You pushed the button!"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["MainContent"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel20: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label4: ["wm.Label", {"_classes":{"domNode":["DemoHeader"]},"autoSizeWidth":true,"border":"0","caption":"Facebook Like Widget","padding":"4","width":"205px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"450px"}, {}, {
						label14: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						label16: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> push button to show dialog window.","height":"34px","padding":"4","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						gadgetFacebookLikeButton1: ["wm.gadget.FacebookLikeButton", {"border":"0","colorscheme":"light","height":"80px","href":"http://widgetexamples.facebook.com"}, {}],
						panel3: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","verticalAlign":"middle","width":"100%"}, {}],
						label17: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"32px","padding":"4","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						panel8: ["wm.Panel", {"height":"420px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,20","verticalAlign":"middle","width":"100%"}, {}, {
							gadgetFacebookActivityFeed1: ["wm.gadget.FacebookActivityFeed", {"border":"0","site":"www.wavemaker.com, widgetexamples.cloudfoundry.com"}, {}]
						}]
					}],
					panel17: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"280px"}, {}, {
						fancyPanel2: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
							panel2: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								html2: ["wm.Html", {"border":"0","height":"100%","html":"<p>The Facebook Like widget uses Facebook to track a social graph of people who like or recommend a particular url or web page.</p>\n<p>The Facebook activity widget tracks activity around particular web sites.</p>\n<p>This example shows using the facebook like widget and facebook activity widget built using drag and drop development and no code!</p>\n<h4>Documentation</h4>\n<ul>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/FacebookLikeButton\" target=\"_blank\">Facebook Like Button</a></li>\n<li><a href=\"http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/FacebookActivityFeed\" target=\"_blank\">Facebook Activity Feed</a></li>\n</ul>\n<h4>Related Examples</h4>\n<ul>\n<li><a href=\"http://widgetexamples.cloudfoundry.com/#?page=social&amp;layer=twitter\" target=\"_blank\">Twitter Feed</a></li>\n</ul>","margin":"5"}, {}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}