!function (t) {
    t((function () {
        var e = window.location.href
            , c = void 0 !== document.title ? document.title : ""
            , n = void 0 !== screen.width && screen.width > 1024 ? "no" : "yes"
            , o = ""
            , a = {};
        function _(t) {
            return !!a[t] && a[t]
        }
        function i(t, e) {
            a[t] = e;
            var c = JSON.stringify(a);
            localStorage.setItem("ht_ctc_storage", c)
        }
        localStorage.getItem("ht_ctc_storage") && (a = localStorage.getItem("ht_ctc_storage"),
            a = JSON.parse(a));
        var s = "";
        if ("undefined" != typeof ht_ctc_chat_var)
            s = ht_ctc_chat_var,
                h(),
                u();
        else {
            try {
                if (document.querySelector(".ht_ctc_chat_data")) {
                    var r = t(".ht_ctc_chat_data").attr("data-settings");
                    s = JSON.parse(r),
                        window.ht_ctc_chat_var = s
                }
            } catch (t) {
                s = {}
            }
            h(),
                u()
        }
        function h() {
            var e = document.querySelector(".ht_ctc_chat_data");
            e && (o = t(".ht_ctc_chat_data").attr("data-no_number"),
                e.remove())
        }
        function u() {
            var c;
            document.dispatchEvent(new CustomEvent("ht_ctc_event_settings", {
                detail: {
                    ctc: s
                }
            })),
                (c = document.querySelector(".ht-ctc-chat")) && (document.dispatchEvent(new CustomEvent("ht_ctc_event_chat")),
                    function (t) {
                        "yes" == s.schedule ? document.dispatchEvent(new CustomEvent("ht_ctc_event_display", {
                            detail: {
                                ctc: s,
                                display_chat: g,
                                ht_ctc_chat: t
                            }
                        })) : g(t)
                    }(c),
                    c.addEventListener("click", (function () {
                        t(".ht_ctc_chat_greetings_box").length || v(c)
                    }
                    )),
                    t(".ht_ctc_chat_greetings_box").length && t(document).on("click", ".ht_ctc_chat_style", (function (e) {
                        t(".ht_ctc_chat_greetings_box").hasClass("ctc_greetings_opened") ? l("user_closed") : d("user_opened")
                    }
                    )),
                    t(document).on("click", ".ctc_greetings_close_btn", (function (t) {
                        l("user_closed")
                    }
                    )),
                    t(document).on("click", ".ht_ctc_chat_greetings_box_link", (function (e) {
                        e.preventDefault(),
                            document.querySelector("#ctc_opt") ? t("#ctc_opt").is(":checked") || _("g_optin") ? v(c) : t(".ctc_opt_in").show(400).fadeOut("1").fadeIn("1") : v(c),
                            document.dispatchEvent(new CustomEvent("ht_ctc_event_greetings"))
                    }
                    )),
                    document.querySelector("#ctc_opt") && t("#ctc_opt").on("change", (function (e) {
                        t("#ctc_opt").is(":checked") && (t(".ctc_opt_in").hide(100),
                            i("g_optin", "y"),
                            setTimeout((() => {
                                v(c)
                            }
                            ), 500))
                    }
                    ))),
                t(document).on("click", ".ht-ctc-sc-chat", (function () {
                    var t = this.getAttribute("data-number")
                        , c = this.getAttribute("data-pre_filled");
                    c = c.replace(/\[url]/gi, e),
                        c = encodeURIComponent(c),
                        s.url_structure_d && "yes" !== n ? window.open("https://web.whatsapp.com/send?phone=" + t + "&text=" + c, "_blank", "noopener") : window.open("https://wa.me/" + t + "?text=" + c, "_blank", "noopener"),
                        m(this),
                        f(t)
                }
                )),
                t(document).on("click", ".ctc_chat, #ctc_chat", (function (e) {
                    v(this),
                        t(this).hasClass("ctc_woo_place") && e.preventDefault()
                }
                )),
                t(document).on("click", '[href="#ctc_chat"]', (function (t) {
                    t.preventDefault(),
                        v(this)
                }
                ))
        }
        function d(e = "open") {
            t(".ctc_cta_stick").remove(),
                t(".ht_ctc_chat_greetings_box").show(70),
                t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_opened").removeClass("ctc_greetings_closed"),
                i("g_action", e),
                "user_opened" == e && i("g_user_action", e)
        }
        function l(e = "close") {
            t(".ht_ctc_chat_greetings_box").hide(70),
                t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_closed").removeClass("ctc_greetings_opened"),
                i("g_action", e),
                "user_closed" == e && i("g_user_action", e)
        }
        function g(t) {
            var e;
            "yes" == n ? "show" == s.dis_m && ((e = document.querySelector(".ht_ctc_desktop_chat")) && e.remove(),
                t.style.cssText = s.pos_m + s.css,
                p(t)) : "show" == s.dis_d && ((e = document.querySelector(".ht_ctc_mobile_chat")) && e.remove(),
                    t.style.cssText = s.pos_d + s.css,
                    p(t))
        }
        function p(e) {
            try {
                t(e).show(parseInt(s.se))
            } catch (t) {
                e.style.display = "block"
            }
            !function () {
                if (t(".ht_ctc_chat_greetings_box").length) {
                    if (s.g_device) {
                        if ("yes" !== n && "mobile" == s.g_device)
                            return void t(".ht_ctc_chat_greetings_box").remove();
                        if ("yes" == n && "desktop" == s.g_device)
                            return void t(".ht_ctc_chat_greetings_box").remove()
                    }
                    document.dispatchEvent(new CustomEvent("ht_ctc_event_after_chat_displayed", {
                        detail: {
                            ctc: s,
                            greetings_open: d,
                            greetings_close: l
                        }
                    })),
                        s.g_init && "open" == s.g_init && "user_closed" !== _("g_user_action") && d("init"),
                        t(document).on("click", '.ctc_greetings, #ctc_greetings, .ctc_greetings_now, [href="#ctc_greetings"]', (function (t) {
                            t.preventDefault(),
                                l("element"),
                                d("element")
                        }
                        ))
                }
            }(),
                function (e) {
                    var c = t(e).hasClass("ht_ctc_entry_animation") ? 1200 : 120;
                    setTimeout((function () {
                        e.classList.add("ht_ctc_animation", s.ani)
                    }
                    ), c),
                        t(".ht-ctc-chat").hover((function () {
                            t(".ht-ctc-chat .ht-ctc-cta-hover").show(120)
                        }
                        ), (function () {
                            t(".ht-ctc-chat .ht-ctc-cta-hover").hide(100)
                        }
                        ))
                }(e)
        }
        function m(t) {
            if (s.analytics && "session" == s.analytics) {
                if (sessionStorage.getItem("ht_ctc_analytics"))
                    return;
                sessionStorage.setItem("ht_ctc_analytics", "done")
            }
            document.dispatchEvent(new CustomEvent("ht_ctc_event_analytics"));
            var n = s.number;
            t.classList.contains("ht-ctc-sc") && (n = t.getAttribute("data-number"));
            var o = "Click to Chat for WhatsApp"
                , a = "chat: " + n
                , _ = c + ", " + e;
            if (s.ga || s.ga4)
                if ("undefined" != typeof gtag)
                    s.ga4 ? gtag("event", "click to chat", {
                        number: n,
                        title: c,
                        url: e
                    }) : gtag("event", a, {
                        event_category: o,
                        event_label: _
                    });
                else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                    ga.getAll()[0].send("event", o, a, _)
                } else
                    "undefined" != typeof __gaTracker && __gaTracker("send", "event", o, a, _);
            "undefined" != typeof dataLayer && dataLayer.push({
                event: "Click to Chat",
                type: "chat",
                number: n,
                title: c,
                url: e,
                event_category: o,
                event_label: _,
                event_action: a
            }),
                s.ads && "undefined" != typeof gtag_report_conversion && gtag_report_conversion(),
                s.fb && "undefined" != typeof fbq && fbq("trackCustom", "Click to Chat by HoliThemes", {
                    Category: "Click to Chat for WhatsApp",
                    return_type: "chat",
                    ID: n,
                    Title: c,
                    URL: e
                })
        }
        function v(c) {
            document.dispatchEvent(new CustomEvent("ht_ctc_event_number", {
                detail: {
                    ctc: s
                }
            }));
            var a = s.number
                , _ = s.pre_filled;
            if (c.hasAttribute("data-number") && (a = c.getAttribute("data-number")),
                c.hasAttribute("data-pre_filled") && (_ = c.getAttribute("data-pre_filled")),
                _ = (_ = _.replaceAll("%", "%25")).replace(/\[url]/gi, e),
                _ = encodeURIComponent(decodeURI(_)),
                "" != a) {
                var i = "https://wa.me/" + a + "?text=" + _
                    , r = s.url_target_d ? s.url_target_d : "_blank";
                "yes" == n ? (s.url_structure_m && (i = "whatsapp://send?phone=" + a + "&text=" + _,
                    r = "_self"),
                    s.custom_link_m && "" !== s.custom_link_m && (i = s.custom_link_m)) : (s.url_structure_d && (i = "https://web.whatsapp.com/send?phone=" + a + "&text=" + _),
                        s.custom_link_d && "" !== s.custom_link_d && (i = s.custom_link_d));
                var h = "popup" == r ? "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=788,height=514,left=100,top=100" : "noopener";
                window.open(i, r, h),
                    m(c),
                    f(a)
            } else
                t(".ht-ctc-chat").html(o)
        }
        function f(e) {
            if (s.hook_url) {
                var c = s.hook_url
                    , n = {};
                if (s.hook_v)
                    n = s.hook_v;
                document.dispatchEvent(new CustomEvent("ht_ctc_event_hook", {
                    detail: {
                        ctc: s,
                        number: e
                    }
                })),
                    c = s.hook_url,
                    n = s.hook_v,
                    data = JSON.stringify(n),
                    t.ajax({
                        url: c,
                        type: "POST",
                        mode: "no-cors",
                        data: data,
                        success: function (t) { }
                    })
            }
        }
    }
    ))
}(jQuery);
