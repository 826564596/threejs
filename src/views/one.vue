<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
import * as Three from "three";
// import { OrbitControls } from "Three-orbit-controls";
import OrbitControls from "three/examples/js/controls/OrbitControls";
export default {
    name: "App",
    data() {
        return {
            camera: null,//相机
            scene: null,//场景
            renderer: null,//渲染器
            mesh: null,//网格模型
        }
    },
    methods: {
        //初始化
        init() {
            let container = document.getElementById("container");
            //创建场景
            this.scene = new Three.Scene();
            let geometry = new Three.BoxGeometry(0.1, 0.1, 0.1);//几何体
            let material = new Three.MeshNormalMaterial();//材质
            this.mesh = new Three.Mesh(geometry, material);//网格模型
            this.scene.add(this.mesh);


            //球
            let geometry1 = new Three.SphereGeometry(0.06, 0.04, 0.04);//几何体
            let material1 = new Three.MeshNormalMaterial();//材质
            let mesh1 = new Three.Mesh(geometry1, material1);//网格模型
            this.scene.add(mesh1);
            mesh1.translateY(0.12); //球体网格模型沿Y轴正方向平移120


            //圆柱
            let geometry2 = new Three.CylinderGeometry(0.050, 0.050, 0.100, 0.025);
            let material2 = new Three.MeshNormalMaterial();
            let mesh2 = new Three.Mesh(geometry2, material2); //网格模型对象Mesh
            this.scene.add(mesh2);
            mesh2.translateX(0.12); //球体网格模型沿Y轴正方向平移120

            //辅助坐标
            let axisHelper = new Three.AxisHelper(0.25);
            this.scene.add(axisHelper);

            //光照
            let point = new Three.PointLight(0xffffff);
            point.position.set(0.4, 0.2, 0.1); //点光源位置
            this.scene.add(point); //点光源添加到场景中

            //环境光
            let ambient = new Three.AmbientLight(0x444444);
            this.scene.add(ambient);

            // 创建相机
            let width = container.clientWidth; //窗口宽度
            let height = container.clientHeight; //窗口高度
            let k = width / height; //窗口宽高比
            let s = 0.2; //三维场景显示范围控制系数，系数越大，显示的范围越大
            // //创建相机对象
            this.camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 0.01, 1);
            this.camera.position.set(0.2, 0.2, 0.2); //设置相机位置
            this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)




            //创建渲染器
            this.renderer = new Three.WebGLRenderer();
            this.renderer.setSize(container.clientWidth, container.clientHeight);//设置渲染器窗体大小
            this.renderer.setClearColor(0xffffff, 1); //设置背景颜色
            container.appendChild(this.renderer.domElement);

            //鼠标视角切换
            let controls = new Three.OrbitControls(this.camera, this.renderer.domElement); //创建控件对象



        },
        //动画
        animate() {
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.animate);//求求再次执行animate函数
            this.mesh.rotateX(0.01);
            this.mesh.rotateY(0.02);
        },

    },
    mounted() {
        this.init();
        this.animate();

        console.log(this.scene);
        console.log(this.mesh);

    }
}
</script>

<style>
#container {
    height: 800px;
}
</style>