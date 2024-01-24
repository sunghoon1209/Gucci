$(document).ready(function () {
    // 윈도우가 스크롤될 때 이벤트 처리
    $(window).scroll(() => {
        if ($(window).width() < 768) {
            // 스크롤 내릴때 헤더메뉴이동
            if ($(this).scrollTop() > 10) {
                $(".logo img").css("width", "140px");
                $(".logo img").css("height", "72px");
                $(".service").css("display", "none");
                $(".logo img").css("left", "15.5%");
    
    
    
                $("h1.logo").css("top", "0px");
                $("h1.logo").css("height", "72px");
    
                $("header").css("height", "72px");
    
    
    
    
            } else {
                $(".logo img").css("width", "");
                $(".logo img").css("height", "");
                $(".logo img").css("left", "");
                $("h1.logo").css("top", "");
                $("h1.logo").css("height", "");
                $(".service").css("display", "none");
                $("header").css("height", "");
                $(".logo img").css("left", "");
    
    
            };
    
    
    
        } else {
            if ($(this).scrollTop() > 10) {
                $(".logo img").css("width", "140px");
                $(".logo img").css("height", "72px");
                $("h1.logo").css("top", "0px");
                $("h1.logo").css("height", "72px");
                $(".service").css("display", "block");
                $("header").css("height", "72px");
    
    
    
    
            } else {
                $(".logo img").css("width", "");
                $(".logo img").css("height", "");
                $("h1.logo").css("top", "");
                $("h1.logo").css("height", "");
                $(".service").css("display", "");
                $("header").css("height", "");
    
    
            };
    
            var currentPosition = parseInt($(".mtextBox").css("top"));
            if ($(this).scrollTop() > 1000) {
                $(".pCover img").css("transform", "scale(1.0)");
            };
            if ($(this).scrollTop() > 2200) {
                $(".thirdInner img").css("transform", "scale(1.0)");
            };
    
            if ($(this).scrollTop() > 550) {
                $(".mtextBox p").css("color", "#000");
                $(".mtextBox a").css("color", "#fff");
                $(".mtextBox a").css("background-color", "#000");
    
            } else {
                $(".mtextBox p").css("color", "#fff");
                $(".mtextBox a").css("color", "#000");
                $(".mtextBox a").css("background-color", "#fff");
            };
    
            if ($(this).scrollTop() < 600) {
                var position = $(window).scrollTop();
                $(".mtextBox").stop().animate({
                    "top": position + 399 + "px"
                }, 500);
            } else {
                $(".mtextBox").css("top", "1000px");
            }
    
        };
    });

    if ($(window).width() < 768) {
        $(function () {
            $(".specialBox").addClass("banner_slider");
    
            $(".banner_slider").slick({
                autoplay: false, // 자동재생 활성화 
                autoplaySpeed: 1000,
                infinite: false, // 무한반복슬라이드
                slidesToShow: 1, // 보이는 슬라이드 갯수 
                dots: false, // 인디케이터 비활성화 (보이게하려면true )                
                focusOnSelect: false, //  슬라이드 선택시 포커스
                arrows: true, // 이전, 다음 화살표
                // speed: 200,  // 2초 (주석)
                conterPadding: '120px', // 중앙 슬라이드와의간격
                // prevArrow: $("#BtnPrev"), // 이전 화살표 선택
                // nextArrow: $("#BtnNext"), // 다음 화살표 선택
                centerMode: true // 중앙 슬라이드 모드 활성화 
    
            });
        });
        // window 크기가 768보다 작을때
    } else {
        $(".specialBox").removeClass("banner_slider");
        // window 크기가 768보다 클때
    }



    // 버튼 클릭시 이미지 변경

    //비디오제어 변수선정
    $(".papM").click(() => {
        let play = $(".papM").attr("src");
        if (play == "./src/images/pause.svg") {
            $(".papM").attr("src", "./src/images/play.svg");
            $(".mVideo").get(0).pause();
        } else {
            $(".papM").attr("src", "./src/images/pause.svg");
            $(".mVideo").get(0).play();
        }
    });
    $(".soofM").click(() => {
        let play = $(".soofM").attr("src");
        if (play == "./src/images/sound-on.png") {
            $(".soofM").attr("src", "./src/images/sound-off.png");
        } else {
            $(".soofM").attr("src", "./src/images/sound-on.png");
        }
    });
    $(".pap1").click(() => {
        let play = $(".pap1").attr("src");
        if (play == "./src/images/pause.svg") {
            $(".pap1").attr("src", "./src/images/play.svg");
            $(".video1").get(0).pause();
        } else {
            $(".pap1").attr("src", "./src/images/pause.svg");
            $(".video1").get(0).play();
        }
    });
    $(".soof1").click(() => {
        let play = $(".soof1").attr("src");
        if (play == "./src/images/sound-on.png") {
            $(".soof1").attr("src", "./src/images/sound-off.png");
        } else {
            $(".soof1").attr("src", "./src/images/sound-on.png");
        }
    });
    $(".pap2").click(() => {
        let play = $(".pap2").attr("src");
        if (play == "./src/images/pause.svg") {
            $(".pap2").attr("src", "./src/images/play.svg");
            $(".video2").get(0).pause();

        } else {
            $(".pap2").attr("src", "./src/images/pause.svg");
            $(".video2").get(0).play();
        }
    });
    $(".soof2").click(() => {
        let play = $(".soof2").attr("src");
        if (play == "./src/images/sound-on.png") {
            $(".soof2").attr("src", "./src/images/sound-off.png");
        } else {
            $(".soof2").attr("src", "./src/images/sound-on.png");
        }
    });
    $(".pap3").click(() => {
        let play = $(".pap3").attr("src");
        if (play == "./src/images/pause.svg") {
            $(".pap3").attr("src", "./src/images/play.svg");
            $(".video3").get(0).pause();
        } else {
            $(".pap3").attr("src", "./src/images/pause.svg");
            $(".video3").get(0).play();
        }
    });
    $(".soof3").click(() => {
        let play = $(".soof3").attr("src");
        if (play == "./src/images/sound-on.png") {
            $(".soof3").attr("src", "./src/images/sound-off.png");
        } else {
            $(".soof3").attr("src", "./src/images/sound-on.png");
        }
    });
    $(".search div").click(() => {
        $(".nc").css("top", "10px");
        $(".nc").css("font-size", "12px");
    });




    // 버튼 클릭시 오른쪽 메뉴 열림

    $(".hbtn").click(() => {
        if (window.innerWidth > 768) {
            $("section#rm").css("right", "0px");
            $("section:not(section#rm),header,footer").css("filter", "blur(10px)");
            $("body").css("overflow", "hidden");


        } else {
            $("section#rm").css("top", "0px");

            $("body").css("overflow", "hidden");


        }
    });
    // 버튼 클릭시 오른쪽 메뉴 닫힘
    $(".Xbtn").click(() => {

        if (window.innerWidth > 768) {
            $("section#rm").css("right", "-1000px");
            $("section:not(section#rm),header,footer").css("filter", "");
            $("section#cs").css("right", "-1000px");
            $("section:not(section#cs),header,footer").css("filter", "");
            $("body").css("overflow", "");

        } else {
            $("section#rm").css("top", "-1000px");
            $("body").css("overflow", "");


        }


    });
    //  pc에서 빈 화면 누를때 나와있는 창 들어감
    $("section:not(section#rm),header,footer").click(() => {
        //    오른쪽 메뉴가 나와있는지 들어가있는지 변수로 설정
        var rmout = $('section#rm').css("right")

        if (rmout == "0px") {
            $("section:not(section#rm),header,footer").css("filter", "");
            $("section#rm").css("right", "-1000px");
            $("body").css("overflow", "");
        }

    });
    // 오른쪽 서랍이 열려있을때 빈곳을 누르면 들어감
    $("section:not(section#cs),header,footer").click(() => {
        //    오른쪽 메뉴가 나와있는지 들어가있는지 변수로 설정

        var cmout = $('section#cs').css("right")

        if (cmout == "0px") {
            $("section:not(section#cs),header,footer").css("filter", "");
            $("section#cs").css("right", "-1000px");
            $("body").css("overflow", "");
        }

    });






    $(".service").click(() => {
        $("section#cs").css("right", "0px");
        $("section:not(section#cs),header,footer").css("filter", "blur(10px)");
        $("body").css("overflow", "hidden");

    });
    // 장바구니 클릭시

    $(".close").click(() => {
        $("section#emptyShop").css("left", "");
    });

    $(".cart").click(() => {

        // 장바구니 영역의 left값을 변수로 설정

        var carton = $('section#emptyShop').css("left");
        if (carton == "-1000px") {
            $("section#emptyShop").css("left", "20px");
        } else {
            $("section#emptyShop").css("left", "");
        }

    });


    // 검색버튼 클릭시
    $(".searchBtn").click(() => {
        var searchbtn = $('.searchMenu').css("display");

        if (searchbtn == "none") {
            $(".searchMenu").css("display", "block");
        } else {
            $(".searchMenu").css("display", "");
        }
    });

    // 마이페이지 클릭시
    $(".myPagebtn").click(() => {
        var searchbtn = $('.myPage').css("display");

        if (searchbtn == "none") {
            $(".myPage").css("display", "block");
        } else {
            $(".myPage").css("display", "");

        }
    });



    
        
   
});