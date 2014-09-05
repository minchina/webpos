$(document).ready(function () {
    var items = loadAllItems();
    _(items).each(function (item) {
        var addCart = '<button class="btn btn-primary btm-sm">加入购物车</button>';
        var listItem = $('<tr class="list-item" data-barcode="' + item.barcode + '">\
                            <td>' + item.type + '</td>\
                            <td class="item-name">' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>'+ item.unit +'</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
        $('#item-table').append(listItem);
    });
    $('.list-item').on('click', 'button', function () {
        var count = $('#count');
        count.text(+count.text() + 1);
    });
});