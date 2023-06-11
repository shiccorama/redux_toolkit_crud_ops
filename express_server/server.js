const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("api/users", (request,response) => {
	setTimeout(function() {
		response.send(request.body)
	}, 2000)
});


app.listen("5000", () => {
	console.log("server is running on port 5000");
});