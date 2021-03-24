import { Socket } from "socket.io";

abstract class ISocketState {
    state :{
        [id: string]: Socket[];
    };
    constructor() {
        this.state = {}
    }
    add(id: string, socket: Socket) {}
    remove(id: string, socket: Socket) {}
    emit({ id, event, args}: { id: string, event: string, args: any}) {}
    
}

class SocketState implements ISocketState {
    state: {[id: string]: Socket[]};
    constructor() {
       this.state = {} 
    }

    add(id: string, socket: Socket) {
        if(!this.state[id]) {
            this.state[id] = [socket]
        }
        else {
            this.state[id] = [...this.state[id], socket]
        }
    }

    remove(id: string, socket: Socket){
        if(!this.state[id]) return
        this.state[id] = this.state[id].filter(sock =>  sock !== socket)
        return this.state[id]
    }

    emit({ id, event, args} : { id: string, event: string, args: any}) {
        const sockets = this.state[id]
        if(!sockets) return
        sockets.forEach(socket => {
            socket.emit(event, { event, id, args})
        })
    }
}

export default new SocketState()

