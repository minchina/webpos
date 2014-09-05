$(document).ready(function(){
    var Goods = count.change_format();
    var target = $(".item-body");
    console.log(Goods);

    _(Goods).each(function (Good) {
        var text = '<tr>' + '<td>' + Good.type + '</td>'
            + '<td>' + Good.name + '</td>'
            + '<td>' + Good.price+ '</td>'
            + '<td>' + Good.unit + '</td>'
            +'<td><div class="btn-group"><button class="btn btn-default item-minus">-</button>\
            <button class="btn btn-default item-count" disabled="disabled">'+Good.count
            +'<button class="btn btn-default item-add">+</button>'
            + '<td>' +Item.display_small_count(Goods,Good.barcode)+ '</td>'
            + '</tr>';
        target.append(text);
    });


});