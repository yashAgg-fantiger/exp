const express = require('express');

const app = express();
const PORT = 3000;

app.get('/slow',async (req, res)=>{
	let { tier } = req.query;
	setTimeout(() => {
		if(tier && tier != ""){
			res.status(200);
			res.send(`this is the response of slow api ${tier}`);
		}
		else{
			res.status(200);
			res.send("this is the response of slow api");
		}
	}, 5000);
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
