var fileSystem = require("fs");
var dir = "c:\\Users\\Public\\Two.txt";
fileSystem .open(dir, "w+", function(error, data) {
if (error) {
console.error("The error is " + error.message);
} else {
console.log("The respective file is opened at " + dir);
}
});