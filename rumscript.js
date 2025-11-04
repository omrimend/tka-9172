(function () {
var arrPath = location.pathname.split('/');
var corpId = localStorage.getItem("corpId");

if (corpId === null || corpId === undefined || corpId == '' || corpId == 'undefined') {
	var promise = $.ajax({
        url : window.location.origin + '/apps/mygps/content/corpid',
        async: false,
        type : "GET",
        dataType : "json",
     });
	promise.always(function(){
	}).done(function(msg, responseData){
		corpId = msg.corpId;
		window.localStorage.setItem("corpId", corpId);
		addCorpIdMetaTag(corpId);
    }).fail(function(jqXHR, textStatus){
            console.log("FAILED BLOCK of corpid servlet call.");
    });
} else {
	addCorpIdMetaTag(corpId);
}

function addCorpIdMetaTag() {
	var meta = document.createElement('meta');
	meta.name = "corpId";
	meta.content = corpId;
	document.getElementsByTagName('head')[0].appendChild(meta);
}
);
