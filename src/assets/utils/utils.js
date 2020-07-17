/**获取当前月第一天和最后一天 */
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
/**对象转字符串 */
const formatQueryStr = (obj) => {
    let queryStr = "?";
    for (let o in obj) {
        queryStr = queryStr + o + "=" + encodeURI(obj[o]) + "&";
    }
    return queryStr.substring(0, queryStr.length - 1);
};

/**获取七天前的日期 */
const getDay = (num) => {
    let date1 = new Date();
    //今天时间
    let time1 = date1.getFullYear() + "-" + ((date1.getMonth() + 1).toString().length == 1 ? "0" + (date1.getMonth() + 1) : date1.getMonth() + 1) + "-" + (date1.getDate().toString().length == 1 ? "0" + date1.getDate() : date1.getDate());
    let date2 = new Date(date1);
    date2.setDate(date1.getDate() + num);
    //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
    let time2 = date2.getFullYear() + "-" + ((date2.getMonth() + 1).toString().length == 1 ? "0" + (date2.getMonth() + 1) : date2.getMonth() + 1) + "-" + (date2.getDate().toString().length == 1 ? "0" + date2.getDate() : date2.getDate());

    return num >= 0 ? [time1, time2] : [time2, time1];
};

/**获取指定月份的第一天和最后一天 */
const getAnyMouthFirstAndLast = (year, mouth) => {
    let monthStartDate = new Date(year, mouth, 1);
    //本月的结束时间
    let monthEndDate = new Date(year, mouth + 1, 0);

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

/** 输入new Date(),装换yyyy-mm-dd */
const dateToDay = (date) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date
        .toJSON()
        .substr(0, 19)
        .replace("T", " ")
        .split(" ")[0];
};
/**计算两个日期之间的日期差 */
const differDate = (dateString1, dateString2) => {
    let startDate = Date.parse(dateString1);
    let endDate = Date.parse(dateString2);
    let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
    return days;
};
/** 计算两个日期之间所有日期*/
const getAllAroundDay = (begin, end) => {
    // 开始日期和结束日期
    if (!begin || !end) {
        // 去除空的可能性
        console.log("有时间为空");
        return false;
    }
    // 在时间Date的原型中定义一个format方法
    Date.prototype.format = function() {
        let s = ""; // 定义一个字符串，目的，要时间格式按照我们的要求拼接
        let month = this.getMonth() + 1;
        let day = this.getDate();
        s += this.getFullYear() + "-";
        s += month + "-";
        s += day;
        return s; // 得到的格式如 "2018-11-20"
    };
    let ab = begin.split("-"); // 把日期参数分割，注意，如果以'/'连接，则分割'/'
    let ae = end.split("-");
    let db = new Date();
    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]); // 返回符合UTC的时间格式
    let de = new Date();
    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
    let unixDb = db.getTime();
    let unixDe = de.getTime();
    let arr = [];
    for (let k = unixDb; k <= unixDe; ) {
        arr.push(new Date(parseInt(k)).format());
        k = k + 24 * 60 * 60 * 1000;
    }
    return arr; // 返回两个日期之间的所有日期数组。
};

module.exports = {
    CurrentMonthFirstAndLast: CurrentMonthFirstAndLast,
    formatQueryStr: formatQueryStr,
    getDay: getDay,
    getAnyMouthFirstAndLast: getAnyMouthFirstAndLast,
    dateToDay: dateToDay,
    differDate: differDate,
    getAllAroundDay: getAllAroundDay,
};
