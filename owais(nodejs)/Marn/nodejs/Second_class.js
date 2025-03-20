let http_m=require("http")
let{exec}=require("child_process");
require("dotenv").config()
let port =process.env.PORT_NO
http_m.createServer(function(request,response){
if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`<h1>Welcome to Website</h1>
    <hr>
    <ul>
        <li><a href="/i">Home</a></li>
    </ul>`);
    response.end()
    
} else if( request.url === "/i"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`<h1>Home Page</h1>
    <hr>
    <ul>
        <li><a href="/a">About</a></li>
        <li><a href="/c">Contact</a></li>
    </ul>`);
    response.end()
    
}else if( request.url === "/a"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`<h1>About Us Page</h1>
    <hr>
    <ul>
        <li><a href="/i">Home</a></li>
        <li><a href="/c">Contact</a></li>
    </ul>`);
    response.end()
    
}else if( request.url === "/c"){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`<h1>Contact Us Page</h1>
    <hr>
    <ul>
        <li><a href="/i">Home</a></li>
        <li><a href="/a">About</a></li>
    </ul>`);
    response.end()
    
}else{
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write(`<h1 style="color:red">Page not found</h1>
    <hr>`);
    response.end()
    
}
}).listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
    exec(`start http://localhost:${port}`);
})