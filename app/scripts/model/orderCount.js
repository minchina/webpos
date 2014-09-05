function Count(){

}
count.change_format=function(){
    return count.get_no_null_messages();
};

count.get_no_null_messages=function(){
    var messages = count.get_all_messages();
    return _.filter(messages,function(obj){return obj.count != 0});

};
count.get_all_messages = function(){
    return JSON.parse(localStorage['haveItems']);
};