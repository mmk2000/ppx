var lottery = {


    init: function (type, issueTop) {
        var basicFillAll = "http://chart.lottery.gov.cn//pl3BasicZongHe.do?typ=1&issueTop=30";
        var params = {
            typ: type,
            issueTop: issueTop
        }

        $.ajax({
            url: basicFillAll,
            type: "POST",
            dataType: "json",
            data: params,
            success: function (data) {
                document.write(data);
            }
        })


    },
    pl3GetResult: function () {
        var pl312 = "http://f.apiplus.net/pl3-12.json";
        $.ajax({
            url: pl312,
            type: "POST",
            dataType: "json",
            data: "",
            success: function (data) {
                document.write(data);
            }
        })
    },

    algorithm: {
        get1Random: function () {
            return Math.round(100 * Math.round);
        },
        noSSWRToFixed2: function (x) {
            return Math.floor(x * 100) / 100
        },
        noSSWRToFixed7: function (x) {
            return Math.floor(x * 10000000) / 10000000
        },
        /**
         * 保留7位小数
         * @param x
         * @returns {number}
         */
        toFixed7: function (x) {
            return parseInt((x) * 1000000) / 1000000;
        }


    },
    sqrt: function (x) {
        return Math.sqrt(x);
    },

    compute1: function (x) {
        return x / 314
    },
    compute2: function (x) {
        return x * 0.618
    },
    compute3: function (x) {
        return x * 3.14
    },


    // parseFloat((num1 + num2).toFixed(2))

};
// module.export = lottery;

