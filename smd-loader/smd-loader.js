// Author: Matej Lednár

function require(files, callback) {

  // sync script loader
  function loadScript(file) {
    var xhr = {};
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("GET", file, false);
    xhr.send();
    return xhr.responseText;
  }

  // loads JS files, checks loading state, calls callback
  function loadFile(file, isLast) {
          
    // transformation to JS
    eval("fileSource = " + loadScript(file));
          
    // saves results (objects or functions)
    result.push(fileSource());
          
    // checks number of loaded files
    if (isLast) {
      // invoke callback with loaded objects / functions / primitive values
      callback.apply({}, result);
    }
  }
        
  var numberOfFiles = files.length;
  var fileSource;  // variable for loaded function
  var isLast;
  var result = [];
  
  for (var i = 0; i < numberOfFiles; i++) {
    isLast = (numberOfFiles - i - 1) ? false : true;
    loadFile(files[i], isLast);
  }
}