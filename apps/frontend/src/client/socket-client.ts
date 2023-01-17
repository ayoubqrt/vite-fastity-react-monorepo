import {io} from "socket.io-client";

const socket = io();

function init(){

	socket.on("connect", () => {
		setIsConnected(true);
	});
    
	socket.on("disconnect", () => {
		setIsConnected(false);
	});
    
	socket.on("pong", () => {
		setLastPong(new Date().toISOString());
	});

	return () => {
		socket.off("connect");
		socket.off("disconnect");
		socket.off("pong");
	};
}
function setIsConnected(state: boolean) {
    if (state)
        console.log("connected !");
    else
        console.log("disconnected !");

}

function setLastPong(date: string) {
    console.log(date);
}

export default{
    init
};