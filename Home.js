new Vue({
    el: '#total',
    data: {
        WIN_width: (document.body.clientWidth) + 'px',
        WIN_height: (document.body.clientHeight) + 'px',
        picture_width: (document.body.clientWidth * 0.73) + 'px',
        picture_height: (document.body.clientWidth * 0.3) + 'px',

        picture1_width: (document.body.clientWidth * 0.08) + 'px',
        picture1_height: (document.body.clientWidth * 0.08) + 'px',
        picture2_width: (document.body.clientWidth * 0.24) + 'px',
        picture2_height: (document.body.clientWidth * 0.08) + 'px',

        scroll_height: (document.body.clientWidth * 0.4) + 'px',

        font_s: (document.body.clientWidth * 0.5) + 'px',
    },
    methods: {
        changx: function (x) {
            for (i = 1; i <= 9; i++) {
                var b = document.getElementById("b" + i);
                var d = document.getElementById("d" + i);
                if (x == i) {
                    d.style.display = 'block'
                    b.style.backgroundColor = 'rgb(42, 75, 182)'
                    b.style.color = 'rgb(255,255,255)'
                }
                else {
                    d.style.display = 'none'
                    b.style.backgroundColor = 'rgb(230, 230, 230)'
                    b.style.color = 'rgb(42, 75, 182)'
                }
            }
            var d = document.getElementById("d" + 10);
            d.style.display = 'none'
        },
        changx2: function (x) {
            for (i = 1; i <= 10; i++) {
                var d = document.getElementById("d" + i);
                if (i == 10) {
                    d.style.display = 'block'
                }
                else {
                    d.style.display = 'none'
                }
            }
        }
    }
});
