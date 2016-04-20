/**
 * Created by Shirley on 2016/4/20.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var aqi_table=document.getElementById("aqi-table");
var city_input=document.getElementById("aqi-city-input");
var value_input=document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=city_input.value.trim();
    var value=value_input.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！");
        return;
    }
    if(!value.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }

    aqiData[city]=value;
}

/**
 * 渲染aqi-table表格
 * 
 * <tr>
   <td>北京</td><td>90</td><td><button>删除</button></td>
   </tr>
 */
function renderAqiList() {
    var item="<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr>";
    for(var city in aqiData){
        item += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>";
        //item += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"

    }
    aqi_table.innerHTML=city?item:"";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var add_btn=document.getElementById("add-btn");
    add_btn.addEventListener('click',addBtnHandle,false);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    
    aqi_table.addEventListener('click',function (event) {
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    });
}

init();