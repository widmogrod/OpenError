(function($, exports){
    
    exports.openerror = OpenError;
    
    function OpenError()
    {
        this.options = {};
    }
    
    /*
        Bootstrap
    */
    
    OpenError.prototype.init = function()
    {
        
    }
    
    /*
        Model
    */  
    
    OpenError.prototype.addIssue = function()
    {
        
    }
    
    OpenError.prototype.getListOfIssues = function()
    {
        
    }
    
    OpenError.prototype.getUserData = function()
    {
        
    }
    
    /*
        Controller
    */
    
    OpenError.prototype.openImageEditor = function()
    {
        
    }
    
    OpenError.prototype.closeImageEditor = function()
    {
        
    }

    OpenError.prototype.openDrawer = function()
    {
        
    }
    
    OpenError.prototype.closeDrawer = function()
    {
        
    }

    OpenError.prototype.createSnapshot = function()
    {
        var configuration = {
            logging: false,
            ready: function(renderer) {
                document.body.appendChild(renderer.canvas);
                
                var canvas = $(renderer.canvas);
                canvas.css('margin-top','500px');
                
                console.log(renderer);
            }
        };
    
        new html2canvas($('body').get(0), configuration);
    }
    
}) (jQuery, window);