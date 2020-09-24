import { RPCPeer, Export, RemoteListener, webworker_rpc } from "../../src/index";

// 主worker 创建子worker 并创建连接
// worker对应的实体，用于注册worker之间的回调，方法
class ForemanContext extends RPCPeer {
    constructor() {
        super("foreman");
        this.linkTo("workerA", "/taskAWorker.js").onReady(() => {
            this.remote.workerA.WorkerAContext.methodA(true);
        });
        this.linkTo("workerB", "/taskBWorker.js").onReady(() => {
            this.remote.workerB.WorkerBContext.methodB(333);
        });
        this.linkTo("workerC", "/taskCWorker.js").onReady(() => {
            this.remote.workerC.WorkerCContext.methodC("111");
        });
    }

    @Export()
    public static methodF() {
        console.log("methodF");
    }

    @RemoteListener("workerA", "WorkerAHelper", "foremanCall", [webworker_rpc.ParamType.str])
    public foremanListen2A(val: string) {
        console.log("foremanListen2A: ", val);
    }

    @RemoteListener("workerB", "WorkerBContext", "foremanCall", [webworker_rpc.ParamType.str])
    public foremanListen2B(val: string) {
        console.log("foremanListen2B: ", val);
    }

    @RemoteListener("workerC", "WorkerCContext", "foremanCall", [webworker_rpc.ParamType.str])
    public foremanListen2C(val: string) {
        console.log("foremanListen2C: ", val);
    }
}

const context: ForemanContext = new ForemanContext();