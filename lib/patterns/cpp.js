
exports.applyToGenerator = function (g) {

    var className = "";

    // detect new class
    g.addCodePattern(/^class/, (t) => {
        className = t.code.substr(6);
        t.header = className;
    });
    
    g.addCodePattern(/\(/, (t) => {
        if (t.code.contains(className)) {
            t.header = "💡 " + t.code;
            return;
        }

        t.header = "Ⓜ️ " + t.code;
    });
    
    g.addCodePattern(/^typedef/, (t) => {
    });
    
    g.addCodePattern(/^[^\(]*$/, (t) => {
        t.header = "🔧 " + t.code;
    });
    
};
