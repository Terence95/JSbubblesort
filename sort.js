/*
TERENCE
*/
function sort() {
    var input = document.getElementById('input').value;
    var arr = input.split(',');
    var n = arr.length;
    // alert(typeof arr[0]);
    // alert(arr.length);
    // alert(n);
    var temp = 0;
    var num = new Array();
    // alert(typeof temp);
    // js得将其转成数字才能进行比较
    for(var i = 0; i < n ; i++){
        var t = parseInt(arr[i]);
        num.push(t);
    }


    for(var i = 0; i < num.length - 1; i++){
        for(var j = 0; j < num.length - i; j++){
            if (num[j] < num[j+1]) {
                temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            };
        }
    }
    
   
    for(var i = 0; i < n ; i++){
         document.write(num[i] + ' ');
    }
}
