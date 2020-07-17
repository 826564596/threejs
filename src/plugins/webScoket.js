let websock = null;
let globalCallback = function() {}; //接收回调函数
const initWebSocket = () => {
    //初始化weosocket
    const wsuri = "ws://27.150.173.9:9002/ws/ParaQry";
    websock = new WebSocket(wsuri);
    websock.onmessage = websocketonmessage;
    websock.onopen = websocketonopen;
    websock.onerror = websocketonerror;
    websock.onclose = websocketclose;
};
const websocketonopen = () => {
    //连接建立之后执行send方法发送数据
    console.log("建立链接");
    let actions = [
        { deviceid: "dev_wuji_0c8d64d39d494df5aa8bb8397d8e66b3", paralist: "001002003007" },
        { deviceid: "dev_wuji_2b49ab2794a54e6f8dc140a8970845ae", paralist: "001002003007" },
        { deviceid: "dev_wuji_36ccc0be0e064379b8778f03cb8bcb39", paralist: "001002003007" },
        { deviceid: "dev_wuji_4194ffdf143646fda85a8211f6a0b757", paralist: "001002003007" },
        { deviceid: "dev_wuji_585de886ce0a4a8795bb1260e389273e", paralist: "001002003007" },
        { deviceid: "dev_wuji_6a59c1925e2547f3963fa23bd2df91e3", paralist: "001002003007" },
        { deviceid: "dev_wuji_6c78c0147c6b4885b0759bf74c66039f", paralist: "001002003007" },
        { deviceid: "dev_wuji_6f2ef3bca16845fd8d5c063b0834918c", paralist: "001002003007" },
        { deviceid: "dev_wuji_b76b300a4f0845b58481350a8b588284", paralist: "001002003007" },
        { deviceid: "dev_wuji_cdb11012cb674a189324b0e7ffc6fb49", paralist: "001002003007" },
        { deviceid: "dev_wuji_dabcdff28b11418a9e3def4e1c3b83f6", paralist: "001002003007" },
        { deviceid: "dev_wuji_e3eb868c8319485caa76de30a1faecbe", paralist: "001002003007" },
        { deviceid: "dev_wuji_fd4d4619bf2f4ae580671f18ca4beed2", paralist: "001002003007" },
        { deviceid: "dev_test_ad7528b86fcd44f4a4cacf06733c07de", paralist: "001002003007" },
    ];
    websocketsend(JSON.stringify(actions));
};
const websocketonerror = () => {
    //连接建立失败重连
    initWebSocket();
};
const websocketonmessage = (e) => {
    //数据接收
    // console.log(JSON.parse(e.data));
    globalCallback(JSON.parse(e.data));
};
const websocketsend = (Data) => {
    //数据发送
    websock.send(Data);
};
const websocketclose = (e) => {
    //关闭
    console.log("断开连接", e);
};

initWebSocket();

const sendSock = (callback, agentData) => {
    globalCallback = callback;
    if (websock.readyState === websock.OPEN) {
        // 若是ws开启状态
        websocketsend(agentData);
    } else if (websock.readyState === websock.CONNECTING) {
        // 若是 正在开启状态，则等待1s后重新调用
        // setTimeout(function() {
        //     sendSock(agentData, callback);
        // }, 1000);
    } else {
        // 若未开启 ，则等待1s后重新调用
        // setTimeout(function() {
        //     sendSock(agentData, callback);
        // }, 1000);
    }
};

export default {
    sendSock: sendSock,
    websock: websock,
    initWebSocket: initWebSocket,
};
