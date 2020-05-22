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

            let geometry = new Three.BoxGeometry(100, 100, 100);
            // 控制台查看立方体数据
            console.log(geometry);
            // 控制台查看geometry.toJSON()结果
            console.log(geometry.toJSON());
            // JSON对象转化为字符串
            console.log(JSON.stringify(geometry.toJSON()));
            // JSON.stringify()方法内部会自动调用参数的toJSON()方法
            console.log(JSON.stringify(geometry));


            // 纹理贴图映射到一个矩形平面上
            // var geometry = new Three.PlaneGeometry(204, 102); //矩形平面
            // var geometry = new Three.BoxGeometry(100, 100, 100); //立方体
            // var geometry = new Three.SphereGeometry(60, 25, 25); //球体
            // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
            var textureLoader = new Three.TextureLoader();
            // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
            let that = this;
            textureLoader.load(require('../../public/image/timg.jpg'), function (texture) {

                console.log(texture);
                var material = new Three.MeshLambertMaterial({
                    // color: 0x0000ff,
                    // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
                    map: texture,//设置颜色贴图属性值
                }); //材质对象Material

                var mesh = new Three.Mesh(geometry, material); //网格模型对象Mesh
                that.scene.add(mesh); //网格模型添加到场景中

            })


            console.log(textureLoader);

            // var material = new Three.MeshLambertMaterial({
            //     // color: 0x0000ff,
            //     // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
            // }); //材质对象Material
            // var mesh = new Three.Mesh(geometry, material); //网格模型对象Mesh
            // this.scene.add(mesh); //网格模型添加到场景中









            //辅助坐标
            let axisHelper = new Three.AxisHelper(250);
            this.scene.add(axisHelper);

            //点光源
            let point = new Three.PointLight(0xffffff);
            point.position.set(400, 200, 100); //点光源位置
            this.scene.add(point); //点光源添加到场景中

            //环境光
            let ambient = new Three.AmbientLight(0x888888);
            this.scene.add(ambient);

            // 创建相机
            let width = container.clientWidth; //窗口宽度
            let height = container.clientHeight; //窗口高度
            let k = width / height; //窗口宽高比
            let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
            // //创建相机对象
            this.camera = new Three.OrthographicCamera(-s * k, s * k, s, -s, 10, 1000);
            this.camera.position.set(200, 200, 200); //设置相机位置
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


            // let axis = new Three.Vector3(1, 0, 0);
            // axis.normalize(); //向量归一化
            //沿着axis轴表示方向平移100
            // this.mesh.translateOnAxis(axis, 1);




            // this.mesh.rotateX(0.01);
            // this.mesh.rotateY(0.02);
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