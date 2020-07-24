import Vue from "vue";
import { Dialog, Pagination, Form, Upload, FormItem, Option, Select, Message, Col, Row, Button, Input, Checkbox, Table, TableColumn, Carousel, CarouselItem, DatePicker, Alert, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(Select);
Vue.use(Pagination);
Vue.use(Upload);

// Vue.use(Alert);
// Vue.use(MessageBox);
// Vue.use(Message);

Vue.prototype.$alert = Alert;
Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;

// Vue.use(Message);

// Vue.prototype.$message = {
//     error(msg) {
//         Message.closeAll();
//         Message.error(msg);
//     },
//     success(msg) {
//         Message.closeAll();
//         Message.success(msg);
//     },
// };
