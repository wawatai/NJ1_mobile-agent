//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
 
    $(".agentSignup").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.agRegist').addClass('display');
    })
    //同意條款checkbox
    $(".agRegist .btnBox .readBtn").click(function(){
        $(this).toggleClass('active');
    })
    $(".agRegist .btnBox .openAGterms").click(function(){
        $('.agTerms').addClass('display');
        $(".agRegist").addClass("darkness");
    })
    $(".closeTerms,.close_ic.back").click(function(){
        $(".filter").addClass("display");
        $('.agTerms').removeClass('display');
        $(".agRegist").removeClass("darkness");
    })
    //申請已送出，審查中
    $(".agRegist .applycheck").click(function(){
        $('.agApply').addClass('display');
        $(".agRegist").removeClass('display');
    })
})

function openNews(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.news').addClass('display');
}
function loading(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loading').addClass('display');

    setTimeout(function(){
        $(".filter")
        .removeClass("display");
    },2000);
}

//QA/Rule list inner 切換
function backToPage(){
    $("header . rulePage").removeClass("display");
    $("header . rulePage:eq(0)").addClass("display");

    $(".ruleInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpBody li").click(function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display");

        $(".helpInner,.helpInner ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})