<!-- 单一器械 -->
<template>
    <div class="div">
        <div id="container">
        </div>
        <!-- 二维码 -->
        <qrcode />
        <!-- 底部文字 -->
        <bottomText />
        <!-- 返回键 -->
        <backToHome />
        <!-- 左侧 -->
        <div class="left-table-single">
            <!-- 第一行 -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>设备状态</div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <div class="location-div">
                    <div v-for="(item,index) in 6" :key="index">
                        <el-row>
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left " style="height:30px">
                                    轴{{index + 1}}
                                </div>
                            </el-col>
                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right " style="height:30px">
                                    <span v-if="locationArray.length > 0">{{parseFloat(locationArray[index]).toFixed(4)}}°</span>
                                    <span v-else>未开启</span>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </div>
            </el-row>

            <!-- 第二行title -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>运行情况</div>
                    </div>
                </el-col>
            </el-row>

            <!-- 第二行 主体 -->
            <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new " style="height:145px">

                        <el-row style="padding-top:7px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    开机时长
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">

                                    <div v-if="operation.length > 0"> {{operation[0].F_ONLINETIMELEN }}</div>
                                    <div v-else>00:00:00</div>

                                </div>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top:5px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    运行时长
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    <div v-if="operation.length > 0"> {{operation[0].F_RUNDURA}}</div>
                                    <div v-else>00:00:00</div>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top:5px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    报警时长
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    <div v-if="operation.length > 0"> {{operation[0].F_WARNDURA}}</div>
                                    <div v-else>00:00:00</div>

                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
            </el-row>

            <!-- 第三行title -->
            <el-carousel height="260px" arrow="never" :interval="10000">
                <el-carousel-item>
                    <!-- 第三行标题 -->
                    <el-row>
                        <el-col :span="18">
                            <div class=" left-table-single-title">
                                <div>生产统计</div>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 第三行 主体 -->
                    <el-row>
                        <el-col :span="24">
                            <div class="left-table-single-content-new ">
                                <div style="width:340px;height:180px;" id="echarts-bar1"></div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>

                <el-carousel-item>
                    <!-- 第三行标题 -->
                    <el-row>
                        <el-col :span="18">
                            <div class=" left-table-single-title">
                                <div>设备综合雷达图
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 第三行 主体 -->
                    <el-row>
                        <el-col :span="24">
                            <div class="left-table-single-content-new ">
                                <div style="width:340px;height:180px;" id="echarts-radar"></div>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>

        </div>
        <!-- 右边  -->
        <div class="right-table-single ">
            <!-- 第一行title -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>报警统计</div>
                    </div>
                </el-col>
            </el-row>
            <!-- 第一行主体 -->
            <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new ">
                        <!-- <div class="border" style='overflow:hidden; '>
                            <div class=" test" style='height:30px; color:#fff;'>
                                1111111111111111
                            </div>
                        </div> -->
                        <el-row>
                            <el-col :span="12">
                                <div style='height:180px' id="echarts-pie">
                                </div>

                            </el-col>

                            <el-col :span="12">
                                <div style='height:180px;' class="first-right ">
                                    <div style="height:50px" class="first-right-title ">
                                        报警信息
                                    </div>
                                    <div class="first-right-content ">
                                        {{LstWarnListStr != "" ? LstWarnListStr :'暂无数据'}}

                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-carousel height="420px" arrow="never">
                <el-carousel-item>
                    <!-- 第二行title -->
                    <el-row>
                        <el-col :span="18">
                            <div class=" left-table-single-title">
                                <div>点检</div>
                            </div>
                        </el-col>
                    </el-row>
                    <!-- 第二行 主体 -->
                    <el-row>
                        <el-col :span="24">
                            <div class="left-table-single-content-new-e " style="height:auto ">
                                <el-row>
                                    <el-col :span="8">
                                        <div class="explain ">
                                            <div class="colorone">
                                            </div>
                                            <div class="text">
                                                异常
                                            </div>
                                        </div>
                                    </el-col>

                                    <el-col :span="8">
                                        <div class="explain ">
                                            <div class="colortwo">
                                            </div>
                                            <div class="text">
                                                正常
                                            </div>
                                        </div>
                                    </el-col>

                                    <el-col :span="8">
                                        <div class="explain ">
                                            <div class="colorthree">
                                            </div>
                                            <div class="text">
                                                未完成
                                            </div>
                                        </div>
                                    </el-col>

                                </el-row>
                                <div style="padding-bottom:10px">
                                    <calendar :deviceId="deviceId" :url="`/DDC/DeviceChk/DeviceDayChkStat`" />
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                </el-carousel-item>

            </el-carousel>

            <!-- 第四行title -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>设备稼动率</div>
                    </div>
                </el-col>
            </el-row>
            <!-- 第四行 主体 -->
            <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new bg-small" style="height:50px;">
                        <el-row>
                            <el-col :span="8" :offset="2" class="healthy ">
                                当日设备稼动率:
                            </el-col>
                            <el-col :span="2" :offset="4" class="healthy ">
                                <span>{{ACTRATE}}%</span>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>

</template>

<script>
import * as THREE from "three";
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
import OrbitControls from "three/examples/js/controls/OrbitControls";
import utils from "../assets/utils/utils";
import threeUtils from "../assets/utils/threeUtils";

import { Vector2 } from 'three';

export default {
    data() {
        return {
            camera: null,//相机
            scene: null,//场景
            renderer: null,//渲染器
            composer: null,//后期处理
            mesh: null,//网格模型
            publicPath: process.env.VUE_APP_URL,
            container: null,
            controls: null,
            groupName: null,
            deviceId: null,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            deviceStatus: ["在线", "离线", "空闲", "运行", "停机", "报警"],//设备运行状态
            operation: [],//运行情况
            LstWarnListStr: "",//设备实时报警信息
            ACTRATE: 0,//设备稼动率
            locationArray: [],//轴坐标数组
            preLocationArray: [0 * Math.PI / 180, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],// 更新轴坐标前的数据
            testarr: [],
            flag: false,
            online: "",//在线状态
            DayWarnDis: [],
            i: 0,//设备帧率index
            first: true,//判断是否是从初始状态到运行状态
        };
    },
    methods: {
        /**初始化单台机器 */
        init() {
            let that = this;
            this.container = document.getElementById("container");
            threeUtils.initScene(this);
            threeUtils.initCamera(this, 156, 112, -197);
            threeUtils.initRender(this);
            threeUtils.initLight(this);
            threeUtils.initControls(this);
            this.initContent();
        },
        /** 场景中的内容 */
        initContent() {
            let that = this;
            threeUtils.createFloor(this);
            threeUtils.createEnvironment(this);
            threeUtils.loadObj(this.publicPath, (object1, object2, object3, object4) => {
                that.addObject(object1, object2, object3, object4)
            });
        },
        /** 添加精灵图 */
        createTables(index, item, x, z) {
            let canvas;
            if (item == "离线") {
                canvas = threeUtils.makeLabelCanvas(100, 100, index, "rgb(210, 60, 64)");
                let spriteMap = new THREE.TextureLoader().load(require("../assets/image/离线2.png"));
                let spriteMaterial = new THREE.SpriteMaterial({
                    transparent: true,
                    map: spriteMap,
                    side: ThREE.DoubleSide,

                });
                let sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(25, 25, 1)
                sprite.position.set(x, 110, z);
                this.scene.add(sprite);

            }
            else {
                canvas = threeUtils.makeLabelCanvas(100, 100, index, "rgb(91, 255, 185)");
                let spriteMap = new THREE.TextureLoader().load(require("../assets/image/在线2.png"));
                let spriteMaterial = new THREE.SpriteMaterial({
                    transparent: true,
                    map: spriteMap,
                    side: THREE.DoubleSide,
                });
                let sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(25, 25, 1)
                sprite.position.set(x, 110, z);
                this.scene.add(sprite);
            }
            const texture = new THREE.CanvasTexture(canvas);
            let spriteMaterial = new THREE.SpriteMaterial({
                transparent: true,
                map: texture,
                side: THREE.DoubleSide,
                // color: 0x00ff00,

            });
            let sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(25, 25, 1)
            sprite.position.set(x, 130, z);
            this.scene.add(sprite);

        },
        addObject(object, obj, obj3, obj4) {
            let z = 300;
            let x = 200;
            let J1 = new THREE.Group();
            let J2 = new THREE.Group();
            let J3 = new THREE.Group();
            let J4 = new THREE.Group();
            let J5 = new THREE.Group();
            let J6 = new THREE.Group();
            let J7 = new THREE.Group();
            let J8 = new THREE.Group();

            let J3Box = new THREE.Object3D();
            let J4Box = new THREE.Object3D();
            let J5Box = new THREE.Object3D();
            let J6Box = new THREE.Object3D();
            let J7Box = new THREE.Object3D();
            let J8Box = new THREE.Object3D();

            J7.add(object.getObjectByName('J7_1'));
            J7.add(object.getObjectByName('J7_2'));
            J7.add(object.getObjectByName('J7_3'));
            J7.add(object.getObjectByName('J7_4'));
            J7.add(object.getObjectByName('J7_5'));

            J7.position.y = -31.6;
            J7.position.x = 19;
            J7Box.add(J7);
            J7Box.name = "J7Box";

            J6.add(object.getObjectByName('J6_1'));
            J6.add(object.getObjectByName('J6_2'));
            J6Box.add(J7Box);
            J6Box.add(J6);
            J6.position.y = -31.6;
            J6.position.x = 19;
            J6Box.position.y = 31.6;
            J6Box.position.x = -19;
            J6Box.rotation.z += Math.PI / 2;////////////////////////////

            J6Box.name = "J6Box";

            J5.add(object.getObjectByName('J5_1'));
            J5.add(object.getObjectByName('J5_2'));
            J5.add(object.getObjectByName('J5_3'));
            J5.add(object.getObjectByName('J5_4'));
            J5.add(object.getObjectByName('J5_5'));
            J5.add(J6Box);
            J5.position.y = -32;
            J5.position.x = -5.7;
            J5Box.add(J5);
            J5Box.position.y = 32;
            J5Box.position.x = 5.7;


            J5Box.name = "J5Box";



            J4.add(object.getObjectByName('J4_1'));
            J4.add(object.getObjectByName('J4_2'));
            J4.add(J5Box);
            J4.position.y = -28;
            J4Box.add(J4);
            J4Box.position.y = 28;
            J4Box.name = "J4Box";

            J3.add(object.getObjectByName('J3_1'));
            J3.add(object.getObjectByName('J3_2'));

            J3.add(J4Box);
            J3.position.y = -14;
            J3Box.position.y = 14;
            J3Box.add(J3);
            J3Box.name = "J3Box";

            J2.add(object.getObjectByName('J2_1'));
            J2.add(J3Box);
            J2.name = "J2";

            let mesh = object;
            J1.add(mesh);
            J1.add(J2);

            J1.scale.set(30, 30, 30);
            J1.position.set(16 * 20, 18 * 20, 12 * 20);
            obj.name = this.groupName;
            obj.add(J1);

            obj3.scale.set(1.5, 1.5, 1.5);
            obj3.rotation.y = Math.PI;
            obj3.position.set(15 * 20, 0, -60 * 20);
            obj.add(obj3);

            obj4.rotation.y = Math.PI;
            obj4.position.set(-60 * 20, 0, 40 * 20);

            obj.add(obj4);

            obj.position.z = -20;
            obj.position.x = 70;
            obj.rotation.y = -0.5 * Math.PI;


            this.createTables(this.groupName.substr(2, this.groupName.length - 1), this.online, -0, -20);
            this.scene.add(obj);

        },
        /**动画 */
        animate() {
            this.id = requestAnimationFrame(this.animate);
            this.renderer.render(this.scene, this.camera);
            let vect = this.camera.getWorldDirection(new THREE.Vector3());//获取当前视角方向
            //前进
            if (this.front) {
                this.camera.position.z += vect.dot(new THREE.Vector3(0, 0, 15)) * 0.01;//沿z轴分解
                this.camera.position.x += vect.dot(new THREE.Vector3(15, 0, 0)) * 0.01;//沿x轴分解
            }
            //后退
            if (this.back) {
                this.camera.position.z -= vect.dot(new THREE.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x -= vect.dot(new THREE.Vector3(15, 0, 0)) * 0.01;
            }
            //向左
            if (this.left) {
                vect = vect.cross(new THREE.Vector3(0, 2, 0));//求视角方向与
                this.camera.position.z -= vect.dot(new THREE.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x -= vect.dot(new THREE.Vector3(15, 0, 0)) * 0.01;

            }
            //向右
            if (this.right) {
                vect = vect.cross(new THREE.Vector3(0, 2, 0));
                this.camera.position.z += vect.dot(new THREE.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x += vect.dot(new THREE.Vector3(15, 0, 0)) * 0.01;
            }
            this.i++;
            if (this.locationArray && this.locationArray.length > 0) {
                let one = this.scene.getObjectByName(this.groupName).getObjectByName("J2").rotation.y += (this.locationArray[0] * Math.PI / 180 - this.preLocationArray[0]) * this.i / 60;
                let two = this.scene.getObjectByName(this.groupName).getObjectByName("J3Box").rotation.z += ((this.locationArray[1] - (-90)) * Math.PI / 180 - this.preLocationArray[1]) * this.i / 60;
                let three = this.scene.getObjectByName(this.groupName).getObjectByName("J4Box").rotation.z += ((this.locationArray[2] - 180) * Math.PI / 180 - this.preLocationArray[2]) * this.i / 60;
                let four = this.scene.getObjectByName(this.groupName).getObjectByName("J5Box").rotation.x += (-this.locationArray[3] * Math.PI / 180 - this.preLocationArray[3]) * this.i / 60;
                let five = this.scene.getObjectByName(this.groupName).getObjectByName("J6Box").rotation.z += (this.locationArray[4] * Math.PI / 180 - this.preLocationArray[4]) * this.i / 60;
                let six = this.scene.getObjectByName(this.groupName).getObjectByName("J7Box").rotation.x += (-this.locationArray[5] * Math.PI / 180 - this.preLocationArray[5]) * this.i / 60;
                this.preLocationArray = [
                    one, two, three, four, five, six

                ]
            }
        },


        /**总产量计数*/
        initEchartBar2() {
            let that = this;
            let myChart = this.$echarts.init(document.getElementById('echarts-bar1'));
            // 绘制图表
            let option = {
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['当月产量', '当周产量', "当天产量"],
                        axisTick: {
                            alignWithLabel: true
                        },

                        axisLine: {
                            lineStyle: {
                                color: '#ddd', // 颜色
                                width: 1 // 粗细
                            }
                        },
                        axisLabel: {
                            interval: 0,
                        }
                    }
                ],
                yAxis: [
                    {
                        max: function (value) {
                            return value.max + value.max * 0.2;
                        },
                        type: 'value',
                        axisLabel: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: [],
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    let colorList = [
                                        ['rgb(254,153,26)', 'rgb(254,70,26)'],
                                        ['rgb(98,129,227)', 'rgb(9,136,222)'],
                                        ['rgb(254,213,1)', 'rgb(252,155,1)'],

                                    ];
                                    let index = params.dataIndex;
                                    if (params.dataIndex >= colorList.length) {
                                        index = params.dataIndex - colorList.length;
                                    }
                                    return colorList[index][1];
                                },

                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}',
                                    textStyle: {
                                        fontWeight: 'normal',
                                        fontSize: 12,
                                        color: "#fff"
                                    }
                                },
                            }
                        }
                    }
                ]
            }
            myChart.setOption(option);
            let obj = {
                mac: 'wuji',
                deviceid: this.deviceId
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WorkLoadView" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                console.log(res);
                myChart.setOption({
                    series: [{
                        data: [res.month, res.week, res.today]
                    }]
                })
            }).catch(error => {

            })


        },
        /** 设备6维雷达图*/
        initEchartRadar() {
            let that = this;
            let myChart = this.$echarts.init(document.getElementById('echarts-radar'));
            let option = {
                title: {

                },
                tooltip: {},
                // legend: {
                //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                // },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: 'rgb(0,229,253)',
                        }
                    },
                    radius: "65%",
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(63, 65, 188, 0.1)'],
                            shadowColor: 'rgba(63, 65, 188, 1)',
                            shadowBlur: 12
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                'rgba(0,229,253, 0.4)', 'rgba(0,229,253,0.2)',
                                'rgba(0,229,253,0.4)', 'rgba(0,229,253,0.6)',
                                'rgba(0,229,253, 0.8)', 'rgba(0,229,253, 0,1)'
                            ].reverse()
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0,229,253, 1)'
                        }
                    },
                    indicator: [
                        { name: '稼动率', max: 100 },
                        { name: '产能', max: 100 },
                        { name: '保养', max: 100 },
                        { name: '在线率', max: 100 },
                        { name: '开机率', max: 100 },
                        { name: '开动率', max: 100 }
                    ]
                },
                series: [{
                    name: '',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        },
                    },
                    symbol: 'none',
                    itemStyle: {
                        color: "rgb(1,109,229)"
                    },
                    areaStyle: {
                        opacity: 0.45
                    },
                    data: [
                        {
                            value: [],

                        }
                    ],

                }]
            };
            myChart.setOption(option);
            let obj = {
                deviceid: this.deviceId
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/DeviceSixD" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                console.log(res);
                myChart.setOption({
                    series: [{
                        data: [
                            {
                                value: [
                                    res.actrate,
                                    res.avgworkload,
                                    res.maintenance,
                                    res.onlinerate,
                                    res.poweronrate,
                                    res.tstrate],

                            }
                        ],
                    }]
                });


            }).catch(error => { }
            )

        },
        /**报警类型占比 */
        initEchartPie() {
            let myChart = this.$echarts.init(document.getElementById('echarts-pie'));
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // show: true,
                    type: 'scroll',
                    orient: 'vertical',
                    right: 0,
                    textStyle: { color: " #fff" },
                    pageIconColor: '#fff',
                    pageIconSize: 12,
                    pageTextStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    data: []
                },
                grid: {
                },
                series: [
                    {
                        name: '设备报警数',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        // radius: "50%",
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'left'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        // labelLine: {
                        //     show: false
                        // },
                        data: []
                    }
                ]
            };
            myChart.setOption(option);

            let obj = {
                mac: "wuji",
                datestr: utils.getDay(0)[0],
                deviceid: this.deviceId
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/DayWarnDis" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                this.DayWarnDis = res;
                console.log(this.deviceId)
                let data1 = [];
                let data2 = [];
                res.forEach((item, index) => {
                    let i = data1.indexOf(item.F_ERRORN);
                    if (i == -1) {
                        data1.push(item.F_ERRORN);
                        data2.push({
                            value: item.F_ERRORC,
                            name: item.F_ERRORN
                        })
                    }
                    else {
                        data2[i].value += item.F_ERRORC;
                    }

                })
                if (res.length == 0) {
                    myChart.setOption({
                        title: {
                            text: '暂无数据',
                            x: "center",
                            top: "40%",
                            textStyle: {
                                color: "#fff"
                            }
                        },
                    })
                }
                else {
                    myChart.setOption({
                        legend: {
                            data: data1
                        },
                        series: [
                            {
                                data: data2
                            }
                        ]
                    });
                }



            }).catch(error => { }
            )

        },
        /**获取设备当前页面需要数据 */
        getData() {
            let that = this;
            let obj = {
                mac: "wuji",
                datestr: utils.getDay(0)[0],
                deviceid: this.deviceId,
            }
            this.axios.all([
                this.$axios.post('/api/DDC/DeviceWorkStatic/DayWorkLoadRank' + utils.formatQueryStr(obj)),
                this.$axios.post('/api/DDC/DeviceWorkStatic/LstWarnList' + utils.formatQueryStr(obj)),
                this.$axios.post('/api/DDC/DeviceWorkStatic/DayDevActRank' + utils.formatQueryStr(obj)),
                this.$axios.post("/api/DDC/DeviceWorkStatic/ProductMonthRpt" + utils.formatQueryStr(obj)),
            ]).then(this.axios.spread(function (DayWorkLoadRank, LstWarnList, DayDevActRank, ProductMonthRpt) {
                if (LstWarnList.length > 0) that.LstWarnListStr = LstWarnList[0].F_ERROR;
                if (DayDevActRank.length > 0) that.ACTRATE = DayDevActRank[0].ACTRATE;
                if (DayWorkLoadRank.length > 0) {
                    DayWorkLoadRank[0].F_ONLINETIMELEN = utils.secondToHMS(DayWorkLoadRank[0].F_ONLINETIMELEN);
                    DayWorkLoadRank[0].F_WARNDURA = utils.secondToHMS(DayWorkLoadRank[0].F_WARNDURA);
                    DayWorkLoadRank[0].F_RUNDURA = utils.secondToHMS(DayWorkLoadRank[0].F_RUNDURA);
                    that.operation = DayWorkLoadRank;
                }
            })).catch(error => {
                console.warn("接口访问失败");
            });
        },
    },

    created() {
        this.deviceId = this.$cookies.get("deviceId");
        this.groupName = this.$cookies.get("groupName");
        this.online = this.$cookies.get("online");
    },
    mounted() {
        let that = this;
        this.getData();
        this.initEchartBar2();
        this.initEchartRadar();
        this.initEchartPie();
        this.init();
        threeUtils.helper(this);
        this.animate();
        window.onresize = () => {
            return threeUtils.onWindowResize(this);
        }
        //监听窗口是否变动
        this.setInterval3 = setInterval(() => {
            if (window.innerWidth != window.screen.availWidth) {
                this.flag = true;
            }
            if (window.innerWidth == window.screen.availWidth && this.flag) {
                this.flag = false;
                threeUtils.onWindowResize(this);
            }
        }, 500)

        this.$socketApi.sendSock((res) => {
            res.forEach(index => {
                if (index.Key == this.deviceId) {
                    if (index.Value[0].value != "") {
                        this.locationArrays = JSON.parse(index.Value[0].value);
                    }
                }
            })
        });
        this.setInterval2 = setInterval(() => {
            this.locationArray = this.locationArrays;
            this.i = 0;
        }, 1000)

        this.setInterval = setInterval(() => {
            this.getData();
            this.initEchartBar2();
            this.initEchartRadar();
            this.initEchartPie();
        }, 30000)

    },
    destroyed() {
        //页面销毁时删除场景
        clearInterval(this.setInterval);
        clearInterval(this.setInterval2);
        clearInterval(this.setInterval3);
        cancelAnimationFrame(this.id);//停止动画
        this.scene.children = {};
        this.renderer.dispose();
        this.scene = null;//清除场景
        this.controls = null;//清除控制器
        this.camera = null;//清除相机
        this.renderer = null;//清除渲染器
        this.container = null;
        this.composer = null;//后期处理
    },


}

</script>
<style lang="scss">
</style>