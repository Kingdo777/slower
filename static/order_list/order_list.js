$(document).ready(function () {
    $('#back').click(function () {
        location.href = document.referrer
    });

    SLOWER.orderList.config({
        all: $('#all'),
        unpay: $('#unpay'),
        receiving: $("#receiving"),
        done: $('#done')
    });
    SLOWER.orderList.render();
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.orderList = (function () {

    let status = {};
    let  menu = {};
    /**
     * 如果value 不为空则设置hash值，否则返回当前的hash值
     * @private
     */
    function __hash__(value) {
        return value ? (window.location.hash = '!/' + value): window.location.hash.toString().replace('#!/', '');
    }

    function __page__(page) {
        __hash__(page);

        $('.menu > div').css({'border-bottom':'solid 3px #ffffff'});
        $('#'+page).css({'border-bottom':'solid 3px rgb(224, 98, 13)'})

        $.post("/order/" + page, null, function (data) {
            console.log(data);

            $('#list').html('');

            if(data.status === "success"){
                data.orders.forEach(function (item) {
                    let data = {
                        price: item.price,
                        orderId: item.id
                    };

                    $('#order-template').tmpl(data).appendTo('#list');
                })
            }
        })
    }


    return {

        config: function (conf) {
            menu.all = conf.all;
            menu.unpay = conf.unpay;
            menu.receiving = conf.receiving;
            menu.done = conf.done;

            // 注册点击事件
            menu.all.click(()=>__page__('all'));
            menu.unpay.click(()=>__page__('unpay'));
            menu.receiving.click(()=>__page__('receiving'));
            menu.done.click(()=>__page__('done'));
        },

        render:function () {
            status = __hash__();
            if(!status) status = "all";
            __page__(status);
        }

    }
})();