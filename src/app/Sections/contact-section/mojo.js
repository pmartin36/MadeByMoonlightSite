var showModal = function(){
    // @ts-ignore
    require(["mojo/signup-forms/Loader"], function(L) { 
        L.start({"baseUrl":"mc.us12.list-manage.com","uuid":"73d95c4c17729f67f5b6a7cd2","lid":"eadf7ae01d"}) 
    });
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00";
}