var express  = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(process.env.PORT || 3000);//


var arrUser = [];
io.on("connection", function (socket) {
	"Ip connection: " + socket.id;
	// lắng nghe từ client connect
	socket.on("user-register", function (data) {
		arrUser.push(new User(data.fullName, data.email, data.phone));

		io.sockets.emit("register-response",arrUser);
	});

});

function User(fullName, email, phone) {
	this.fullName = fullName;
	this.email = email;
	this.phone = phone;
}

//router
app.get("/", function (req, res) {
	res.render("home");
});