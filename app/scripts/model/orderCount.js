function Count(){

}
count.change_format=function(){
    var origin_messages = count.get_no_null_messages();
    console.log(origin_messages);
//    var result = _.groupBy(origin_messages,function(obj){return obj.type});
//    console.log(result);
    return origin_messages;



};

count.get_no_null_messages=function(){
    var messages = count.get_all_messages();
    return _.filter(messages,function(obj){return obj.count != 0});

};
count.get_all_messages = function(){
    return JSON.parse(localStorage['haveItems']);
};