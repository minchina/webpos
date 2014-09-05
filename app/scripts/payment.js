/**
 * Created by cuitmnc on 14-9-5.
 */
$(document).ready(function(){
    console.log(get_data());

});




dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
};


function get_data(){
    var currentDate = new Date();
        var year = dateDigitToString(currentDate.getFullYear());
        var month = dateDigitToString(currentDate.getMonth() + 1);
        var date = dateDigitToString(currentDate.getDate());
        var hour = dateDigitToString(currentDate.getHours());
        var minute = dateDigitToString(currentDate.getMinutes());
        var second = dateDigitToString(currentDate.getSeconds());
        return  year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

}