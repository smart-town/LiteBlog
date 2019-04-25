//成功加载vscode后执行
function success(data){
    console.log("load vscode success") ;
    window.addEventListener('message',dealData);
}
//vscode加载失败时执行
function fail(data){
    console.error("load vscode fail");
}

function dealData(event){
    console.log("getData",event.data);
}

export default {
    success,
    fail,
    dealData,
}