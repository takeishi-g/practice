const doPost = (e) => {

    //値の受取り
    const name = e.parameter.name ? e.parameter.name : "";
    const task = e.parameter.task ? e.parameter.task : "";
    const time = e.parameter.time ? e.parameter.time : "";
    const mujinTime = e.parameter.mujinTime ? e.parameter.mujinTime : "";
    const drow_num = e.parameter.drow_num ? e.parameter.drow_num : "";

    //スプレッドシートの準備
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("シート1");

    //シートの一番下の行に追加
    sheet.appendRow([drow_num, name, task, time, mujinTime, new Date()]);

    //応答
    return ContentService.createTextOutput(JSON.stringify({ "message": "success!" }));
}