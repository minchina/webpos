$(document).ready(function () {
    get_total_count();
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
        var total_count = parseInt(localStorage.getItem('totalCount'));
        total_count++;
        localStorage.setItem('totalCount',total_count);
        count.text(total_count);

        var haveItems = JSON.parse(localStorage.getItem('haveItems'));
        var GoodBarcode = $(this).closest('.list-item').data('barcode');
        var GoodName = $(this).closest('.list-item').find('.item-name').text();
        console.log(haveItems);
        haveItems[GoodBarcode] = _.where(items,{name:GoodName});
        haveItems[GoodBarcode].count++;
        localStorage.haveItems = JSON.stringify(haveItems);

    });
});

