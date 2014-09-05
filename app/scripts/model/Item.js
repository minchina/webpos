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

Item.display_small_count=function(goods,good_barcode){
    var good = _.find(goods,function(good){return good.barcode==good_barcode});
    if(good.savecount==0){
        return good.price*good.count+'元';

    }
    return good.price * (good.count-good.savecount)+'元'+'(原价：'+good.price*good.count+'元)';


};