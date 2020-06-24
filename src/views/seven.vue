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

            <!-- 第一行 主体 -->
            <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new " style="height:185px">

                        <el-row style="padding-top:7px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    设备状态
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    在线
                                </div>
                            </el-col>
                        </el-row>

                        <el-row style="margin-top:5px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    坐标
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    1,2,3
                                </div>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:5px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    加速度
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    1m/s2
                                </div>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:5px">
                            <el-col :span="9" :offset="1">
                                <div class="content-content content-content-left ">
                                    减速度
                                </div>
                            </el-col>

                            <el-col :span="11" :offset="2">
                                <div class="content-content content-content-right ">
                                    1m/s2
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
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

                                    <div v-if="operation.length>0"> {{operation[0].F_RUNDURA + operation[0].F_FREEDURA + operation[0].F_WARNDURA}}</div>

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
                                    <div v-if="operation.length>0"> {{operation[0].F_RUNDURA}}</div>
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
                                    <div v-if="operation.length>0"> {{operation[0].F_WARNDURA}}</div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-col>
            </el-row>

            <!-- 第三行title -->
            <el-carousel height="260px" arrow="never">
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
                                <div style='height:180px' class="" id="echarts-pie">

                                </div>
                            </el-col>

                            <el-col :span="12">
                                <div style='height:180px;' class="first-right ">
                                    <div style="height:50px" class="first-right-title ">
                                        报警信息
                                    </div>
                                    <div class="first-right-content ">
                                        {{LstWarnListStr != "" ? LstWarnListStr :'暂无'}}

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
                                                未执行
                                            </div>
                                        </div>
                                    </el-col>

                                    <el-col :span="8">
                                        <div class="explain ">
                                            <div class="colortwo">
                                            </div>
                                            <div class="text">
                                                已完成
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
                                    <calendar />
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                </el-carousel-item>

                <el-carousel-item>
                    <!-- 第二行title -->
                    <el-row>
                        <el-col :span="18">
                            <div class=" left-table-single-title">
                                <div>保养</div>
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
                                                未执行
                                            </div>
                                        </div>
                                    </el-col>

                                    <el-col :span="8">
                                        <div class="explain ">
                                            <div class="colortwo">
                                            </div>
                                            <div class="text">
                                                已完成
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
                                    <calendar />
                                </div>

                            </div>
                        </el-col>
                    </el-row>

                </el-carousel-item>
            </el-carousel>

            <!-- 第三行title -->
            <!-- <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>保养</div>
                    </div>
                </el-col>
            </el-row> -->
            <!-- 第三行 主体 -->
            <!-- <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new ">
                    </div>
                </el-col>
            </el-row> -->

            <!-- 第四行title -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>设备健康</div>
                    </div>
                </el-col>
            </el-row>
            <!-- 第四行 主体 -->
            <el-row>
                <el-col :span="24">
                    <div class="left-table-single-content-new bg-small" style="height:50px;">
                        <el-row>
                            <el-col :span="10" :offset="4" class="healthy ">
                                设备稼动率:
                            </el-col>
                            <el-col :span="2" :offset="0" class="healthy ">
                                <span>{{ACTRATE}}%</span>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- 位置坐标 -->
        <div class="location ">
            <div v-for="(item,index) in locationArray" :key="index" class="location-div">
                <el-row style="margin-top:5px">
                    <el-col :span="9" :offset="1">
                        <div class="content-content content-content-left ">
                            轴{{index + 1}}
                        </div>
                    </el-col>

                    <el-col :span="11" :offset="2">
                        <div class="content-content content-content-right ">
                            {{parseFloat(item).toFixed(4)}}°
                        </div>
                    </el-col>
                </el-row>
            </div>

        </div>
    </div>

</template>

<script>

import * as Three from "three";

// import { OrbitControls } from "Three-orbit-controls";

import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
import OrbitControls from "three/examples/js/controls/OrbitControls";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { HDRLoader, HDRCubeTextureLoader } from "three/examples/jsm/loaders/HDRCubeTextureLoader";
import FirstPersonControls from "three/examples/js/controls/FirstPersonControls";
import ThreeBSP from "../plugins/ThreeBSP";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import utils from "../assets/utils/utils";
// import socketApi from "../plugins/webScoket";



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


        };
    },
    methods: {
        //初始化单台机器
        init() {
            let that = this;
            this.container = document.getElementById("container");
            this.initScene();
            this.initCamera();
            this.initRender();
            this.initLight();
            this.initControls();
            this.initContent();
            document.onkeydown = function (event) {
                that.keyboardDown(event);
            };
            document.onkeyup = function (event) {
                that.keyboardUp(event);
            };


        },
        //设置场景
        initScene() {
            this.scene = new Three.Scene();
            this.scene.background = new Three.Color(0xffffff);
        },
        // 设置相机
        initCamera() {
            this.camera = new Three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000);
            this.camera.position.set(0, 100, 100);
            this.camera.lookAt(0, 60, 50);
        },
        // 渲染器
        initRender() {
            this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true, });
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            // this.renderer.setClearColor(0x000000, 1); //设置背景颜色
            this.renderer.setClearColor(0xFFFFFF, 0.0);
            this.container.appendChild(this.renderer.domElement);
        },
        //灯光
        initLight() {
            let ambientLight = new Three.AmbientLight(0xffffff, 1);
            this.scene.add(ambientLight);
            // 平行光
            let directionalLight = new Three.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(1, 0.75, 0.5).normalize();
            this.scene.add(directionalLight);

        },
        //控制器
        initControls() {
            this.controls = new Three.OrbitControls(this.camera, this.renderer.domElement); //创建控件对象
            console.log(this.controls);
            this.controls.maxZoom = 0.8;
        },


        initContent() {
            let that = this;
            this.createFloor();
            this.createEnvironment();
            this.createTable();

            //生成激光打标机
            let wall = this.returnWallObject(50, 70, 40, 0, new Three.MeshBasicMaterial({ color: 0xafc0ca, opacity: 0.1 }), 0, 35, 0, "墙面4");
            let a = this.returnWallObject(30, 20, 40, 0, new Three.MeshBasicMaterial({ color: 0xafc0ca }), 10, 45, 0, "墙面4");
            let arr3 = [];
            arr3.push(a);
            let obj2 = this.createResultBspLight(wall, arr3);

            // 加载平台
            let mtlLoader = new MTLLoader();
            mtlLoader.load(`${that.publicPath}/model/pt(1).mtl`, function (materials1) {
                let objLoader = new OBJLoader();
                objLoader.setMaterials(materials1);
                objLoader.load(`${that.publicPath}/model/pt(1).obj`, function (pt) {

                    pt.scale.set(0.05, 0.05, 0.05);
                    //加载机械臂
                    let mtlLoader2 = new MTLLoader();
                    mtlLoader2.load(`${that.publicPath}/model/605(1).mtl`, function (materials) {
                        let objLoader2 = new OBJLoader();
                        objLoader2.setMaterials(materials);
                        objLoader2.load(`${that.publicPath}/model/model(1).obj`, function (object) {

                            console.log(object);
                            // object.rotation.z = Math.PI;
                            // object.position.set(0, 16, 0);
                            // that.scene.add(object);

                            that.addObject(object, pt, obj2);
                        });
                    });
                });
            });

        },
        addObject(object, obj, obj2) {
            let z = 300;
            let x = 200;
            let J1 = new Three.Group();
            let J2 = new Three.Group();
            let J3 = new Three.Group();
            let J4 = new Three.Group();
            let J5 = new Three.Group();
            let J6 = new Three.Group();
            let J7 = new Three.Group();
            let J8 = new Three.Group();

            let J3Box = new Three.Object3D();
            let J4Box = new Three.Object3D();
            let J5Box = new Three.Object3D();
            let J6Box = new Three.Object3D();
            let J7Box = new Three.Object3D();
            let J8Box = new Three.Object3D();

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
            // J6Box.rotation.z += Math.PI / 2;////////////////////////////

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

            J1.scale.set(20, 20, 20);
            J1.position.set(16 * 20, 18 * 20, 12 * 20);

            obj.name = this.$route.params.groupName;

            obj2.name = "激光打标机";
            obj.add(J1);

            obj2.scale.set(20, 20, 20);
            obj2.rotation.y = 0.5 * Math.PI;

            obj2.position.set(0 * 20, 35 * 20, 60 * 20);
            obj.add(obj2);

            obj.position.z = 0;
            obj.position.x = 30;
            obj.rotation.y = -0.5 * Math.PI;

            this.scene.add(obj);

        },
        //设置辅助坐标系
        helper() {
            let grid = new Three.GridHelper(800, 160, 0xFF0000, 0x000000);
            grid.material.opacity = 0.1;
            grid.material.transparent = true;
            this.scene.add(grid);
            let axesHelper = new Three.AxesHelper(30);
            this.scene.add(axesHelper);
        },
        //添加环境
        createEnvironment() {
            this.scene.background = new Three.TextureLoader().load(require("../assets/image/bg.jpg"));
        },

        //返回墙对象
        returnWallObject(width, height, depth, angle, material, x, y, z, name) {
            let cubeGeometry = new Three.BoxGeometry(width, height, depth);
            let cube = new Three.Mesh(cubeGeometry, material);
            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;
            cube.rotation.y += angle * Math.PI;  //-逆时针旋转,+顺时针
            cube.name = name;
            return cube;
        },

        //创建激光打标机
        createResultBspLight(bsp, cubeArray) {
            let material = new Three.MeshPhongMaterial({ color: 0x9cb2d1, specular: 0x9cb2d1, shininess: 30, transparent: true, opacity: 1 });
            let BSP = new ThreeBSP(bsp);
            cubeArray.forEach((item, index) => {
                let bsp = new ThreeBSP(item);
                BSP = BSP.subtract(bsp);
            })
            let result = BSP.toMesh(material);
            result.material.flatshading = Three.FlatShading;
            result.geometry.computeFaceNormals();  //重新计算几何体侧面法向量
            result.geometry.computeVertexNormals();
            result.material.needsUpdate = true;  //更新纹理
            result.geometry.buffersNeedUpdate = true;
            result.geometry.uvsNeedUpdate = true;
            return result;
        },



        //添加图表
        createTable() {

            // let spriteMap = new Three.TextureLoader().load(require("../assets/image/底框.png"));
            // let spriteMaterial = new Three.SpriteMaterial({
            //     transparent: true,
            //     map: spriteMap,
            //     side: Three.DoubleSide
            // });

            // let sprite = new Three.Sprite(spriteMaterial);
            // sprite.scale.set(50, 50, 1)
            // sprite.position.set(100, 50, 0);
            // this.scene.add(sprite);

        },
        //添加地面
        createFloor() {
            let that = this;
            let floorGeometry = new Three.BoxGeometry(that.LENGTH, that.WIDTH, 1);
            let floorMaterial = new Three.MeshBasicMaterial({ color: 0x000E2E });
            let floor = new Three.Mesh(floorGeometry, floorMaterial);
            floor.position.y = -0.5;
            floor.rotation.x = Math.PI / 2;
            floor.name = "地面";
            that.scene.add(floor);
        },

        animate() {
            requestAnimationFrame(this.animate);
            this.renderer.render(this.scene, this.camera);
            this.update();
            let vect = this.camera.getWorldDirection(new Three.Vector3());//获取当前视角方向
            //前进
            if (this.front) {
                this.camera.position.z += vect.dot(new Three.Vector3(0, 0, 15)) * 0.01;//沿z轴分解
                this.camera.position.x += vect.dot(new Three.Vector3(15, 0, 0)) * 0.01;//沿x轴分解
            }
            //后退
            if (this.back) {
                this.camera.position.z -= vect.dot(new Three.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x -= vect.dot(new Three.Vector3(15, 0, 0)) * 0.01;
            }
            //向左
            if (this.left) {
                vect = vect.cross(new Three.Vector3(0, 2, 0));//求视角方向与
                this.camera.position.z -= vect.dot(new Three.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x -= vect.dot(new Three.Vector3(15, 0, 0)) * 0.01;

            }
            //向右
            if (this.right) {
                vect = vect.cross(new Three.Vector3(0, 2, 0));
                this.camera.position.z += vect.dot(new Three.Vector3(0, 0, 15)) * 0.01;
                this.camera.position.x += vect.dot(new Three.Vector3(15, 0, 0)) * 0.01;
            }

            if (this.one) {
                this.shaftOne();
            }
            if (this.two) {
                this.shaftTwo();
            }
            if (this.three) {
                this.shaftThree();
            }
            if (this.four) {
                this.shaftFour();
            }
            if (this.five) {
                this.shaftFive();
            }
            if (this.six) {
                this.shaftSix();
            }
            //轴4和轴6是跟rotation相反
            // let a = ["0.659891", "-131.469000", "222.603000", "179.977000", "93.137600", "-46.173900"];
            // this.scene.getObjectByName(this.groupName).getObjectByName("J2").rotation.y = 0.659891;
            // this.scene.getObjectByName(this.groupName).getObjectByName("J3Box").rotation.z = -131.469000;
            // this.scene.getObjectByName(this.groupName).getObjectByName("J4Box").rotation.z = 222.603000;
            // this.scene.getObjectByName(this.groupName).getObjectByName("J5Box").rotation.x = -179.977000;
            // this.scene.getObjectByName(this.groupName).getObjectByName("J6Box").rotation.z = 93.137600;
            // this.scene.getObjectByName(this.groupName).getObjectByName("J7Box").rotation.x = 46.173900;
        },

        //键盘按下事件
        keyboardDown(event) {
            switch (event.keyCode) {
                case 49: // 1
                    this.one = true;
                    break;
                case 50: // 2
                    this.two = true;
                    break;
                case 51: // 3
                    this.three = true;
                    break;
                case 52: // 4
                    this.four = true;
                    break;
                case 53: // 5
                    this.five = true;
                    break;
                case 54: // 6
                    this.six = true;
                    break;
                case 65: // a
                    this.left = true;
                    break;
                case 68: // d
                    this.right = true;
                    break;
                case 83: // s
                    this.back = true;
                    break;
                case 87: // w
                    this.front = true;
                    break;
            }
        },
        //键盘收起事件
        keyboardUp(event) {
            switch (event.keyCode) {
                case 49: // 1
                    this.one = false;
                    break;
                case 50: // 2
                    this.two = false;
                    break;
                case 51: // 3
                    this.three = false;
                    break;
                case 52: // 4
                    this.four = false;
                    break;
                case 53: // 5
                    this.five = false;
                    break;
                case 54: // 6
                    this.six = false;
                    break;
                case 65: // a
                    this.left = false;
                    break;
                case 68: // d
                    this.right = false;
                    break;
                case 83: // s
                    this.back = false;
                    break;
                case 87: // w
                    this.front = false;
                    break;
            }
        },
        //转动轴1
        shaftOne() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J2").rotation.y += 0.01;
        },
        //转动轴2
        shaftTwo() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J3Box").rotation.z += 0.01;
        },
        //转动轴3
        shaftThree() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J4Box").rotation.z += 0.01;
        },
        //转动轴4
        shaftFour() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J5Box").rotation.x += 0.01;

        },
        //转动轴5
        shaftFive() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J6Box").rotation.z += 0.01;

        },
        //转动轴6
        shaftSix() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J7Box").rotation.x += 0.01;

        },
        //测试自动旋转
        testRotation() {
            this.scene.getObjectByName(this.groupName).getObjectByName("J2").rotation.y += 0.01;

        },
        //插件更新
        update() {
            // this.testRotation();
        },

        // 窗口变动触发
        onWindowResize() {
            console.log('s');
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            // this.controls.handleResize();
        },


        // 总产量计数
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
                        data: ['当月总产量', '当周总产量', "当天总产量"],
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
                            return value.max + 200;
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
            myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/WorkLoadView" + utils.formatQueryStr(obj)).then(res => {
                myChart.hideLoading();
                console.log(res);
                myChart.setOption({
                    series: [{
                        data: [res.month, res.week, res.today]
                    }]
                })
            }).catch(error => {

            })


        },

        initEchartRadar() {
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
                        { name: '报警', max: 6500 },
                        { name: '维修', max: 16000 },
                        { name: '点检', max: 30000 },
                        { name: '保养', max: 38000 },
                        { name: '产量', max: 52000 },
                        { name: '运行时长', max: 25000 }
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
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: '实际开销'
                        }
                    ],

                }]
            };
            myChart.setOption(option);

        },

        //报警类型占比
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
            myChart.showLoading();
            this.$axios.post("/api/DDC/DeviceWorkStatic/DayWarnDis" + utils.formatQueryStr(obj)).then(res => {
                myChart.hideLoading();
                let data1 = [];
                let data2 = [];
                res.forEach((item, index) => {
                    data1.push(item.F_ERRORN);
                    data2.push({
                        value: item.F_ERRORC,
                        name: item.F_ERRORN
                    })
                })
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


            }).catch(error => { }
            )

        },

        //获取设备当前页面需要数据
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




            ]).then(this.axios.spread(function (DayWorkLoadRank, LstWarnList, DayDevActRank) {
                console.log(DayDevActRank);
                that.ACTRATE = DayDevActRank[0].ACTRATE;
                that.operation = DayWorkLoadRank;
            })).catch(error => {

            });


        },

    },


    mounted() {
        let that = this;
        this.groupName = this.$route.params.groupName;
        this.deviceId = this.$route.params.deviceId;
        this.getData();
        this.initEchartBar2();
        this.initEchartRadar();
        this.initEchartPie();
        this.init();
        this.helper();
        this.animate();

        window.onresize = () => {
            return this.onWindowResize();
        }
        this.$socketApi.sendSock((res) => {
            this.locationArray = JSON.parse(res[this.deviceId][0].value);
        });
    },
    destroyed() {
        //页面销毁时删除场景
        this.scene.children = {};
        this.renderer.dispose();
        // socketApi.websock.close();
    },


}

</script>
<style lang="scss">
// @import "../scss/index.scss";
</style>