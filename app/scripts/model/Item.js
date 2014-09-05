function Item(barcode, name, unit, price,type,count,savecount) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.type = type;
    this.count = count || 0;
    this.savecount = savecount || 0;
}

Item.get_promotion=function(barcode,count){
    if(_.find(loadPromotions()[0].barcodes,function(message){return message==barcode})){
        return Math.floor(count/3);
    }
};

Item.display_small_count=function(goods,good_name){
    var good = _.find(goods,function(good){return good.name==good_name});
    if(good.savecount==0){
        return good.price*good.count+'元';

    }
    return good.price * (good.count-good.savecount)+'元'+'(原价：'+good.price*good.count+'元)';
};
Item.total_price=function(){
    var total_price = 0;
    var Goods = count.change_format();
    _.each(Goods,function(good){total_price += (good.price*good.count)});
    return total_price.toFixed(2)+"元";
};