<!-- 多个器械 -->
<template>
    <div class="div">
        <!-- 3D场景 -->
        <div id="container" @click="click($event)" @dblclick="doubleClick($event)" @mousemove.prevent="move($event)" @mousedown.prevent="down($event)" @mouseup.prevent="up($event)">
        </div>
        <!-- 左侧 -->
        <div class="left-table">
            <!-- 第一行 -->
            <el-row>
                <el-col :span="18" :offset="6">
                    <div class=" left-table-content-new">
                        <el-row>
                            <el-col :span="11" :offset="1">
                                <div class="table-title ">
                                    当月产量排名
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="table-picture ">

                                </div>
                            </el-col>
                        </el-row>

                        <div class="right-table-content-new" id="echarts-bar">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- 第二行 -->
            <el-row>
                <el-col :span="18" :offset="6">
                    <div class=" left-table-content-new" style="height:300px;">
                        <el-row>
                            <el-col :span="8" :offset="1">
                                <div class="table-title ">
                                    运行情况
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="table-picture ">

                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10" :offset="1">
                                <div class="  online">
                                    {{onlineNum}}
                                </div>
                            </el-col>
                            <el-col :span="10" :offset="1">
                                <div class=" outline">
                                    {{outlineNum}}
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="9" :offset="1">
                                <div class="table-title ">
                                    设备在线率
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="table-picture ">

                                </div>
                            </el-col>
                        </el-row>
                        <div class="right-table-content-new" id="echarts-line">
                        </div>

                    </div>
                </el-col>
            </el-row>
            <!-- 第三行 -->
            <el-row>
                <el-col :span="18" :offset="6">
                    <div class=" left-table-content-new" style="height:200px">
                        <!-- <el-row>
                            <el-col :span="10" :offset="1">
                                <div class="table-title ">
                                    总产量计数
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="table-picture ">

                                </div>
                            </el-col>
                        </el-row> -->

                        <el-carousel height="200px" arrow="never" :interval="10000">
                            <el-carousel-item>
                                <el-row>
                                    <el-col :span="10" :offset="1">
                                        <div class="table-title ">
                                            产量计数
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div class="table-picture ">

                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="right-table-content-new" id="echarts-bar1">
                                </div>
                            </el-carousel-item>

                            <el-carousel-item>
                                <el-row>
                                    <el-col :span="11" :offset="1">
                                        <div class="table-title ">
                                            设备加工时长
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div class="table-picture ">

                                        </div>
                                    </el-col>
                                </el-row>

                                <div class="right-table-content-new" id="echarts-bar3">
                                </div>
                            </el-carousel-item>
                        </el-carousel>

                    </div>
                </el-col>
            </el-row>
            <!-- 第四行 -->
            <!-- <el-row>
                <el-col :span="18" :offset="6">
                    <div class=" left-table-content-new">
                        <el-row>
                            <el-col :span="8" :offset="1">
                                <div class="table-title ">
                                    加工时长
                                </div>
                            </el-col>
                            <el-col :span="9">
                                <div class="table-picture ">

                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row> -->

        </div>
        <!-- 右侧 -->
        <div class="right-table">
            <!-- 第一行 -->
            <el-row>
                <div class=" left-table-content-new">
                    <el-row>
                        <el-col :span="11" :offset="1">
                            <div class="table-title ">
                                当月报警排名
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="table-picture ">

                            </div>
                        </el-col>
                    </el-row>

                    <div class="right-table-content-new" id="echarts-bar2">
                    </div>
                </div>
            </el-row>
            <!-- 第二行 -->
            <el-row>
                <div class=" left-table-content-new">
                    <el-row>
                        <el-col :span="11" :offset="1">
                            <div class="table-title ">
                                报警类型占比
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="table-picture ">
                            </div>
                        </el-col>
                    </el-row>

                    <div class="right-table-content-new " id="echarts-pie">
                    </div>
                </div>
            </el-row>
            <!-- 第三行 -->
            <el-row>
                <div class=" left-table-content-new" style="height:250px">
                    <el-row>
                        <el-col :span="11" :offset="1">
                            <div class="table-title ">
                                实时报警信息
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="table-picture ">

                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="timeText-bg ">
                                <div v-show="alarmInformation.length == 0" class="center" style=" height: 120px;">
                                    暂无数据
                                </div>
                                <div v-show="alarmInformation.length > 0">
                                    <div v-for="(item,index) in alarmInformation" class="timeText-bg-line" :labelTooltip="item.alarmContent" :key="index" @click="chooseAlarm(index)">
                                        <el-row>
                                            <el-col :span="7" :offset="1">
                                                <div class="timeText ">
                                                    {{item.time}}
                                                </div>
                                            </el-col>
                                            <el-col :span="15" :offset="0">
                                                <div class="timeText ">
                                                    <div class="timeTexts ">
                                                        {{item.alarmContent}}

                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="20" :offset="2">
                            <div class="dividingLine"></div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="8" :offset="1">
                            <div class="table-title ">
                                报警设备
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="table-picture ">

                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="9" :offset="2">
                            <div class="deviceId border">
                                工位号
                            </div>
                        </el-col>

                        <el-col :span="9" :offset="2">
                            <div class="deviceName border">
                                <span v-if="alarmInformation.length > 0"> {{number}}</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-row>
            <!-- 第四行 -->
            <el-row>
                <div class=" left-table-content-new" style="height:90px;">
                    <el-row>
                        <el-col :span="8" :offset="1">
                            <div class="table-title ">
                                产线/设备
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="table-picture ">

                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12" :offset="0" class="healthy">
                            产线平均稼动率:
                        </el-col>
                        <el-col :span="8" :offset="2" class="healthy">
                            <span>{{averageYield}}%</span>
                        </el-col>
                    </el-row>
                    <!-- <el-row>
                        <el-col :span="20" :offset="2">
                            <hr style="color:#000;" />
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10" :offset="4" class="healthy ">
                            设备健康评价:
                        </el-col>
                        <el-col :span="2" :offset="2" class="healthy ">
                            <span>A</span>
                        </el-col>
                    </el-row> -->
                </div>
            </el-row>
        </div>

        <!-- 二维码 -->
        <qrcode />
        <!-- 底部文字 -->
        <bottomText />
        <operatingDay />
        <!-- 点击标识 -->
        <label v-show="labelTop!= null" ref='label' class="label" :style="`top:${labelTop}px;left:${labelLeft}px;`"></label>

    </div>
</template>

<script> 
import * as THREE from "three";
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
import OrbitControls from "three/examples/js/controls/OrbitControls";
import ThreeBSP from "../plugins/ThreeBSP";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import utils from "../assets/utils/utils";
import threeUtils from "../assets/utils/threeUtils";

let locationArrays = [];
let locationArray = [];
let preLocationArray = [
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
    [0, -90 * Math.PI / 180, 180 * Math.PI / 180, 0, 0, 0],
];

export default {
    name: "App",
    data() {
        return {
            camera: null,//相机
            scene: null,//场景
            renderer: null,//渲染器
            composer: null,//后期处理
            publicPath: process.env.VUE_APP_URL,
            container: null,
            controls: null,//控制器
            leftPress: null,//鼠标按下标志
            groupName: "J01",//默认机器名称

            labelTop: null,//label位置
            labelLeft: null,//label位置

            door_state_left1: true,//默认是门是关闭的
            door_state_right1: true, //默认是门是关闭的

            //场景变量
            HEIGHT: 50,
            WIDTH: 800,
            LENGTH: 600,
            interval: 100,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            // 页面渲染必须数据
            onlineNum: 1,//在线设备数
            outlineNum: 2,//离线设备数
            alarmInformation: [],//实时报警信息
            number: "...",//选中报警工位
            averageYield: 0,//平均稼动率
            deviceIdArr: [],//存放设备Id
            DayWorkLoadRank: [],

            flag: false,
            i: 0,

        }
    },
    methods: {

        /**初始化 */
        init() {
            let that = this;
            this.container = document.getElementById("container");
            threeUtils.initScene(this);
            threeUtils.initCamera(this, 0, 250, 500);
            threeUtils.initRender(this);
            threeUtils.initLight(this);
            threeUtils.initControls(this);
            this.initContent();
            this.definedComposer();
        },
        /** 添加精灵图 */
        createTable(index, item, x, z) {
            let canvas;
            if (item == undefined || item.F_ONLINESTATUS == undefined) {
                return;
            }
            else if (item.F_ONLINESTATUS == "离线") {
                canvas = threeUtils.makeLabelCanvas(100, 100, index, "rgb(210, 60, 64)");
                let spriteMap = new THREE.TextureLoader().load(require("../assets/image/离线2.png"));
                let spriteMaterial = new THREE.SpriteMaterial({
                    transparent: true,
                    map: spriteMap,
                    side: THREE.DoubleSide,

                });
                let sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(25, 25, 1)
                sprite.position.set(x, 100, z);
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
                sprite.position.set(x, 100, z);
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
            sprite.position.set(x, 120, z);
            this.scene.add(sprite);

        },

        /** 场景中的内容 */
        initContent() {
            let that = this;
            threeUtils.createFloor(this);
            threeUtils.createEnvironment(this);
            threeUtils.loadObj(this.publicPath, (object1, object2, object3, object4) => {
                that.clone(object1, object2, object3, object4)
            });
        },

        /** 动画  */
        animate() {
            this.id = requestAnimationFrame(this.animate);
            this.renderer.render(this.scene, this.camera);
            this.composer.render();//后期

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
            if (locationArray && locationArray.length > 0) {

                for (let i of locationArray) {
                    let a = this.scene.getObjectByName(i.name);
                    if (!a) return;
                    let one = a.getObjectByName("J2").rotation.y += (i.locationArray[0] * Math.PI / 180 - preLocationArray[i.index][0]) * this.i / 60;
                    let two = a.getObjectByName("J3Box").rotation.z += ((i.locationArray[1] - (-90)) * Math.PI / 180 - preLocationArray[i.index][1]) * this.i / 60;
                    let three = a.getObjectByName("J4Box").rotation.z += ((i.locationArray[2] - 180) * Math.PI / 180 - preLocationArray[i.index][2]) * this.i / 60;
                    let four = a.getObjectByName("J5Box").rotation.x += (-i.locationArray[3] * Math.PI / 180 - preLocationArray[i.index][3]) * this.i / 60;
                    let five = a.getObjectByName("J6Box").rotation.z += (i.locationArray[4] * Math.PI / 180 - preLocationArray[i.index][4]) * this.i / 60;
                    let six = a.getObjectByName("J7Box").rotation.x += (-i.locationArray[5] * Math.PI / 180 - preLocationArray[i.index][5]) * this.i / 60;

                    preLocationArray[i.index] = [
                        one, two, three, four, five, six
                    ]
                }
            }
        },

        /**获取object的父对象 */
        addSelectedObject(object, outlinePass, x, y) {
            let selectedObjects = [];
            selectedObjects.push(object);
            let groupName;
            while (object) {
                if (object.type == "Group") {
                    groupName = object.name;
                }
                object = object.parent;
            }
            outlinePass.selectedObjects = [object];

            if (groupName) {
                //删除场景GPU缓存
                this.scene.children = {};
                this.renderer.dispose();
                this.$router.push({
                    name: "seven",
                });

                this.$cookies.set("groupName", groupName, 60 * 60 * 24);
                this.$cookies.set("deviceId", this.$store.state.deviceIdArr[groupName.substr(2, groupName.length - 1) - 1].deviceId, 60 * 60 * 24);
                this.$cookies.set("online", this.DayWorkLoadRank[groupName.substr(2, groupName.length - 1) - 1].F_ONLINESTATUS, 60 * 60 * 24);

            }

            this.groupName = groupName;
        },
        definedComposer() {
            this.composer = new EffectComposer(this.renderer);
            let renderPass = new RenderPass(this.scene, this.camera);
            this.composer.addPass(renderPass);
            let outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
            outlinePass.edgeStrength = 5;//包围线浓度
            outlinePass.edgeGlow = 0.5;//边缘线范围
            outlinePass.edgeThickness = 2;//边缘线浓度
            outlinePass.pulsePeriod = 2;//包围线闪烁频率
            outlinePass.visibleEdgeColor.set('#ffffff');//包围线颜色
            outlinePass.hiddenEdgeColor.set('#190a05');//被遮挡的边界线颜色
            this.composer.addPass(outlinePass);

            return outlinePass;

        },
        /** 鼠标单击事件 */
        click(evnet) {
            let raycaster = new THREE.Raycaster();
            let mouse = new THREE.Vector2();
            let outlinePass = this.definedComposer();

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, this.camera);
            let intersects = raycaster.intersectObjects([this.scene], true);
            // console.log(intersects);
            if (intersects.length > 0) {
                let selectedObject = intersects[0].object;
                outlinePass.selectedObjects = [intersects[0].object];
            } else {
                // outlinePass.selectedObjects = [];
            }

        },
        /** 鼠标双击事件 */
        doubleClick(event) {
            let raycaster = new THREE.Raycaster();
            let mouse = new THREE.Vector2();
            let outlinePass = this.definedComposer();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, this.camera);
            let intersects = raycaster.intersectObjects([this.scene], true);
            if (intersects.length > 0) {
                let selectedObject = intersects[0].object;
                this.addSelectedObject(selectedObject, outlinePass, event.clientX, event.clientY);

            } else {
                console.log();
            }

        },
        /** 鼠标移动事件 */
        move(event) {
            if (this.leftPress) {
                this.camera.rotateOnWorldAxis(
                    new THREE.Vector3(0, 1, 0),
                    event.movementX / 500
                );
                this.camera.rotateOnAxis(
                    new THREE.Vector3(1, 0, 0),
                    event.movementY / 500
                );
            }
        },
        /** 鼠标按下事件 */
        up(event) {
            this.leftPress = false;
        },
        /** 鼠标放开事件 */
        down(event) {
            this.leftPress = true;
        },
        /** 复制obj */
        clone(object, obj, obj3, obj4) {
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
            // let axesHelper = new THREE.AxesHelper(30);
            // J7Box.add(axesHelper);



            J6.add(object.getObjectByName('J6_1'));
            J6.add(object.getObjectByName('J6_2'));
            J6Box.add(J7Box);
            J6Box.add(J6);
            J6.position.y = -31.6;
            J6.position.x = 19;
            J6Box.position.y = 31.6;
            J6Box.position.x = -19;
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
            // J1.position.z = z;
            // J1.position.x = -x;

            J1.scale.set(30, 30, 30);
            J1.position.set(16 * 20, 18 * 20, 12 * 20);
            obj.name = "J01";
            obj.add(J1);

            obj3.scale.set(1.5, 1.5, 1.5);
            obj3.rotation.y = Math.PI;
            obj3.position.set(15 * 20, 0, -60 * 20);
            obj.add(obj3);

            obj4.rotation.y = Math.PI;
            obj4.position.set(-40 * 20, 0, 40 * 20);
            obj.add(obj4);

            obj.position.z = z;
            obj.position.x = -x;
            obj.rotation.y = -0.5 * Math.PI;

            this.scene.add(obj);
            this.createTable(1, this.DayWorkLoadRank[0], -x - 50, z);

            let copy_J1 = obj.clone();
            copy_J1.rotateY(Math.PI);
            copy_J1.position.z = z;
            copy_J1.position.x = x;
            copy_J1.name = "J014";
            this.scene.add(copy_J1);


            //复制多个J1
            for (let i = 0, j = 2; i < 6; i++) {
                z -= this.interval;
                let copy_J1 = obj.clone();
                copy_J1.position.z = z;
                copy_J1.position.x = -x;
                copy_J1.name = `J0${j}`;

                this.createTable(i + 2, this.DayWorkLoadRank[i + 1], -x - 50, z);

                let copy_J2 = obj.clone();
                copy_J2.rotateY(Math.PI);
                copy_J2.position.z = z;
                copy_J2.position.x = x;
                copy_J2.name = `J0${15 - j}`;
                j++;
                this.createTable(13 - i, this.DayWorkLoadRank[12 - i], x + 50, z);
                this.scene.add(copy_J1);
                this.scene.add(copy_J2);
            }

        },

        /** 实时报警信息选中 */
        chooseAlarm(index) {
            this.number = this.alarmInformation[index].name;
        },

        /**当月生产排名 */
        initEchartBar() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                yAxis: [
                    {
                        // show: false,
                        type: 'value',
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            },
                        }
                    }
                ],
                xAxis: [
                    {
                        // name: '工位',
                        type: 'category',
                        data: [],
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
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            rotate: 300 //倾斜角度
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: []
                    }
                ]
            });
            let arr = utils.CurrentMonthFirstAndLast();
            let obj = {
                mac: "wuji",
                begindate: arr[0],
                enddate: arr[1],
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WorkLoadRank" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                for (let i = 0; i < 7; i++) {
                    data1.push(res[i].F_NAME.substr(8, res[i].F_NAME.length - 1));
                    data2.push(res[i].F_WORKLOAD);
                }
                myChart.setOption({
                    xAxis: {
                        data: data1
                    },
                    series: [{
                        data: data2
                    }]
                })
            }).catch(error => {

            })

        },
        /**总产量计数 */
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
                mac: 'wuji'
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
        /**当月报警排名 */
        initEchartBar3() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar2'));
            // 绘制图表
            myChart.setOption({
                color: ['#3398DB'],
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                yAxis: [
                    {
                        // show: false,
                        type: 'value',
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            },
                        }
                    }
                ],
                xAxis: [
                    {
                        // name: '工位',
                        type: 'category',
                        data: [],
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
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            rotate: 300 //倾斜角度
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: []
                    }
                ]
            });
            let arr = utils.CurrentMonthFirstAndLast();
            let obj = {
                mac: "wuji",
                begindate: arr[0],
                enddate: arr[1],
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WarnCRank" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                for (let i = 0; i < 7; i++) {
                    data1.push(res[i].F_NAME.substr(8, res[i].F_NAME.length - 1));
                    data2.push(res[i].F_WARNC);
                }
                myChart.setOption({
                    xAxis: {
                        data: data1
                    },
                    series: [{
                        data: data2
                    }]
                })
            }).catch(error => {

            })

        },
        /**加工时长 */
        initEchartBar4() {
            let myChart = this.$echarts.init(document.getElementById('echarts-bar3'));
            // 绘制图表
            let option = {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    formatter(params) {
                        let a = utils.secondToHMS((params[0].data / 1000).toFixed(0));
                        return `${a}`;
                    },
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [],
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
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            rotate: 300 //倾斜角度
                        },
                    }
                ],
                // dataZoom: [
                //     {
                //         id: 'dataZoomX',
                //         type: 'slider',
                //         start: 0,
                //         end: 30,
                //     }
                // ],
                yAxis: [
                    {
                        show: true,
                        type: 'value',
                        axisLabel: {
                            formatter: function (value) {
                                // 格式化成月/日，只在第一个刻度显示年份
                                return utils.secondToHMS((value / 1000).toFixed(0));
                            },
                            interval: 0,
                            textStyle: {
                                color: '#fff'
                            },
                        }
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: []
                    }
                ]
            }
            myChart.setOption(option);


            // myChart.showLoading();
            let arr = utils.CurrentMonthFirstAndLast();


            this.$axios.post("/newApi/wuji/Device/AvgWorkDuration",
                {
                    "device": {
                        "id": "wuji"
                    },
                    "date_period": {
                        "start_date": arr[0],
                        "end_date": arr[1]
                    }

                }).then(res => {
                    // myChart.hideLoading();
                    console.log(res);
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
                        res.sort((a, b) => {
                            return b["avg_work_duration"] - a["avg_work_duration"];
                        })

                        let data1 = [];
                        let data2 = [];
                        if (res.length <= 7) {
                            for (let i = 0; i < res.length; i++) {
                                data1.push(res[i].name.substr(8, res[i].name.length - 1));
                                data2.push(res[i].avg_work_duration);
                            }
                        }
                        else if (res.length > 7) {
                            for (let i = 0; i < 7; i++) {
                                data1.push(res[i].name.substr(8, res[i].name.length - 1));
                                data2.push(res[i].avg_work_duration);
                            }
                        }

                        myChart.setOption({
                            title: { text: "" },
                            xAxis: {
                                data: data1
                            },
                            series: [{
                                data: data2
                            }]
                        })
                    }



                }).catch(error => {

                })
        },
        /**设备在线率 */
        initEchartLine() {
            let myChart = this.$echarts.init(document.getElementById('echarts-line'));
            let option = {
                grid: {
                    left: '0%',
                    bottom: '3%',
                    top: "5%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    axisLabel: {
                        interval: 0,
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                        rotate: 300 //倾斜角度
                    },
                    axisTick: {
                        alignWithLabel: true
                    },

                    axisLine: {
                        lineStyle: {
                            color: '#ddd', // 颜色
                            width: 1 // 粗细
                        }
                    },
                },
                yAxis: {
                    // show: false,
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        fontSize: 12,
                        show: true,
                        interval: "auto",
                        formatter: "{value}%"
                    },
                },
                series: [{
                    data: [],
                    type: 'line'
                }]
            };
            myChart.setOption(option);


            let arr = utils.getDay(-7);
            let obj = {
                mac: 'wuji',
                begindate: arr[0],
                enddate: arr[1],
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WorkStatLine" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                res.forEach((item, index) => {

                    data1.push(item.f_date.substr(5, 10));
                    data2.push(item.F_ONLINERATE);
                })

                myChart.setOption({
                    xAxis: {
                        data: data1,
                    },
                    series: [{
                        data: data2
                    }]
                })
            }).catch(error => {

            })
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
                    itemWidth: 15,
                    itemHeight: 10,


                    textStyle: { color: " #fff", fontSize: 11 },
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
            }
            // myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/DayWarnDis" + utils.formatQueryStr(obj)).then(res => {
                // myChart.hideLoading();
                console.log(res);
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
                        title: { text: '' },
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
            }
            this.axios.all([
                this.$axios.post('/api/DDC/DeviceWorkStatic/OnLineStat?mac=wuji'),
                this.$axios.post('/api/DDC/DeviceWorkStatic/LstWarnList?mac=wuji'),
                this.$axios.post("/api/DDC/DeviceWorkStatic/DayDevActRank" + utils.formatQueryStr(obj)),
                this.$axios.post("/api/DDC/DeviceWorkStatic/DayWorkLoadRank?mac=wuji"),
            ]).then(this.axios.spread(function (OnLineStat, LstWarnList, DayDevActRank, DayWorkLoadRank) {
                //升排序
                DayWorkLoadRank.sort((a, b) => {
                    return a.F_NAME.substr(10, a.F_NAME.length - 1) - b.F_NAME.substr(10, b.F_NAME.length - 1);
                })
                //web

                that.DayWorkLoadRank = DayWorkLoadRank;

                //OnLineStat 设备在线数, LstWarnList 设备实时报警内容
                that.onlineNum = OnLineStat.onlinenum;
                that.outlineNum = OnLineStat.offlinenum;
                // that.number = alarmInformation[0].f_name;
                let alarmInformation = [];
                //整理
                LstWarnList.forEach((item, index) => {
                    alarmInformation[index] = {};
                    alarmInformation[index].date = item.F_CT.split(" ")[0];
                    alarmInformation[index].time = item.F_CT.split(" ")[1];
                    alarmInformation[index].alarmContent = item.F_ERROR;
                    alarmInformation[index].deviceId = item.F_DEVICEID;
                    alarmInformation[index].name = item.f_name.substr(10, item.f_name.length - 1);

                })

                if (alarmInformation.length > 4) {
                    that.alarmInformation = alarmInformation.slice(0, 4);
                }
                else {
                    that.alarmInformation = alarmInformation;
                }

                let averageYield = 0;

                DayDevActRank.forEach((item, index) => {
                    averageYield += item.ACTRATE;
                })
                that.averageYield = (averageYield / 13).toFixed(2);

                that.number = that.alarmInformation[0].name;

            })).catch(error => {

            });


        },


    },
    mounted() {
        let that = this;
        this.getData();
        this.$nextTick(res => {
            this.initEchartBar();
            this.initEchartBar2();
            this.initEchartBar3();
            this.initEchartBar4();
            this.initEchartLine();
            this.initEchartPie();
        })
        this.init();
        threeUtils.helper(this);
        setTimeout(() => {
            this.animate();
        }, 2000)

        window.onresize = () => {
            return threeUtils.onWindowResize(this);
        }
        this.$socketApi.sendSock((res) => {
            locationArrays = [];
            for (let i of res) {
                for (let j of this.$store.state.deviceIdArr) {
                    if (j.deviceId == i.Key) {
                        locationArrays.push({
                            deviceId: i.Key,
                            name: `J0` + j.deviceName.substr(10, j.deviceName.length - 1),
                            locationArray: JSON.parse(i.Value[0].value),
                            index: j.deviceName.substr(10, j.deviceName.length - 1) - 1,
                        })
                    }
                }

            }
        });
        this.setInterval2 = setInterval(() => {
            if (window.innerWidth != window.screen.availWidth) {
                this.flag = true;
            }
            if (window.innerWidth == window.screen.availWidth && this.flag) {
                this.flag = false;
                threeUtils.onWindowResize(this);
            }
        }, 500)
        this.setInterval3 = setInterval(() => {
            locationArray = locationArrays;
            this.i = 0;
        }, 1000)

        this.setInterval = setInterval(() => {
            this.getData();
            this.$nextTick(res => {
                this.initEchartBar();
                this.initEchartBar2();
                this.initEchartBar3();
                this.initEchartBar4();
                this.initEchartLine();
                this.initEchartPie();
            })
        }, 30000)
    },

    destroyed() {
        //页面销毁时删除场景
        clearInterval(this.setInterval);
        clearInterval(this.setInterval2);
        clearInterval(this.setInterval3);
        // clearInterval(this.setInterval4);

        cancelAnimationFrame(this.id);// Stop the animation
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
<style lang='scss' scoped>
</style>