dojo.require("dojo.hash");
dojo.declare("Main", wm.Page, {
    start: function() {
        try {
            // Initialize global live vars
            //app.deptLiveVar.update();
            //app.empLiveVar.update();
            // Get location to navigate to
            var pageName = this.getUrlParam('page');
            var layerName = this.getUrlParam('layer');
            //console.log("Page parameter in url page = " + pageName + " layer = "+layerName);
            if (pageName !== "") {
                var pageArray = ['button', 'editor', 'form', 'grid', 'select', 'social', 'tree'];
                if (dojo.indexOf(pageArray, pageName) >= 0) this.mainPageContainer.setPageName(pageName);
                else app.toastError("Main page: unrecognized Page parameter in url page = " + pageName + " layer = "+layerName);
            }
            if (layerName !== "") {
                app.layerNameVar.setValue('dataValue', layerName);
            } else {
                app.layerNameVar.setValue('dataValue', '');                
            }
            this.menuObjectTree.forEachNode(function( n ) {n.setOpen(true);});
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },
    // Called by start() - returns the parameter value from url that matches name
    getUrlParam: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        // Run regex on url for app
        var results = regex.exec(window.location.href);
        if (results === null) return "";
        else return results[1];
    },
    goPageLayer: function(inPage, inLayer) {
        dojo.hash("&page="+inPage+"&layer="+inLayer);  
        if (this.mainPageContainer.pageName != inPage) {
            app.layerNameVar.setValue('dataValue', inLayer);
            this.mainPageContainer.setPageName(inPage);
        } else {
            // Depends on having a tabLayers1 widget in each page
            this.mainPageContainer.page.tabLayers1.setLayer(inLayer);
        }
    },
    mainNavigation: function(inDestination) {
        switch (inDestination) {
        case 'Button':
            this.goPageLayer('button', 'button');
            break;            
        case 'Basic Button':
            this.goPageLayer('button', 'button');
            break;
        case 'Toggle Button':
            this.goPageLayer('button', 'toggle');
            break;
        case 'Busy Button':
            this.goPageLayer('button', 'busy');
            break;
        case 'Popup Button':
            this.goPageLayer('button', 'popup');
            break;
        case 'Right Click Button':
            this.goPageLayer('button', 'right');
            break;
        case 'Select Menu':
            this.goPageLayer('select', 'select');
            break;            
        case 'Select from List':
            this.goPageLayer('select', 'select');
            break;
        case 'Filtering Select':
            this.goPageLayer('select', 'filter');
            break;            
        case 'Select from DB':
            this.goPageLayer('select', 'populate');
            break;
        case 'Fancy Display':
            this.goPageLayer('select', 'display');
            break;
        case 'Form':
            this.goPageLayer('form', 'basic');
            break; 
        case 'Basic Form':
            this.goPageLayer('form', 'basic');
            break; 
        case 'Search List':
            this.goPageLayer('form', 'search');
            break; 
        case 'Master Detail':
            this.goPageLayer('form', 'master');
            break; 
        case 'One To Many':
            this.goPageLayer('form', 'toMany');
            break; 
        case 'One To One':
            this.goPageLayer('form', 'toOne');
            break; 
        case 'Set Related':
            this.goPageLayer('form', 'related');
            break; 
        case 'Grid':           
            this.goPageLayer('grid', 'basic');
            break;  
        case 'Basic Grid':
            this.goPageLayer('grid', 'basic');
            break;   
        case 'Grid Paging':
            this.goPageLayer('grid', 'paging');
            break;  
        case 'Searching':
            this.goPageLayer('grid', 'searching');
            break;
        case 'Sorting':
            this.goPageLayer('grid', 'sorting');
            break;
        case 'Formatting':
            this.goPageLayer('grid', 'formatting');
            break;
        case 'Calculated Columns':
            this.goPageLayer('grid', 'columns');
            break;
        case 'Grid Subtotals':
            this.goPageLayer('grid', 'subtotal');
            break;  
        case 'Social':
            this.goPageLayer('social', 'facebook');
            break;   
        case 'Facebook':
            this.goPageLayer('social', 'facebook');
            break;   
        case 'Twitter':
            this.goPageLayer('social', 'twitter');
            break;                          
        case 'Tree':
            this.goPageLayer('tree', 'propertyTree');
            break;   
        case 'Tree from DB':
            this.goPageLayer('tree', 'propertyTree');
            break;   
        case 'Tree from List':
            this.goPageLayer('tree', 'objectTree');
            break;              
        case 'Editor':
            this.goPageLayer('editor', 'basic');
            break;    
        case 'Basic Editors':
            this.goPageLayer('editor', 'basic');
            break;     
        case 'Radio Editors':
            this.goPageLayer('editor', 'radio');
            break;
        case 'Date Editors':
            this.goPageLayer('editor', 'dates');
            break;     
        case 'Text Editors':
            this.goPageLayer('editor', 'text');
            break;     
        case 'Validation Editors':
            this.goPageLayer('editor', 'validation');
            break;                 
        case 'About This App':
            this.aboutDialog.show();
            break;            
        default:
            app.toastError("Unrecognized navigation to = " + inDestination);
        }
    },
    menuObjectTreeSelect: function(inSender, inNode, inData) {
        try {

            if (typeof(inData) == "object") {
                inNode.setOpen(true);
                this.mainNavigation(inNode.content);
            } else {
                this.mainNavigation(inNode.content);
            }

        } catch (e) {
            console.error('ERROR IN menuObjectTreeSelect: ' + e);
        }
    },
    _end: 0
});