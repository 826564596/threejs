import * as THREE from "three";
import { OBJLoader, MTLLoader } from "three-obj-mtl-loader";

/**
 * 初始化场景
 * @param {Object} _this - vue实例对象vm
 */
const initScene = (_this) => {
    _this.scene = new THREE.Scene();
    _this.scene.background = new THREE.Color(0xffffff);
};

/**
 * 设置相机
 * @param {Object} _this - vue实例对象vm
 * @param {Number} x - x轴
 * @param {Number} y - y轴
 * @param {Number} z - z轴
 *
 */
const initCamera = (_this, x, y, z) => {
    _this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000);
    _this.camera.position.set(x, y, z);
    _this.camera.lookAt(0, 50, 50);
};

/**
 * 渲染器
 * @param {Object} _this - vue实例对象vm
 */
const initRender = (_this) => {
    _this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    _this.renderer.setSize(_this.container.clientWidth, _this.container.clientHeight);
    // this.renderer.setClearColor(0x000000, 1); //设置背景颜色
    _this.renderer.setClearColor(0xffffff, 0.0);
    _this.container.appendChild(_this.renderer.domElement);
};
/**
 * 灯光
 * @param {Object} _this - vue实例对象vm
 *
 */
const initLight = (_this) => {
    let ambientLight = new THREE.AmbientLight(0xffffff, 1);
    _this.scene.add(ambientLight);
    // 平行光
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 0.75, 0.5).normalize();
    _this.scene.add(directionalLight);
};
/**
 * 控制器
 * @param {Object} _this - vue实例对象vm
 */
const initControls = (_this) => {
    _this.controls = new THREE.OrbitControls(_this.camera, _this.renderer.domElement); //创建控件对象
    _this.controls.maxZoom = 0.8;
};

/**
 * 设置辅助坐标系
 * @param {Object} _this - vue实例对象vm
 *
 */
const helper = (_this) => {
    let grid = new THREE.GridHelper(800, 160, 0xff0000, 0x000000);
    grid.material.opacity = 0.1;
    grid.material.transparent = true;
    _this.scene.add(grid);
    let axesHelper = new THREE.AxesHelper(30);
    _this.scene.add(axesHelper);
};

/**
 * 添加环境
 *  @param {Object} _this - vue实例对象vm
 */
const createEnvironment = (_this) => {
    _this.scene.background = new THREE.TextureLoader().load(require("../image/bg.jpg"));
};

/**添加地面
 * @param {Object} _this - vue实例对象vm
 */
const createFloor = (_this) => {
    let floorGeometry = new THREE.BoxGeometry(_this.LENGTH, _this.WIDTH, 1);
    let floorMaterial = new THREE.MeshBasicMaterial({ color: 0x000e2e });
    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    floor.name = "地面";
    _this.scene.add(floor);
};
/**
 * 窗口变动触发
 * @param {Object} _this - vue实例对象vm
 *
 */
const onWindowResize = (_this) => {
    _this.screenWidth = window.innerWidth;
    _this.screenHeight = window.innerHeight;
    _this.camera.aspect = window.innerWidth / window.innerHeight;
    _this.camera.updateProjectionMatrix();
    _this.renderer.setSize(window.innerWidth, window.innerHeight);
};

/**
 * 创建canvas对象
 * @param {Number} baseWidth -基础宽度
 * @param {Number} size - 基础高度
 * @param {String} name - 名称
 * @param {String} color - 名称颜色
 */
const makeLabelCanvas = (baseWidth, size, name, color) => {
    const borderSize = 2;
    const ctx = document.createElement("canvas").getContext("2d");
    const font = `${size}px bold sans-serif`;
    ctx.font = font;
    const textWidth = ctx.measureText(name).width;
    const doubleBorderSize = borderSize * 2;
    const width = baseWidth + doubleBorderSize;
    const height = size + doubleBorderSize;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.fillRect(0, 0, width, height);
    const scaleFactor = Math.min(1, baseWidth / textWidth);
    ctx.translate(width / 2, height / 2);
    ctx.scale(scaleFactor, 1);
    ctx.fillStyle = color;
    ctx.fillText(name, 0, 0);
    return ctx.canvas;
};
/**
 * 加载obj
 */
const loadObj = (publicPath, callback) => {
    // 加载平台
    let mtlLoader = new MTLLoader();
    mtlLoader.load(`${publicPath}/model/TP06.mtl`, function(materials1) {
        let objLoader = new OBJLoader();
        objLoader.setMaterials(materials1);
        objLoader.load(`${publicPath}/model/TP06.obj`, function(pt) {
            pt.scale.set(0.05, 0.05, 0.05);
            //加载机械臂
            let mtlLoader2 = new MTLLoader();
            mtlLoader2.load(`${publicPath}/model/model02.mtl`, function(materials) {
                let objLoader2 = new OBJLoader();
                objLoader2.setMaterials(materials);
                objLoader2.load(`${publicPath}/model/model02(1).obj`, function(object) {
                    //加载激光打标
                    let mtlLoader3 = new MTLLoader();
                    mtlLoader3.load(`${publicPath}/model/激光打标机05.mtl`, function(materials2) {
                        let objLoader3 = new OBJLoader();
                        objLoader3.setMaterials(materials2);
                        objLoader3.load(`${publicPath}/model/激光打标机05.obj`, function(obj3) {
                            //加载控制台
                            let mtlLoader4 = new MTLLoader();
                            mtlLoader4.load(`${publicPath}/model/控制台04.mtl`, function(materials3) {
                                let objLoader4 = new OBJLoader();
                                objLoader4.setMaterials(materials3);
                                objLoader4.load(`${publicPath}/model/控制台04.obj`, function(obj4) {
                                    callback(object, pt, obj3, obj4);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
export default {
    initScene: initScene,
    initCamera: initCamera,
    initRender: initRender,
    initLight: initLight,
    initControls: initControls,
    helper: helper,
    createEnvironment: createEnvironment,
    createFloor: createFloor,
    onWindowResize: onWindowResize,
    makeLabelCanvas: makeLabelCanvas,
    loadObj: loadObj,
};
