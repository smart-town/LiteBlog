//异步获取vscode对象
let vscode = "initial";
let vscodeInfo = "initial";
const vscodeFunc = new Promise((resolve,reject)=>{
    try {
        vscode = acquireVsCodeApi();
        window.addEventListener("message",dealData);//默认监听事件
        resolve(vscode);
    } catch(e){
        vscodeInfo = "initial fail,Can not get vscode object";
        vscode="fail";
        reject("fail");
    }
})
vscodeFunc.then(data=>vscode=data, data=>vscode=data);
function dealData(data){
    console.log("dealdata:",data);
}
// setTimeout(()=>console.log(vscode),2000);
export default {
    vscode,
    vscodeInfo
}