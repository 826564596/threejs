<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
import * as Three from "three";
import Stats from "stats";

// import { OrbitControls } from "Three-orbit-controls";

import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader';
import OrbitControls from "three/examples/js/controls/OrbitControls";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader";
import FirstPersonControls from "three/examples/js/controls/FirstPersonControls";

export default {
    name: "App",
    data() {
        return {
            camera: null,//相机
            scene: null,//场景
            renderer: null,//渲染器
            mesh: null,//网格模型
            // publicPath: process.env.BASE_URL,
            publicPath: "http://localhost:8081",
            container: null,
            controls: null,
            stats: null,

        }
    },
    methods: {
        //初始化
        init() {
            let that = this;
            this.container = document.getElementById("container");
            this.initScene();
            this.initCamera();
            this.initRender();
            this.initLight();
            this.initControls();
            this.initContent();
            // document.onkeydown = function (event) {
            //     that.keyboard(event);
            // };


            /* 监听事件 */
            // window.addEventListener('resize', this.onWindowResize, false);


        },

        initScene() {
            this.scene = new Three.Scene();
            this.scene.background = new Three.Color(0x050505);

        },
        // 设置相机
        initCamera() {
            //设置相机
            this.camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
            this.camera.position.set(0, 5, 20);
            this.camera.lookAt(new Three.Vector3(0, 0, 0));
            // this.scene.add(this.camera);
        },
        // 渲染器
        initRender() {

            this.renderer = new Three.WebGLRenderer({ antialias: true });
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            this.container.appendChild(this.renderer.domElement);
        },
        //灯光
        initLight() {

            //环境光
            // let ambientLight = new Three.AmbientLight(0xffffff, 0.4);
            let ambientLight = new Three.AmbientLight(0x0c0c0c);
            this.scene.add(ambientLight);

            let spotLight = new Three.SpotLight(0xffffff);
            spotLight.position.set(-400, -400, -400);

            let spotLight2 = new Three.SpotLight(0xffffff);
            spotLight2.position.set(400, 800, 400);
            this.scene.add(spotLight);
            this.scene.add(spotLight2);



        },
        //控制器
        initControls() {
            /* 第一人称控件 */
            this.controls = new Three.FirstPersonControls(this.camera, this.renderer.domElement);
            /* 属性参数默认 */
            this.controls.lookSpeed = 0.4;
            this.controls.movementSpeed = 20;
            this.controls.noFly = true;
            this.controls.lookVertical = true;
            this.controls.constrainVertical = true;
            this.controls.verticalMin = 1.0;
            this.controls.verticalMax = 2.0;
            this.controls.lon = -150;
            this.controls.lat = 120;

        },
        /* 场景中的内容 */
        initContent() {
            let that = this;
            let mtlLoader = new MTLLoader();
            mtlLoader.load(`${that.publicPath}/model/home/city.mtl`, function (materials) {

                let objLoader = new OBJLoader();
                objLoader.setMaterials(materials);

                objLoader.load(`${that.publicPath}/model/home/city.obj`, function (object) {

                    // let scale = chroma.scale(['red', 'green', 'blue']);
                    // setRandomColor(object, scale);
                    console.log(object);
                    that.scene.add(object);

                    // document.getElementById('loading').style.display = 'none';

                });

            });

        },


        /* 性能插件 */
        initStats() {
            let stats = new Stats();
            this.container.appendChild(stats.domElement);
            return stats;
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.controls.handleResize();

        },


        // 动画
        animate() {
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);//求求再次执行animate函数
            // this.update();

        },

        update() {
            this.controls.update(clock.getDelta());

        },


        keyboard(event) {
            console.log(event.keyCode);
            //w
            if (event.keyCode == 87) {
                this.camera.position.z -= 5;
                this.scene.position.z += 5;
            }
            //s
            if (event.keyCode == 83) {
                this.camera.position.z += 5;

            }
            //a
            if (event.keyCode == 65) {
                this.camera.position.x -= 5;

            }
            //d
            if (event.keyCode == 68) {
                this.camera.position.x += 5;

            }
        },


    },
    mounted() {
        this.init();
        this.animate();
        console.log(this.controls);

    }
}
</script>

<style>
#container {
    height: 800px;
}
</style>