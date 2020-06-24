// 获取当前月第一天和最后一天
const CurrentMonthFirstAndLast = () => {
    let now = new Date(); //当前日期
    let nowMonth = now.getMonth(); //当前月
    let nowYear = now.getFullYear(); //当前年
    //本月的开始时间
    let monthStartDate = new Date(nowYear, nowMonth, 1);
    //本月的结束时间
    let monthEndDate = new Date(nowYear, nowMonth + 1, 0);

    //getMinutes: 获取 Date 对象的分钟(0~59)
    //getTimezoneOffset: 获取本地时间与 UTC 时间的分钟差
    //setMinutes: date.getMinutes() - 90 表示设置 date 为 90 分钟之前的时间

    monthStartDate.setMinutes(monthStartDate.getMinutes() - monthStartDate.getTimezoneOffset());
    monthEndDate.setMinutes(monthEndDate.getMinutes() - monthEndDate.getTimezoneOffset());
    let arr = [];
    arr[0] = monthStartDate
        .toJSON()
        .substr(0, 19)
        .replace("T", " ")
        .split(" ")[0];
    arr[1] = monthEndDate
        .toJSON()
        .substr(0, 19)
        .replace("T", " ")
        .split(" ")[0];
    return arr;
};
//对象转字符串
const formatQueryStr = (obj) => {
    let queryStr = "?";
    for (let o in obj) {
        queryStr = queryStr + o + "=" + encodeURI(obj[o]) + "&";
    }
    return queryStr.substring(0, queryStr.length - 1);
};

//获取七天前的日期

const getDay = (num) => {
    let date1 = new Date();
    //今天时间
    let time1 = date1.getFullYear() + "-" + ((date1.getMonth() + 1).toString().length == 1 ? "0" + (date1.getMonth() + 1) : date1.getMonth() + 1) + "-" + (date1.getDate().toString().length == 1 ? "0" + date1.getDate() : date1.getDate());
    let date2 = new Date(date1);
    date2.setDate(date1.getDate() + num);
    //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
    let time2 = date2.getFullYear() + "-" + ((date2.getMonth() + 1).toString().length == 1 ? "0" + (date2.getMonth() + 1) : date2.getMonth() + 1) + "-" + (date2.getDate().toString().length == 1 ? "0" + date2.getDate() : date2.getDate());

    console.log((date1.getMonth() + 1).toString().length == 1 ? "0" + (date1.getMonth() + 1) : date1.getMonth() + 1);
    return num >= 0 ? [time1, time2] : [time2, time1];
};
module.exports = {
    CurrentMonthFirstAndLast: CurrentMonthFirstAndLast,
    formatQueryStr: formatQueryStr,
    getDay: getDay,
};
