tinymce.PluginManager.add('charlimit', function(editor){

        editor.on('init', function(){
            var textarea = $('#' + editor.id);
            var maxCharacters = tinyMCE.activeEditor.getParam('maxCharacters');
            var maxDisplay = tinyMCE.activeEditor.getParam('maxDisplay');
            var subButton = tinyMCE.activeEditor.getParam('subButton');
            var color1 = tinyMCE.activeEditor.getParam('color1', 'black');
            var color2 = tinyMCE.activeEditor.getParam('color2', 'orange');
            var color3 = tinyMCE.activeEditor.getParam('color3', 'red');
                        
            var count = function(){
                var y = editor.getContent({format: "raw"});
                y = y.replace(/\.\.\./g, "");
                y = y.replace(/<.[^<>]*?>/g, "");
                y = y.replace(/&nbsp;|&#160;/gi, " ");
                y = y.replace(/(\w+)(&#?[a-z0-9]+;)+(\w+)/i, "$1$3");
                y = y.replace(/&.+?;/g, "");
                var z = maxCharacters - y.length;
                return z;
            };

            $(maxDisplay).text(count());
            
            editor.on('keyup', function(){
                $(maxDisplay).text(count());
                
                maxColor = maxCharacters / 4;
                
                if (count() > maxColor) {
                    $(maxDisplay).css("color", color1);
                    $(subButton).removeAttr("disabled");
                }
                if (count() < maxColor) {
                    $(maxDisplay).css("color", color2);
                    $(subButton).removeAttr("disabled");
                }
                if (count() < 0) {
                    $(maxDisplay).css("color", color3);
                    $(subButton).attr("disabled", "disabled");
                }
            });
        });
    });
