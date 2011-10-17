Editor_Text.widgets = {
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		panel24: ["wm.Panel", {"height":"571px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			panel34: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				label24: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","DemoHeader"]},"autoSizeWidth":true,"border":"0","caption":"Text Editor Widgets","padding":"4","width":"166px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			panel37: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","verticalAlign":"top","width":"100%"}, {}, {
				panel41: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"500px"}, {}, {
					label53: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Try It!","height":"32px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					label25: ["wm.Label", {"border":"0","caption":"<b>Directions:</b> enter data into editors. Note that editors have built-in validation.","height":"34px","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel42: ["wm.Panel", {"height":"300px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						panel44: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							text6: ["wm.Text", {"caption":"Text w tooltip","captionSize":"125px","displayValue":"","promptMessage":"Enter anything here!","width":"350px"}, {}],
							text1: ["wm.Text", {"caption":"Text w reset","captionSize":"125px","displayValue":"","placeHolder":"Enter username here","promptMessage":"Enter your username here","resetButton":true,"width":"345px"}, {}],
							text3: ["wm.Text", {"caption":"Password","captionSize":"125px","displayValue":"","password":true,"placeHolder":"Enter password here","resetButton":true,"width":"345px"}, {}],
							richtext: ["wm.RichText", {"caption":"Rich Text Editor","captionAlign":"center","captionSize":"16px","margin":"10,0,0,0","toolbarColor":true,"toolbarFontName":true,"toolbarFormatName":true,"toolbarSize":true}, {}]
						}]
					}],
					label56: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_BackgroundColor_LightGray"]},"border":"0","caption":"Result","height":"34px","padding":"4","width":"646px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel45: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,20","verticalAlign":"top","width":"100%"}, {}, {
						panel46: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label29: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"Single line text is","padding":"4","width":"108px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							label36: ["wm.Label", {"border":"0","padding":"4","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":false,"source":"text1.dataValue","targetProperty":"caption"}, {}]
								}],
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel63: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label54: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"Password is","padding":"4","width":"77px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							label55: ["wm.Label", {"border":"0","padding":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":false,"source":"text3.dataValue","targetProperty":"caption"}, {}]
								}],
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel48: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label39: ["wm.Label", {"autoSizeWidth":true,"border":"0","caption":"Rich text is","padding":"4","width":"73px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							label40: ["wm.Label", {"border":"0","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":false,"source":"richtext.dataValue","targetProperty":"caption"}, {}]
								}],
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}]
				}],
				panel73: ["wm.MainContentPanel", {"height":"734px","horizontalAlign":"left","margin":"0,0,0,10","verticalAlign":"top","width":"260px"}, {}, {
					fancyPanel9: ["wm.FancyPanel", {"labelHeight":"36","title":"Description"}, {}, {
						panel74: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							html5: ["wm.Html", {"border":"0","height":"460px","html":"Text editors accept input from the user:<br>\n<ul>\n<li>Tooltips provide prompts for the user</li>\n<li>Password editor protects contents</li>\n<li>Rich text editor provides formatting</li>\n</ul>\n<p>This example shows using text editors to input information and was built using drag and drop development and no code!</p>\n<h3>Documentation</h3>\n<ul>\n<li><a href='http://dev.wavemaker.com/wiki/bin/wmjsref_6.4/Text' target='_blank'>Text Widget</a></li>\n</ul>\n<h3>Related Examples</h3>\n<ul>\n<li><a href='http://widgetexamples.cloudfoundry.com/#&page=select&layer=select' target='_blank'>Select Menu/Combo Boxes</a></li>\n</ul>","margin":"5","width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}