<!-- 单一器械 -->
<template>
    <div class="div">
        <div id="container">
        </div>
        <!-- 二维码 -->
        <qrcode />
        <!-- 底部文字 -->
        <bottomText />
        <!-- 左侧 -->
        <div class="left-table-single ">
            <!-- 第一行 -->
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
                    <div class="left-table-single-content ">
                        <!-- 第一行 设备状态-->
                        <el-row>
                            <el-col :span="24">
                                <div class="left-table-single-content-number">
                                    <el-row>
                                        <el-col :span="20" :offset="1">
                                            <div class="content-title ">
                                                设备状态
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row>
                                        <el-col :span="22" :offset="1">
                                            <div class="content-line ">
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left ">
                                                在线
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                报警
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left-s ">
                                                在线
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                报警
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第二行 开机时长 -->
                        <el-row>
                            <el-col :span="24">
                                <div class="left-table-single-content-number ">
                                    <el-row>
                                        <el-col :span="20" :offset="1">
                                            <div class="content-title ">
                                                开机时长
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row>
                                        <el-col :span="22" :offset="1">
                                            <div class="content-line ">
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left ">
                                                当天
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                10
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left-s ">
                                                当月
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                301
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第三行 运行时长 -->
                        <el-row>
                            <el-col :span="24">
                                <div class="left-table-single-content-number ">
                                    <el-row>
                                        <el-col :span="20" :offset="1">
                                            <div class="content-title ">
                                                运行时长
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row>
                                        <el-col :span="22" :offset="1">
                                            <div class="content-line ">
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left ">
                                                当天
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                10
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left-s ">
                                                当月
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                301
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 第四行 产量计数 -->
                        <el-row>
                            <el-col :span="24">
                                <div class="left-table-single-content-number ">
                                    <el-row>
                                        <el-col :span="20" :offset="1">
                                            <div class="content-title ">
                                                产量计数
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row>
                                        <el-col :span="22" :offset="1">
                                            <div class="content-line ">
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left ">
                                                当天
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                10
                                            </div>
                                        </el-col>
                                    </el-row>

                                    <el-row style="margin-top:5px">
                                        <el-col :span="9" :offset="1">
                                            <div class="content-content content-content-left-s ">
                                                当月
                                            </div>
                                        </el-col>

                                        <el-col :span="11" :offset="2">
                                            <div class="content-content content-content-right ">
                                                301
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>

        </div>

        <div class="right-table-single ">
            <!-- 第一行 -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title">
                        <div>报警系统</div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="right-table-single-content-one ">

                        <img src="../assets/image/框装饰.png" />
                        <img src="../assets/image/框装饰.png" />
                        <img src="../assets/image/框装饰.png" />
                        <img src="../assets/image/框装饰.png" />

                        <el-row>
                            <el-col :span="12">
                                <div class="base-font alert-title ">
                                    当天计数及时长
                                </div>
                            </el-col>

                            <el-col :span="12">
                                <div class="base-font alert-title ">
                                    当月计数及时长
                                </div>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <div class="base-font alert-title ">
                                    当天计数及时长
                                </div>
                            </el-col>

                            <el-col :span="12">
                                <div class="base-font alert-title ">
                                    当月计数及时长
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <!-- 第二行 -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title" style="margin-top:10px">
                        <div>点检设备</div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="right-table-single-content-two ">
                        <div>
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                        </div>
                    </div>
                </el-col>
            </el-row>

            <!-- 第三行 -->
            <el-row>
                <el-col :span="18">
                    <div class=" left-table-single-title" style="margin-top:10px">
                        <div>效率分析</div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="right-table-single-content-three ">
                        <div>
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                            <img src="../assets/image/框装饰.png" />
                        </div>
                    </div>
                </el-col>
            </el-row>
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
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
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
            // //转轴1
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
            console.log(this.scene.getObjectByName(this.groupName).getObjectByName("J7Box"));
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

    },


    mounted() {
        console.log(window);
        // window.visualViewport.scale = 0.5;
        this.groupName = this.$route.params.groupName;
        this.init();
        this.helper();
        this.animate();

        window.onresize = () => {
            return this.onWindowResize();
        }

    },
    destroyed() {
        //页面销毁时删除场景
        this.scene.children = {};
        this.renderer.dispose();
    },


}

</script>
<style lang="scss">
@import "../scss/index.scss";
</style>