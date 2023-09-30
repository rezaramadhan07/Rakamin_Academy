exports.luasPersegi = function(sisi1, sisi2) {
    return sisi1 * sisi2;
};

exports.kelilingPersegi = function(sisi1, sisi2, sisi3, sisi4) {
    return sisi1 + sisi2 + sisi3 + sisi4;
};

exports.luasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
};

exports.kelilingPersegiPanjang = function(panjang, lebar,) {
    return 2 * (panjang + lebar);
};