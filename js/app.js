  $((function() {
       
        var t = "ar" == $("html").attr("lang");
        $("[data-link]").click((function() {
            return window.location = $(this).data("link"),
            !1
        }
        ));
        $("#nav-search button");
        var e = $("#nav-search input")
          , n = $("#nav-search")
          , i = !1;
        n.on("mouseenter", (function() {
            0 == i && (n.addClass("active"),
            e.focus(),
            i = !0)
        }
        )),
        n.on("mouseleave", (function() {
            n.removeClass("active"),
            e.focusout(),
            i = !1
        }
        ));
        var r = '<button type="button" class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>'
          , o = '<button type="button" class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>';
        if (t) {
            var s = r;
            r = o,
            o = s
        }
        $.ajaxSetup({
            headers: {
                "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
            }
        }),
        $("[data-bg]").each((function(t) {
            $(this).css("background-image", "url(" + $(this).data("bg") + ")"),
            $(this).attr("data-bgsize") && $(this).css("background-size", $(this).attr("data-bgsize")),
            $(this).attr("data-bgposition") && $(this).css("background-position", $(this).attr("data-bgposition")),
            $(this).attr("data-bgrepeat") && $(this).css("background-repeat", $(this).attr("data-bgrepeat")),
            $(this).attr("data-bgattachment") && $(this).css("background-attachment", $(this).attr("data-bgattachment"))
        }
        )),
        $("[data-bgs]").each((function(t) {
            $(this).css("background", $(this).data("bgs"))
        }
        )),
        $(".slider-container").length && $(".slider-container").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 5e3,
            arrows: !0,
            nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>'
        }),
        $(".issues-slider").length && $(".issues-slider").slick({
            rtl: t,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: !0,
            infinite: !1,
            appendArrows: ".issues-arrows",
            arrows: !0,
            nextArrow: r,
            prevArrow: o,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }]
        }),
        $(".projects-section").length && $(".projects-section-slider").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 2e3,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            nextArrow: r,
            prevArrow: o,
            appendArrows: ".projects-arrows",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }),
        $(".publications-section-slider").length && $(".publications-section-slider").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 2e3,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: !0,
            nextArrow: '<button type="button" class="slick-arrow slick-next button"><i class="fas fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="slick-arrow slick-prev button"><i class="fas fa-angle-left"></i></button>',
            appendArrows: ".publications-arrows",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }),
        window.slideout = new Slideout({
            panel: document.getElementById("panel"),
            menu: document.getElementById("menu"),
            padding: 256,
            tolerance: 70,
            touch: !1
        }),
        document.querySelector(".toggle-button").addEventListener("click", (function() {
            slideout.toggle()
        }
        )),
        $(".event-img-slider").length && $(".event-img-slider").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 2e3,
            arrows: !0,
            nextArrow: r,
            prevArrow: o,
            appendArrows: ".img-arrows"
        }),
        $(".post-img-slider").length && $(".post-img-slider").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 2e3,
            arrows: !0,
            nextArrow: r,
            prevArrow: o,
            appendArrows: ".img-arrows"
        }),
        $(".project-img-slider").length && $(".project-img-slider").slick({
            rtl: t,
            autoplay: !0,
            autoplaySpeed: 2e3,
            arrows: !0,
            nextArrow: r,
            prevArrow: o,
            appendArrows: ".img-arrows"
        }),
        $(".newsletter-form").on("submit", (function(t) {
            var e = $(this);
            t.preventDefault();
            var n = $(this).serialize();
            $.ajax({
                type: "post",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                url: "/newsletter-store",
                data: n,
                dataType: "json",
                success: function(t) {
                    iziToast.success({
                        id: "success",
                        zindex: 9999,
                        timeout: 5e3,
                        title: "Thank You!",
                        overlay: !0,
                        message: "Your email will be added to the newsletter",
                        position: "center"
                    }),
                    e.trigger("reset")
                },
                error: function(t) {
                    iziToast.error({
                        id: "error",
                        zindex: 9999,
                        timeout: 5e3,
                        title: "Error!",
                        overlay: !0,
                        message: t.responseText,
                        position: "center"
                    })
                }
            })
        }
        ))
    }
    ));
