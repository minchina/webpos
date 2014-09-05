/**
 * Created by cuitmnc on 14-9-5.
 */
$(document).ready(function(){
    var Goods = count.change_format();
    $("#pay_date").text(get_data());
    var target = $(".item-body");
    _(Goods).each(function (Good) {
        var text = '<tr class="good_body">' + '<td>' + Good.type + '</td>'
            + '<td class="good_name">' + Good.name + '</td>'
            + '<td>' + Good.price+ '</td>'
            + '<td>' + Good.unit + '</td>'
            +'<td>'+Good.count+'</td>'
            + '<td class="small_total">' +Item.display_small_count(Goods,Good.name)+ '</td>'
            + '</tr>';
        target.append(text);
    });

    var gift_target = $(".gift-body");
    var gift_Goods = Item.get_gift();
    _(gift_Goods).each(function(Good){
        var gifttext = '<tr class="gift_body">' + '<td>' + Good.type + '</td>'
            + '<td class="gift_name">' + Good.name + '</td>'
            +'<td>'+Good.savecount+'</td>'
            + '</tr>';
        gift_target.append(gifttext);
    });

    $('#total').text(count.total_price());
    $('#gift_prices').text(count.gift_price());

    $('#confirm').on('click', function () {
        localStorage.clear();
    });


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