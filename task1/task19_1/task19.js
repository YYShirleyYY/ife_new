window.onload=function(){
    var container = document.getElementById("content");
    var buttonList = document.getElementsByTagName("input");
    //var Clock;
    var queue={
        str:[],
        isEmpty: function () {
            return(this.str.length==0);
        },
        isFull: function () {
            return(this.str.length>60);
        },
        paint: function() {
            var string = "";
            this.str.map(function (item) {
                //string+="<div>"+parseInt(item)+"</div>";
                string+=("<div style=\'height:"+parseInt(item)+"px\'></div>");
                //string+=("<div style=\'height:"+parseInt(item)+"px\'></div>");
            });
            container.innerHTML = string;
            //addDivDelEvent();
        },
        leftPush: function (num) {
            if(!this.isFull()){
                this.str.unshift(num);
                this.paint();
            }else{
                alert("more than 60 numbers!");
            }
        },
        rightPush: function (num) {
            if(!this.isFull()){
                this.str.push(num);
                this.paint();
            }else{
                alert("more than 60 numbers!");
            }
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
    
    function addDivDelEvent() {
        for (var cur = 0; cur < container.childNodes.length; cur++) {
            //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
            container.childNodes[cur].addEventListener( "click", function(cur) {
                return function(){return queue.deleteID(cur)};
            },false);
        }
    }

    function BubbleSort() {
        //var count=0,i=0;
        var Clock;
        // Clock=setInterval(function () {
        //     console.log("-----count is "+count);
        //     if(count>=queue.str.length){
        //         clearInterval(Clock);
        //         console.log("count is "+count);
        //         console.log("length is "+queue.str.length);
        //     }
        //     if (i === queue.str.length - count){
        //         console.log("-11--i is "+i);
        //         console.log("-11--count is "+count);
        //         i = 0;
        //         count++;
        //         console.log("-22--i is "+i);
        //         console.log("-22--count is "+count);
        //     }
        //     if(queue.str[i]>queue.str[i+1]){
        //         console.log("length is "+queue.str.length);
        //         console.log("i is "+i);
        //         console.log("count is "+count);
        //         console.log("length is "+queue.str.length);
        //         console.log("str[i] is "+queue.str[i]);
        //         console.log("str[i+1] is "+queue.str[i+1]);
        //         var temp=queue.str[i];
        //         queue.str[i]=queue.str[i+1];
        //         queue.str[i+1]=temp;
        //         queue.paint();
        //     }
        //     i++;
        // },100);
        var len=queue.str.length;
        var i=len-1;
        var j=0;
        Clock=setInterval(function(){
            console.log("-----count is "+i);
            if(i<1){
                console.log("count is "+i);
                console.log("length is "+len);
                clearInterval(Clock);
            }
            if(j==i){
                console.log("-11--j is "+j);
                console.log("-11--count is "+i);
                j=0;
                --i;
                console.log("-22--j is "+j);
                console.log("-22--count is "+i);
            }
            console.log("str[i] is "+queue.str[j]);
            console.log("str[i+1] is "+queue.str[j+1]);
            if(queue.str[j]>queue.str[j+1]){
                console.log("length is "+len);
                console.log("j is "+j);
                console.log("count is "+i);
                console.log("length is "+len);
                console.log("str[i] is "+queue.str[j]);
                console.log("str[i+1] is "+queue.str[j+1]);
                var temp=queue.str[j];
                queue.str[j]=queue.str[j+1];
                queue.str[j+1]=temp;
                queue.paint();
            }
            ++j;

        },100)
    }
    
    buttonList[1].addEventListener( "click", function() {
        console.log("leftPush");
        var input = parseInt(buttonList[0].value);
        if ((/^[0-9]+$/).test(input)) {
            queue.leftPush(input);
        }
        else {
            alert("Please enter an integer!");
        }
    },false);
    buttonList[2].addEventListener( "click", function() {
        console.log("rightPush");
        var input = parseInt(buttonList[0].value);
        if ((/^[0-9]+$/).test(input)) {
            queue.rightPush(input);
        }
        else {
            alert("Please enter an integer!");
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
    buttonList[5].addEventListener( "click", function(){
        BubbleSort();
    },false);

}





