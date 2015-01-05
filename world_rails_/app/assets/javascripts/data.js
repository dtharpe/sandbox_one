     
var data = function(type, link){
    var api_data;
        $.ajax({
        type: type,
        url: link,
        dataType: 'json',
        async: false,
            success: function(data){
                api_data = data;
            }
        });
    return api_data;
};
