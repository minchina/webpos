$(document).ready(function(){
//    if(!parseInt(localStorage.getItem('totalCount'))){
//        window.location.assign("../views/item.html");
//    }
    $('#total').text(count.total_price());
    var Goods = count.change_format();
    var target = $(".item-body");
    _(Goods).each(function (Good) {
        var text = '<tr class="good_body">' + '<td>' + Good.type + '</td>'
            + '<td class="good_name">' + Good.name + '</td>'
            + '<td>' + Good.price+ '</td>'
            + '<td>' + Good.unit + '</td>'
            +'<td><div class="btn-group"><button class="btn btn-default item-minus">-</button>\
            <button class="btn btn-default item-count" disabled="disabled">'+Good.count +'</button>'
            +'<button class="btn btn-default item-add">+</button>'
            + '<td class="small_total">' +Item.display_small_count(Goods,Good.name)+ '</td>'
            + '</tr>';
        target.append(text);
    });

    $('.item-add').on('click', function () {
        var good = $(this).closest('.good_body');
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        update_message("add",good_name);
        var itemSum = $(this).closest('.good_body').find('.item-count');
        itemSum.text(parseInt(itemSum.text())+1);
        refresh(good,good_name);
    });

    $('.item-minus').on('click', function () {
        var good = $(this).closest('.good_body');
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        if(good.find(".item-count").text()==0){
            return ;
        }
        update_message("minus",good_name);
        var itemSum = $(this).closest('.good_body').find('.item-count');
        itemSum.text(parseInt(itemSum.text())-1);
        refresh(good,good_name);
    });

});

function update_message(add_minus,good_name){
    var count = $('#count');
    var total_count = parseInt(localStorage.getItem('totalCount'));
    var haveItems = JSON.parse(localStorage.getItem('haveItems'));
    var GoodBarcode = _.find(haveItems,function(item){return item.name==good_name}).barcode;
    if(add_minus=="add"){
        _.find(haveItems,function(item){return item.name==good_name}).count++;
        total_count++;
    }
    if(add_minus=="minus"){
        _.find(haveItems,function(item){return item.name==good_name}).count--;
        total_count--;
    }
    if(total_count==0){
        window.location.assign("../views/item.html");
    }
    _.find(haveItems,function(item){return item.name==good_name}).savecount=Item.get_promotion(GoodBarcode,_.find(haveItems,function(item){return item.name==good_name}).count) || 0;
    localStorage.haveItems = JSON.stringify(haveItems);
    localStorage.setItem('totalCount',total_count);
}

function refresh(good,good_name){
    var Goods = count.change_format();
    //购物车自动更新
    get_total_count();
    //价格自动更新
    good.find('.small_total').text(Item.display_small_count(Goods,good_name));
    $('#total').text(count.total_price());

}
