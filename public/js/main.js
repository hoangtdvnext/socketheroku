var socket = io("http://localhost:3000");

socket.on("register-response", function(data){
	console.log(data.length);
	data.map(function (user, index) {
		$("#listUser").append(
 			`
			<div class="row">
		        <div class="col-sm-3">
		          <div class="well">
		           <p>`+user.fullName+`</p>
		           <img src="img/profile.jpg" class="img-circle" height="55" width="55" alt="Avatar">
		          </div>
		        </div>
		        <div class="col-sm-9">
		          <div class="well">
		          	<p>`+index+`</p>
		            <p>`+user.email+`</p>
		            <p>`+user.phone+`</p>
		          </div>
		        </div>
	      	</div>  
			`
		);
	});
});

$(document).ready(function () {
	$("#btnRegister").click(function () {
		socket.emit("user-register", 
			{
				fullName: $("#fullName").val(), 
				email: $("#email").val(),
				phone: $("#phone").val()
			}
		);
	});
})