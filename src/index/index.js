import $ from "jquery";
$(".animateList .animateItem").on("click",function(){
    const pageName = $(this).attr("data-pageName");
    if(pageName){
        $(".content>iframe").attr("src","../"+pageName)
    }
})