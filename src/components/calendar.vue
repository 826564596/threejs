<!-- 点检，保养 -->
<template>
    <div class="mywk__calendar">
        <div class="calendar">
            <div class="calendar__header">
                <div class="header__pre" @click="handlePreMonth">

                </div>
                <div class="header__title">
                    {{selectedYear}}年{{selectedMonth + 1}}月{{selectedDate}}日
                </div>
                <div class="header__next" @click="handleNextMonth">

                </div>
            </div>

            <div class="calendar__main">
                <div class="main__block-head" v-for="(item, index) in calendarHeader" :key="index">
                    {{item}}
                </div>

                <div :class="`main__block ${(item.type === 'pre' || item.type === 'next') ? 'main__block-not' : ''} ${( item.newType === '2') && 'main__block-warn'} ${( item.newType === '0') && 'main__block-success'} ${( item.newType === '1') && 'main__block-unsuccess '}`"
                    v-for="(item, index) in mouthData" :key="item.type + item.content + `${index}`">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import utils from "../assets/utils/utils";

export default {
    name: "calendar",
    data() {
        return {
            calendarHeader: ["日", "一", "二", "三", "四", "五", "六"],
            selectedYear: new Date().getFullYear(),
            selectedMonth: new Date().getMonth(),
            selectedDate: new Date().getDate(),
            mouthData: [],//月份数据

        };
    },
    props: ['data', "url", "deviceId"],
    methods: {
        displayDaysPerMonthT(year) {
            //定义每个月的天数，如果是闰年第二月改为29天
            let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                daysInMonth[1] = 29;
            }
            let daysPreMonth = [].concat(daysInMonth);
            daysPreMonth.unshift(daysPreMonth.pop());
            let addDaysFromPreMonth = new Array(12).fill(null).map((item, index) => {
                let day = new Date(year, index, 1).getDay();
                if (day === 0) {
                    return 6;
                } else {
                    return day - 1;
                }
            });
            let total_calendar_list = new Array(12)
                .fill([])
                .map((month, monthIndex) => {
                    let addDays = addDaysFromPreMonth[monthIndex] + 1,
                        daysCount = daysInMonth[monthIndex],
                        daysCountPre = daysPreMonth[monthIndex],
                        monthDate = [];
                    if (addDays >= 7) {
                        addDays = addDays - 7;
                    }
                    for (; addDays > 0; addDays--) {
                        let obj = {
                            content: daysCountPre--,
                            type: "pre"
                        };
                        monthDate.unshift(obj);
                    }
                    for (let i = 0; i < daysCount;) {
                        let obj = {
                            content: ++i,
                            type: "normal"
                        };
                        monthDate.push(obj);
                    }
                    for (let i = 42 - monthDate.length, j = 0; j < i;) {
                        let obj = {
                            content: ++j,
                            type: "next"
                        };
                        monthDate.push(obj);
                    }

                    return monthDate;
                });
            return total_calendar_list;
        },
        handleDayClick(item) {
            if (item.type === 'normal') {
                // do anything...
                this.selectedDate = Number(item.content);
            }
        },
        //上个月
        handlePreMonth() {
            //判断是否是1月，是年减一，月份置为12月
            if (this.selectedMonth === 0) {
                this.selectedYear = this.selectedYear - 1;
                this.selectedMonth = 11;
                this.selectedDate = 1;
                let firstAndLast = utils.getAnyMouthFirstAndLast(this.selectedYear, this.selectedMonth);
                this.getData(firstAndLast);

            } else {
                this.selectedMonth = this.selectedMonth - 1;
                this.selectedDate = 1;
                let firstAndLast = utils.getAnyMouthFirstAndLast(this.selectedYear, this.selectedMonth);
                this.getData(firstAndLast);

            }
        },
        //下个月
        handleNextMonth() {
            //判断是否是12月，是年加一，月份置为一月
            if (this.selectedMonth === 11) {
                this.selectedYear = this.selectedYear + 1;
                this.selectedMonth = 0;
                this.selectedDate = 1;
                let firstAndLast = utils.getAnyMouthFirstAndLast(this.selectedYear, this.selectedMonth);
                this.getData(firstAndLast);
            } else {
                this.selectedMonth = this.selectedMonth + 1;
                this.selectedDate = 1;
                let firstAndLast = utils.getAnyMouthFirstAndLast(this.selectedYear, this.selectedMonth);
                this.getData(firstAndLast);
            }
        },
        getData(arr) {
            let that = this;
            let obj = {
                deviceid: this.deviceId,
                begindate: arr[0],
                enddate: arr[1],

            }
            this.$axios.post("api" + this.url + utils.formatQueryStr(obj)).then(res => {
                let mouthData = that.displayDaysPerMonthT(that.selectedYear)[that.selectedMonth];
                if (res.length > 0) {
                    for (let i = 0, j = 0, len = mouthData.length; i < len; i++) {
                        if (mouthData[i].type == "normal") {
                            mouthData[i].newType = res[j].F_CHKSTAT;
                            j++;
                        }
                    }
                }
                that.mouthData = mouthData;
            }).catch(error => {
                let mouthData = that.displayDaysPerMonthT(that.selectedYear)[that.selectedMonth];
                that.mouthData = mouthData;

            })
        }

    },
    mounted() {
        let firstAndLast = utils.CurrentMonthFirstAndLast();
        this.getData(firstAndLast);
    }

};
</script>

<style lang="scss">
@function pxWithVw($n) {
    @return 100vw * $n / 375;
}
@function pxWithVwMax($n) {
    @return 480px * $n / 375;
}
.mywk__calendar {
    width: pxWithVw(250);
    max-width: pxWithVwMax(250);
    margin: 0 auto;
    // display: flex;
    // justify-content: space-around;
    // flex-wrap: wrap;
}
.tips {
    margin: 15px 0 0 0;
    text-align: center;
}
.calendar {
    flex-shrink: 0;
    width: pxWithVw(250);
    max-width: pxWithVwMax(250);
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin: 15px 0 20px 0;
    border-radius: 4px;
    // background-color: #000;
    background: url("../assets/image/日历bg.png") no-repeat;
    background-size: 100% 100%;
    // box-shadow: 0 0 10px rgba(208, 208, 208, 0.5);
    .calendar__header {
        color: #fff;
        font-size: 16px;
        width: pxWithVw(200);
        max-width: pxWithVwMax(200);
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 22px;
        margin-top: 10px;
        .header__title {
            font-size: 16px;
            letter-spacing: 1px;
        }
        .header__pre {
            height: 12px;
            width: 12px;
            position: relative;
            &:after {
                content: " ";
                display: inline-block;
                height: 9px;
                width: 9px;
                border-width: 2px 2px 0 0;
                border-color: rgb(10, 235, 255);
                border-style: solid;
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(180deg);
                position: absolute;
                top: 50%;
                margin-top: -4px;
                right: 2px;
            }
        }
        .header__next {
            height: 12px;
            width: 12px;
            position: relative;
            &:after {
                content: " ";
                display: inline-block;
                height: 9px;
                width: 9px;
                border-width: 2px 2px 0 0;
                border-color: rgb(10, 235, 255);
                border-style: solid;
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                position: absolute;
                top: 50%;
                margin-top: -4px;
                right: 2px;
            }
        }
    }
    .calendar__main {
        width: pxWithVw(57);
        max-width: pxWithVwMax(270);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        // padding-top: 19px;
        .main__block {
            width: pxWithVw(30);
            height: pxWithVw(30);
            max-width: pxWithVwMax(30);
            max-height: pxWithVwMax(30);
            margin-bottom: 3px;
            border-radius: 50%;

            // border-radius: 2px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            // background-color: #fff;
            flex-shrink: 0;
            box-shadow: 0;
            position: relative;
            .main__block-piont {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: #f93d3a;
                position: absolute;
                left: calc(50% - 2.5px);
                bottom: 0;
            }
        }
        .main__block-not {
            // background-color: #edf2f5;
            color: #fff;
            border-radius: 50%;
            background-color: rgb(14, 93, 140);
        }
        .main__block-warn {
            transition: 0.5s all;
            background-color: #f93d3a;
            color: #fff;
            // box-shadow: 0 2px 6px rgba(171, 171, 171, 0.5);
        }
        .main__block-success {
            transition: 0.5s all;
            background-color: rgb(7, 149, 7);
            color: #fff;
        }

        .main__block-unsuccess {
            transition: 0.5s all;
            background-color: rgb(254, 180, 1);
            color: #fff;
        }

        .main__block-unDo {
            transition: 0.5s all;
            background-color: rgb(16, 151, 230);
            color: #fff;
        }
        .main__block-head {
            width: pxWithVw(30);
            height: pxWithVw(30);
            max-width: pxWithVwMax(30);
            max-height: pxWithVwMax(30);
            // margin-bottom: 3px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #fff;
            // background-color: #fff;
            flex-shrink: 0;
        }
    }
}
</style>