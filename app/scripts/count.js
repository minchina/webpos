$(document).ready(function(){
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
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        update_message("add",good_name);
        var itemSum = $(this).closest('.good_body').find('.item-count');
        itemSum.text(parseInt(itemSum.text())+1);

        total_count++;

    });

    $('.item-minus').on('click', function () {
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        update_message("plus",good_name);
        var itemSum = $(this).closest('.good_body').find('.item-count');
        itemSum.text(parseInt(itemSum.text())-1);
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
    else{
        _.find(haveItems,function(item){return item.name==good_name}).count--;
        total_count--;
    }
    _.find(haveItems,function(item){return item.name==good_name}).savecount=Item.get_promotion(GoodBarcode,_.find(haveItems,function(item){return item.name==good_name}).count) || 0;
    localStorage.haveItems = JSON.stringify(haveItems);
    localStorage.setItem('totalCount',total_count);
    refresh();
}

function refresh(){
    get_total_count();

}
