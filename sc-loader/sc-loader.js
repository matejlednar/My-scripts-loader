// Author: Matej Lednár

function loadScript(files) {
        
  function isArray(Obj) {
    return ({}).toString.call(Obj).match(/\s([a-zA-Z]+)/)[1] == "Array";
  }
        
  function loadFile(file) {
          
    var scriptElement = document.createElement("script");
    scriptElement.src = file;
          
    var target = document.getElementsByTagName("head")[0];
    target.appendChild(scriptElement);
  }
        
  if (isArray(files)) {
        
    var numberOfFiles = files.length;

    for (var i = 0; i < numberOfFiles; i++) {
      loadFile(files[i]);
    }
  }
        
  else {
    loadFile(files);
  }
        
}