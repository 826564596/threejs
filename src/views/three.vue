<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
import * as Three from "three";
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

        }
    },
    methods: {
        //初始化
        init() {
            let that = this;
            let container = document.getElementById("container");



            document.onkeydown = function (event) {
                that.keyboard(event);
            };

            let mouseX = 0, mouseY = 0;
            let windowHalfX = window.innerWidth / 2;
            let windowHalfY = window.innerHeight / 2;

            //设置相机
            this.camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

            this.camera.position.x = 0;
            this.camera.position.y = 0;
            this.camera.position.z = 250;
            this.camera.lookAt(new Three.Vector3(0, 0, 0));


            //创建场景
            this.scene = new Three.Scene();
            this.scene.position.x = 0;
            this.scene.position.y = 0;
            this.scene.position.z = 0;
            //环境光
            // let ambientLight = new Three.AmbientLight(0xffffff, 0.4);
            let ambientLight = new Three.AmbientLight(0x444444);
            this.scene.add(ambientLight);
            let directionalLight = new Three.DirectionalLight(0xffffff);
            this.scene.add(directionalLight); //将光添加到场景中
            //点光源
            let pointLight = new Three.PointLight(0xffffff, 0.8);
            this.camera.add(pointLight);
            this.scene.add(this.camera);

            //辅助坐标
            let axisHelper = new Three.AxisHelper(250);
            this.scene.add(axisHelper);


            //模型model




            let manager = new Three.LoadingManager();
            manager.addHandler(/\.dds$/i, new DDSLoader());

            console.log(manager);
            new MTLLoader(manager).load(`${that.publicPath}/model/male/male02_dds.mtl`, function (materials) {
                console.log(materials);
                materials.preload();
                new OBJLoader(manager).setMaterials(materials).load(`${that.publicPath}/model/male/male02.obj`, function (object) {
                    object.position.y = - 95;
                    that.scene.add(object);
                }, that.onProgress, that.onError);

            });



            this.renderer = new Three.WebGLRenderer();
            this.renderer.setPixelRatio(window.devicePixelRatio);
            // this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setSize(container.clientWidth, container.clientHeight);

            this.renderer.setClearColor(0xffffff, 1); //设置背景颜色

            container.appendChild(this.renderer.domElement);

            //鼠标视角切换
            let controls = new Three.OrbitControls(this.camera, this.renderer.domElement); //创建控件对象



            // document.addEventListener('mousemove', onDocumentMouseMove, false);
            // window.addEventListener('resize', onWindowResize, false);


        },
        //动画
        animate() {


            // this.camera.position.x += (this.camera.position.x) * .0005;
            // this.camera.position.y += (this.camera.position.y) * .0005;

            // this.camera.lookAt();

            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);//求求再次执行animate函数
        },



        onDocumentMouseMove(event) {

            mouseX = (event.clientX - windowHalfX) / 2;
            mouseY = (event.clientY - windowHalfY) / 2;

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

        onProgress(xhr) {
            if (xhr.lengthComputable) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete, 2) + '% downloaded');
            }
        },
        onError() { },
    },
    mounted() {
        this.init();
        this.animate();

    }
}
</script>

<style>
#container {
    height: 800px;
}
</style>