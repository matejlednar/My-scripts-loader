My Scripts Loader 
=================

Author: Matej Lednár

Synchronous Module Definition Loader

Syntax:

require(["file.js", "file.js",..., "file.js"], callback);

Each module must return an object, function, or primitive value. 

Module definition syntax:

function() {

  your code comes here ....

  return function() {} | object | primitiveValue
}
