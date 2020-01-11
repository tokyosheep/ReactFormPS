(function(){
    var layers = [];
    for(var i=0;i<app.activeDocument.layers.length;i++){
        layers[i] = {
            id:i,
            text:app.activeDocument.layers[i].name
            };
    }
    return JSON.stringify(layers);
})();