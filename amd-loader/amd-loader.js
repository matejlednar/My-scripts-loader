// Author: Matej Lednár

function require(files, callback) {

  // async script loader
  function loadScript(file) {

    var xhttp = {};
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", file, true);
    xhttp.send();
    return xhttp;
  }

  // loads JS files, checks loading state, calls callback
  function loadFile(file, number) {
          
    xhr[number] = loadScript(file, true);
          
    xhr[number].onreadystatechange = function returnResponse() {
      if (xhr[number].readyState == 4 && xhr[number].status == 200) {
        fileSource = xhr[number].responseText;

        // transformation to JS
        eval("fileSource = " + fileSource );
          
        // saves results (objects, functions, primitive values) 
        result[number] = fileSource();
              
        // flag for successful loading
        loadedFiles++; 
              
        // checks number of loaded files
        if (numberOfFiles == loadedFiles) {
          // invoke callback with loaded objects / functions / primitive values
          callback.apply({}, result);
        }              
      }
    }
  }

  var numberOfFiles = files.length;
  var fileSource;  // variable for loaded function
  var xhr = []; // must be an array for safety data manipulation
  var loadedFiles = 0;
  var result = [];
        
  for (var i = 0; i < numberOfFiles; i++) {
    loadFile(files[i], i);
  }
}