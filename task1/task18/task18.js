window.onload=function(){
    var container = document.getElementById("content");
    var buttonList = document.getElementsByTagName("input");

    var queue={
        str:[],
        isEmpty: function () {
            return(this.str.length==0);
        },
        paint: function() {
            var string = "";
            this.str.map(function (item) {
                string+="<div>"+parseInt(item)+"</div>";
            });
            container.innerHTML = string;
            //addDivDelEvent();
        },
        leftPush: function (num) {
            this.str.unshift(num);
            this.paint();
        },
        rightPush: function (num) {
            this.str.push(num);
            this.paint();
        },
        leftPop: function () {
            if(!this.isEmpty()){
                alert(this.str.shift());
                this.paint();
            }else{
                alert("The queue is already empty!");
            }
        },
        rightPop: function () {
            if(!this.isEmpty()){
                alert(this.str.pop());
                this.paint();
            }else{
                alert("The queue is already empty!");
            }
        },
        deleteID: function(id) {
            console.log(id);
            this.str.splice(id, 1);
            this.paint();
        }
    }

    //为container中的每个div绑定删除函数
    function addDivDelEvent() {
        for (var cur = 0; cur < container.childNodes.length; cur++) {
            //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
            container.childNodes[cur].addEventListener( "click", function(cur) {
                return function(){return queue.deleteID(cur)};
            },false);

            // addEvent(container.childNodes[cur], "click", function(cur) {
            //     return function(){return queue.deleteID(cur)};
            // }(cur));

        }
    }

    buttonList[1].addEventListener( "click", function() {
        console.log("leftPush");
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)) {
            queue.leftPush(input);
        }
        else {
            alert("Please enter an interger!");
        }
    },false);
    buttonList[2].addEventListener( "click", function() {
        console.log("rightPush");
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)) {
            queue.rightPush(input);
        }
        else {
            alert("Please enter an interger!");
        }
    },false);
    buttonList[3].addEventListener( "click", function(){
        console.log("leftPop");
        queue.leftPop();
    },false);
    buttonList[4].addEventListener( "click", function(){
        console.log("rightPop");
        queue.rightPop();
    },false);

}





