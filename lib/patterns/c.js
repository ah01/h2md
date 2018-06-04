
exports.applyToGenerator = function (g) {
    
    g.addCodePattern(/\(/, (t) => {
        t.header = "🔹 " + t.code;
    });
    
    g.addCodePattern(/^[^\(]*$/, (t) => {
        t.header = "🔧 " + t.code;
    });
    
};
