let http_mod=require("http")
let {exec} = require("child_process");
let port = 7842;
http_mod .createServer(function(request, response) {
    response.writeHead(200,{"content-type":"text/html"})
    response.write("<h1>Node js server has started</h1>")
    response.end
    
}).listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
    exec(`start http://localhost:${port}`)
})