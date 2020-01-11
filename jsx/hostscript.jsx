/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function sayHello(){
    alert("hello from ExtendScript");
}

function isArray(arg){
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
}

function writeData(obj){
    var layers = app.activeDocument.artLayers;
    var layer = layers.add();
    layer.kind = LayerKind.TEXT;
    layer.textItem.contents = extraction(obj);
    layer.textItem.size = 70;
    layer.textItem.color.rgb.red= 255;
    layer.textItem.color.rgb.blue= 0;
    layer.textItem.color.rgb.green= 0;
    return true;
    function extraction(obj){
        var text = "";
        for(var key in obj){
            text += isArray(obj[key]);
        }
        return text;
        function isArray(value){
            if(Object.prototype.toString.call(value) !== '[object Array]'){
                return value;
            }
            var values = "";
            for(var i=0;i<value.length;i++){
                for(var p in value[i]){
                    values += value[i][p];
                }
            }
            return values;
        }
    }
}

//writeData({num:5,text:["www","sss"]});