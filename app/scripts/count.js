$(document).ready(function(){
    var Goods = count.change_format();
    var target = $(".item-body");
    _(Goods).each(function (Good) {
        var text = '<tr class="good_body">' + '<td>' + Good.type + '</td>'
            + '<td class="good_name">' + Good.name + '</td>'
            + '<td>' + Good.price+ '</td>'
            + '<td>' + Good.unit + '</td>'
            +'<td><div class="btn-group"><button class="btn btn-default item-minus">-</button>\
            <button class="btn btn-default item-count" disabled="disabled">'+Good.count
            +'<button class="btn btn-default item-add">+</button>'
            + '<td class="small_total">' +Item.display_small_count(Goods,Good.barcode)+ '</td>'
            + '</tr>';
        target.append(text);
    });


    $('.item-add').on('click', function () {
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        console.log(good_name);
    });

    $('.item-minus').on('click', function () {
        var good_name = $(this).closest('.good_body').find(".good_name").text();
        console.log(good_name);
    });

});
