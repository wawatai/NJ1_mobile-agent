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
    //報酬方式
    $(".agRegist .content .checkBox").click(function(){
        $(this).toggleClass('active')
        .siblings().removeClass('active');
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
$(function(){
    // $(".agOther .agList li").click(function(){
    //     $('.agOther_inner, .innerConent.ch1').addClass('display');
    //     $("header .rulePage.ch1 ").addClass('display');
    //     $("header .content").removeClass('display');
    //     $(".agOther").removeClass('display');
    // })

    // $(".agOther .agList li:nth-of-type(1)").click(function(){
    //     $('.agOther_inner, .innerConent.ch1').addClass('display');
    //     $("header .rulePage.ch1 ").addClass('display');
    //     $("header .content").removeClass('display');
    //     $(".agOther").removeClass('display');
    // })
    // $(".agOther .agList li:nth-of-type(2)").click(function(){
    //     $('.agOther_inner, .innerConent.ch2').addClass('display');
    //     $("header .rulePage.ch2 ").addClass('display');
    //     $("header .content").removeClass('display');
    //     $(".agOther").removeClass('display');
    // })
    // $(".agOther .agList li:nth-of-type(3)").click(function(){
    //     $('.agOther_inner, .innerConent.ch3').addClass('display');
    //     $("header .rulePage.ch3 ").addClass('display');
    //     $("header .content").removeClass('display');
    //     $(".agOther").removeClass('display');
    // })

    $(".agOther .agList li").click(function(){
        var n = $(this).index(); //第幾個,從 0 開始計算

        $('.agOther_inner,.innerConent:nth-of-type('+ (n + 1) +'),header .listPage:nth-of-type('+ (n + 2) +')')
        .addClass('display');

        $("header .content,.agOther")
        .removeClass('display');
    })
})
