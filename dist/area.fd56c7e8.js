// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({17:[function(require,module,exports) {
window._area = [{ "code": "110000", "p_code": "100000", "name": "北京市", "type": "0" }, {
  "code": "110100",
  "p_code": "110000",
  "name": "北京市",
  "type": "1"
}, { "code": "110101", "p_code": "110100", "name": "东城区", "type": "2" }, {
  "code": "110102",
  "p_code": "110100",
  "name": "西城区",
  "type": "2"
}, { "code": "110103", "p_code": "110100", "name": "崇文区", "type": "2" }, {
  "code": "110104",
  "p_code": "110100",
  "name": "宣武区",
  "type": "2"
}, { "code": "110105", "p_code": "110100", "name": "朝阳区", "type": "2" }, {
  "code": "110106",
  "p_code": "110100",
  "name": "丰台区",
  "type": "2"
}, { "code": "110107", "p_code": "110100", "name": "石景山区", "type": "2" }, {
  "code": "110108",
  "p_code": "110100",
  "name": "海淀区",
  "type": "2"
}, { "code": "110109", "p_code": "110100", "name": "门头沟区", "type": "2" }, {
  "code": "110111",
  "p_code": "110100",
  "name": "房山区",
  "type": "2"
}, { "code": "110112", "p_code": "110100", "name": "通州区", "type": "2" }, {
  "code": "110113",
  "p_code": "110100",
  "name": "顺义区",
  "type": "2"
}, { "code": "110114", "p_code": "110100", "name": "昌平区", "type": "2" }, {
  "code": "110115",
  "p_code": "110100",
  "name": "大兴区",
  "type": "2"
}, { "code": "110116", "p_code": "110100", "name": "怀柔区", "type": "2" }, {
  "code": "110117",
  "p_code": "110100",
  "name": "平谷区",
  "type": "2"
}, { "code": "110228", "p_code": "110200", "name": "密云县", "type": "2" }, {
  "code": "110229",
  "p_code": "110200",
  "name": "延庆县",
  "type": "2"
}, { "code": "120000", "p_code": "100000", "name": "天津市", "type": "0" }, {
  "code": "120100",
  "p_code": "120000",
  "name": "天津市",
  "type": "1"
}, { "code": "120101", "p_code": "120100", "name": "和平区", "type": "2" }, {
  "code": "120102",
  "p_code": "120100",
  "name": "河东区",
  "type": "2"
}, { "code": "120103", "p_code": "120100", "name": "河西区", "type": "2" }, {
  "code": "120104",
  "p_code": "120100",
  "name": "南开区",
  "type": "2"
}, { "code": "120105", "p_code": "120100", "name": "河北区", "type": "2" }, {
  "code": "120106",
  "p_code": "120100",
  "name": "红桥区",
  "type": "2"
}, { "code": "120107", "p_code": "120100", "name": "塘沽区", "type": "2" }, {
  "code": "120108",
  "p_code": "120100",
  "name": "汉沽区",
  "type": "2"
}, { "code": "120109", "p_code": "120100", "name": "大港区", "type": "2" }, {
  "code": "120110",
  "p_code": "120100",
  "name": "东丽区",
  "type": "2"
}, { "code": "120111", "p_code": "120100", "name": "西青区", "type": "2" }, {
  "code": "120112",
  "p_code": "120100",
  "name": "津南区",
  "type": "2"
}, { "code": "120113", "p_code": "120100", "name": "北辰区", "type": "2" }, {
  "code": "120114",
  "p_code": "120100",
  "name": "武清区",
  "type": "2"
}, { "code": "120115", "p_code": "120100", "name": "宝坻区", "type": "2" }, {
  "code": "120221",
  "p_code": "120200",
  "name": "宁河县",
  "type": "2"
}, { "code": "120223", "p_code": "120200", "name": "静海县", "type": "2" }, {
  "code": "120225",
  "p_code": "120200",
  "name": "蓟　县",
  "type": "2"
}, { "code": "130000", "p_code": "100000", "name": "河北省", "type": "0" }, {
  "code": "130100",
  "p_code": "130000",
  "name": "石家庄市",
  "type": "1"
}, { "code": "130101", "p_code": "130100", "name": "市辖区", "type": "2" }, {
  "code": "130102",
  "p_code": "130100",
  "name": "长安区",
  "type": "2"
}, { "code": "130103", "p_code": "130100", "name": "桥东区", "type": "2" }, {
  "code": "130104",
  "p_code": "130100",
  "name": "桥西区",
  "type": "2"
}, { "code": "130105", "p_code": "130100", "name": "新华区", "type": "2" }, {
  "code": "130107",
  "p_code": "130100",
  "name": "井陉矿区",
  "type": "2"
}, { "code": "130108", "p_code": "130100", "name": "裕华区", "type": "2" }, {
  "code": "130121",
  "p_code": "130100",
  "name": "井陉县",
  "type": "2"
}, { "code": "130123", "p_code": "130100", "name": "正定县", "type": "2" }, {
  "code": "130124",
  "p_code": "130100",
  "name": "栾城县",
  "type": "2"
}, { "code": "130125", "p_code": "130100", "name": "行唐县", "type": "2" }, {
  "code": "130126",
  "p_code": "130100",
  "name": "灵寿县",
  "type": "2"
}, { "code": "130127", "p_code": "130100", "name": "高邑县", "type": "2" }, {
  "code": "130128",
  "p_code": "130100",
  "name": "深泽县",
  "type": "2"
}, { "code": "130129", "p_code": "130100", "name": "赞皇县", "type": "2" }, {
  "code": "130130",
  "p_code": "130100",
  "name": "无极县",
  "type": "2"
}, { "code": "130131", "p_code": "130100", "name": "平山县", "type": "2" }, {
  "code": "130132",
  "p_code": "130100",
  "name": "元氏县",
  "type": "2"
}, { "code": "130133", "p_code": "130100", "name": "赵　县", "type": "2" }, {
  "code": "130181",
  "p_code": "130100",
  "name": "辛集市",
  "type": "2"
}, { "code": "130182", "p_code": "130100", "name": "藁城市", "type": "2" }, {
  "code": "130183",
  "p_code": "130100",
  "name": "晋州市",
  "type": "2"
}, { "code": "130184", "p_code": "130100", "name": "新乐市", "type": "2" }, {
  "code": "130185",
  "p_code": "130100",
  "name": "鹿泉市",
  "type": "2"
}, { "code": "130200", "p_code": "130000", "name": "唐山市", "type": "1" }, {
  "code": "130201",
  "p_code": "130200",
  "name": "市辖区",
  "type": "2"
}, { "code": "130202", "p_code": "130200", "name": "路南区", "type": "2" }, {
  "code": "130203",
  "p_code": "130200",
  "name": "路北区",
  "type": "2"
}, { "code": "130204", "p_code": "130200", "name": "古冶区", "type": "2" }, {
  "code": "130205",
  "p_code": "130200",
  "name": "开平区",
  "type": "2"
}, { "code": "130207", "p_code": "130200", "name": "丰南区", "type": "2" }, {
  "code": "130208",
  "p_code": "130200",
  "name": "丰润区",
  "type": "2"
}, { "code": "130223", "p_code": "130200", "name": "滦　县", "type": "2" }, {
  "code": "130224",
  "p_code": "130200",
  "name": "滦南县",
  "type": "2"
}, { "code": "130225", "p_code": "130200", "name": "乐亭县", "type": "2" }, {
  "code": "130227",
  "p_code": "130200",
  "name": "迁西县",
  "type": "2"
}, { "code": "130229", "p_code": "130200", "name": "玉田县", "type": "2" }, {
  "code": "130230",
  "p_code": "130200",
  "name": "唐海县",
  "type": "2"
}, { "code": "130281", "p_code": "130200", "name": "遵化市", "type": "2" }, {
  "code": "130283",
  "p_code": "130200",
  "name": "迁安市",
  "type": "2"
}, { "code": "130300", "p_code": "130000", "name": "秦皇岛市", "type": "1" }, {
  "code": "130301",
  "p_code": "130300",
  "name": "市辖区",
  "type": "2"
}, { "code": "130302", "p_code": "130300", "name": "海港区", "type": "2" }, {
  "code": "130303",
  "p_code": "130300",
  "name": "山海关区",
  "type": "2"
}, { "code": "130304", "p_code": "130300", "name": "北戴河区", "type": "2" }, {
  "code": "130321",
  "p_code": "130300",
  "name": "青龙满族自治县",
  "type": "2"
}, { "code": "130322", "p_code": "130300", "name": "昌黎县", "type": "2" }, {
  "code": "130323",
  "p_code": "130300",
  "name": "抚宁县",
  "type": "2"
}, { "code": "130324", "p_code": "130300", "name": "卢龙县", "type": "2" }, {
  "code": "130400",
  "p_code": "130000",
  "name": "邯郸市",
  "type": "1"
}, { "code": "130401", "p_code": "130400", "name": "市辖区", "type": "2" }, {
  "code": "130402",
  "p_code": "130400",
  "name": "邯山区",
  "type": "2"
}, { "code": "130403", "p_code": "130400", "name": "丛台区", "type": "2" }, {
  "code": "130404",
  "p_code": "130400",
  "name": "复兴区",
  "type": "2"
}, { "code": "130406", "p_code": "130400", "name": "峰峰矿区", "type": "2" }, {
  "code": "130421",
  "p_code": "130400",
  "name": "邯郸县",
  "type": "2"
}, { "code": "130423", "p_code": "130400", "name": "临漳县", "type": "2" }, {
  "code": "130424",
  "p_code": "130400",
  "name": "成安县",
  "type": "2"
}, { "code": "130425", "p_code": "130400", "name": "大名县", "type": "2" }, {
  "code": "130426",
  "p_code": "130400",
  "name": "涉　县",
  "type": "2"
}, { "code": "130427", "p_code": "130400", "name": "磁　县", "type": "2" }, {
  "code": "130428",
  "p_code": "130400",
  "name": "肥乡县",
  "type": "2"
}, { "code": "130429", "p_code": "130400", "name": "永年县", "type": "2" }, {
  "code": "130430",
  "p_code": "130400",
  "name": "邱　县",
  "type": "2"
}, { "code": "130431", "p_code": "130400", "name": "鸡泽县", "type": "2" }, {
  "code": "130432",
  "p_code": "130400",
  "name": "广平县",
  "type": "2"
}, { "code": "130433", "p_code": "130400", "name": "馆陶县", "type": "2" }, {
  "code": "130434",
  "p_code": "130400",
  "name": "魏　县",
  "type": "2"
}, { "code": "130435", "p_code": "130400", "name": "曲周县", "type": "2" }, {
  "code": "130481",
  "p_code": "130400",
  "name": "武安市",
  "type": "2"
}, { "code": "130500", "p_code": "130000", "name": "邢台市", "type": "1" }, {
  "code": "130501",
  "p_code": "130500",
  "name": "市辖区",
  "type": "2"
}, { "code": "130502", "p_code": "130500", "name": "桥东区", "type": "2" }, {
  "code": "130503",
  "p_code": "130500",
  "name": "桥西区",
  "type": "2"
}, { "code": "130521", "p_code": "130500", "name": "邢台县", "type": "2" }, {
  "code": "130522",
  "p_code": "130500",
  "name": "临城县",
  "type": "2"
}, { "code": "130523", "p_code": "130500", "name": "内丘县", "type": "2" }, {
  "code": "130524",
  "p_code": "130500",
  "name": "柏乡县",
  "type": "2"
}, { "code": "130525", "p_code": "130500", "name": "隆尧县", "type": "2" }, {
  "code": "130526",
  "p_code": "130500",
  "name": "任　县",
  "type": "2"
}, { "code": "130527", "p_code": "130500", "name": "南和县", "type": "2" }, {
  "code": "130528",
  "p_code": "130500",
  "name": "宁晋县",
  "type": "2"
}, { "code": "130529", "p_code": "130500", "name": "巨鹿县", "type": "2" }, {
  "code": "130530",
  "p_code": "130500",
  "name": "新河县",
  "type": "2"
}, { "code": "130531", "p_code": "130500", "name": "广宗县", "type": "2" }, {
  "code": "130532",
  "p_code": "130500",
  "name": "平乡县",
  "type": "2"
}, { "code": "130533", "p_code": "130500", "name": "威　县", "type": "2" }, {
  "code": "130534",
  "p_code": "130500",
  "name": "清河县",
  "type": "2"
}, { "code": "130535", "p_code": "130500", "name": "临西县", "type": "2" }, {
  "code": "130581",
  "p_code": "130500",
  "name": "南宫市",
  "type": "2"
}, { "code": "130582", "p_code": "130500", "name": "沙河市", "type": "2" }, {
  "code": "130600",
  "p_code": "130000",
  "name": "保定市",
  "type": "1"
}, { "code": "130601", "p_code": "130600", "name": "市辖区", "type": "2" }, {
  "code": "130602",
  "p_code": "130600",
  "name": "新市区",
  "type": "2"
}, { "code": "130603", "p_code": "130600", "name": "北市区", "type": "2" }, {
  "code": "130604",
  "p_code": "130600",
  "name": "南市区",
  "type": "2"
}, { "code": "130621", "p_code": "130600", "name": "满城县", "type": "2" }, {
  "code": "130622",
  "p_code": "130600",
  "name": "清苑县",
  "type": "2"
}, { "code": "130623", "p_code": "130600", "name": "涞水县", "type": "2" }, {
  "code": "130624",
  "p_code": "130600",
  "name": "阜平县",
  "type": "2"
}, { "code": "130625", "p_code": "130600", "name": "徐水县", "type": "2" }, {
  "code": "130626",
  "p_code": "130600",
  "name": "定兴县",
  "type": "2"
}, { "code": "130627", "p_code": "130600", "name": "唐　县", "type": "2" }, {
  "code": "130628",
  "p_code": "130600",
  "name": "高阳县",
  "type": "2"
}, { "code": "130629", "p_code": "130600", "name": "容城县", "type": "2" }, {
  "code": "130630",
  "p_code": "130600",
  "name": "涞源县",
  "type": "2"
}, { "code": "130631", "p_code": "130600", "name": "望都县", "type": "2" }, {
  "code": "130632",
  "p_code": "130600",
  "name": "安新县",
  "type": "2"
}, { "code": "130633", "p_code": "130600", "name": "易　县", "type": "2" }, {
  "code": "130634",
  "p_code": "130600",
  "name": "曲阳县",
  "type": "2"
}, { "code": "130635", "p_code": "130600", "name": "蠡　县", "type": "2" }, {
  "code": "130636",
  "p_code": "130600",
  "name": "顺平县",
  "type": "2"
}, { "code": "130637", "p_code": "130600", "name": "博野县", "type": "2" }, {
  "code": "130638",
  "p_code": "130600",
  "name": "雄　县",
  "type": "2"
}, { "code": "130681", "p_code": "130600", "name": "涿州市", "type": "2" }, {
  "code": "130682",
  "p_code": "130600",
  "name": "定州市",
  "type": "2"
}, { "code": "130683", "p_code": "130600", "name": "安国市", "type": "2" }, {
  "code": "130684",
  "p_code": "130600",
  "name": "高碑店市",
  "type": "2"
}, { "code": "130700", "p_code": "130000", "name": "张家口市", "type": "1" }, {
  "code": "130701",
  "p_code": "130700",
  "name": "市辖区",
  "type": "2"
}, { "code": "130702", "p_code": "130700", "name": "桥东区", "type": "2" }, {
  "code": "130703",
  "p_code": "130700",
  "name": "桥西区",
  "type": "2"
}, { "code": "130705", "p_code": "130700", "name": "宣化区", "type": "2" }, {
  "code": "130706",
  "p_code": "130700",
  "name": "下花园区",
  "type": "2"
}, { "code": "130721", "p_code": "130700", "name": "宣化县", "type": "2" }, {
  "code": "130722",
  "p_code": "130700",
  "name": "张北县",
  "type": "2"
}, { "code": "130723", "p_code": "130700", "name": "康保县", "type": "2" }, {
  "code": "130724",
  "p_code": "130700",
  "name": "沽源县",
  "type": "2"
}, { "code": "130725", "p_code": "130700", "name": "尚义县", "type": "2" }, {
  "code": "130726",
  "p_code": "130700",
  "name": "蔚　县",
  "type": "2"
}, { "code": "130727", "p_code": "130700", "name": "阳原县", "type": "2" }, {
  "code": "130728",
  "p_code": "130700",
  "name": "怀安县",
  "type": "2"
}, { "code": "130729", "p_code": "130700", "name": "万全县", "type": "2" }, {
  "code": "130730",
  "p_code": "130700",
  "name": "怀来县",
  "type": "2"
}, { "code": "130731", "p_code": "130700", "name": "涿鹿县", "type": "2" }, {
  "code": "130732",
  "p_code": "130700",
  "name": "赤城县",
  "type": "2"
}, { "code": "130733", "p_code": "130700", "name": "崇礼县", "type": "2" }, {
  "code": "130800",
  "p_code": "130000",
  "name": "承德市",
  "type": "1"
}, { "code": "130801", "p_code": "130800", "name": "市辖区", "type": "2" }, {
  "code": "130802",
  "p_code": "130800",
  "name": "双桥区",
  "type": "2"
}, { "code": "130803", "p_code": "130800", "name": "双滦区", "type": "2" }, {
  "code": "130804",
  "p_code": "130800",
  "name": "鹰手营子矿区",
  "type": "2"
}, { "code": "130821", "p_code": "130800", "name": "承德县", "type": "2" }, {
  "code": "130822",
  "p_code": "130800",
  "name": "兴隆县",
  "type": "2"
}, { "code": "130823", "p_code": "130800", "name": "平泉县", "type": "2" }, {
  "code": "130824",
  "p_code": "130800",
  "name": "滦平县",
  "type": "2"
}, { "code": "130825", "p_code": "130800", "name": "隆化县", "type": "2" }, {
  "code": "130826",
  "p_code": "130800",
  "name": "丰宁满族自治县",
  "type": "2"
}, { "code": "130827", "p_code": "130800", "name": "宽城满族自治县", "type": "2" }, {
  "code": "130828",
  "p_code": "130800",
  "name": "围场满族蒙古族自治县",
  "type": "2"
}, { "code": "130900", "p_code": "130000", "name": "沧州市", "type": "1" }, {
  "code": "130901",
  "p_code": "130900",
  "name": "市辖区",
  "type": "2"
}, { "code": "130902", "p_code": "130900", "name": "新华区", "type": "2" }, {
  "code": "130903",
  "p_code": "130900",
  "name": "运河区",
  "type": "2"
}, { "code": "130921", "p_code": "130900", "name": "沧　县", "type": "2" }, {
  "code": "130922",
  "p_code": "130900",
  "name": "青　县",
  "type": "2"
}, { "code": "130923", "p_code": "130900", "name": "东光县", "type": "2" }, {
  "code": "130924",
  "p_code": "130900",
  "name": "海兴县",
  "type": "2"
}, { "code": "130925", "p_code": "130900", "name": "盐山县", "type": "2" }, {
  "code": "130926",
  "p_code": "130900",
  "name": "肃宁县",
  "type": "2"
}, { "code": "130927", "p_code": "130900", "name": "南皮县", "type": "2" }, {
  "code": "130928",
  "p_code": "130900",
  "name": "吴桥县",
  "type": "2"
}, { "code": "130929", "p_code": "130900", "name": "献　县", "type": "2" }, {
  "code": "130930",
  "p_code": "130900",
  "name": "孟村回族自治县",
  "type": "2"
}, { "code": "130981", "p_code": "130900", "name": "泊头市", "type": "2" }, {
  "code": "130982",
  "p_code": "130900",
  "name": "任丘市",
  "type": "2"
}, { "code": "130983", "p_code": "130900", "name": "黄骅市", "type": "2" }, {
  "code": "130984",
  "p_code": "130900",
  "name": "河间市",
  "type": "2"
}, { "code": "131000", "p_code": "130000", "name": "廊坊市", "type": "1" }, {
  "code": "131001",
  "p_code": "131000",
  "name": "市辖区",
  "type": "2"
}, { "code": "131002", "p_code": "131000", "name": "安次区", "type": "2" }, {
  "code": "131003",
  "p_code": "131000",
  "name": "广阳区",
  "type": "2"
}, { "code": "131022", "p_code": "131000", "name": "固安县", "type": "2" }, {
  "code": "131023",
  "p_code": "131000",
  "name": "永清县",
  "type": "2"
}, { "code": "131024", "p_code": "131000", "name": "香河县", "type": "2" }, {
  "code": "131025",
  "p_code": "131000",
  "name": "大城县",
  "type": "2"
}, { "code": "131026", "p_code": "131000", "name": "文安县", "type": "2" }, {
  "code": "131028",
  "p_code": "131000",
  "name": "大厂回族自治县",
  "type": "2"
}, { "code": "131081", "p_code": "131000", "name": "霸州市", "type": "2" }, {
  "code": "131082",
  "p_code": "131000",
  "name": "三河市",
  "type": "2"
}, { "code": "131100", "p_code": "130000", "name": "衡水市", "type": "1" }, {
  "code": "131101",
  "p_code": "131100",
  "name": "市辖区",
  "type": "2"
}, { "code": "131102", "p_code": "131100", "name": "桃城区", "type": "2" }, {
  "code": "131121",
  "p_code": "131100",
  "name": "枣强县",
  "type": "2"
}, { "code": "131122", "p_code": "131100", "name": "武邑县", "type": "2" }, {
  "code": "131123",
  "p_code": "131100",
  "name": "武强县",
  "type": "2"
}, { "code": "131124", "p_code": "131100", "name": "饶阳县", "type": "2" }, {
  "code": "131125",
  "p_code": "131100",
  "name": "安平县",
  "type": "2"
}, { "code": "131126", "p_code": "131100", "name": "故城县", "type": "2" }, {
  "code": "131127",
  "p_code": "131100",
  "name": "景　县",
  "type": "2"
}, { "code": "131128", "p_code": "131100", "name": "阜城县", "type": "2" }, {
  "code": "131181",
  "p_code": "131100",
  "name": "冀州市",
  "type": "2"
}, { "code": "131182", "p_code": "131100", "name": "深州市", "type": "2" }, {
  "code": "140000",
  "p_code": "100000",
  "name": "山西省",
  "type": "0"
}, { "code": "140100", "p_code": "140000", "name": "太原市", "type": "1" }, {
  "code": "140101",
  "p_code": "140100",
  "name": "市辖区",
  "type": "2"
}, { "code": "140105", "p_code": "140100", "name": "小店区", "type": "2" }, {
  "code": "140106",
  "p_code": "140100",
  "name": "迎泽区",
  "type": "2"
}, { "code": "140107", "p_code": "140100", "name": "杏花岭区", "type": "2" }, {
  "code": "140108",
  "p_code": "140100",
  "name": "尖草坪区",
  "type": "2"
}, { "code": "140109", "p_code": "140100", "name": "万柏林区", "type": "2" }, {
  "code": "140110",
  "p_code": "140100",
  "name": "晋源区",
  "type": "2"
}, { "code": "140121", "p_code": "140100", "name": "清徐县", "type": "2" }, {
  "code": "140122",
  "p_code": "140100",
  "name": "阳曲县",
  "type": "2"
}, { "code": "140123", "p_code": "140100", "name": "娄烦县", "type": "2" }, {
  "code": "140181",
  "p_code": "140100",
  "name": "古交市",
  "type": "2"
}, { "code": "140200", "p_code": "140000", "name": "大同市", "type": "1" }, {
  "code": "140201",
  "p_code": "140200",
  "name": "市辖区",
  "type": "2"
}, { "code": "140202", "p_code": "140200", "name": "城　区", "type": "2" }, {
  "code": "140203",
  "p_code": "140200",
  "name": "矿　区",
  "type": "2"
}, { "code": "140211", "p_code": "140200", "name": "南郊区", "type": "2" }, {
  "code": "140212",
  "p_code": "140200",
  "name": "新荣区",
  "type": "2"
}, { "code": "140221", "p_code": "140200", "name": "阳高县", "type": "2" }, {
  "code": "140222",
  "p_code": "140200",
  "name": "天镇县",
  "type": "2"
}, { "code": "140223", "p_code": "140200", "name": "广灵县", "type": "2" }, {
  "code": "140224",
  "p_code": "140200",
  "name": "灵丘县",
  "type": "2"
}, { "code": "140225", "p_code": "140200", "name": "浑源县", "type": "2" }, {
  "code": "140226",
  "p_code": "140200",
  "name": "左云县",
  "type": "2"
}, { "code": "140227", "p_code": "140200", "name": "大同县", "type": "2" }, {
  "code": "140300",
  "p_code": "140000",
  "name": "阳泉市",
  "type": "1"
}, { "code": "140301", "p_code": "140300", "name": "市辖区", "type": "2" }, {
  "code": "140302",
  "p_code": "140300",
  "name": "城　区",
  "type": "2"
}, { "code": "140303", "p_code": "140300", "name": "矿　区", "type": "2" }, {
  "code": "140311",
  "p_code": "140300",
  "name": "郊　区",
  "type": "2"
}, { "code": "140321", "p_code": "140300", "name": "平定县", "type": "2" }, {
  "code": "140322",
  "p_code": "140300",
  "name": "盂　县",
  "type": "2"
}, { "code": "140400", "p_code": "140000", "name": "长治市", "type": "1" }, {
  "code": "140401",
  "p_code": "140400",
  "name": "市辖区",
  "type": "2"
}, { "code": "140402", "p_code": "140400", "name": "城　区", "type": "2" }, {
  "code": "140411",
  "p_code": "140400",
  "name": "郊　区",
  "type": "2"
}, { "code": "140421", "p_code": "140400", "name": "长治县", "type": "2" }, {
  "code": "140423",
  "p_code": "140400",
  "name": "襄垣县",
  "type": "2"
}, { "code": "140424", "p_code": "140400", "name": "屯留县", "type": "2" }, {
  "code": "140425",
  "p_code": "140400",
  "name": "平顺县",
  "type": "2"
}, { "code": "140426", "p_code": "140400", "name": "黎城县", "type": "2" }, {
  "code": "140427",
  "p_code": "140400",
  "name": "壶关县",
  "type": "2"
}, { "code": "140428", "p_code": "140400", "name": "长子县", "type": "2" }, {
  "code": "140429",
  "p_code": "140400",
  "name": "武乡县",
  "type": "2"
}, { "code": "140430", "p_code": "140400", "name": "沁　县", "type": "2" }, {
  "code": "140431",
  "p_code": "140400",
  "name": "沁源县",
  "type": "2"
}, { "code": "140481", "p_code": "140400", "name": "潞城市", "type": "2" }, {
  "code": "140500",
  "p_code": "140000",
  "name": "晋城市",
  "type": "1"
}, { "code": "140501", "p_code": "140500", "name": "市辖区", "type": "2" }, {
  "code": "140502",
  "p_code": "140500",
  "name": "城　区",
  "type": "2"
}, { "code": "140521", "p_code": "140500", "name": "沁水县", "type": "2" }, {
  "code": "140522",
  "p_code": "140500",
  "name": "阳城县",
  "type": "2"
}, { "code": "140524", "p_code": "140500", "name": "陵川县", "type": "2" }, {
  "code": "140525",
  "p_code": "140500",
  "name": "泽州县",
  "type": "2"
}, { "code": "140581", "p_code": "140500", "name": "高平市", "type": "2" }, {
  "code": "140600",
  "p_code": "140000",
  "name": "朔州市",
  "type": "1"
}, { "code": "140601", "p_code": "140600", "name": "市辖区", "type": "2" }, {
  "code": "140602",
  "p_code": "140600",
  "name": "朔城区",
  "type": "2"
}, { "code": "140603", "p_code": "140600", "name": "平鲁区", "type": "2" }, {
  "code": "140621",
  "p_code": "140600",
  "name": "山阴县",
  "type": "2"
}, { "code": "140622", "p_code": "140600", "name": "应　县", "type": "2" }, {
  "code": "140623",
  "p_code": "140600",
  "name": "右玉县",
  "type": "2"
}, { "code": "140624", "p_code": "140600", "name": "怀仁县", "type": "2" }, {
  "code": "140700",
  "p_code": "140000",
  "name": "晋中市",
  "type": "1"
}, { "code": "140701", "p_code": "140700", "name": "市辖区", "type": "2" }, {
  "code": "140702",
  "p_code": "140700",
  "name": "榆次区",
  "type": "2"
}, { "code": "140721", "p_code": "140700", "name": "榆社县", "type": "2" }, {
  "code": "140722",
  "p_code": "140700",
  "name": "左权县",
  "type": "2"
}, { "code": "140723", "p_code": "140700", "name": "和顺县", "type": "2" }, {
  "code": "140724",
  "p_code": "140700",
  "name": "昔阳县",
  "type": "2"
}, { "code": "140725", "p_code": "140700", "name": "寿阳县", "type": "2" }, {
  "code": "140726",
  "p_code": "140700",
  "name": "太谷县",
  "type": "2"
}, { "code": "140727", "p_code": "140700", "name": "祁　县", "type": "2" }, {
  "code": "140728",
  "p_code": "140700",
  "name": "平遥县",
  "type": "2"
}, { "code": "140729", "p_code": "140700", "name": "灵石县", "type": "2" }, {
  "code": "140781",
  "p_code": "140700",
  "name": "介休市",
  "type": "2"
}, { "code": "140800", "p_code": "140000", "name": "运城市", "type": "1" }, {
  "code": "140801",
  "p_code": "140800",
  "name": "市辖区",
  "type": "2"
}, { "code": "140802", "p_code": "140800", "name": "盐湖区", "type": "2" }, {
  "code": "140821",
  "p_code": "140800",
  "name": "临猗县",
  "type": "2"
}, { "code": "140822", "p_code": "140800", "name": "万荣县", "type": "2" }, {
  "code": "140823",
  "p_code": "140800",
  "name": "闻喜县",
  "type": "2"
}, { "code": "140824", "p_code": "140800", "name": "稷山县", "type": "2" }, {
  "code": "140825",
  "p_code": "140800",
  "name": "新绛县",
  "type": "2"
}, { "code": "140826", "p_code": "140800", "name": "绛　县", "type": "2" }, {
  "code": "140827",
  "p_code": "140800",
  "name": "垣曲县",
  "type": "2"
}, { "code": "140828", "p_code": "140800", "name": "夏　县", "type": "2" }, {
  "code": "140829",
  "p_code": "140800",
  "name": "平陆县",
  "type": "2"
}, { "code": "140830", "p_code": "140800", "name": "芮城县", "type": "2" }, {
  "code": "140881",
  "p_code": "140800",
  "name": "永济市",
  "type": "2"
}, { "code": "140882", "p_code": "140800", "name": "河津市", "type": "2" }, {
  "code": "140900",
  "p_code": "140000",
  "name": "忻州市",
  "type": "1"
}, { "code": "140901", "p_code": "140900", "name": "市辖区", "type": "2" }, {
  "code": "140902",
  "p_code": "140900",
  "name": "忻府区",
  "type": "2"
}, { "code": "140921", "p_code": "140900", "name": "定襄县", "type": "2" }, {
  "code": "140922",
  "p_code": "140900",
  "name": "五台县",
  "type": "2"
}, { "code": "140923", "p_code": "140900", "name": "代　县", "type": "2" }, {
  "code": "140924",
  "p_code": "140900",
  "name": "繁峙县",
  "type": "2"
}, { "code": "140925", "p_code": "140900", "name": "宁武县", "type": "2" }, {
  "code": "140926",
  "p_code": "140900",
  "name": "静乐县",
  "type": "2"
}, { "code": "140927", "p_code": "140900", "name": "神池县", "type": "2" }, {
  "code": "140928",
  "p_code": "140900",
  "name": "五寨县",
  "type": "2"
}, { "code": "140929", "p_code": "140900", "name": "岢岚县", "type": "2" }, {
  "code": "140930",
  "p_code": "140900",
  "name": "河曲县",
  "type": "2"
}, { "code": "140931", "p_code": "140900", "name": "保德县", "type": "2" }, {
  "code": "140932",
  "p_code": "140900",
  "name": "偏关县",
  "type": "2"
}, { "code": "140981", "p_code": "140900", "name": "原平市", "type": "2" }, {
  "code": "141000",
  "p_code": "140000",
  "name": "临汾市",
  "type": "1"
}, { "code": "141001", "p_code": "141000", "name": "市辖区", "type": "2" }, {
  "code": "141002",
  "p_code": "141000",
  "name": "尧都区",
  "type": "2"
}, { "code": "141021", "p_code": "141000", "name": "曲沃县", "type": "2" }, {
  "code": "141022",
  "p_code": "141000",
  "name": "翼城县",
  "type": "2"
}, { "code": "141023", "p_code": "141000", "name": "襄汾县", "type": "2" }, {
  "code": "141024",
  "p_code": "141000",
  "name": "洪洞县",
  "type": "2"
}, { "code": "141025", "p_code": "141000", "name": "古　县", "type": "2" }, {
  "code": "141026",
  "p_code": "141000",
  "name": "安泽县",
  "type": "2"
}, { "code": "141027", "p_code": "141000", "name": "浮山县", "type": "2" }, {
  "code": "141028",
  "p_code": "141000",
  "name": "吉　县",
  "type": "2"
}, { "code": "141029", "p_code": "141000", "name": "乡宁县", "type": "2" }, {
  "code": "141030",
  "p_code": "141000",
  "name": "大宁县",
  "type": "2"
}, { "code": "141031", "p_code": "141000", "name": "隰　县", "type": "2" }, {
  "code": "141032",
  "p_code": "141000",
  "name": "永和县",
  "type": "2"
}, { "code": "141033", "p_code": "141000", "name": "蒲　县", "type": "2" }, {
  "code": "141034",
  "p_code": "141000",
  "name": "汾西县",
  "type": "2"
}, { "code": "141081", "p_code": "141000", "name": "侯马市", "type": "2" }, {
  "code": "141082",
  "p_code": "141000",
  "name": "霍州市",
  "type": "2"
}, { "code": "141100", "p_code": "140000", "name": "吕梁市", "type": "1" }, {
  "code": "141101",
  "p_code": "141100",
  "name": "市辖区",
  "type": "2"
}, { "code": "141102", "p_code": "141100", "name": "离石区", "type": "2" }, {
  "code": "141121",
  "p_code": "141100",
  "name": "文水县",
  "type": "2"
}, { "code": "141122", "p_code": "141100", "name": "交城县", "type": "2" }, {
  "code": "141123",
  "p_code": "141100",
  "name": "兴　县",
  "type": "2"
}, { "code": "141124", "p_code": "141100", "name": "临　县", "type": "2" }, {
  "code": "141125",
  "p_code": "141100",
  "name": "柳林县",
  "type": "2"
}, { "code": "141126", "p_code": "141100", "name": "石楼县", "type": "2" }, {
  "code": "141127",
  "p_code": "141100",
  "name": "岚　县",
  "type": "2"
}, { "code": "141128", "p_code": "141100", "name": "方山县", "type": "2" }, {
  "code": "141129",
  "p_code": "141100",
  "name": "中阳县",
  "type": "2"
}, { "code": "141130", "p_code": "141100", "name": "交口县", "type": "2" }, {
  "code": "141181",
  "p_code": "141100",
  "name": "孝义市",
  "type": "2"
}, { "code": "141182", "p_code": "141100", "name": "汾阳市", "type": "2" }, {
  "code": "150000",
  "p_code": "100000",
  "name": "内蒙古自治区",
  "type": "0"
}, { "code": "150100", "p_code": "150000", "name": "呼和浩特市", "type": "1" }, {
  "code": "150101",
  "p_code": "150100",
  "name": "市辖区",
  "type": "2"
}, { "code": "150102", "p_code": "150100", "name": "新城区", "type": "2" }, {
  "code": "150103",
  "p_code": "150100",
  "name": "回民区",
  "type": "2"
}, { "code": "150104", "p_code": "150100", "name": "玉泉区", "type": "2" }, {
  "code": "150105",
  "p_code": "150100",
  "name": "赛罕区",
  "type": "2"
}, { "code": "150121", "p_code": "150100", "name": "土默特左旗", "type": "2" }, {
  "code": "150122",
  "p_code": "150100",
  "name": "托克托县",
  "type": "2"
}, { "code": "150123", "p_code": "150100", "name": "和林格尔县", "type": "2" }, {
  "code": "150124",
  "p_code": "150100",
  "name": "清水河县",
  "type": "2"
}, { "code": "150125", "p_code": "150100", "name": "武川县", "type": "2" }, {
  "code": "150200",
  "p_code": "150000",
  "name": "包头市",
  "type": "1"
}, { "code": "150201", "p_code": "150200", "name": "市辖区", "type": "2" }, {
  "code": "150202",
  "p_code": "150200",
  "name": "东河区",
  "type": "2"
}, { "code": "150203", "p_code": "150200", "name": "昆都仑区", "type": "2" }, {
  "code": "150204",
  "p_code": "150200",
  "name": "青山区",
  "type": "2"
}, { "code": "150205", "p_code": "150200", "name": "石拐区", "type": "2" }, {
  "code": "150206",
  "p_code": "150200",
  "name": "白云矿区",
  "type": "2"
}, { "code": "150207", "p_code": "150200", "name": "九原区", "type": "2" }, {
  "code": "150221",
  "p_code": "150200",
  "name": "土默特右旗",
  "type": "2"
}, { "code": "150222", "p_code": "150200", "name": "固阳县", "type": "2" }, {
  "code": "150223",
  "p_code": "150200",
  "name": "达尔罕茂明安联合旗",
  "type": "2"
}, { "code": "150300", "p_code": "150000", "name": "乌海市", "type": "1" }, {
  "code": "150301",
  "p_code": "150300",
  "name": "市辖区",
  "type": "2"
}, { "code": "150302", "p_code": "150300", "name": "海勃湾区", "type": "2" }, {
  "code": "150303",
  "p_code": "150300",
  "name": "海南区",
  "type": "2"
}, { "code": "150304", "p_code": "150300", "name": "乌达区", "type": "2" }, {
  "code": "150400",
  "p_code": "150000",
  "name": "赤峰市",
  "type": "1"
}, { "code": "150401", "p_code": "150400", "name": "市辖区", "type": "2" }, {
  "code": "150402",
  "p_code": "150400",
  "name": "红山区",
  "type": "2"
}, { "code": "150403", "p_code": "150400", "name": "元宝山区", "type": "2" }, {
  "code": "150404",
  "p_code": "150400",
  "name": "松山区",
  "type": "2"
}, { "code": "150421", "p_code": "150400", "name": "阿鲁科尔沁旗", "type": "2" }, {
  "code": "150422",
  "p_code": "150400",
  "name": "巴林左旗",
  "type": "2"
}, { "code": "150423", "p_code": "150400", "name": "巴林右旗", "type": "2" }, {
  "code": "150424",
  "p_code": "150400",
  "name": "林西县",
  "type": "2"
}, { "code": "150425", "p_code": "150400", "name": "克什克腾旗", "type": "2" }, {
  "code": "150426",
  "p_code": "150400",
  "name": "翁牛特旗",
  "type": "2"
}, { "code": "150428", "p_code": "150400", "name": "喀喇沁旗", "type": "2" }, {
  "code": "150429",
  "p_code": "150400",
  "name": "宁城县",
  "type": "2"
}, { "code": "150430", "p_code": "150400", "name": "敖汉旗", "type": "2" }, {
  "code": "150500",
  "p_code": "150000",
  "name": "通辽市",
  "type": "1"
}, { "code": "150501", "p_code": "150500", "name": "市辖区", "type": "2" }, {
  "code": "150502",
  "p_code": "150500",
  "name": "科尔沁区",
  "type": "2"
}, { "code": "150521", "p_code": "150500", "name": "科尔沁左翼中旗", "type": "2" }, {
  "code": "150522",
  "p_code": "150500",
  "name": "科尔沁左翼后旗",
  "type": "2"
}, { "code": "150523", "p_code": "150500", "name": "开鲁县", "type": "2" }, {
  "code": "150524",
  "p_code": "150500",
  "name": "库伦旗",
  "type": "2"
}, { "code": "150525", "p_code": "150500", "name": "奈曼旗", "type": "2" }, {
  "code": "150526",
  "p_code": "150500",
  "name": "扎鲁特旗",
  "type": "2"
}, { "code": "150581", "p_code": "150500", "name": "霍林郭勒市", "type": "2" }, {
  "code": "150600",
  "p_code": "150000",
  "name": "鄂尔多斯市",
  "type": "1"
}, { "code": "150602", "p_code": "150600", "name": "东胜区", "type": "2" }, {
  "code": "150621",
  "p_code": "150600",
  "name": "达拉特旗",
  "type": "2"
}, { "code": "150622", "p_code": "150600", "name": "准格尔旗", "type": "2" }, {
  "code": "150623",
  "p_code": "150600",
  "name": "鄂托克前旗",
  "type": "2"
}, { "code": "150624", "p_code": "150600", "name": "鄂托克旗", "type": "2" }, {
  "code": "150625",
  "p_code": "150600",
  "name": "杭锦旗",
  "type": "2"
}, { "code": "150626", "p_code": "150600", "name": "乌审旗", "type": "2" }, {
  "code": "150627",
  "p_code": "150600",
  "name": "伊金霍洛旗",
  "type": "2"
}, { "code": "150700", "p_code": "150000", "name": "呼伦贝尔市", "type": "1" }, {
  "code": "150701",
  "p_code": "150700",
  "name": "市辖区",
  "type": "2"
}, { "code": "150702", "p_code": "150700", "name": "海拉尔区", "type": "2" }, {
  "code": "150721",
  "p_code": "150700",
  "name": "阿荣旗",
  "type": "2"
}, { "code": "150722", "p_code": "150700", "name": "莫力达瓦达斡尔族自治旗", "type": "2" }, {
  "code": "150723",
  "p_code": "150700",
  "name": "鄂伦春自治旗",
  "type": "2"
}, { "code": "150724", "p_code": "150700", "name": "鄂温克族自治旗", "type": "2" }, {
  "code": "150725",
  "p_code": "150700",
  "name": "陈巴尔虎旗",
  "type": "2"
}, { "code": "150726", "p_code": "150700", "name": "新巴尔虎左旗", "type": "2" }, {
  "code": "150727",
  "p_code": "150700",
  "name": "新巴尔虎右旗",
  "type": "2"
}, { "code": "150781", "p_code": "150700", "name": "满洲里市", "type": "2" }, {
  "code": "150782",
  "p_code": "150700",
  "name": "牙克石市",
  "type": "2"
}, { "code": "150783", "p_code": "150700", "name": "扎兰屯市", "type": "2" }, {
  "code": "150784",
  "p_code": "150700",
  "name": "额尔古纳市",
  "type": "2"
}, { "code": "150785", "p_code": "150700", "name": "根河市", "type": "2" }, {
  "code": "150800",
  "p_code": "150000",
  "name": "巴彦淖尔市",
  "type": "1"
}, { "code": "150801", "p_code": "150800", "name": "市辖区", "type": "2" }, {
  "code": "150802",
  "p_code": "150800",
  "name": "临河区",
  "type": "2"
}, { "code": "150821", "p_code": "150800", "name": "五原县", "type": "2" }, {
  "code": "150822",
  "p_code": "150800",
  "name": "磴口县",
  "type": "2"
}, { "code": "150823", "p_code": "150800", "name": "乌拉特前旗", "type": "2" }, {
  "code": "150824",
  "p_code": "150800",
  "name": "乌拉特中旗",
  "type": "2"
}, { "code": "150825", "p_code": "150800", "name": "乌拉特后旗", "type": "2" }, {
  "code": "150826",
  "p_code": "150800",
  "name": "杭锦后旗",
  "type": "2"
}, { "code": "150900", "p_code": "150000", "name": "乌兰察布市", "type": "1" }, {
  "code": "150901",
  "p_code": "150900",
  "name": "市辖区",
  "type": "2"
}, { "code": "150902", "p_code": "150900", "name": "集宁区", "type": "2" }, {
  "code": "150921",
  "p_code": "150900",
  "name": "卓资县",
  "type": "2"
}, { "code": "150922", "p_code": "150900", "name": "化德县", "type": "2" }, {
  "code": "150923",
  "p_code": "150900",
  "name": "商都县",
  "type": "2"
}, { "code": "150924", "p_code": "150900", "name": "兴和县", "type": "2" }, {
  "code": "150925",
  "p_code": "150900",
  "name": "凉城县",
  "type": "2"
}, { "code": "150926", "p_code": "150900", "name": "察哈尔右翼前旗", "type": "2" }, {
  "code": "150927",
  "p_code": "150900",
  "name": "察哈尔右翼中旗",
  "type": "2"
}, { "code": "150928", "p_code": "150900", "name": "察哈尔右翼后旗", "type": "2" }, {
  "code": "150929",
  "p_code": "150900",
  "name": "四子王旗",
  "type": "2"
}, { "code": "150981", "p_code": "150900", "name": "丰镇市", "type": "2" }, {
  "code": "152200",
  "p_code": "150000",
  "name": "兴安盟",
  "type": "1"
}, { "code": "152201", "p_code": "152200", "name": "乌兰浩特市", "type": "2" }, {
  "code": "152202",
  "p_code": "152200",
  "name": "阿尔山市",
  "type": "2"
}, { "code": "152221", "p_code": "152200", "name": "科尔沁右翼前旗", "type": "2" }, {
  "code": "152222",
  "p_code": "152200",
  "name": "科尔沁右翼中旗",
  "type": "2"
}, { "code": "152223", "p_code": "152200", "name": "扎赉特旗", "type": "2" }, {
  "code": "152224",
  "p_code": "152200",
  "name": "突泉县",
  "type": "2"
}, { "code": "152500", "p_code": "150000", "name": "锡林郭勒盟", "type": "1" }, {
  "code": "152501",
  "p_code": "152500",
  "name": "二连浩特市",
  "type": "2"
}, { "code": "152502", "p_code": "152500", "name": "锡林浩特市", "type": "2" }, {
  "code": "152522",
  "p_code": "152500",
  "name": "阿巴嘎旗",
  "type": "2"
}, { "code": "152523", "p_code": "152500", "name": "苏尼特左旗", "type": "2" }, {
  "code": "152524",
  "p_code": "152500",
  "name": "苏尼特右旗",
  "type": "2"
}, { "code": "152525", "p_code": "152500", "name": "东乌珠穆沁旗", "type": "2" }, {
  "code": "152526",
  "p_code": "152500",
  "name": "西乌珠穆沁旗",
  "type": "2"
}, { "code": "152527", "p_code": "152500", "name": "太仆寺旗", "type": "2" }, {
  "code": "152528",
  "p_code": "152500",
  "name": "镶黄旗",
  "type": "2"
}, { "code": "152529", "p_code": "152500", "name": "正镶白旗", "type": "2" }, {
  "code": "152530",
  "p_code": "152500",
  "name": "正蓝旗",
  "type": "2"
}, { "code": "152531", "p_code": "152500", "name": "多伦县", "type": "2" }, {
  "code": "152900",
  "p_code": "150000",
  "name": "阿拉善盟",
  "type": "1"
}, { "code": "152921", "p_code": "152900", "name": "阿拉善左旗", "type": "2" }, {
  "code": "152922",
  "p_code": "152900",
  "name": "阿拉善右旗",
  "type": "2"
}, { "code": "152923", "p_code": "152900", "name": "额济纳旗", "type": "2" }, {
  "code": "210000",
  "p_code": "100000",
  "name": "辽宁省",
  "type": "0"
}, { "code": "210100", "p_code": "210000", "name": "沈阳市", "type": "1" }, {
  "code": "210101",
  "p_code": "210100",
  "name": "市辖区",
  "type": "2"
}, { "code": "210102", "p_code": "210100", "name": "和平区", "type": "2" }, {
  "code": "210103",
  "p_code": "210100",
  "name": "沈河区",
  "type": "2"
}, { "code": "210104", "p_code": "210100", "name": "大东区", "type": "2" }, {
  "code": "210105",
  "p_code": "210100",
  "name": "皇姑区",
  "type": "2"
}, { "code": "210106", "p_code": "210100", "name": "铁西区", "type": "2" }, {
  "code": "210111",
  "p_code": "210100",
  "name": "苏家屯区",
  "type": "2"
}, { "code": "210112", "p_code": "210100", "name": "东陵区", "type": "2" }, {
  "code": "210113",
  "p_code": "210100",
  "name": "新城子区",
  "type": "2"
}, { "code": "210114", "p_code": "210100", "name": "于洪区", "type": "2" }, {
  "code": "210122",
  "p_code": "210100",
  "name": "辽中县",
  "type": "2"
}, { "code": "210123", "p_code": "210100", "name": "康平县", "type": "2" }, {
  "code": "210124",
  "p_code": "210100",
  "name": "法库县",
  "type": "2"
}, { "code": "210181", "p_code": "210100", "name": "新民市", "type": "2" }, {
  "code": "210200",
  "p_code": "210000",
  "name": "大连市",
  "type": "1"
}, { "code": "210201", "p_code": "210200", "name": "市辖区", "type": "2" }, {
  "code": "210202",
  "p_code": "210200",
  "name": "中山区",
  "type": "2"
}, { "code": "210203", "p_code": "210200", "name": "西岗区", "type": "2" }, {
  "code": "210204",
  "p_code": "210200",
  "name": "沙河口区",
  "type": "2"
}, { "code": "210211", "p_code": "210200", "name": "甘井子区", "type": "2" }, {
  "code": "210212",
  "p_code": "210200",
  "name": "旅顺口区",
  "type": "2"
}, { "code": "210213", "p_code": "210200", "name": "金州区", "type": "2" }, {
  "code": "210224",
  "p_code": "210200",
  "name": "长海县",
  "type": "2"
}, { "code": "210281", "p_code": "210200", "name": "瓦房店市", "type": "2" }, {
  "code": "210282",
  "p_code": "210200",
  "name": "普兰店市",
  "type": "2"
}, { "code": "210283", "p_code": "210200", "name": "庄河市", "type": "2" }, {
  "code": "210300",
  "p_code": "210000",
  "name": "鞍山市",
  "type": "1"
}, { "code": "210301", "p_code": "210300", "name": "市辖区", "type": "2" }, {
  "code": "210302",
  "p_code": "210300",
  "name": "铁东区",
  "type": "2"
}, { "code": "210303", "p_code": "210300", "name": "铁西区", "type": "2" }, {
  "code": "210304",
  "p_code": "210300",
  "name": "立山区",
  "type": "2"
}, { "code": "210311", "p_code": "210300", "name": "千山区", "type": "2" }, {
  "code": "210321",
  "p_code": "210300",
  "name": "台安县",
  "type": "2"
}, { "code": "210323", "p_code": "210300", "name": "岫岩满族自治县", "type": "2" }, {
  "code": "210381",
  "p_code": "210300",
  "name": "海城市",
  "type": "2"
}, { "code": "210400", "p_code": "210000", "name": "抚顺市", "type": "1" }, {
  "code": "210401",
  "p_code": "210400",
  "name": "市辖区",
  "type": "2"
}, { "code": "210402", "p_code": "210400", "name": "新抚区", "type": "2" }, {
  "code": "210403",
  "p_code": "210400",
  "name": "东洲区",
  "type": "2"
}, { "code": "210404", "p_code": "210400", "name": "望花区", "type": "2" }, {
  "code": "210411",
  "p_code": "210400",
  "name": "顺城区",
  "type": "2"
}, { "code": "210421", "p_code": "210400", "name": "抚顺县", "type": "2" }, {
  "code": "210422",
  "p_code": "210400",
  "name": "新宾满族自治县",
  "type": "2"
}, { "code": "210423", "p_code": "210400", "name": "清原满族自治县", "type": "2" }, {
  "code": "210500",
  "p_code": "210000",
  "name": "本溪市",
  "type": "1"
}, { "code": "210501", "p_code": "210500", "name": "市辖区", "type": "2" }, {
  "code": "210502",
  "p_code": "210500",
  "name": "平山区",
  "type": "2"
}, { "code": "210503", "p_code": "210500", "name": "溪湖区", "type": "2" }, {
  "code": "210504",
  "p_code": "210500",
  "name": "明山区",
  "type": "2"
}, { "code": "210505", "p_code": "210500", "name": "南芬区", "type": "2" }, {
  "code": "210521",
  "p_code": "210500",
  "name": "本溪满族自治县",
  "type": "2"
}, { "code": "210522", "p_code": "210500", "name": "桓仁满族自治县", "type": "2" }, {
  "code": "210600",
  "p_code": "210000",
  "name": "丹东市",
  "type": "1"
}, { "code": "210601", "p_code": "210600", "name": "市辖区", "type": "2" }, {
  "code": "210602",
  "p_code": "210600",
  "name": "元宝区",
  "type": "2"
}, { "code": "210603", "p_code": "210600", "name": "振兴区", "type": "2" }, {
  "code": "210604",
  "p_code": "210600",
  "name": "振安区",
  "type": "2"
}, { "code": "210624", "p_code": "210600", "name": "宽甸满族自治县", "type": "2" }, {
  "code": "210681",
  "p_code": "210600",
  "name": "东港市",
  "type": "2"
}, { "code": "210682", "p_code": "210600", "name": "凤城市", "type": "2" }, {
  "code": "210700",
  "p_code": "210000",
  "name": "锦州市",
  "type": "1"
}, { "code": "210701", "p_code": "210700", "name": "市辖区", "type": "2" }, {
  "code": "210702",
  "p_code": "210700",
  "name": "古塔区",
  "type": "2"
}, { "code": "210703", "p_code": "210700", "name": "凌河区", "type": "2" }, {
  "code": "210711",
  "p_code": "210700",
  "name": "太和区",
  "type": "2"
}, { "code": "210726", "p_code": "210700", "name": "黑山县", "type": "2" }, {
  "code": "210727",
  "p_code": "210700",
  "name": "义　县",
  "type": "2"
}, { "code": "210781", "p_code": "210700", "name": "凌海市", "type": "2" }, {
  "code": "210782",
  "p_code": "210700",
  "name": "北宁市",
  "type": "2"
}, { "code": "210800", "p_code": "210000", "name": "营口市", "type": "1" }, {
  "code": "210801",
  "p_code": "210800",
  "name": "市辖区",
  "type": "2"
}, { "code": "210802", "p_code": "210800", "name": "站前区", "type": "2" }, {
  "code": "210803",
  "p_code": "210800",
  "name": "西市区",
  "type": "2"
}, { "code": "210804", "p_code": "210800", "name": "鲅鱼圈区", "type": "2" }, {
  "code": "210811",
  "p_code": "210800",
  "name": "老边区",
  "type": "2"
}, { "code": "210881", "p_code": "210800", "name": "盖州市", "type": "2" }, {
  "code": "210882",
  "p_code": "210800",
  "name": "大石桥市",
  "type": "2"
}, { "code": "210900", "p_code": "210000", "name": "阜新市", "type": "1" }, {
  "code": "210901",
  "p_code": "210900",
  "name": "市辖区",
  "type": "2"
}, { "code": "210902", "p_code": "210900", "name": "海州区", "type": "2" }, {
  "code": "210903",
  "p_code": "210900",
  "name": "新邱区",
  "type": "2"
}, { "code": "210904", "p_code": "210900", "name": "太平区", "type": "2" }, {
  "code": "210905",
  "p_code": "210900",
  "name": "清河门区",
  "type": "2"
}, { "code": "210911", "p_code": "210900", "name": "细河区", "type": "2" }, {
  "code": "210921",
  "p_code": "210900",
  "name": "阜新蒙古族自治县",
  "type": "2"
}, { "code": "210922", "p_code": "210900", "name": "彰武县", "type": "2" }, {
  "code": "211000",
  "p_code": "210000",
  "name": "辽阳市",
  "type": "1"
}, { "code": "211001", "p_code": "211000", "name": "市辖区", "type": "2" }, {
  "code": "211002",
  "p_code": "211000",
  "name": "白塔区",
  "type": "2"
}, { "code": "211003", "p_code": "211000", "name": "文圣区", "type": "2" }, {
  "code": "211004",
  "p_code": "211000",
  "name": "宏伟区",
  "type": "2"
}, { "code": "211005", "p_code": "211000", "name": "弓长岭区", "type": "2" }, {
  "code": "211011",
  "p_code": "211000",
  "name": "太子河区",
  "type": "2"
}, { "code": "211021", "p_code": "211000", "name": "辽阳县", "type": "2" }, {
  "code": "211081",
  "p_code": "211000",
  "name": "灯塔市",
  "type": "2"
}, { "code": "211100", "p_code": "210000", "name": "盘锦市", "type": "1" }, {
  "code": "211101",
  "p_code": "211100",
  "name": "市辖区",
  "type": "2"
}, { "code": "211102", "p_code": "211100", "name": "双台子区", "type": "2" }, {
  "code": "211103",
  "p_code": "211100",
  "name": "兴隆台区",
  "type": "2"
}, { "code": "211121", "p_code": "211100", "name": "大洼县", "type": "2" }, {
  "code": "211122",
  "p_code": "211100",
  "name": "盘山县",
  "type": "2"
}, { "code": "211200", "p_code": "210000", "name": "铁岭市", "type": "1" }, {
  "code": "211201",
  "p_code": "211200",
  "name": "市辖区",
  "type": "2"
}, { "code": "211202", "p_code": "211200", "name": "银州区", "type": "2" }, {
  "code": "211204",
  "p_code": "211200",
  "name": "清河区",
  "type": "2"
}, { "code": "211221", "p_code": "211200", "name": "铁岭县", "type": "2" }, {
  "code": "211223",
  "p_code": "211200",
  "name": "西丰县",
  "type": "2"
}, { "code": "211224", "p_code": "211200", "name": "昌图县", "type": "2" }, {
  "code": "211281",
  "p_code": "211200",
  "name": "调兵山市",
  "type": "2"
}, { "code": "211282", "p_code": "211200", "name": "开原市", "type": "2" }, {
  "code": "211300",
  "p_code": "210000",
  "name": "朝阳市",
  "type": "1"
}, { "code": "211301", "p_code": "211300", "name": "市辖区", "type": "2" }, {
  "code": "211302",
  "p_code": "211300",
  "name": "双塔区",
  "type": "2"
}, { "code": "211303", "p_code": "211300", "name": "龙城区", "type": "2" }, {
  "code": "211321",
  "p_code": "211300",
  "name": "朝阳县",
  "type": "2"
}, { "code": "211322", "p_code": "211300", "name": "建平县", "type": "2" }, {
  "code": "211324",
  "p_code": "211300",
  "name": "喀喇沁左翼蒙古族自治县",
  "type": "2"
}, { "code": "211381", "p_code": "211300", "name": "北票市", "type": "2" }, {
  "code": "211382",
  "p_code": "211300",
  "name": "凌源市",
  "type": "2"
}, { "code": "211400", "p_code": "210000", "name": "葫芦岛市", "type": "1" }, {
  "code": "211401",
  "p_code": "211400",
  "name": "市辖区",
  "type": "2"
}, { "code": "211402", "p_code": "211400", "name": "连山区", "type": "2" }, {
  "code": "211403",
  "p_code": "211400",
  "name": "龙港区",
  "type": "2"
}, { "code": "211404", "p_code": "211400", "name": "南票区", "type": "2" }, {
  "code": "211421",
  "p_code": "211400",
  "name": "绥中县",
  "type": "2"
}, { "code": "211422", "p_code": "211400", "name": "建昌县", "type": "2" }, {
  "code": "211481",
  "p_code": "211400",
  "name": "兴城市",
  "type": "2"
}, { "code": "220000", "p_code": "100000", "name": "吉林省", "type": "0" }, {
  "code": "220100",
  "p_code": "220000",
  "name": "长春市",
  "type": "1"
}, { "code": "220101", "p_code": "220100", "name": "市辖区", "type": "2" }, {
  "code": "220102",
  "p_code": "220100",
  "name": "南关区",
  "type": "2"
}, { "code": "220103", "p_code": "220100", "name": "宽城区", "type": "2" }, {
  "code": "220104",
  "p_code": "220100",
  "name": "朝阳区",
  "type": "2"
}, { "code": "220105", "p_code": "220100", "name": "二道区", "type": "2" }, {
  "code": "220106",
  "p_code": "220100",
  "name": "绿园区",
  "type": "2"
}, { "code": "220112", "p_code": "220100", "name": "双阳区", "type": "2" }, {
  "code": "220122",
  "p_code": "220100",
  "name": "农安县",
  "type": "2"
}, { "code": "220181", "p_code": "220100", "name": "九台市", "type": "2" }, {
  "code": "220182",
  "p_code": "220100",
  "name": "榆树市",
  "type": "2"
}, { "code": "220183", "p_code": "220100", "name": "德惠市", "type": "2" }, {
  "code": "220200",
  "p_code": "220000",
  "name": "吉林市",
  "type": "1"
}, { "code": "220201", "p_code": "220200", "name": "市辖区", "type": "2" }, {
  "code": "220202",
  "p_code": "220200",
  "name": "昌邑区",
  "type": "2"
}, { "code": "220203", "p_code": "220200", "name": "龙潭区", "type": "2" }, {
  "code": "220204",
  "p_code": "220200",
  "name": "船营区",
  "type": "2"
}, { "code": "220211", "p_code": "220200", "name": "丰满区", "type": "2" }, {
  "code": "220221",
  "p_code": "220200",
  "name": "永吉县",
  "type": "2"
}, { "code": "220281", "p_code": "220200", "name": "蛟河市", "type": "2" }, {
  "code": "220282",
  "p_code": "220200",
  "name": "桦甸市",
  "type": "2"
}, { "code": "220283", "p_code": "220200", "name": "舒兰市", "type": "2" }, {
  "code": "220284",
  "p_code": "220200",
  "name": "磐石市",
  "type": "2"
}, { "code": "220300", "p_code": "220000", "name": "四平市", "type": "1" }, {
  "code": "220301",
  "p_code": "220300",
  "name": "市辖区",
  "type": "2"
}, { "code": "220302", "p_code": "220300", "name": "铁西区", "type": "2" }, {
  "code": "220303",
  "p_code": "220300",
  "name": "铁东区",
  "type": "2"
}, { "code": "220322", "p_code": "220300", "name": "梨树县", "type": "2" }, {
  "code": "220323",
  "p_code": "220300",
  "name": "伊通满族自治县",
  "type": "2"
}, { "code": "220381", "p_code": "220300", "name": "公主岭市", "type": "2" }, {
  "code": "220382",
  "p_code": "220300",
  "name": "双辽市",
  "type": "2"
}, { "code": "220400", "p_code": "220000", "name": "辽源市", "type": "1" }, {
  "code": "220401",
  "p_code": "220400",
  "name": "市辖区",
  "type": "2"
}, { "code": "220402", "p_code": "220400", "name": "龙山区", "type": "2" }, {
  "code": "220403",
  "p_code": "220400",
  "name": "西安区",
  "type": "2"
}, { "code": "220421", "p_code": "220400", "name": "东丰县", "type": "2" }, {
  "code": "220422",
  "p_code": "220400",
  "name": "东辽县",
  "type": "2"
}, { "code": "220500", "p_code": "220000", "name": "通化市", "type": "1" }, {
  "code": "220501",
  "p_code": "220500",
  "name": "市辖区",
  "type": "2"
}, { "code": "220502", "p_code": "220500", "name": "东昌区", "type": "2" }, {
  "code": "220503",
  "p_code": "220500",
  "name": "二道江区",
  "type": "2"
}, { "code": "220521", "p_code": "220500", "name": "通化县", "type": "2" }, {
  "code": "220523",
  "p_code": "220500",
  "name": "辉南县",
  "type": "2"
}, { "code": "220524", "p_code": "220500", "name": "柳河县", "type": "2" }, {
  "code": "220581",
  "p_code": "220500",
  "name": "梅河口市",
  "type": "2"
}, { "code": "220582", "p_code": "220500", "name": "集安市", "type": "2" }, {
  "code": "220600",
  "p_code": "220000",
  "name": "白山市",
  "type": "1"
}, { "code": "220601", "p_code": "220600", "name": "市辖区", "type": "2" }, {
  "code": "220602",
  "p_code": "220600",
  "name": "八道江区",
  "type": "2"
}, { "code": "220621", "p_code": "220600", "name": "抚松县", "type": "2" }, {
  "code": "220622",
  "p_code": "220600",
  "name": "靖宇县",
  "type": "2"
}, { "code": "220623", "p_code": "220600", "name": "长白朝鲜族自治县", "type": "2" }, {
  "code": "220625",
  "p_code": "220600",
  "name": "江源县",
  "type": "2"
}, { "code": "220681", "p_code": "220600", "name": "临江市", "type": "2" }, {
  "code": "220700",
  "p_code": "220000",
  "name": "松原市",
  "type": "1"
}, { "code": "220701", "p_code": "220700", "name": "市辖区", "type": "2" }, {
  "code": "220702",
  "p_code": "220700",
  "name": "宁江区",
  "type": "2"
}, { "code": "220721", "p_code": "220700", "name": "前郭尔罗斯蒙古族自治县", "type": "2" }, {
  "code": "220722",
  "p_code": "220700",
  "name": "长岭县",
  "type": "2"
}, { "code": "220723", "p_code": "220700", "name": "乾安县", "type": "2" }, {
  "code": "220724",
  "p_code": "220700",
  "name": "扶余县",
  "type": "2"
}, { "code": "220800", "p_code": "220000", "name": "白城市", "type": "1" }, {
  "code": "220801",
  "p_code": "220800",
  "name": "市辖区",
  "type": "2"
}, { "code": "220802", "p_code": "220800", "name": "洮北区", "type": "2" }, {
  "code": "220821",
  "p_code": "220800",
  "name": "镇赉县",
  "type": "2"
}, { "code": "220822", "p_code": "220800", "name": "通榆县", "type": "2" }, {
  "code": "220881",
  "p_code": "220800",
  "name": "洮南市",
  "type": "2"
}, { "code": "220882", "p_code": "220800", "name": "大安市", "type": "2" }, {
  "code": "222400",
  "p_code": "220000",
  "name": "延边朝鲜族自治州",
  "type": "1"
}, { "code": "222401", "p_code": "222400", "name": "延吉市", "type": "2" }, {
  "code": "222402",
  "p_code": "222400",
  "name": "图们市",
  "type": "2"
}, { "code": "222403", "p_code": "222400", "name": "敦化市", "type": "2" }, {
  "code": "222404",
  "p_code": "222400",
  "name": "珲春市",
  "type": "2"
}, { "code": "222405", "p_code": "222400", "name": "龙井市", "type": "2" }, {
  "code": "222406",
  "p_code": "222400",
  "name": "和龙市",
  "type": "2"
}, { "code": "222424", "p_code": "222400", "name": "汪清县", "type": "2" }, {
  "code": "222426",
  "p_code": "222400",
  "name": "安图县",
  "type": "2"
}, { "code": "230000", "p_code": "100000", "name": "黑龙江", "type": "0" }, {
  "code": "230100",
  "p_code": "230000",
  "name": "哈尔滨市",
  "type": "1"
}, { "code": "230101", "p_code": "230100", "name": "市辖区", "type": "2" }, {
  "code": "230102",
  "p_code": "230100",
  "name": "道里区",
  "type": "2"
}, { "code": "230103", "p_code": "230100", "name": "南岗区", "type": "2" }, {
  "code": "230104",
  "p_code": "230100",
  "name": "道外区",
  "type": "2"
}, { "code": "230106", "p_code": "230100", "name": "香坊区", "type": "2" }, {
  "code": "230107",
  "p_code": "230100",
  "name": "动力区",
  "type": "2"
}, { "code": "230108", "p_code": "230100", "name": "平房区", "type": "2" }, {
  "code": "230109",
  "p_code": "230100",
  "name": "松北区",
  "type": "2"
}, { "code": "230111", "p_code": "230100", "name": "呼兰区", "type": "2" }, {
  "code": "230123",
  "p_code": "230100",
  "name": "依兰县",
  "type": "2"
}, { "code": "230124", "p_code": "230100", "name": "方正县", "type": "2" }, {
  "code": "230125",
  "p_code": "230100",
  "name": "宾　县",
  "type": "2"
}, { "code": "230126", "p_code": "230100", "name": "巴彦县", "type": "2" }, {
  "code": "230127",
  "p_code": "230100",
  "name": "木兰县",
  "type": "2"
}, { "code": "230128", "p_code": "230100", "name": "通河县", "type": "2" }, {
  "code": "230129",
  "p_code": "230100",
  "name": "延寿县",
  "type": "2"
}, { "code": "230181", "p_code": "230100", "name": "阿城市", "type": "2" }, {
  "code": "230182",
  "p_code": "230100",
  "name": "双城市",
  "type": "2"
}, { "code": "230183", "p_code": "230100", "name": "尚志市", "type": "2" }, {
  "code": "230184",
  "p_code": "230100",
  "name": "五常市",
  "type": "2"
}, { "code": "230200", "p_code": "230000", "name": "齐齐哈尔市", "type": "1" }, {
  "code": "230201",
  "p_code": "230200",
  "name": "市辖区",
  "type": "2"
}, { "code": "230202", "p_code": "230200", "name": "龙沙区", "type": "2" }, {
  "code": "230203",
  "p_code": "230200",
  "name": "建华区",
  "type": "2"
}, { "code": "230204", "p_code": "230200", "name": "铁锋区", "type": "2" }, {
  "code": "230205",
  "p_code": "230200",
  "name": "昂昂溪区",
  "type": "2"
}, { "code": "230206", "p_code": "230200", "name": "富拉尔基区", "type": "2" }, {
  "code": "230207",
  "p_code": "230200",
  "name": "碾子山区",
  "type": "2"
}, { "code": "230208", "p_code": "230200", "name": "梅里斯达斡尔族区", "type": "2" }, {
  "code": "230221",
  "p_code": "230200",
  "name": "龙江县",
  "type": "2"
}, { "code": "230223", "p_code": "230200", "name": "依安县", "type": "2" }, {
  "code": "230224",
  "p_code": "230200",
  "name": "泰来县",
  "type": "2"
}, { "code": "230225", "p_code": "230200", "name": "甘南县", "type": "2" }, {
  "code": "230227",
  "p_code": "230200",
  "name": "富裕县",
  "type": "2"
}, { "code": "230229", "p_code": "230200", "name": "克山县", "type": "2" }, {
  "code": "230230",
  "p_code": "230200",
  "name": "克东县",
  "type": "2"
}, { "code": "230231", "p_code": "230200", "name": "拜泉县", "type": "2" }, {
  "code": "230281",
  "p_code": "230200",
  "name": "讷河市",
  "type": "2"
}, { "code": "230300", "p_code": "230000", "name": "鸡西市", "type": "1" }, {
  "code": "230301",
  "p_code": "230300",
  "name": "市辖区",
  "type": "2"
}, { "code": "230302", "p_code": "230300", "name": "鸡冠区", "type": "2" }, {
  "code": "230303",
  "p_code": "230300",
  "name": "恒山区",
  "type": "2"
}, { "code": "230304", "p_code": "230300", "name": "滴道区", "type": "2" }, {
  "code": "230305",
  "p_code": "230300",
  "name": "梨树区",
  "type": "2"
}, { "code": "230306", "p_code": "230300", "name": "城子河区", "type": "2" }, {
  "code": "230307",
  "p_code": "230300",
  "name": "麻山区",
  "type": "2"
}, { "code": "230321", "p_code": "230300", "name": "鸡东县", "type": "2" }, {
  "code": "230381",
  "p_code": "230300",
  "name": "虎林市",
  "type": "2"
}, { "code": "230382", "p_code": "230300", "name": "密山市", "type": "2" }, {
  "code": "230400",
  "p_code": "230000",
  "name": "鹤岗市",
  "type": "1"
}, { "code": "230401", "p_code": "230400", "name": "市辖区", "type": "2" }, {
  "code": "230402",
  "p_code": "230400",
  "name": "向阳区",
  "type": "2"
}, { "code": "230403", "p_code": "230400", "name": "工农区", "type": "2" }, {
  "code": "230404",
  "p_code": "230400",
  "name": "南山区",
  "type": "2"
}, { "code": "230405", "p_code": "230400", "name": "兴安区", "type": "2" }, {
  "code": "230406",
  "p_code": "230400",
  "name": "东山区",
  "type": "2"
}, { "code": "230407", "p_code": "230400", "name": "兴山区", "type": "2" }, {
  "code": "230421",
  "p_code": "230400",
  "name": "萝北县",
  "type": "2"
}, { "code": "230422", "p_code": "230400", "name": "绥滨县", "type": "2" }, {
  "code": "230500",
  "p_code": "230000",
  "name": "双鸭山市",
  "type": "1"
}, { "code": "230501", "p_code": "230500", "name": "市辖区", "type": "2" }, {
  "code": "230502",
  "p_code": "230500",
  "name": "尖山区",
  "type": "2"
}, { "code": "230503", "p_code": "230500", "name": "岭东区", "type": "2" }, {
  "code": "230505",
  "p_code": "230500",
  "name": "四方台区",
  "type": "2"
}, { "code": "230506", "p_code": "230500", "name": "宝山区", "type": "2" }, {
  "code": "230521",
  "p_code": "230500",
  "name": "集贤县",
  "type": "2"
}, { "code": "230522", "p_code": "230500", "name": "友谊县", "type": "2" }, {
  "code": "230523",
  "p_code": "230500",
  "name": "宝清县",
  "type": "2"
}, { "code": "230524", "p_code": "230500", "name": "饶河县", "type": "2" }, {
  "code": "230600",
  "p_code": "230000",
  "name": "大庆市",
  "type": "1"
}, { "code": "230601", "p_code": "230600", "name": "市辖区", "type": "2" }, {
  "code": "230602",
  "p_code": "230600",
  "name": "萨尔图区",
  "type": "2"
}, { "code": "230603", "p_code": "230600", "name": "龙凤区", "type": "2" }, {
  "code": "230604",
  "p_code": "230600",
  "name": "让胡路区",
  "type": "2"
}, { "code": "230605", "p_code": "230600", "name": "红岗区", "type": "2" }, {
  "code": "230606",
  "p_code": "230600",
  "name": "大同区",
  "type": "2"
}, { "code": "230621", "p_code": "230600", "name": "肇州县", "type": "2" }, {
  "code": "230622",
  "p_code": "230600",
  "name": "肇源县",
  "type": "2"
}, { "code": "230623", "p_code": "230600", "name": "林甸县", "type": "2" }, {
  "code": "230624",
  "p_code": "230600",
  "name": "杜尔伯特蒙古族自治县",
  "type": "2"
}, { "code": "230700", "p_code": "230000", "name": "伊春市", "type": "1" }, {
  "code": "230701",
  "p_code": "230700",
  "name": "市辖区",
  "type": "2"
}, { "code": "230702", "p_code": "230700", "name": "伊春区", "type": "2" }, {
  "code": "230703",
  "p_code": "230700",
  "name": "南岔区",
  "type": "2"
}, { "code": "230704", "p_code": "230700", "name": "友好区", "type": "2" }, {
  "code": "230705",
  "p_code": "230700",
  "name": "西林区",
  "type": "2"
}, { "code": "230706", "p_code": "230700", "name": "翠峦区", "type": "2" }, {
  "code": "230707",
  "p_code": "230700",
  "name": "新青区",
  "type": "2"
}, { "code": "230708", "p_code": "230700", "name": "美溪区", "type": "2" }, {
  "code": "230709",
  "p_code": "230700",
  "name": "金山屯区",
  "type": "2"
}, { "code": "230710", "p_code": "230700", "name": "五营区", "type": "2" }, {
  "code": "230711",
  "p_code": "230700",
  "name": "乌马河区",
  "type": "2"
}, { "code": "230712", "p_code": "230700", "name": "汤旺河区", "type": "2" }, {
  "code": "230713",
  "p_code": "230700",
  "name": "带岭区",
  "type": "2"
}, { "code": "230714", "p_code": "230700", "name": "乌伊岭区", "type": "2" }, {
  "code": "230715",
  "p_code": "230700",
  "name": "红星区",
  "type": "2"
}, { "code": "230716", "p_code": "230700", "name": "上甘岭区", "type": "2" }, {
  "code": "230722",
  "p_code": "230700",
  "name": "嘉荫县",
  "type": "2"
}, { "code": "230781", "p_code": "230700", "name": "铁力市", "type": "2" }, {
  "code": "230800",
  "p_code": "230000",
  "name": "佳木斯市",
  "type": "1"
}, { "code": "230801", "p_code": "230800", "name": "市辖区", "type": "2" }, {
  "code": "230802",
  "p_code": "230800",
  "name": "永红区",
  "type": "2"
}, { "code": "230803", "p_code": "230800", "name": "向阳区", "type": "2" }, {
  "code": "230804",
  "p_code": "230800",
  "name": "前进区",
  "type": "2"
}, { "code": "230805", "p_code": "230800", "name": "东风区", "type": "2" }, {
  "code": "230811",
  "p_code": "230800",
  "name": "郊　区",
  "type": "2"
}, { "code": "230822", "p_code": "230800", "name": "桦南县", "type": "2" }, {
  "code": "230826",
  "p_code": "230800",
  "name": "桦川县",
  "type": "2"
}, { "code": "230828", "p_code": "230800", "name": "汤原县", "type": "2" }, {
  "code": "230833",
  "p_code": "230800",
  "name": "抚远县",
  "type": "2"
}, { "code": "230881", "p_code": "230800", "name": "同江市", "type": "2" }, {
  "code": "230882",
  "p_code": "230800",
  "name": "富锦市",
  "type": "2"
}, { "code": "230900", "p_code": "230000", "name": "七台河市", "type": "1" }, {
  "code": "230901",
  "p_code": "230900",
  "name": "市辖区",
  "type": "2"
}, { "code": "230902", "p_code": "230900", "name": "新兴区", "type": "2" }, {
  "code": "230903",
  "p_code": "230900",
  "name": "桃山区",
  "type": "2"
}, { "code": "230904", "p_code": "230900", "name": "茄子河区", "type": "2" }, {
  "code": "230921",
  "p_code": "230900",
  "name": "勃利县",
  "type": "2"
}, { "code": "231000", "p_code": "230000", "name": "牡丹江市", "type": "1" }, {
  "code": "231001",
  "p_code": "231000",
  "name": "市辖区",
  "type": "2"
}, { "code": "231002", "p_code": "231000", "name": "东安区", "type": "2" }, {
  "code": "231003",
  "p_code": "231000",
  "name": "阳明区",
  "type": "2"
}, { "code": "231004", "p_code": "231000", "name": "爱民区", "type": "2" }, {
  "code": "231005",
  "p_code": "231000",
  "name": "西安区",
  "type": "2"
}, { "code": "231024", "p_code": "231000", "name": "东宁县", "type": "2" }, {
  "code": "231025",
  "p_code": "231000",
  "name": "林口县",
  "type": "2"
}, { "code": "231081", "p_code": "231000", "name": "绥芬河市", "type": "2" }, {
  "code": "231083",
  "p_code": "231000",
  "name": "海林市",
  "type": "2"
}, { "code": "231084", "p_code": "231000", "name": "宁安市", "type": "2" }, {
  "code": "231085",
  "p_code": "231000",
  "name": "穆棱市",
  "type": "2"
}, { "code": "231100", "p_code": "230000", "name": "黑河市", "type": "1" }, {
  "code": "231101",
  "p_code": "231100",
  "name": "市辖区",
  "type": "2"
}, { "code": "231102", "p_code": "231100", "name": "爱辉区", "type": "2" }, {
  "code": "231121",
  "p_code": "231100",
  "name": "嫩江县",
  "type": "2"
}, { "code": "231123", "p_code": "231100", "name": "逊克县", "type": "2" }, {
  "code": "231124",
  "p_code": "231100",
  "name": "孙吴县",
  "type": "2"
}, { "code": "231181", "p_code": "231100", "name": "北安市", "type": "2" }, {
  "code": "231182",
  "p_code": "231100",
  "name": "五大连池市",
  "type": "2"
}, { "code": "231200", "p_code": "230000", "name": "绥化市", "type": "1" }, {
  "code": "231201",
  "p_code": "231200",
  "name": "市辖区",
  "type": "2"
}, { "code": "231202", "p_code": "231200", "name": "北林区", "type": "2" }, {
  "code": "231221",
  "p_code": "231200",
  "name": "望奎县",
  "type": "2"
}, { "code": "231222", "p_code": "231200", "name": "兰西县", "type": "2" }, {
  "code": "231223",
  "p_code": "231200",
  "name": "青冈县",
  "type": "2"
}, { "code": "231224", "p_code": "231200", "name": "庆安县", "type": "2" }, {
  "code": "231225",
  "p_code": "231200",
  "name": "明水县",
  "type": "2"
}, { "code": "231226", "p_code": "231200", "name": "绥棱县", "type": "2" }, {
  "code": "231281",
  "p_code": "231200",
  "name": "安达市",
  "type": "2"
}, { "code": "231282", "p_code": "231200", "name": "肇东市", "type": "2" }, {
  "code": "231283",
  "p_code": "231200",
  "name": "海伦市",
  "type": "2"
}, { "code": "232700", "p_code": "230000", "name": "大兴安岭地区", "type": "1" }, {
  "code": "232721",
  "p_code": "232700",
  "name": "呼玛县",
  "type": "2"
}, { "code": "232722", "p_code": "232700", "name": "塔河县", "type": "2" }, {
  "code": "232723",
  "p_code": "232700",
  "name": "漠河县",
  "type": "2"
}, { "code": "310000", "p_code": "100000", "name": "上海市", "type": "0" }, {
  "code": "310100",
  "p_code": "310000",
  "name": "上海市",
  "type": "1"
}, { "code": "310101", "p_code": "310100", "name": "黄浦区", "type": "2" }, {
  "code": "310103",
  "p_code": "310100",
  "name": "卢湾区",
  "type": "2"
}, { "code": "310104", "p_code": "310100", "name": "徐汇区", "type": "2" }, {
  "code": "310105",
  "p_code": "310100",
  "name": "长宁区",
  "type": "2"
}, { "code": "310106", "p_code": "310100", "name": "静安区", "type": "2" }, {
  "code": "310107",
  "p_code": "310100",
  "name": "普陀区",
  "type": "2"
}, { "code": "310108", "p_code": "310100", "name": "闸北区", "type": "2" }, {
  "code": "310109",
  "p_code": "310100",
  "name": "虹口区",
  "type": "2"
}, { "code": "310110", "p_code": "310100", "name": "杨浦区", "type": "2" }, {
  "code": "310112",
  "p_code": "310100",
  "name": "闵行区",
  "type": "2"
}, { "code": "310113", "p_code": "310100", "name": "宝山区", "type": "2" }, {
  "code": "310114",
  "p_code": "310100",
  "name": "嘉定区",
  "type": "2"
}, { "code": "310115", "p_code": "310100", "name": "浦东新区", "type": "2" }, {
  "code": "310116",
  "p_code": "310100",
  "name": "金山区",
  "type": "2"
}, { "code": "310117", "p_code": "310100", "name": "松江区", "type": "2" }, {
  "code": "310118",
  "p_code": "310100",
  "name": "青浦区",
  "type": "2"
}, { "code": "310119", "p_code": "310100", "name": "南汇区", "type": "2" }, {
  "code": "310120",
  "p_code": "310100",
  "name": "奉贤区",
  "type": "2"
}, { "code": "310230", "p_code": "310200", "name": "崇明县", "type": "2" }, {
  "code": "320000",
  "p_code": "100000",
  "name": "江苏省",
  "type": "0"
}, { "code": "320100", "p_code": "320000", "name": "南京市", "type": "1" }, {
  "code": "320101",
  "p_code": "320100",
  "name": "市辖区",
  "type": "2"
}, { "code": "320102", "p_code": "320100", "name": "玄武区", "type": "2" }, {
  "code": "320103",
  "p_code": "320100",
  "name": "白下区",
  "type": "2"
}, { "code": "320104", "p_code": "320100", "name": "秦淮区", "type": "2" }, {
  "code": "320105",
  "p_code": "320100",
  "name": "建邺区",
  "type": "2"
}, { "code": "320106", "p_code": "320100", "name": "鼓楼区", "type": "2" }, {
  "code": "320107",
  "p_code": "320100",
  "name": "下关区",
  "type": "2"
}, { "code": "320111", "p_code": "320100", "name": "浦口区", "type": "2" }, {
  "code": "320113",
  "p_code": "320100",
  "name": "栖霞区",
  "type": "2"
}, { "code": "320114", "p_code": "320100", "name": "雨花台区", "type": "2" }, {
  "code": "320115",
  "p_code": "320100",
  "name": "江宁区",
  "type": "2"
}, { "code": "320116", "p_code": "320100", "name": "六合区", "type": "2" }, {
  "code": "320124",
  "p_code": "320100",
  "name": "溧水县",
  "type": "2"
}, { "code": "320125", "p_code": "320100", "name": "高淳县", "type": "2" }, {
  "code": "320200",
  "p_code": "320000",
  "name": "无锡市",
  "type": "1"
}, { "code": "320201", "p_code": "320200", "name": "市辖区", "type": "2" }, {
  "code": "320202",
  "p_code": "320200",
  "name": "崇安区",
  "type": "2"
}, { "code": "320203", "p_code": "320200", "name": "南长区", "type": "2" }, {
  "code": "320204",
  "p_code": "320200",
  "name": "北塘区",
  "type": "2"
}, { "code": "320205", "p_code": "320200", "name": "锡山区", "type": "2" }, {
  "code": "320206",
  "p_code": "320200",
  "name": "惠山区",
  "type": "2"
}, { "code": "320211", "p_code": "320200", "name": "滨湖区", "type": "2" }, {
  "code": "320281",
  "p_code": "320200",
  "name": "江阴市",
  "type": "2"
}, { "code": "320282", "p_code": "320200", "name": "宜兴市", "type": "2" }, {
  "code": "320300",
  "p_code": "320000",
  "name": "徐州市",
  "type": "1"
}, { "code": "320301", "p_code": "320300", "name": "市辖区", "type": "2" }, {
  "code": "320302",
  "p_code": "320300",
  "name": "鼓楼区",
  "type": "2"
}, { "code": "320303", "p_code": "320300", "name": "云龙区", "type": "2" }, {
  "code": "320304",
  "p_code": "320300",
  "name": "九里区",
  "type": "2"
}, { "code": "320305", "p_code": "320300", "name": "贾汪区", "type": "2" }, {
  "code": "320311",
  "p_code": "320300",
  "name": "泉山区",
  "type": "2"
}, { "code": "320321", "p_code": "320300", "name": "丰　县", "type": "2" }, {
  "code": "320322",
  "p_code": "320300",
  "name": "沛　县",
  "type": "2"
}, { "code": "320323", "p_code": "320300", "name": "铜山县", "type": "2" }, {
  "code": "320324",
  "p_code": "320300",
  "name": "睢宁县",
  "type": "2"
}, { "code": "320381", "p_code": "320300", "name": "新沂市", "type": "2" }, {
  "code": "320382",
  "p_code": "320300",
  "name": "邳州市",
  "type": "2"
}, { "code": "320400", "p_code": "320000", "name": "常州市", "type": "1" }, {
  "code": "320401",
  "p_code": "320400",
  "name": "市辖区",
  "type": "2"
}, { "code": "320402", "p_code": "320400", "name": "天宁区", "type": "2" }, {
  "code": "320404",
  "p_code": "320400",
  "name": "钟楼区",
  "type": "2"
}, { "code": "320405", "p_code": "320400", "name": "戚墅堰区", "type": "2" }, {
  "code": "320411",
  "p_code": "320400",
  "name": "新北区",
  "type": "2"
}, { "code": "320412", "p_code": "320400", "name": "武进区", "type": "2" }, {
  "code": "320481",
  "p_code": "320400",
  "name": "溧阳市",
  "type": "2"
}, { "code": "320482", "p_code": "320400", "name": "金坛市", "type": "2" }, {
  "code": "320500",
  "p_code": "320000",
  "name": "苏州市",
  "type": "1"
}, { "code": "320501", "p_code": "320500", "name": "市辖区", "type": "2" }, {
  "code": "320502",
  "p_code": "320500",
  "name": "沧浪区",
  "type": "2"
}, { "code": "320503", "p_code": "320500", "name": "平江区", "type": "2" }, {
  "code": "320504",
  "p_code": "320500",
  "name": "金阊区",
  "type": "2"
}, { "code": "320505", "p_code": "320500", "name": "虎丘区", "type": "2" }, {
  "code": "320506",
  "p_code": "320500",
  "name": "吴中区",
  "type": "2"
}, { "code": "320507", "p_code": "320500", "name": "相城区", "type": "2" }, {
  "code": "320581",
  "p_code": "320500",
  "name": "常熟市",
  "type": "2"
}, { "code": "320582", "p_code": "320500", "name": "张家港市", "type": "2" }, {
  "code": "320583",
  "p_code": "320500",
  "name": "昆山市",
  "type": "2"
}, { "code": "320584", "p_code": "320500", "name": "吴江市", "type": "2" }, {
  "code": "320585",
  "p_code": "320500",
  "name": "太仓市",
  "type": "2"
}, { "code": "320600", "p_code": "320000", "name": "南通市", "type": "1" }, {
  "code": "320601",
  "p_code": "320600",
  "name": "市辖区",
  "type": "2"
}, { "code": "320602", "p_code": "320600", "name": "崇川区", "type": "2" }, {
  "code": "320611",
  "p_code": "320600",
  "name": "港闸区",
  "type": "2"
}, { "code": "320621", "p_code": "320600", "name": "海安县", "type": "2" }, {
  "code": "320623",
  "p_code": "320600",
  "name": "如东县",
  "type": "2"
}, { "code": "320681", "p_code": "320600", "name": "启东市", "type": "2" }, {
  "code": "320682",
  "p_code": "320600",
  "name": "如皋市",
  "type": "2"
}, { "code": "320683", "p_code": "320600", "name": "通州市", "type": "2" }, {
  "code": "320684",
  "p_code": "320600",
  "name": "海门市",
  "type": "2"
}, { "code": "320700", "p_code": "320000", "name": "连云港市", "type": "1" }, {
  "code": "320701",
  "p_code": "320700",
  "name": "市辖区",
  "type": "2"
}, { "code": "320703", "p_code": "320700", "name": "连云区", "type": "2" }, {
  "code": "320705",
  "p_code": "320700",
  "name": "新浦区",
  "type": "2"
}, { "code": "320706", "p_code": "320700", "name": "海州区", "type": "2" }, {
  "code": "320721",
  "p_code": "320700",
  "name": "赣榆县",
  "type": "2"
}, { "code": "320722", "p_code": "320700", "name": "东海县", "type": "2" }, {
  "code": "320723",
  "p_code": "320700",
  "name": "灌云县",
  "type": "2"
}, { "code": "320724", "p_code": "320700", "name": "灌南县", "type": "2" }, {
  "code": "320800",
  "p_code": "320000",
  "name": "淮安市",
  "type": "1"
}, { "code": "320801", "p_code": "320800", "name": "市辖区", "type": "2" }, {
  "code": "320802",
  "p_code": "320800",
  "name": "清河区",
  "type": "2"
}, { "code": "320803", "p_code": "320800", "name": "楚州区", "type": "2" }, {
  "code": "320804",
  "p_code": "320800",
  "name": "淮阴区",
  "type": "2"
}, { "code": "320811", "p_code": "320800", "name": "清浦区", "type": "2" }, {
  "code": "320826",
  "p_code": "320800",
  "name": "涟水县",
  "type": "2"
}, { "code": "320829", "p_code": "320800", "name": "洪泽县", "type": "2" }, {
  "code": "320830",
  "p_code": "320800",
  "name": "盱眙县",
  "type": "2"
}, { "code": "320831", "p_code": "320800", "name": "金湖县", "type": "2" }, {
  "code": "320900",
  "p_code": "320000",
  "name": "盐城市",
  "type": "1"
}, { "code": "320901", "p_code": "320900", "name": "市辖区", "type": "2" }, {
  "code": "320902",
  "p_code": "320900",
  "name": "亭湖区",
  "type": "2"
}, { "code": "320903", "p_code": "320900", "name": "盐都区", "type": "2" }, {
  "code": "320921",
  "p_code": "320900",
  "name": "响水县",
  "type": "2"
}, { "code": "320922", "p_code": "320900", "name": "滨海县", "type": "2" }, {
  "code": "320923",
  "p_code": "320900",
  "name": "阜宁县",
  "type": "2"
}, { "code": "320924", "p_code": "320900", "name": "射阳县", "type": "2" }, {
  "code": "320925",
  "p_code": "320900",
  "name": "建湖县",
  "type": "2"
}, { "code": "320981", "p_code": "320900", "name": "东台市", "type": "2" }, {
  "code": "320982",
  "p_code": "320900",
  "name": "大丰市",
  "type": "2"
}, { "code": "321000", "p_code": "320000", "name": "扬州市", "type": "1" }, {
  "code": "321001",
  "p_code": "321000",
  "name": "市辖区",
  "type": "2"
}, { "code": "321002", "p_code": "321000", "name": "广陵区", "type": "2" }, {
  "code": "321003",
  "p_code": "321000",
  "name": "邗江区",
  "type": "2"
}, { "code": "321011", "p_code": "321000", "name": "郊　区", "type": "2" }, {
  "code": "321023",
  "p_code": "321000",
  "name": "宝应县",
  "type": "2"
}, { "code": "321081", "p_code": "321000", "name": "仪征市", "type": "2" }, {
  "code": "321084",
  "p_code": "321000",
  "name": "高邮市",
  "type": "2"
}, { "code": "321088", "p_code": "321000", "name": "江都市", "type": "2" }, {
  "code": "321100",
  "p_code": "320000",
  "name": "镇江市",
  "type": "1"
}, { "code": "321101", "p_code": "321100", "name": "市辖区", "type": "2" }, {
  "code": "321102",
  "p_code": "321100",
  "name": "京口区",
  "type": "2"
}, { "code": "321111", "p_code": "321100", "name": "润州区", "type": "2" }, {
  "code": "321112",
  "p_code": "321100",
  "name": "丹徒区",
  "type": "2"
}, { "code": "321181", "p_code": "321100", "name": "丹阳市", "type": "2" }, {
  "code": "321182",
  "p_code": "321100",
  "name": "扬中市",
  "type": "2"
}, { "code": "321183", "p_code": "321100", "name": "句容市", "type": "2" }, {
  "code": "321200",
  "p_code": "320000",
  "name": "泰州市",
  "type": "1"
}, { "code": "321201", "p_code": "321200", "name": "市辖区", "type": "2" }, {
  "code": "321202",
  "p_code": "321200",
  "name": "海陵区",
  "type": "2"
}, { "code": "321203", "p_code": "321200", "name": "高港区", "type": "2" }, {
  "code": "321281",
  "p_code": "321200",
  "name": "兴化市",
  "type": "2"
}, { "code": "321282", "p_code": "321200", "name": "靖江市", "type": "2" }, {
  "code": "321283",
  "p_code": "321200",
  "name": "泰兴市",
  "type": "2"
}, { "code": "321284", "p_code": "321200", "name": "姜堰市", "type": "2" }, {
  "code": "321300",
  "p_code": "320000",
  "name": "宿迁市",
  "type": "1"
}, { "code": "321301", "p_code": "321300", "name": "市辖区", "type": "2" }, {
  "code": "321302",
  "p_code": "321300",
  "name": "宿城区",
  "type": "2"
}, { "code": "321311", "p_code": "321300", "name": "宿豫区", "type": "2" }, {
  "code": "321322",
  "p_code": "321300",
  "name": "沭阳县",
  "type": "2"
}, { "code": "321323", "p_code": "321300", "name": "泗阳县", "type": "2" }, {
  "code": "321324",
  "p_code": "321300",
  "name": "泗洪县",
  "type": "2"
}, { "code": "330000", "p_code": "100000", "name": "浙江省", "type": "0" }, {
  "code": "330100",
  "p_code": "330000",
  "name": "杭州市",
  "type": "1"
}, { "code": "330101", "p_code": "330100", "name": "市辖区", "type": "2" }, {
  "code": "330102",
  "p_code": "330100",
  "name": "上城区",
  "type": "2"
}, { "code": "330103", "p_code": "330100", "name": "下城区", "type": "2" }, {
  "code": "330104",
  "p_code": "330100",
  "name": "江干区",
  "type": "2"
}, { "code": "330105", "p_code": "330100", "name": "拱墅区", "type": "2" }, {
  "code": "330106",
  "p_code": "330100",
  "name": "西湖区",
  "type": "2"
}, { "code": "330108", "p_code": "330100", "name": "滨江区", "type": "2" }, {
  "code": "330109",
  "p_code": "330100",
  "name": "萧山区",
  "type": "2"
}, { "code": "330110", "p_code": "330100", "name": "余杭区", "type": "2" }, {
  "code": "330122",
  "p_code": "330100",
  "name": "桐庐县",
  "type": "2"
}, { "code": "330127", "p_code": "330100", "name": "淳安县", "type": "2" }, {
  "code": "330182",
  "p_code": "330100",
  "name": "建德市",
  "type": "2"
}, { "code": "330183", "p_code": "330100", "name": "富阳市", "type": "2" }, {
  "code": "330185",
  "p_code": "330100",
  "name": "临安市",
  "type": "2"
}, { "code": "330200", "p_code": "330000", "name": "宁波市", "type": "1" }, {
  "code": "330201",
  "p_code": "330200",
  "name": "市辖区",
  "type": "2"
}, { "code": "330203", "p_code": "330200", "name": "海曙区", "type": "2" }, {
  "code": "330204",
  "p_code": "330200",
  "name": "江东区",
  "type": "2"
}, { "code": "330205", "p_code": "330200", "name": "江北区", "type": "2" }, {
  "code": "330206",
  "p_code": "330200",
  "name": "北仑区",
  "type": "2"
}, { "code": "330211", "p_code": "330200", "name": "镇海区", "type": "2" }, {
  "code": "330212",
  "p_code": "330200",
  "name": "鄞州区",
  "type": "2"
}, { "code": "330225", "p_code": "330200", "name": "象山县", "type": "2" }, {
  "code": "330226",
  "p_code": "330200",
  "name": "宁海县",
  "type": "2"
}, { "code": "330281", "p_code": "330200", "name": "余姚市", "type": "2" }, {
  "code": "330282",
  "p_code": "330200",
  "name": "慈溪市",
  "type": "2"
}, { "code": "330283", "p_code": "330200", "name": "奉化市", "type": "2" }, {
  "code": "330300",
  "p_code": "330000",
  "name": "温州市",
  "type": "1"
}, { "code": "330301", "p_code": "330300", "name": "市辖区", "type": "2" }, {
  "code": "330302",
  "p_code": "330300",
  "name": "鹿城区",
  "type": "2"
}, { "code": "330303", "p_code": "330300", "name": "龙湾区", "type": "2" }, {
  "code": "330304",
  "p_code": "330300",
  "name": "瓯海区",
  "type": "2"
}, { "code": "330322", "p_code": "330300", "name": "洞头县", "type": "2" }, {
  "code": "330324",
  "p_code": "330300",
  "name": "永嘉县",
  "type": "2"
}, { "code": "330326", "p_code": "330300", "name": "平阳县", "type": "2" }, {
  "code": "330327",
  "p_code": "330300",
  "name": "苍南县",
  "type": "2"
}, { "code": "330328", "p_code": "330300", "name": "文成县", "type": "2" }, {
  "code": "330329",
  "p_code": "330300",
  "name": "泰顺县",
  "type": "2"
}, { "code": "330381", "p_code": "330300", "name": "瑞安市", "type": "2" }, {
  "code": "330382",
  "p_code": "330300",
  "name": "乐清市",
  "type": "2"
}, { "code": "330400", "p_code": "330000", "name": "嘉兴市", "type": "1" }, {
  "code": "330401",
  "p_code": "330400",
  "name": "市辖区",
  "type": "2"
}, { "code": "330402", "p_code": "330400", "name": "秀城区", "type": "2" }, {
  "code": "330411",
  "p_code": "330400",
  "name": "秀洲区",
  "type": "2"
}, { "code": "330421", "p_code": "330400", "name": "嘉善县", "type": "2" }, {
  "code": "330424",
  "p_code": "330400",
  "name": "海盐县",
  "type": "2"
}, { "code": "330481", "p_code": "330400", "name": "海宁市", "type": "2" }, {
  "code": "330482",
  "p_code": "330400",
  "name": "平湖市",
  "type": "2"
}, { "code": "330483", "p_code": "330400", "name": "桐乡市", "type": "2" }, {
  "code": "330500",
  "p_code": "330000",
  "name": "湖州市",
  "type": "1"
}, { "code": "330501", "p_code": "330500", "name": "市辖区", "type": "2" }, {
  "code": "330502",
  "p_code": "330500",
  "name": "吴兴区",
  "type": "2"
}, { "code": "330503", "p_code": "330500", "name": "南浔区", "type": "2" }, {
  "code": "330521",
  "p_code": "330500",
  "name": "德清县",
  "type": "2"
}, { "code": "330522", "p_code": "330500", "name": "长兴县", "type": "2" }, {
  "code": "330523",
  "p_code": "330500",
  "name": "安吉县",
  "type": "2"
}, { "code": "330600", "p_code": "330000", "name": "绍兴市", "type": "1" }, {
  "code": "330601",
  "p_code": "330600",
  "name": "市辖区",
  "type": "2"
}, { "code": "330602", "p_code": "330600", "name": "越城区", "type": "2" }, {
  "code": "330621",
  "p_code": "330600",
  "name": "绍兴县",
  "type": "2"
}, { "code": "330624", "p_code": "330600", "name": "新昌县", "type": "2" }, {
  "code": "330681",
  "p_code": "330600",
  "name": "诸暨市",
  "type": "2"
}, { "code": "330682", "p_code": "330600", "name": "上虞市", "type": "2" }, {
  "code": "330683",
  "p_code": "330600",
  "name": "嵊州市",
  "type": "2"
}, { "code": "330700", "p_code": "330000", "name": "金华市", "type": "1" }, {
  "code": "330701",
  "p_code": "330700",
  "name": "市辖区",
  "type": "2"
}, { "code": "330702", "p_code": "330700", "name": "婺城区", "type": "2" }, {
  "code": "330703",
  "p_code": "330700",
  "name": "金东区",
  "type": "2"
}, { "code": "330723", "p_code": "330700", "name": "武义县", "type": "2" }, {
  "code": "330726",
  "p_code": "330700",
  "name": "浦江县",
  "type": "2"
}, { "code": "330727", "p_code": "330700", "name": "磐安县", "type": "2" }, {
  "code": "330781",
  "p_code": "330700",
  "name": "兰溪市",
  "type": "2"
}, { "code": "330782", "p_code": "330700", "name": "义乌市", "type": "2" }, {
  "code": "330783",
  "p_code": "330700",
  "name": "东阳市",
  "type": "2"
}, { "code": "330784", "p_code": "330700", "name": "永康市", "type": "2" }, {
  "code": "330800",
  "p_code": "330000",
  "name": "衢州市",
  "type": "1"
}, { "code": "330801", "p_code": "330800", "name": "市辖区", "type": "2" }, {
  "code": "330802",
  "p_code": "330800",
  "name": "柯城区",
  "type": "2"
}, { "code": "330803", "p_code": "330800", "name": "衢江区", "type": "2" }, {
  "code": "330822",
  "p_code": "330800",
  "name": "常山县",
  "type": "2"
}, { "code": "330824", "p_code": "330800", "name": "开化县", "type": "2" }, {
  "code": "330825",
  "p_code": "330800",
  "name": "龙游县",
  "type": "2"
}, { "code": "330881", "p_code": "330800", "name": "江山市", "type": "2" }, {
  "code": "330900",
  "p_code": "330000",
  "name": "舟山市",
  "type": "1"
}, { "code": "330901", "p_code": "330900", "name": "市辖区", "type": "2" }, {
  "code": "330902",
  "p_code": "330900",
  "name": "定海区",
  "type": "2"
}, { "code": "330903", "p_code": "330900", "name": "普陀区", "type": "2" }, {
  "code": "330921",
  "p_code": "330900",
  "name": "岱山县",
  "type": "2"
}, { "code": "330922", "p_code": "330900", "name": "嵊泗县", "type": "2" }, {
  "code": "331000",
  "p_code": "330000",
  "name": "台州市",
  "type": "1"
}, { "code": "331001", "p_code": "331000", "name": "市辖区", "type": "2" }, {
  "code": "331002",
  "p_code": "331000",
  "name": "椒江区",
  "type": "2"
}, { "code": "331003", "p_code": "331000", "name": "黄岩区", "type": "2" }, {
  "code": "331004",
  "p_code": "331000",
  "name": "路桥区",
  "type": "2"
}, { "code": "331021", "p_code": "331000", "name": "玉环县", "type": "2" }, {
  "code": "331022",
  "p_code": "331000",
  "name": "三门县",
  "type": "2"
}, { "code": "331023", "p_code": "331000", "name": "天台县", "type": "2" }, {
  "code": "331024",
  "p_code": "331000",
  "name": "仙居县",
  "type": "2"
}, { "code": "331081", "p_code": "331000", "name": "温岭市", "type": "2" }, {
  "code": "331082",
  "p_code": "331000",
  "name": "临海市",
  "type": "2"
}, { "code": "331100", "p_code": "330000", "name": "丽水市", "type": "1" }, {
  "code": "331101",
  "p_code": "331100",
  "name": "市辖区",
  "type": "2"
}, { "code": "331102", "p_code": "331100", "name": "莲都区", "type": "2" }, {
  "code": "331121",
  "p_code": "331100",
  "name": "青田县",
  "type": "2"
}, { "code": "331122", "p_code": "331100", "name": "缙云县", "type": "2" }, {
  "code": "331123",
  "p_code": "331100",
  "name": "遂昌县",
  "type": "2"
}, { "code": "331124", "p_code": "331100", "name": "松阳县", "type": "2" }, {
  "code": "331125",
  "p_code": "331100",
  "name": "云和县",
  "type": "2"
}, { "code": "331126", "p_code": "331100", "name": "庆元县", "type": "2" }, {
  "code": "331127",
  "p_code": "331100",
  "name": "景宁畲族自治县",
  "type": "2"
}, { "code": "331181", "p_code": "331100", "name": "龙泉市", "type": "2" }, {
  "code": "340000",
  "p_code": "100000",
  "name": "安徽省",
  "type": "0"
}, { "code": "340100", "p_code": "340000", "name": "合肥市", "type": "1" }, {
  "code": "340101",
  "p_code": "340100",
  "name": "市辖区",
  "type": "2"
}, { "code": "340102", "p_code": "340100", "name": "瑶海区", "type": "2" }, {
  "code": "340103",
  "p_code": "340100",
  "name": "庐阳区",
  "type": "2"
}, { "code": "340104", "p_code": "340100", "name": "蜀山区", "type": "2" }, {
  "code": "340111",
  "p_code": "340100",
  "name": "包河区",
  "type": "2"
}, { "code": "340121", "p_code": "340100", "name": "长丰县", "type": "2" }, {
  "code": "340122",
  "p_code": "340100",
  "name": "肥东县",
  "type": "2"
}, { "code": "340123", "p_code": "340100", "name": "肥西县", "type": "2" }, {
  "code": "340200",
  "p_code": "340000",
  "name": "芜湖市",
  "type": "1"
}, { "code": "340201", "p_code": "340200", "name": "市辖区", "type": "2" }, {
  "code": "340202",
  "p_code": "340200",
  "name": "镜湖区",
  "type": "2"
}, { "code": "340203", "p_code": "340200", "name": "马塘区", "type": "2" }, {
  "code": "340204",
  "p_code": "340200",
  "name": "新芜区",
  "type": "2"
}, { "code": "340207", "p_code": "340200", "name": "鸠江区", "type": "2" }, {
  "code": "340221",
  "p_code": "340200",
  "name": "芜湖县",
  "type": "2"
}, { "code": "340222", "p_code": "340200", "name": "繁昌县", "type": "2" }, {
  "code": "340223",
  "p_code": "340200",
  "name": "南陵县",
  "type": "2"
}, { "code": "340300", "p_code": "340000", "name": "蚌埠市", "type": "1" }, {
  "code": "340301",
  "p_code": "340300",
  "name": "市辖区",
  "type": "2"
}, { "code": "340302", "p_code": "340300", "name": "龙子湖区", "type": "2" }, {
  "code": "340303",
  "p_code": "340300",
  "name": "蚌山区",
  "type": "2"
}, { "code": "340304", "p_code": "340300", "name": "禹会区", "type": "2" }, {
  "code": "340311",
  "p_code": "340300",
  "name": "淮上区",
  "type": "2"
}, { "code": "340321", "p_code": "340300", "name": "怀远县", "type": "2" }, {
  "code": "340322",
  "p_code": "340300",
  "name": "五河县",
  "type": "2"
}, { "code": "340323", "p_code": "340300", "name": "固镇县", "type": "2" }, {
  "code": "340400",
  "p_code": "340000",
  "name": "淮南市",
  "type": "1"
}, { "code": "340401", "p_code": "340400", "name": "市辖区", "type": "2" }, {
  "code": "340402",
  "p_code": "340400",
  "name": "大通区",
  "type": "2"
}, { "code": "340403", "p_code": "340400", "name": "田家庵区", "type": "2" }, {
  "code": "340404",
  "p_code": "340400",
  "name": "谢家集区",
  "type": "2"
}, { "code": "340405", "p_code": "340400", "name": "八公山区", "type": "2" }, {
  "code": "340406",
  "p_code": "340400",
  "name": "潘集区",
  "type": "2"
}, { "code": "340421", "p_code": "340400", "name": "凤台县", "type": "2" }, {
  "code": "340500",
  "p_code": "340000",
  "name": "马鞍山市",
  "type": "1"
}, { "code": "340501", "p_code": "340500", "name": "市辖区", "type": "2" }, {
  "code": "340502",
  "p_code": "340500",
  "name": "金家庄区",
  "type": "2"
}, { "code": "340503", "p_code": "340500", "name": "花山区", "type": "2" }, {
  "code": "340504",
  "p_code": "340500",
  "name": "雨山区",
  "type": "2"
}, { "code": "340521", "p_code": "340500", "name": "当涂县", "type": "2" }, {
  "code": "340600",
  "p_code": "340000",
  "name": "淮北市",
  "type": "1"
}, { "code": "340601", "p_code": "340600", "name": "市辖区", "type": "2" }, {
  "code": "340602",
  "p_code": "340600",
  "name": "杜集区",
  "type": "2"
}, { "code": "340603", "p_code": "340600", "name": "相山区", "type": "2" }, {
  "code": "340604",
  "p_code": "340600",
  "name": "烈山区",
  "type": "2"
}, { "code": "340621", "p_code": "340600", "name": "濉溪县", "type": "2" }, {
  "code": "340700",
  "p_code": "340000",
  "name": "铜陵市",
  "type": "1"
}, { "code": "340701", "p_code": "340700", "name": "市辖区", "type": "2" }, {
  "code": "340702",
  "p_code": "340700",
  "name": "铜官山区",
  "type": "2"
}, { "code": "340703", "p_code": "340700", "name": "狮子山区", "type": "2" }, {
  "code": "340711",
  "p_code": "340700",
  "name": "郊　区",
  "type": "2"
}, { "code": "340721", "p_code": "340700", "name": "铜陵县", "type": "2" }, {
  "code": "340800",
  "p_code": "340000",
  "name": "安庆市",
  "type": "1"
}, { "code": "340801", "p_code": "340800", "name": "市辖区", "type": "2" }, {
  "code": "340802",
  "p_code": "340800",
  "name": "迎江区",
  "type": "2"
}, { "code": "340803", "p_code": "340800", "name": "大观区", "type": "2" }, {
  "code": "340811",
  "p_code": "340800",
  "name": "郊　区",
  "type": "2"
}, { "code": "340822", "p_code": "340800", "name": "怀宁县", "type": "2" }, {
  "code": "340823",
  "p_code": "340800",
  "name": "枞阳县",
  "type": "2"
}, { "code": "340824", "p_code": "340800", "name": "潜山县", "type": "2" }, {
  "code": "340825",
  "p_code": "340800",
  "name": "太湖县",
  "type": "2"
}, { "code": "340826", "p_code": "340800", "name": "宿松县", "type": "2" }, {
  "code": "340827",
  "p_code": "340800",
  "name": "望江县",
  "type": "2"
}, { "code": "340828", "p_code": "340800", "name": "岳西县", "type": "2" }, {
  "code": "340881",
  "p_code": "340800",
  "name": "桐城市",
  "type": "2"
}, { "code": "341000", "p_code": "340000", "name": "黄山市", "type": "1" }, {
  "code": "341001",
  "p_code": "341000",
  "name": "市辖区",
  "type": "2"
}, { "code": "341002", "p_code": "341000", "name": "屯溪区", "type": "2" }, {
  "code": "341003",
  "p_code": "341000",
  "name": "黄山区",
  "type": "2"
}, { "code": "341004", "p_code": "341000", "name": "徽州区", "type": "2" }, {
  "code": "341021",
  "p_code": "341000",
  "name": "歙　县",
  "type": "2"
}, { "code": "341022", "p_code": "341000", "name": "休宁县", "type": "2" }, {
  "code": "341023",
  "p_code": "341000",
  "name": "黟　县",
  "type": "2"
}, { "code": "341024", "p_code": "341000", "name": "祁门县", "type": "2" }, {
  "code": "341100",
  "p_code": "340000",
  "name": "滁州市",
  "type": "1"
}, { "code": "341101", "p_code": "341100", "name": "市辖区", "type": "2" }, {
  "code": "341102",
  "p_code": "341100",
  "name": "琅琊区",
  "type": "2"
}, { "code": "341103", "p_code": "341100", "name": "南谯区", "type": "2" }, {
  "code": "341122",
  "p_code": "341100",
  "name": "来安县",
  "type": "2"
}, { "code": "341124", "p_code": "341100", "name": "全椒县", "type": "2" }, {
  "code": "341125",
  "p_code": "341100",
  "name": "定远县",
  "type": "2"
}, { "code": "341126", "p_code": "341100", "name": "凤阳县", "type": "2" }, {
  "code": "341181",
  "p_code": "341100",
  "name": "天长市",
  "type": "2"
}, { "code": "341182", "p_code": "341100", "name": "明光市", "type": "2" }, {
  "code": "341200",
  "p_code": "340000",
  "name": "阜阳市",
  "type": "1"
}, { "code": "341201", "p_code": "341200", "name": "市辖区", "type": "2" }, {
  "code": "341202",
  "p_code": "341200",
  "name": "颍州区",
  "type": "2"
}, { "code": "341203", "p_code": "341200", "name": "颍东区", "type": "2" }, {
  "code": "341204",
  "p_code": "341200",
  "name": "颍泉区",
  "type": "2"
}, { "code": "341221", "p_code": "341200", "name": "临泉县", "type": "2" }, {
  "code": "341222",
  "p_code": "341200",
  "name": "太和县",
  "type": "2"
}, { "code": "341225", "p_code": "341200", "name": "阜南县", "type": "2" }, {
  "code": "341226",
  "p_code": "341200",
  "name": "颍上县",
  "type": "2"
}, { "code": "341282", "p_code": "341200", "name": "界首市", "type": "2" }, {
  "code": "341300",
  "p_code": "340000",
  "name": "宿州市",
  "type": "1"
}, { "code": "341301", "p_code": "341300", "name": "市辖区", "type": "2" }, {
  "code": "341302",
  "p_code": "341300",
  "name": "墉桥区",
  "type": "2"
}, { "code": "341321", "p_code": "341300", "name": "砀山县", "type": "2" }, {
  "code": "341322",
  "p_code": "341300",
  "name": "萧　县",
  "type": "2"
}, { "code": "341323", "p_code": "341300", "name": "灵璧县", "type": "2" }, {
  "code": "341324",
  "p_code": "341300",
  "name": "泗　县",
  "type": "2"
}, { "code": "341400", "p_code": "340000", "name": "巢湖市", "type": "1" }, {
  "code": "341401",
  "p_code": "341400",
  "name": "市辖区",
  "type": "2"
}, { "code": "341402", "p_code": "341400", "name": "居巢区", "type": "2" }, {
  "code": "341421",
  "p_code": "341400",
  "name": "庐江县",
  "type": "2"
}, { "code": "341422", "p_code": "341400", "name": "无为县", "type": "2" }, {
  "code": "341423",
  "p_code": "341400",
  "name": "含山县",
  "type": "2"
}, { "code": "341424", "p_code": "341400", "name": "和　县", "type": "2" }, {
  "code": "341500",
  "p_code": "340000",
  "name": "六安市",
  "type": "1"
}, { "code": "341501", "p_code": "341500", "name": "市辖区", "type": "2" }, {
  "code": "341502",
  "p_code": "341500",
  "name": "金安区",
  "type": "2"
}, { "code": "341503", "p_code": "341500", "name": "裕安区", "type": "2" }, {
  "code": "341521",
  "p_code": "341500",
  "name": "寿　县",
  "type": "2"
}, { "code": "341522", "p_code": "341500", "name": "霍邱县", "type": "2" }, {
  "code": "341523",
  "p_code": "341500",
  "name": "舒城县",
  "type": "2"
}, { "code": "341524", "p_code": "341500", "name": "金寨县", "type": "2" }, {
  "code": "341525",
  "p_code": "341500",
  "name": "霍山县",
  "type": "2"
}, { "code": "341600", "p_code": "340000", "name": "亳州市", "type": "1" }, {
  "code": "341601",
  "p_code": "341600",
  "name": "市辖区",
  "type": "2"
}, { "code": "341602", "p_code": "341600", "name": "谯城区", "type": "2" }, {
  "code": "341621",
  "p_code": "341600",
  "name": "涡阳县",
  "type": "2"
}, { "code": "341622", "p_code": "341600", "name": "蒙城县", "type": "2" }, {
  "code": "341623",
  "p_code": "341600",
  "name": "利辛县",
  "type": "2"
}, { "code": "341700", "p_code": "340000", "name": "池州市", "type": "1" }, {
  "code": "341701",
  "p_code": "341700",
  "name": "市辖区",
  "type": "2"
}, { "code": "341702", "p_code": "341700", "name": "贵池区", "type": "2" }, {
  "code": "341721",
  "p_code": "341700",
  "name": "东至县",
  "type": "2"
}, { "code": "341722", "p_code": "341700", "name": "石台县", "type": "2" }, {
  "code": "341723",
  "p_code": "341700",
  "name": "青阳县",
  "type": "2"
}, { "code": "341800", "p_code": "340000", "name": "宣城市", "type": "1" }, {
  "code": "341801",
  "p_code": "341800",
  "name": "市辖区",
  "type": "2"
}, { "code": "341802", "p_code": "341800", "name": "宣州区", "type": "2" }, {
  "code": "341821",
  "p_code": "341800",
  "name": "郎溪县",
  "type": "2"
}, { "code": "341822", "p_code": "341800", "name": "广德县", "type": "2" }, {
  "code": "341823",
  "p_code": "341800",
  "name": "泾　县",
  "type": "2"
}, { "code": "341824", "p_code": "341800", "name": "绩溪县", "type": "2" }, {
  "code": "341825",
  "p_code": "341800",
  "name": "旌德县",
  "type": "2"
}, { "code": "341881", "p_code": "341800", "name": "宁国市", "type": "2" }, {
  "code": "350000",
  "p_code": "100000",
  "name": "福建省",
  "type": "0"
}, { "code": "350100", "p_code": "350000", "name": "福州市", "type": "1" }, {
  "code": "350101",
  "p_code": "350100",
  "name": "市辖区",
  "type": "2"
}, { "code": "350102", "p_code": "350100", "name": "鼓楼区", "type": "2" }, {
  "code": "350103",
  "p_code": "350100",
  "name": "台江区",
  "type": "2"
}, { "code": "350104", "p_code": "350100", "name": "仓山区", "type": "2" }, {
  "code": "350105",
  "p_code": "350100",
  "name": "马尾区",
  "type": "2"
}, { "code": "350111", "p_code": "350100", "name": "晋安区", "type": "2" }, {
  "code": "350121",
  "p_code": "350100",
  "name": "闽侯县",
  "type": "2"
}, { "code": "350122", "p_code": "350100", "name": "连江县", "type": "2" }, {
  "code": "350123",
  "p_code": "350100",
  "name": "罗源县",
  "type": "2"
}, { "code": "350124", "p_code": "350100", "name": "闽清县", "type": "2" }, {
  "code": "350125",
  "p_code": "350100",
  "name": "永泰县",
  "type": "2"
}, { "code": "350128", "p_code": "350100", "name": "平潭县", "type": "2" }, {
  "code": "350181",
  "p_code": "350100",
  "name": "福清市",
  "type": "2"
}, { "code": "350182", "p_code": "350100", "name": "长乐市", "type": "2" }, {
  "code": "350200",
  "p_code": "350000",
  "name": "厦门市",
  "type": "1"
}, { "code": "350201", "p_code": "350200", "name": "市辖区", "type": "2" }, {
  "code": "350203",
  "p_code": "350200",
  "name": "思明区",
  "type": "2"
}, { "code": "350205", "p_code": "350200", "name": "海沧区", "type": "2" }, {
  "code": "350206",
  "p_code": "350200",
  "name": "湖里区",
  "type": "2"
}, { "code": "350211", "p_code": "350200", "name": "集美区", "type": "2" }, {
  "code": "350212",
  "p_code": "350200",
  "name": "同安区",
  "type": "2"
}, { "code": "350213", "p_code": "350200", "name": "翔安区", "type": "2" }, {
  "code": "350300",
  "p_code": "350000",
  "name": "莆田市",
  "type": "1"
}, { "code": "350301", "p_code": "350300", "name": "市辖区", "type": "2" }, {
  "code": "350302",
  "p_code": "350300",
  "name": "城厢区",
  "type": "2"
}, { "code": "350303", "p_code": "350300", "name": "涵江区", "type": "2" }, {
  "code": "350304",
  "p_code": "350300",
  "name": "荔城区",
  "type": "2"
}, { "code": "350305", "p_code": "350300", "name": "秀屿区", "type": "2" }, {
  "code": "350322",
  "p_code": "350300",
  "name": "仙游县",
  "type": "2"
}, { "code": "350400", "p_code": "350000", "name": "三明市", "type": "1" }, {
  "code": "350401",
  "p_code": "350400",
  "name": "市辖区",
  "type": "2"
}, { "code": "350402", "p_code": "350400", "name": "梅列区", "type": "2" }, {
  "code": "350403",
  "p_code": "350400",
  "name": "三元区",
  "type": "2"
}, { "code": "350421", "p_code": "350400", "name": "明溪县", "type": "2" }, {
  "code": "350423",
  "p_code": "350400",
  "name": "清流县",
  "type": "2"
}, { "code": "350424", "p_code": "350400", "name": "宁化县", "type": "2" }, {
  "code": "350425",
  "p_code": "350400",
  "name": "大田县",
  "type": "2"
}, { "code": "350426", "p_code": "350400", "name": "尤溪县", "type": "2" }, {
  "code": "350427",
  "p_code": "350400",
  "name": "沙　县",
  "type": "2"
}, { "code": "350428", "p_code": "350400", "name": "将乐县", "type": "2" }, {
  "code": "350429",
  "p_code": "350400",
  "name": "泰宁县",
  "type": "2"
}, { "code": "350430", "p_code": "350400", "name": "建宁县", "type": "2" }, {
  "code": "350481",
  "p_code": "350400",
  "name": "永安市",
  "type": "2"
}, { "code": "350500", "p_code": "350000", "name": "泉州市", "type": "1" }, {
  "code": "350501",
  "p_code": "350500",
  "name": "市辖区",
  "type": "2"
}, { "code": "350502", "p_code": "350500", "name": "鲤城区", "type": "2" }, {
  "code": "350503",
  "p_code": "350500",
  "name": "丰泽区",
  "type": "2"
}, { "code": "350504", "p_code": "350500", "name": "洛江区", "type": "2" }, {
  "code": "350505",
  "p_code": "350500",
  "name": "泉港区",
  "type": "2"
}, { "code": "350521", "p_code": "350500", "name": "惠安县", "type": "2" }, {
  "code": "350524",
  "p_code": "350500",
  "name": "安溪县",
  "type": "2"
}, { "code": "350525", "p_code": "350500", "name": "永春县", "type": "2" }, {
  "code": "350526",
  "p_code": "350500",
  "name": "德化县",
  "type": "2"
}, { "code": "350527", "p_code": "350500", "name": "金门县", "type": "2" }, {
  "code": "350581",
  "p_code": "350500",
  "name": "石狮市",
  "type": "2"
}, { "code": "350582", "p_code": "350500", "name": "晋江市", "type": "2" }, {
  "code": "350583",
  "p_code": "350500",
  "name": "南安市",
  "type": "2"
}, { "code": "350600", "p_code": "350000", "name": "漳州市", "type": "1" }, {
  "code": "350601",
  "p_code": "350600",
  "name": "市辖区",
  "type": "2"
}, { "code": "350602", "p_code": "350600", "name": "芗城区", "type": "2" }, {
  "code": "350603",
  "p_code": "350600",
  "name": "龙文区",
  "type": "2"
}, { "code": "350622", "p_code": "350600", "name": "云霄县", "type": "2" }, {
  "code": "350623",
  "p_code": "350600",
  "name": "漳浦县",
  "type": "2"
}, { "code": "350624", "p_code": "350600", "name": "诏安县", "type": "2" }, {
  "code": "350625",
  "p_code": "350600",
  "name": "长泰县",
  "type": "2"
}, { "code": "350626", "p_code": "350600", "name": "东山县", "type": "2" }, {
  "code": "350627",
  "p_code": "350600",
  "name": "南靖县",
  "type": "2"
}, { "code": "350628", "p_code": "350600", "name": "平和县", "type": "2" }, {
  "code": "350629",
  "p_code": "350600",
  "name": "华安县",
  "type": "2"
}, { "code": "350681", "p_code": "350600", "name": "龙海市", "type": "2" }, {
  "code": "350700",
  "p_code": "350000",
  "name": "南平市",
  "type": "1"
}, { "code": "350701", "p_code": "350700", "name": "市辖区", "type": "2" }, {
  "code": "350702",
  "p_code": "350700",
  "name": "延平区",
  "type": "2"
}, { "code": "350721", "p_code": "350700", "name": "顺昌县", "type": "2" }, {
  "code": "350722",
  "p_code": "350700",
  "name": "浦城县",
  "type": "2"
}, { "code": "350723", "p_code": "350700", "name": "光泽县", "type": "2" }, {
  "code": "350724",
  "p_code": "350700",
  "name": "松溪县",
  "type": "2"
}, { "code": "350725", "p_code": "350700", "name": "政和县", "type": "2" }, {
  "code": "350781",
  "p_code": "350700",
  "name": "邵武市",
  "type": "2"
}, { "code": "350782", "p_code": "350700", "name": "武夷山市", "type": "2" }, {
  "code": "350783",
  "p_code": "350700",
  "name": "建瓯市",
  "type": "2"
}, { "code": "350784", "p_code": "350700", "name": "建阳市", "type": "2" }, {
  "code": "350800",
  "p_code": "350000",
  "name": "龙岩市",
  "type": "1"
}, { "code": "350801", "p_code": "350800", "name": "市辖区", "type": "2" }, {
  "code": "350802",
  "p_code": "350800",
  "name": "新罗区",
  "type": "2"
}, { "code": "350821", "p_code": "350800", "name": "长汀县", "type": "2" }, {
  "code": "350822",
  "p_code": "350800",
  "name": "永定县",
  "type": "2"
}, { "code": "350823", "p_code": "350800", "name": "上杭县", "type": "2" }, {
  "code": "350824",
  "p_code": "350800",
  "name": "武平县",
  "type": "2"
}, { "code": "350825", "p_code": "350800", "name": "连城县", "type": "2" }, {
  "code": "350881",
  "p_code": "350800",
  "name": "漳平市",
  "type": "2"
}, { "code": "350900", "p_code": "350000", "name": "宁德市", "type": "1" }, {
  "code": "350901",
  "p_code": "350900",
  "name": "市辖区",
  "type": "2"
}, { "code": "350902", "p_code": "350900", "name": "蕉城区", "type": "2" }, {
  "code": "350921",
  "p_code": "350900",
  "name": "霞浦县",
  "type": "2"
}, { "code": "350922", "p_code": "350900", "name": "古田县", "type": "2" }, {
  "code": "350923",
  "p_code": "350900",
  "name": "屏南县",
  "type": "2"
}, { "code": "350924", "p_code": "350900", "name": "寿宁县", "type": "2" }, {
  "code": "350925",
  "p_code": "350900",
  "name": "周宁县",
  "type": "2"
}, { "code": "350926", "p_code": "350900", "name": "柘荣县", "type": "2" }, {
  "code": "350981",
  "p_code": "350900",
  "name": "福安市",
  "type": "2"
}, { "code": "350982", "p_code": "350900", "name": "福鼎市", "type": "2" }, {
  "code": "360000",
  "p_code": "100000",
  "name": "江西省",
  "type": "0"
}, { "code": "360100", "p_code": "360000", "name": "南昌市", "type": "1" }, {
  "code": "360101",
  "p_code": "360100",
  "name": "市辖区",
  "type": "2"
}, { "code": "360102", "p_code": "360100", "name": "东湖区", "type": "2" }, {
  "code": "360103",
  "p_code": "360100",
  "name": "西湖区",
  "type": "2"
}, { "code": "360104", "p_code": "360100", "name": "青云谱区", "type": "2" }, {
  "code": "360105",
  "p_code": "360100",
  "name": "湾里区",
  "type": "2"
}, { "code": "360111", "p_code": "360100", "name": "青山湖区", "type": "2" }, {
  "code": "360121",
  "p_code": "360100",
  "name": "南昌县",
  "type": "2"
}, { "code": "360122", "p_code": "360100", "name": "新建县", "type": "2" }, {
  "code": "360123",
  "p_code": "360100",
  "name": "安义县",
  "type": "2"
}, { "code": "360124", "p_code": "360100", "name": "进贤县", "type": "2" }, {
  "code": "360200",
  "p_code": "360000",
  "name": "景德镇市",
  "type": "1"
}, { "code": "360201", "p_code": "360200", "name": "市辖区", "type": "2" }, {
  "code": "360202",
  "p_code": "360200",
  "name": "昌江区",
  "type": "2"
}, { "code": "360203", "p_code": "360200", "name": "珠山区", "type": "2" }, {
  "code": "360222",
  "p_code": "360200",
  "name": "浮梁县",
  "type": "2"
}, { "code": "360281", "p_code": "360200", "name": "乐平市", "type": "2" }, {
  "code": "360300",
  "p_code": "360000",
  "name": "萍乡市",
  "type": "1"
}, { "code": "360301", "p_code": "360300", "name": "市辖区", "type": "2" }, {
  "code": "360302",
  "p_code": "360300",
  "name": "安源区",
  "type": "2"
}, { "code": "360313", "p_code": "360300", "name": "湘东区", "type": "2" }, {
  "code": "360321",
  "p_code": "360300",
  "name": "莲花县",
  "type": "2"
}, { "code": "360322", "p_code": "360300", "name": "上栗县", "type": "2" }, {
  "code": "360323",
  "p_code": "360300",
  "name": "芦溪县",
  "type": "2"
}, { "code": "360400", "p_code": "360000", "name": "九江市", "type": "1" }, {
  "code": "360401",
  "p_code": "360400",
  "name": "市辖区",
  "type": "2"
}, { "code": "360402", "p_code": "360400", "name": "庐山区", "type": "2" }, {
  "code": "360403",
  "p_code": "360400",
  "name": "浔阳区",
  "type": "2"
}, { "code": "360421", "p_code": "360400", "name": "九江县", "type": "2" }, {
  "code": "360423",
  "p_code": "360400",
  "name": "武宁县",
  "type": "2"
}, { "code": "360424", "p_code": "360400", "name": "修水县", "type": "2" }, {
  "code": "360425",
  "p_code": "360400",
  "name": "永修县",
  "type": "2"
}, { "code": "360426", "p_code": "360400", "name": "德安县", "type": "2" }, {
  "code": "360427",
  "p_code": "360400",
  "name": "星子县",
  "type": "2"
}, { "code": "360428", "p_code": "360400", "name": "都昌县", "type": "2" }, {
  "code": "360429",
  "p_code": "360400",
  "name": "湖口县",
  "type": "2"
}, { "code": "360430", "p_code": "360400", "name": "彭泽县", "type": "2" }, {
  "code": "360481",
  "p_code": "360400",
  "name": "瑞昌市",
  "type": "2"
}, { "code": "360500", "p_code": "360000", "name": "新余市", "type": "1" }, {
  "code": "360501",
  "p_code": "360500",
  "name": "市辖区",
  "type": "2"
}, { "code": "360502", "p_code": "360500", "name": "渝水区", "type": "2" }, {
  "code": "360521",
  "p_code": "360500",
  "name": "分宜县",
  "type": "2"
}, { "code": "360600", "p_code": "360000", "name": "鹰潭市", "type": "1" }, {
  "code": "360601",
  "p_code": "360600",
  "name": "市辖区",
  "type": "2"
}, { "code": "360602", "p_code": "360600", "name": "月湖区", "type": "2" }, {
  "code": "360622",
  "p_code": "360600",
  "name": "余江县",
  "type": "2"
}, { "code": "360681", "p_code": "360600", "name": "贵溪市", "type": "2" }, {
  "code": "360700",
  "p_code": "360000",
  "name": "赣州市",
  "type": "1"
}, { "code": "360701", "p_code": "360700", "name": "市辖区", "type": "2" }, {
  "code": "360702",
  "p_code": "360700",
  "name": "章贡区",
  "type": "2"
}, { "code": "360721", "p_code": "360700", "name": "赣　县", "type": "2" }, {
  "code": "360722",
  "p_code": "360700",
  "name": "信丰县",
  "type": "2"
}, { "code": "360723", "p_code": "360700", "name": "大余县", "type": "2" }, {
  "code": "360724",
  "p_code": "360700",
  "name": "上犹县",
  "type": "2"
}, { "code": "360725", "p_code": "360700", "name": "崇义县", "type": "2" }, {
  "code": "360726",
  "p_code": "360700",
  "name": "安远县",
  "type": "2"
}, { "code": "360727", "p_code": "360700", "name": "龙南县", "type": "2" }, {
  "code": "360728",
  "p_code": "360700",
  "name": "定南县",
  "type": "2"
}, { "code": "360729", "p_code": "360700", "name": "全南县", "type": "2" }, {
  "code": "360730",
  "p_code": "360700",
  "name": "宁都县",
  "type": "2"
}, { "code": "360731", "p_code": "360700", "name": "于都县", "type": "2" }, {
  "code": "360732",
  "p_code": "360700",
  "name": "兴国县",
  "type": "2"
}, { "code": "360733", "p_code": "360700", "name": "会昌县", "type": "2" }, {
  "code": "360734",
  "p_code": "360700",
  "name": "寻乌县",
  "type": "2"
}, { "code": "360735", "p_code": "360700", "name": "石城县", "type": "2" }, {
  "code": "360781",
  "p_code": "360700",
  "name": "瑞金市",
  "type": "2"
}, { "code": "360782", "p_code": "360700", "name": "南康市", "type": "2" }, {
  "code": "360800",
  "p_code": "360000",
  "name": "吉安市",
  "type": "1"
}, { "code": "360801", "p_code": "360800", "name": "市辖区", "type": "2" }, {
  "code": "360802",
  "p_code": "360800",
  "name": "吉州区",
  "type": "2"
}, { "code": "360803", "p_code": "360800", "name": "青原区", "type": "2" }, {
  "code": "360821",
  "p_code": "360800",
  "name": "吉安县",
  "type": "2"
}, { "code": "360822", "p_code": "360800", "name": "吉水县", "type": "2" }, {
  "code": "360823",
  "p_code": "360800",
  "name": "峡江县",
  "type": "2"
}, { "code": "360824", "p_code": "360800", "name": "新干县", "type": "2" }, {
  "code": "360825",
  "p_code": "360800",
  "name": "永丰县",
  "type": "2"
}, { "code": "360826", "p_code": "360800", "name": "泰和县", "type": "2" }, {
  "code": "360827",
  "p_code": "360800",
  "name": "遂川县",
  "type": "2"
}, { "code": "360828", "p_code": "360800", "name": "万安县", "type": "2" }, {
  "code": "360829",
  "p_code": "360800",
  "name": "安福县",
  "type": "2"
}, { "code": "360830", "p_code": "360800", "name": "永新县", "type": "2" }, {
  "code": "360881",
  "p_code": "360800",
  "name": "井冈山市",
  "type": "2"
}, { "code": "360900", "p_code": "360000", "name": "宜春市", "type": "1" }, {
  "code": "360901",
  "p_code": "360900",
  "name": "市辖区",
  "type": "2"
}, { "code": "360902", "p_code": "360900", "name": "袁州区", "type": "2" }, {
  "code": "360921",
  "p_code": "360900",
  "name": "奉新县",
  "type": "2"
}, { "code": "360922", "p_code": "360900", "name": "万载县", "type": "2" }, {
  "code": "360923",
  "p_code": "360900",
  "name": "上高县",
  "type": "2"
}, { "code": "360924", "p_code": "360900", "name": "宜丰县", "type": "2" }, {
  "code": "360925",
  "p_code": "360900",
  "name": "靖安县",
  "type": "2"
}, { "code": "360926", "p_code": "360900", "name": "铜鼓县", "type": "2" }, {
  "code": "360981",
  "p_code": "360900",
  "name": "丰城市",
  "type": "2"
}, { "code": "360982", "p_code": "360900", "name": "樟树市", "type": "2" }, {
  "code": "360983",
  "p_code": "360900",
  "name": "高安市",
  "type": "2"
}, { "code": "361000", "p_code": "360000", "name": "抚州市", "type": "1" }, {
  "code": "361001",
  "p_code": "361000",
  "name": "市辖区",
  "type": "2"
}, { "code": "361002", "p_code": "361000", "name": "临川区", "type": "2" }, {
  "code": "361021",
  "p_code": "361000",
  "name": "南城县",
  "type": "2"
}, { "code": "361022", "p_code": "361000", "name": "黎川县", "type": "2" }, {
  "code": "361023",
  "p_code": "361000",
  "name": "南丰县",
  "type": "2"
}, { "code": "361024", "p_code": "361000", "name": "崇仁县", "type": "2" }, {
  "code": "361025",
  "p_code": "361000",
  "name": "乐安县",
  "type": "2"
}, { "code": "361026", "p_code": "361000", "name": "宜黄县", "type": "2" }, {
  "code": "361027",
  "p_code": "361000",
  "name": "金溪县",
  "type": "2"
}, { "code": "361028", "p_code": "361000", "name": "资溪县", "type": "2" }, {
  "code": "361029",
  "p_code": "361000",
  "name": "东乡县",
  "type": "2"
}, { "code": "361030", "p_code": "361000", "name": "广昌县", "type": "2" }, {
  "code": "361100",
  "p_code": "360000",
  "name": "上饶市",
  "type": "1"
}, { "code": "361101", "p_code": "361100", "name": "市辖区", "type": "2" }, {
  "code": "361102",
  "p_code": "361100",
  "name": "信州区",
  "type": "2"
}, { "code": "361121", "p_code": "361100", "name": "上饶县", "type": "2" }, {
  "code": "361122",
  "p_code": "361100",
  "name": "广丰县",
  "type": "2"
}, { "code": "361123", "p_code": "361100", "name": "玉山县", "type": "2" }, {
  "code": "361124",
  "p_code": "361100",
  "name": "铅山县",
  "type": "2"
}, { "code": "361125", "p_code": "361100", "name": "横峰县", "type": "2" }, {
  "code": "361126",
  "p_code": "361100",
  "name": "弋阳县",
  "type": "2"
}, { "code": "361127", "p_code": "361100", "name": "余干县", "type": "2" }, {
  "code": "361128",
  "p_code": "361100",
  "name": "鄱阳县",
  "type": "2"
}, { "code": "361129", "p_code": "361100", "name": "万年县", "type": "2" }, {
  "code": "361130",
  "p_code": "361100",
  "name": "婺源县",
  "type": "2"
}, { "code": "361181", "p_code": "361100", "name": "德兴市", "type": "2" }, {
  "code": "370000",
  "p_code": "100000",
  "name": "山东省",
  "type": "0"
}, { "code": "370100", "p_code": "370000", "name": "济南市", "type": "1" }, {
  "code": "370101",
  "p_code": "370100",
  "name": "市辖区",
  "type": "2"
}, { "code": "370102", "p_code": "370100", "name": "历下区", "type": "2" }, {
  "code": "370103",
  "p_code": "370100",
  "name": "市中区",
  "type": "2"
}, { "code": "370104", "p_code": "370100", "name": "槐荫区", "type": "2" }, {
  "code": "370105",
  "p_code": "370100",
  "name": "天桥区",
  "type": "2"
}, { "code": "370112", "p_code": "370100", "name": "历城区", "type": "2" }, {
  "code": "370113",
  "p_code": "370100",
  "name": "长清区",
  "type": "2"
}, { "code": "370124", "p_code": "370100", "name": "平阴县", "type": "2" }, {
  "code": "370125",
  "p_code": "370100",
  "name": "济阳县",
  "type": "2"
}, { "code": "370126", "p_code": "370100", "name": "商河县", "type": "2" }, {
  "code": "370181",
  "p_code": "370100",
  "name": "章丘市",
  "type": "2"
}, { "code": "370200", "p_code": "370000", "name": "青岛市", "type": "1" }, {
  "code": "370201",
  "p_code": "370200",
  "name": "市辖区",
  "type": "2"
}, { "code": "370202", "p_code": "370200", "name": "市南区", "type": "2" }, {
  "code": "370203",
  "p_code": "370200",
  "name": "市北区",
  "type": "2"
}, { "code": "370205", "p_code": "370200", "name": "四方区", "type": "2" }, {
  "code": "370211",
  "p_code": "370200",
  "name": "黄岛区",
  "type": "2"
}, { "code": "370212", "p_code": "370200", "name": "崂山区", "type": "2" }, {
  "code": "370213",
  "p_code": "370200",
  "name": "李沧区",
  "type": "2"
}, { "code": "370214", "p_code": "370200", "name": "城阳区", "type": "2" }, {
  "code": "370281",
  "p_code": "370200",
  "name": "胶州市",
  "type": "2"
}, { "code": "370282", "p_code": "370200", "name": "即墨市", "type": "2" }, {
  "code": "370283",
  "p_code": "370200",
  "name": "平度市",
  "type": "2"
}, { "code": "370284", "p_code": "370200", "name": "胶南市", "type": "2" }, {
  "code": "370285",
  "p_code": "370200",
  "name": "莱西市",
  "type": "2"
}, { "code": "370300", "p_code": "370000", "name": "淄博市", "type": "1" }, {
  "code": "370301",
  "p_code": "370300",
  "name": "市辖区",
  "type": "2"
}, { "code": "370302", "p_code": "370300", "name": "淄川区", "type": "2" }, {
  "code": "370303",
  "p_code": "370300",
  "name": "张店区",
  "type": "2"
}, { "code": "370304", "p_code": "370300", "name": "博山区", "type": "2" }, {
  "code": "370305",
  "p_code": "370300",
  "name": "临淄区",
  "type": "2"
}, { "code": "370306", "p_code": "370300", "name": "周村区", "type": "2" }, {
  "code": "370321",
  "p_code": "370300",
  "name": "桓台县",
  "type": "2"
}, { "code": "370322", "p_code": "370300", "name": "高青县", "type": "2" }, {
  "code": "370323",
  "p_code": "370300",
  "name": "沂源县",
  "type": "2"
}, { "code": "370400", "p_code": "370000", "name": "枣庄市", "type": "1" }, {
  "code": "370401",
  "p_code": "370400",
  "name": "市辖区",
  "type": "2"
}, { "code": "370402", "p_code": "370400", "name": "市中区", "type": "2" }, {
  "code": "370403",
  "p_code": "370400",
  "name": "薛城区",
  "type": "2"
}, { "code": "370404", "p_code": "370400", "name": "峄城区", "type": "2" }, {
  "code": "370405",
  "p_code": "370400",
  "name": "台儿庄区",
  "type": "2"
}, { "code": "370406", "p_code": "370400", "name": "山亭区", "type": "2" }, {
  "code": "370481",
  "p_code": "370400",
  "name": "滕州市",
  "type": "2"
}, { "code": "370500", "p_code": "370000", "name": "东营市", "type": "1" }, {
  "code": "370501",
  "p_code": "370500",
  "name": "市辖区",
  "type": "2"
}, { "code": "370502", "p_code": "370500", "name": "东营区", "type": "2" }, {
  "code": "370503",
  "p_code": "370500",
  "name": "河口区",
  "type": "2"
}, { "code": "370521", "p_code": "370500", "name": "垦利县", "type": "2" }, {
  "code": "370522",
  "p_code": "370500",
  "name": "利津县",
  "type": "2"
}, { "code": "370523", "p_code": "370500", "name": "广饶县", "type": "2" }, {
  "code": "370600",
  "p_code": "370000",
  "name": "烟台市",
  "type": "1"
}, { "code": "370601", "p_code": "370600", "name": "市辖区", "type": "2" }, {
  "code": "370602",
  "p_code": "370600",
  "name": "芝罘区",
  "type": "2"
}, { "code": "370611", "p_code": "370600", "name": "福山区", "type": "2" }, {
  "code": "370612",
  "p_code": "370600",
  "name": "牟平区",
  "type": "2"
}, { "code": "370613", "p_code": "370600", "name": "莱山区", "type": "2" }, {
  "code": "370634",
  "p_code": "370600",
  "name": "长岛县",
  "type": "2"
}, { "code": "370681", "p_code": "370600", "name": "龙口市", "type": "2" }, {
  "code": "370682",
  "p_code": "370600",
  "name": "莱阳市",
  "type": "2"
}, { "code": "370683", "p_code": "370600", "name": "莱州市", "type": "2" }, {
  "code": "370684",
  "p_code": "370600",
  "name": "蓬莱市",
  "type": "2"
}, { "code": "370685", "p_code": "370600", "name": "招远市", "type": "2" }, {
  "code": "370686",
  "p_code": "370600",
  "name": "栖霞市",
  "type": "2"
}, { "code": "370687", "p_code": "370600", "name": "海阳市", "type": "2" }, {
  "code": "370700",
  "p_code": "370000",
  "name": "潍坊市",
  "type": "1"
}, { "code": "370701", "p_code": "370700", "name": "市辖区", "type": "2" }, {
  "code": "370702",
  "p_code": "370700",
  "name": "潍城区",
  "type": "2"
}, { "code": "370703", "p_code": "370700", "name": "寒亭区", "type": "2" }, {
  "code": "370704",
  "p_code": "370700",
  "name": "坊子区",
  "type": "2"
}, { "code": "370705", "p_code": "370700", "name": "奎文区", "type": "2" }, {
  "code": "370724",
  "p_code": "370700",
  "name": "临朐县",
  "type": "2"
}, { "code": "370725", "p_code": "370700", "name": "昌乐县", "type": "2" }, {
  "code": "370781",
  "p_code": "370700",
  "name": "青州市",
  "type": "2"
}, { "code": "370782", "p_code": "370700", "name": "诸城市", "type": "2" }, {
  "code": "370783",
  "p_code": "370700",
  "name": "寿光市",
  "type": "2"
}, { "code": "370784", "p_code": "370700", "name": "安丘市", "type": "2" }, {
  "code": "370785",
  "p_code": "370700",
  "name": "高密市",
  "type": "2"
}, { "code": "370786", "p_code": "370700", "name": "昌邑市", "type": "2" }, {
  "code": "370800",
  "p_code": "370000",
  "name": "济宁市",
  "type": "1"
}, { "code": "370801", "p_code": "370800", "name": "市辖区", "type": "2" }, {
  "code": "370802",
  "p_code": "370800",
  "name": "市中区",
  "type": "2"
}, { "code": "370811", "p_code": "370800", "name": "任城区", "type": "2" }, {
  "code": "370826",
  "p_code": "370800",
  "name": "微山县",
  "type": "2"
}, { "code": "370827", "p_code": "370800", "name": "鱼台县", "type": "2" }, {
  "code": "370828",
  "p_code": "370800",
  "name": "金乡县",
  "type": "2"
}, { "code": "370829", "p_code": "370800", "name": "嘉祥县", "type": "2" }, {
  "code": "370830",
  "p_code": "370800",
  "name": "汶上县",
  "type": "2"
}, { "code": "370831", "p_code": "370800", "name": "泗水县", "type": "2" }, {
  "code": "370832",
  "p_code": "370800",
  "name": "梁山县",
  "type": "2"
}, { "code": "370881", "p_code": "370800", "name": "曲阜市", "type": "2" }, {
  "code": "370882",
  "p_code": "370800",
  "name": "兖州市",
  "type": "2"
}, { "code": "370883", "p_code": "370800", "name": "邹城市", "type": "2" }, {
  "code": "370900",
  "p_code": "370000",
  "name": "泰安市",
  "type": "1"
}, { "code": "370901", "p_code": "370900", "name": "市辖区", "type": "2" }, {
  "code": "370902",
  "p_code": "370900",
  "name": "泰山区",
  "type": "2"
}, { "code": "370903", "p_code": "370900", "name": "岱岳区", "type": "2" }, {
  "code": "370921",
  "p_code": "370900",
  "name": "宁阳县",
  "type": "2"
}, { "code": "370923", "p_code": "370900", "name": "东平县", "type": "2" }, {
  "code": "370982",
  "p_code": "370900",
  "name": "新泰市",
  "type": "2"
}, { "code": "370983", "p_code": "370900", "name": "肥城市", "type": "2" }, {
  "code": "371000",
  "p_code": "370000",
  "name": "威海市",
  "type": "1"
}, { "code": "371001", "p_code": "371000", "name": "市辖区", "type": "2" }, {
  "code": "371002",
  "p_code": "371000",
  "name": "环翠区",
  "type": "2"
}, { "code": "371081", "p_code": "371000", "name": "文登市", "type": "2" }, {
  "code": "371082",
  "p_code": "371000",
  "name": "荣成市",
  "type": "2"
}, { "code": "371083", "p_code": "371000", "name": "乳山市", "type": "2" }, {
  "code": "371100",
  "p_code": "370000",
  "name": "日照市",
  "type": "1"
}, { "code": "371101", "p_code": "371100", "name": "市辖区", "type": "2" }, {
  "code": "371102",
  "p_code": "371100",
  "name": "东港区",
  "type": "2"
}, { "code": "371103", "p_code": "371100", "name": "岚山区", "type": "2" }, {
  "code": "371121",
  "p_code": "371100",
  "name": "五莲县",
  "type": "2"
}, { "code": "371122", "p_code": "371100", "name": "莒　县", "type": "2" }, {
  "code": "371200",
  "p_code": "370000",
  "name": "莱芜市",
  "type": "1"
}, { "code": "371201", "p_code": "371200", "name": "市辖区", "type": "2" }, {
  "code": "371202",
  "p_code": "371200",
  "name": "莱城区",
  "type": "2"
}, { "code": "371203", "p_code": "371200", "name": "钢城区", "type": "2" }, {
  "code": "371300",
  "p_code": "370000",
  "name": "临沂市",
  "type": "1"
}, { "code": "371301", "p_code": "371300", "name": "市辖区", "type": "2" }, {
  "code": "371302",
  "p_code": "371300",
  "name": "兰山区",
  "type": "2"
}, { "code": "371311", "p_code": "371300", "name": "罗庄区", "type": "2" }, {
  "code": "371312",
  "p_code": "371300",
  "name": "河东区",
  "type": "2"
}, { "code": "371321", "p_code": "371300", "name": "沂南县", "type": "2" }, {
  "code": "371322",
  "p_code": "371300",
  "name": "郯城县",
  "type": "2"
}, { "code": "371323", "p_code": "371300", "name": "沂水县", "type": "2" }, {
  "code": "371324",
  "p_code": "371300",
  "name": "苍山县",
  "type": "2"
}, { "code": "371325", "p_code": "371300", "name": "费　县", "type": "2" }, {
  "code": "371326",
  "p_code": "371300",
  "name": "平邑县",
  "type": "2"
}, { "code": "371327", "p_code": "371300", "name": "莒南县", "type": "2" }, {
  "code": "371328",
  "p_code": "371300",
  "name": "蒙阴县",
  "type": "2"
}, { "code": "371329", "p_code": "371300", "name": "临沭县", "type": "2" }, {
  "code": "371400",
  "p_code": "370000",
  "name": "德州市",
  "type": "1"
}, { "code": "371401", "p_code": "371400", "name": "市辖区", "type": "2" }, {
  "code": "371402",
  "p_code": "371400",
  "name": "德城区",
  "type": "2"
}, { "code": "371421", "p_code": "371400", "name": "陵　县", "type": "2" }, {
  "code": "371422",
  "p_code": "371400",
  "name": "宁津县",
  "type": "2"
}, { "code": "371423", "p_code": "371400", "name": "庆云县", "type": "2" }, {
  "code": "371424",
  "p_code": "371400",
  "name": "临邑县",
  "type": "2"
}, { "code": "371425", "p_code": "371400", "name": "齐河县", "type": "2" }, {
  "code": "371426",
  "p_code": "371400",
  "name": "平原县",
  "type": "2"
}, { "code": "371427", "p_code": "371400", "name": "夏津县", "type": "2" }, {
  "code": "371428",
  "p_code": "371400",
  "name": "武城县",
  "type": "2"
}, { "code": "371481", "p_code": "371400", "name": "乐陵市", "type": "2" }, {
  "code": "371482",
  "p_code": "371400",
  "name": "禹城市",
  "type": "2"
}, { "code": "371500", "p_code": "370000", "name": "聊城市", "type": "1" }, {
  "code": "371501",
  "p_code": "371500",
  "name": "市辖区",
  "type": "2"
}, { "code": "371502", "p_code": "371500", "name": "东昌府区", "type": "2" }, {
  "code": "371521",
  "p_code": "371500",
  "name": "阳谷县",
  "type": "2"
}, { "code": "371522", "p_code": "371500", "name": "莘　县", "type": "2" }, {
  "code": "371523",
  "p_code": "371500",
  "name": "茌平县",
  "type": "2"
}, { "code": "371524", "p_code": "371500", "name": "东阿县", "type": "2" }, {
  "code": "371525",
  "p_code": "371500",
  "name": "冠　县",
  "type": "2"
}, { "code": "371526", "p_code": "371500", "name": "高唐县", "type": "2" }, {
  "code": "371581",
  "p_code": "371500",
  "name": "临清市",
  "type": "2"
}, { "code": "371600", "p_code": "370000", "name": "滨州市", "type": "1" }, {
  "code": "371601",
  "p_code": "371600",
  "name": "市辖区",
  "type": "2"
}, { "code": "371602", "p_code": "371600", "name": "滨城区", "type": "2" }, {
  "code": "371621",
  "p_code": "371600",
  "name": "惠民县",
  "type": "2"
}, { "code": "371622", "p_code": "371600", "name": "阳信县", "type": "2" }, {
  "code": "371623",
  "p_code": "371600",
  "name": "无棣县",
  "type": "2"
}, { "code": "371624", "p_code": "371600", "name": "沾化县", "type": "2" }, {
  "code": "371625",
  "p_code": "371600",
  "name": "博兴县",
  "type": "2"
}, { "code": "371626", "p_code": "371600", "name": "邹平县", "type": "2" }, {
  "code": "371700",
  "p_code": "370000",
  "name": "荷泽市",
  "type": "1"
}, { "code": "371701", "p_code": "371700", "name": "市辖区", "type": "2" }, {
  "code": "371702",
  "p_code": "371700",
  "name": "牡丹区",
  "type": "2"
}, { "code": "371721", "p_code": "371700", "name": "曹　县", "type": "2" }, {
  "code": "371722",
  "p_code": "371700",
  "name": "单　县",
  "type": "2"
}, { "code": "371723", "p_code": "371700", "name": "成武县", "type": "2" }, {
  "code": "371724",
  "p_code": "371700",
  "name": "巨野县",
  "type": "2"
}, { "code": "371725", "p_code": "371700", "name": "郓城县", "type": "2" }, {
  "code": "371726",
  "p_code": "371700",
  "name": "鄄城县",
  "type": "2"
}, { "code": "371727", "p_code": "371700", "name": "定陶县", "type": "2" }, {
  "code": "371728",
  "p_code": "371700",
  "name": "东明县",
  "type": "2"
}, { "code": "410000", "p_code": "100000", "name": "河南省", "type": "0" }, {
  "code": "410100",
  "p_code": "410000",
  "name": "郑州市",
  "type": "1"
}, { "code": "410101", "p_code": "410100", "name": "市辖区", "type": "2" }, {
  "code": "410102",
  "p_code": "410100",
  "name": "中原区",
  "type": "2"
}, { "code": "410103", "p_code": "410100", "name": "二七区", "type": "2" }, {
  "code": "410104",
  "p_code": "410100",
  "name": "管城回族区",
  "type": "2"
}, { "code": "410105", "p_code": "410100", "name": "金水区", "type": "2" }, {
  "code": "410106",
  "p_code": "410100",
  "name": "上街区",
  "type": "2"
}, { "code": "410108", "p_code": "410100", "name": "邙山区", "type": "2" }, {
  "code": "410122",
  "p_code": "410100",
  "name": "中牟县",
  "type": "2"
}, { "code": "410181", "p_code": "410100", "name": "巩义市", "type": "2" }, {
  "code": "410182",
  "p_code": "410100",
  "name": "荥阳市",
  "type": "2"
}, { "code": "410183", "p_code": "410100", "name": "新密市", "type": "2" }, {
  "code": "410184",
  "p_code": "410100",
  "name": "新郑市",
  "type": "2"
}, { "code": "410185", "p_code": "410100", "name": "登封市", "type": "2" }, {
  "code": "410200",
  "p_code": "410000",
  "name": "开封市",
  "type": "1"
}, { "code": "410201", "p_code": "410200", "name": "市辖区", "type": "2" }, {
  "code": "410202",
  "p_code": "410200",
  "name": "龙亭区",
  "type": "2"
}, { "code": "410203", "p_code": "410200", "name": "顺河回族区", "type": "2" }, {
  "code": "410204",
  "p_code": "410200",
  "name": "鼓楼区",
  "type": "2"
}, { "code": "410205", "p_code": "410200", "name": "南关区", "type": "2" }, {
  "code": "410211",
  "p_code": "410200",
  "name": "郊　区",
  "type": "2"
}, { "code": "410221", "p_code": "410200", "name": "杞　县", "type": "2" }, {
  "code": "410222",
  "p_code": "410200",
  "name": "通许县",
  "type": "2"
}, { "code": "410223", "p_code": "410200", "name": "尉氏县", "type": "2" }, {
  "code": "410224",
  "p_code": "410200",
  "name": "开封县",
  "type": "2"
}, { "code": "410225", "p_code": "410200", "name": "兰考县", "type": "2" }, {
  "code": "410300",
  "p_code": "410000",
  "name": "洛阳市",
  "type": "1"
}, { "code": "410301", "p_code": "410300", "name": "市辖区", "type": "2" }, {
  "code": "410302",
  "p_code": "410300",
  "name": "老城区",
  "type": "2"
}, { "code": "410303", "p_code": "410300", "name": "西工区", "type": "2" }, {
  "code": "410304",
  "p_code": "410300",
  "name": "廛河回族区",
  "type": "2"
}, { "code": "410305", "p_code": "410300", "name": "涧西区", "type": "2" }, {
  "code": "410306",
  "p_code": "410300",
  "name": "吉利区",
  "type": "2"
}, { "code": "410307", "p_code": "410300", "name": "洛龙区", "type": "2" }, {
  "code": "410322",
  "p_code": "410300",
  "name": "孟津县",
  "type": "2"
}, { "code": "410323", "p_code": "410300", "name": "新安县", "type": "2" }, {
  "code": "410324",
  "p_code": "410300",
  "name": "栾川县",
  "type": "2"
}, { "code": "410325", "p_code": "410300", "name": "嵩　县", "type": "2" }, {
  "code": "410326",
  "p_code": "410300",
  "name": "汝阳县",
  "type": "2"
}, { "code": "410327", "p_code": "410300", "name": "宜阳县", "type": "2" }, {
  "code": "410328",
  "p_code": "410300",
  "name": "洛宁县",
  "type": "2"
}, { "code": "410329", "p_code": "410300", "name": "伊川县", "type": "2" }, {
  "code": "410381",
  "p_code": "410300",
  "name": "偃师市",
  "type": "2"
}, { "code": "410400", "p_code": "410000", "name": "平顶山市", "type": "1" }, {
  "code": "410401",
  "p_code": "410400",
  "name": "市辖区",
  "type": "2"
}, { "code": "410402", "p_code": "410400", "name": "新华区", "type": "2" }, {
  "code": "410403",
  "p_code": "410400",
  "name": "卫东区",
  "type": "2"
}, { "code": "410404", "p_code": "410400", "name": "石龙区", "type": "2" }, {
  "code": "410411",
  "p_code": "410400",
  "name": "湛河区",
  "type": "2"
}, { "code": "410421", "p_code": "410400", "name": "宝丰县", "type": "2" }, {
  "code": "410422",
  "p_code": "410400",
  "name": "叶　县",
  "type": "2"
}, { "code": "410423", "p_code": "410400", "name": "鲁山县", "type": "2" }, {
  "code": "410425",
  "p_code": "410400",
  "name": "郏　县",
  "type": "2"
}, { "code": "410481", "p_code": "410400", "name": "舞钢市", "type": "2" }, {
  "code": "410482",
  "p_code": "410400",
  "name": "汝州市",
  "type": "2"
}, { "code": "410500", "p_code": "410000", "name": "安阳市", "type": "1" }, {
  "code": "410501",
  "p_code": "410500",
  "name": "市辖区",
  "type": "2"
}, { "code": "410502", "p_code": "410500", "name": "文峰区", "type": "2" }, {
  "code": "410503",
  "p_code": "410500",
  "name": "北关区",
  "type": "2"
}, { "code": "410505", "p_code": "410500", "name": "殷都区", "type": "2" }, {
  "code": "410506",
  "p_code": "410500",
  "name": "龙安区",
  "type": "2"
}, { "code": "410522", "p_code": "410500", "name": "安阳县", "type": "2" }, {
  "code": "410523",
  "p_code": "410500",
  "name": "汤阴县",
  "type": "2"
}, { "code": "410526", "p_code": "410500", "name": "滑　县", "type": "2" }, {
  "code": "410527",
  "p_code": "410500",
  "name": "内黄县",
  "type": "2"
}, { "code": "410581", "p_code": "410500", "name": "林州市", "type": "2" }, {
  "code": "410600",
  "p_code": "410000",
  "name": "鹤壁市",
  "type": "1"
}, { "code": "410601", "p_code": "410600", "name": "市辖区", "type": "2" }, {
  "code": "410602",
  "p_code": "410600",
  "name": "鹤山区",
  "type": "2"
}, { "code": "410603", "p_code": "410600", "name": "山城区", "type": "2" }, {
  "code": "410611",
  "p_code": "410600",
  "name": "淇滨区",
  "type": "2"
}, { "code": "410621", "p_code": "410600", "name": "浚　县", "type": "2" }, {
  "code": "410622",
  "p_code": "410600",
  "name": "淇　县",
  "type": "2"
}, { "code": "410700", "p_code": "410000", "name": "新乡市", "type": "1" }, {
  "code": "410701",
  "p_code": "410700",
  "name": "市辖区",
  "type": "2"
}, { "code": "410702", "p_code": "410700", "name": "红旗区", "type": "2" }, {
  "code": "410703",
  "p_code": "410700",
  "name": "卫滨区",
  "type": "2"
}, { "code": "410704", "p_code": "410700", "name": "凤泉区", "type": "2" }, {
  "code": "410711",
  "p_code": "410700",
  "name": "牧野区",
  "type": "2"
}, { "code": "410721", "p_code": "410700", "name": "新乡县", "type": "2" }, {
  "code": "410724",
  "p_code": "410700",
  "name": "获嘉县",
  "type": "2"
}, { "code": "410725", "p_code": "410700", "name": "原阳县", "type": "2" }, {
  "code": "410726",
  "p_code": "410700",
  "name": "延津县",
  "type": "2"
}, { "code": "410727", "p_code": "410700", "name": "封丘县", "type": "2" }, {
  "code": "410728",
  "p_code": "410700",
  "name": "长垣县",
  "type": "2"
}, { "code": "410781", "p_code": "410700", "name": "卫辉市", "type": "2" }, {
  "code": "410782",
  "p_code": "410700",
  "name": "辉县市",
  "type": "2"
}, { "code": "410800", "p_code": "410000", "name": "焦作市", "type": "1" }, {
  "code": "410801",
  "p_code": "410800",
  "name": "市辖区",
  "type": "2"
}, { "code": "410802", "p_code": "410800", "name": "解放区", "type": "2" }, {
  "code": "410803",
  "p_code": "410800",
  "name": "中站区",
  "type": "2"
}, { "code": "410804", "p_code": "410800", "name": "马村区", "type": "2" }, {
  "code": "410811",
  "p_code": "410800",
  "name": "山阳区",
  "type": "2"
}, { "code": "410821", "p_code": "410800", "name": "修武县", "type": "2" }, {
  "code": "410822",
  "p_code": "410800",
  "name": "博爱县",
  "type": "2"
}, { "code": "410823", "p_code": "410800", "name": "武陟县", "type": "2" }, {
  "code": "410825",
  "p_code": "410800",
  "name": "温　县",
  "type": "2"
}, { "code": "410881", "p_code": "410800", "name": "济源市", "type": "2" }, {
  "code": "410882",
  "p_code": "410800",
  "name": "沁阳市",
  "type": "2"
}, { "code": "410883", "p_code": "410800", "name": "孟州市", "type": "2" }, {
  "code": "410900",
  "p_code": "410000",
  "name": "濮阳市",
  "type": "1"
}, { "code": "410901", "p_code": "410900", "name": "市辖区", "type": "2" }, {
  "code": "410902",
  "p_code": "410900",
  "name": "华龙区",
  "type": "2"
}, { "code": "410922", "p_code": "410900", "name": "清丰县", "type": "2" }, {
  "code": "410923",
  "p_code": "410900",
  "name": "南乐县",
  "type": "2"
}, { "code": "410926", "p_code": "410900", "name": "范　县", "type": "2" }, {
  "code": "410927",
  "p_code": "410900",
  "name": "台前县",
  "type": "2"
}, { "code": "410928", "p_code": "410900", "name": "濮阳县", "type": "2" }, {
  "code": "411000",
  "p_code": "410000",
  "name": "许昌市",
  "type": "1"
}, { "code": "411001", "p_code": "411000", "name": "市辖区", "type": "2" }, {
  "code": "411002",
  "p_code": "411000",
  "name": "魏都区",
  "type": "2"
}, { "code": "411023", "p_code": "411000", "name": "许昌县", "type": "2" }, {
  "code": "411024",
  "p_code": "411000",
  "name": "鄢陵县",
  "type": "2"
}, { "code": "411025", "p_code": "411000", "name": "襄城县", "type": "2" }, {
  "code": "411081",
  "p_code": "411000",
  "name": "禹州市",
  "type": "2"
}, { "code": "411082", "p_code": "411000", "name": "长葛市", "type": "2" }, {
  "code": "411100",
  "p_code": "410000",
  "name": "漯河市",
  "type": "1"
}, { "code": "411101", "p_code": "411100", "name": "市辖区", "type": "2" }, {
  "code": "411102",
  "p_code": "411100",
  "name": "源汇区",
  "type": "2"
}, { "code": "411103", "p_code": "411100", "name": "郾城区", "type": "2" }, {
  "code": "411104",
  "p_code": "411100",
  "name": "召陵区",
  "type": "2"
}, { "code": "411121", "p_code": "411100", "name": "舞阳县", "type": "2" }, {
  "code": "411122",
  "p_code": "411100",
  "name": "临颍县",
  "type": "2"
}, { "code": "411200", "p_code": "410000", "name": "三门峡市", "type": "1" }, {
  "code": "411201",
  "p_code": "411200",
  "name": "市辖区",
  "type": "2"
}, { "code": "411202", "p_code": "411200", "name": "湖滨区", "type": "2" }, {
  "code": "411221",
  "p_code": "411200",
  "name": "渑池县",
  "type": "2"
}, { "code": "411222", "p_code": "411200", "name": "陕　县", "type": "2" }, {
  "code": "411224",
  "p_code": "411200",
  "name": "卢氏县",
  "type": "2"
}, { "code": "411281", "p_code": "411200", "name": "义马市", "type": "2" }, {
  "code": "411282",
  "p_code": "411200",
  "name": "灵宝市",
  "type": "2"
}, { "code": "411300", "p_code": "410000", "name": "南阳市", "type": "1" }, {
  "code": "411301",
  "p_code": "411300",
  "name": "市辖区",
  "type": "2"
}, { "code": "411302", "p_code": "411300", "name": "宛城区", "type": "2" }, {
  "code": "411303",
  "p_code": "411300",
  "name": "卧龙区",
  "type": "2"
}, { "code": "411321", "p_code": "411300", "name": "南召县", "type": "2" }, {
  "code": "411322",
  "p_code": "411300",
  "name": "方城县",
  "type": "2"
}, { "code": "411323", "p_code": "411300", "name": "西峡县", "type": "2" }, {
  "code": "411324",
  "p_code": "411300",
  "name": "镇平县",
  "type": "2"
}, { "code": "411325", "p_code": "411300", "name": "内乡县", "type": "2" }, {
  "code": "411326",
  "p_code": "411300",
  "name": "淅川县",
  "type": "2"
}, { "code": "411327", "p_code": "411300", "name": "社旗县", "type": "2" }, {
  "code": "411328",
  "p_code": "411300",
  "name": "唐河县",
  "type": "2"
}, { "code": "411329", "p_code": "411300", "name": "新野县", "type": "2" }, {
  "code": "411330",
  "p_code": "411300",
  "name": "桐柏县",
  "type": "2"
}, { "code": "411381", "p_code": "411300", "name": "邓州市", "type": "2" }, {
  "code": "411400",
  "p_code": "410000",
  "name": "商丘市",
  "type": "1"
}, { "code": "411401", "p_code": "411400", "name": "市辖区", "type": "2" }, {
  "code": "411402",
  "p_code": "411400",
  "name": "梁园区",
  "type": "2"
}, { "code": "411403", "p_code": "411400", "name": "睢阳区", "type": "2" }, {
  "code": "411421",
  "p_code": "411400",
  "name": "民权县",
  "type": "2"
}, { "code": "411422", "p_code": "411400", "name": "睢　县", "type": "2" }, {
  "code": "411423",
  "p_code": "411400",
  "name": "宁陵县",
  "type": "2"
}, { "code": "411424", "p_code": "411400", "name": "柘城县", "type": "2" }, {
  "code": "411425",
  "p_code": "411400",
  "name": "虞城县",
  "type": "2"
}, { "code": "411426", "p_code": "411400", "name": "夏邑县", "type": "2" }, {
  "code": "411481",
  "p_code": "411400",
  "name": "永城市",
  "type": "2"
}, { "code": "411500", "p_code": "410000", "name": "信阳市", "type": "1" }, {
  "code": "411501",
  "p_code": "411500",
  "name": "市辖区",
  "type": "2"
}, { "code": "411502", "p_code": "411500", "name": "师河区", "type": "2" }, {
  "code": "411503",
  "p_code": "411500",
  "name": "平桥区",
  "type": "2"
}, { "code": "411521", "p_code": "411500", "name": "罗山县", "type": "2" }, {
  "code": "411522",
  "p_code": "411500",
  "name": "光山县",
  "type": "2"
}, { "code": "411523", "p_code": "411500", "name": "新　县", "type": "2" }, {
  "code": "411524",
  "p_code": "411500",
  "name": "商城县",
  "type": "2"
}, { "code": "411525", "p_code": "411500", "name": "固始县", "type": "2" }, {
  "code": "411526",
  "p_code": "411500",
  "name": "潢川县",
  "type": "2"
}, { "code": "411527", "p_code": "411500", "name": "淮滨县", "type": "2" }, {
  "code": "411528",
  "p_code": "411500",
  "name": "息　县",
  "type": "2"
}, { "code": "411600", "p_code": "410000", "name": "周口市", "type": "1" }, {
  "code": "411601",
  "p_code": "411600",
  "name": "市辖区",
  "type": "2"
}, { "code": "411602", "p_code": "411600", "name": "川汇区", "type": "2" }, {
  "code": "411621",
  "p_code": "411600",
  "name": "扶沟县",
  "type": "2"
}, { "code": "411622", "p_code": "411600", "name": "西华县", "type": "2" }, {
  "code": "411623",
  "p_code": "411600",
  "name": "商水县",
  "type": "2"
}, { "code": "411624", "p_code": "411600", "name": "沈丘县", "type": "2" }, {
  "code": "411625",
  "p_code": "411600",
  "name": "郸城县",
  "type": "2"
}, { "code": "411626", "p_code": "411600", "name": "淮阳县", "type": "2" }, {
  "code": "411627",
  "p_code": "411600",
  "name": "太康县",
  "type": "2"
}, { "code": "411628", "p_code": "411600", "name": "鹿邑县", "type": "2" }, {
  "code": "411681",
  "p_code": "411600",
  "name": "项城市",
  "type": "2"
}, { "code": "411700", "p_code": "410000", "name": "驻马店市", "type": "1" }, {
  "code": "411701",
  "p_code": "411700",
  "name": "市辖区",
  "type": "2"
}, { "code": "411702", "p_code": "411700", "name": "驿城区", "type": "2" }, {
  "code": "411721",
  "p_code": "411700",
  "name": "西平县",
  "type": "2"
}, { "code": "411722", "p_code": "411700", "name": "上蔡县", "type": "2" }, {
  "code": "411723",
  "p_code": "411700",
  "name": "平舆县",
  "type": "2"
}, { "code": "411724", "p_code": "411700", "name": "正阳县", "type": "2" }, {
  "code": "411725",
  "p_code": "411700",
  "name": "确山县",
  "type": "2"
}, { "code": "411726", "p_code": "411700", "name": "泌阳县", "type": "2" }, {
  "code": "411727",
  "p_code": "411700",
  "name": "汝南县",
  "type": "2"
}, { "code": "411728", "p_code": "411700", "name": "遂平县", "type": "2" }, {
  "code": "411729",
  "p_code": "411700",
  "name": "新蔡县",
  "type": "2"
}, { "code": "420000", "p_code": "100000", "name": "湖北省", "type": "0" }, {
  "code": "420100",
  "p_code": "420000",
  "name": "武汉市",
  "type": "1"
}, { "code": "420101", "p_code": "420100", "name": "市辖区", "type": "2" }, {
  "code": "420102",
  "p_code": "420100",
  "name": "江岸区",
  "type": "2"
}, { "code": "420103", "p_code": "420100", "name": "江汉区", "type": "2" }, {
  "code": "420104",
  "p_code": "420100",
  "name": "乔口区",
  "type": "2"
}, { "code": "420105", "p_code": "420100", "name": "汉阳区", "type": "2" }, {
  "code": "420106",
  "p_code": "420100",
  "name": "武昌区",
  "type": "2"
}, { "code": "420107", "p_code": "420100", "name": "青山区", "type": "2" }, {
  "code": "420111",
  "p_code": "420100",
  "name": "洪山区",
  "type": "2"
}, { "code": "420112", "p_code": "420100", "name": "东西湖区", "type": "2" }, {
  "code": "420113",
  "p_code": "420100",
  "name": "汉南区",
  "type": "2"
}, { "code": "420114", "p_code": "420100", "name": "蔡甸区", "type": "2" }, {
  "code": "420115",
  "p_code": "420100",
  "name": "江夏区",
  "type": "2"
}, { "code": "420116", "p_code": "420100", "name": "黄陂区", "type": "2" }, {
  "code": "420117",
  "p_code": "420100",
  "name": "新洲区",
  "type": "2"
}, { "code": "420200", "p_code": "420000", "name": "黄石市", "type": "1" }, {
  "code": "420201",
  "p_code": "420200",
  "name": "市辖区",
  "type": "2"
}, { "code": "420202", "p_code": "420200", "name": "黄石港区", "type": "2" }, {
  "code": "420203",
  "p_code": "420200",
  "name": "西塞山区",
  "type": "2"
}, { "code": "420204", "p_code": "420200", "name": "下陆区", "type": "2" }, {
  "code": "420205",
  "p_code": "420200",
  "name": "铁山区",
  "type": "2"
}, { "code": "420222", "p_code": "420200", "name": "阳新县", "type": "2" }, {
  "code": "420281",
  "p_code": "420200",
  "name": "大冶市",
  "type": "2"
}, { "code": "420300", "p_code": "420000", "name": "十堰市", "type": "1" }, {
  "code": "420301",
  "p_code": "420300",
  "name": "市辖区",
  "type": "2"
}, { "code": "420302", "p_code": "420300", "name": "茅箭区", "type": "2" }, {
  "code": "420303",
  "p_code": "420300",
  "name": "张湾区",
  "type": "2"
}, { "code": "420321", "p_code": "420300", "name": "郧　县", "type": "2" }, {
  "code": "420322",
  "p_code": "420300",
  "name": "郧西县",
  "type": "2"
}, { "code": "420323", "p_code": "420300", "name": "竹山县", "type": "2" }, {
  "code": "420324",
  "p_code": "420300",
  "name": "竹溪县",
  "type": "2"
}, { "code": "420325", "p_code": "420300", "name": "房　县", "type": "2" }, {
  "code": "420381",
  "p_code": "420300",
  "name": "丹江口市",
  "type": "2"
}, { "code": "420500", "p_code": "420000", "name": "宜昌市", "type": "1" }, {
  "code": "420501",
  "p_code": "420500",
  "name": "市辖区",
  "type": "2"
}, { "code": "420502", "p_code": "420500", "name": "西陵区", "type": "2" }, {
  "code": "420503",
  "p_code": "420500",
  "name": "伍家岗区",
  "type": "2"
}, { "code": "420504", "p_code": "420500", "name": "点军区", "type": "2" }, {
  "code": "420505",
  "p_code": "420500",
  "name": "猇亭区",
  "type": "2"
}, { "code": "420506", "p_code": "420500", "name": "夷陵区", "type": "2" }, {
  "code": "420525",
  "p_code": "420500",
  "name": "远安县",
  "type": "2"
}, { "code": "420526", "p_code": "420500", "name": "兴山县", "type": "2" }, {
  "code": "420527",
  "p_code": "420500",
  "name": "秭归县",
  "type": "2"
}, { "code": "420528", "p_code": "420500", "name": "长阳土家族自治县", "type": "2" }, {
  "code": "420529",
  "p_code": "420500",
  "name": "五峰土家族自治县",
  "type": "2"
}, { "code": "420581", "p_code": "420500", "name": "宜都市", "type": "2" }, {
  "code": "420582",
  "p_code": "420500",
  "name": "当阳市",
  "type": "2"
}, { "code": "420583", "p_code": "420500", "name": "枝江市", "type": "2" }, {
  "code": "420600",
  "p_code": "420000",
  "name": "襄樊市",
  "type": "1"
}, { "code": "420601", "p_code": "420600", "name": "市辖区", "type": "2" }, {
  "code": "420602",
  "p_code": "420600",
  "name": "襄城区",
  "type": "2"
}, { "code": "420606", "p_code": "420600", "name": "樊城区", "type": "2" }, {
  "code": "420607",
  "p_code": "420600",
  "name": "襄阳区",
  "type": "2"
}, { "code": "420624", "p_code": "420600", "name": "南漳县", "type": "2" }, {
  "code": "420625",
  "p_code": "420600",
  "name": "谷城县",
  "type": "2"
}, { "code": "420626", "p_code": "420600", "name": "保康县", "type": "2" }, {
  "code": "420682",
  "p_code": "420600",
  "name": "老河口市",
  "type": "2"
}, { "code": "420683", "p_code": "420600", "name": "枣阳市", "type": "2" }, {
  "code": "420684",
  "p_code": "420600",
  "name": "宜城市",
  "type": "2"
}, { "code": "420700", "p_code": "420000", "name": "鄂州市", "type": "1" }, {
  "code": "420701",
  "p_code": "420700",
  "name": "市辖区",
  "type": "2"
}, { "code": "420702", "p_code": "420700", "name": "梁子湖区", "type": "2" }, {
  "code": "420703",
  "p_code": "420700",
  "name": "华容区",
  "type": "2"
}, { "code": "420704", "p_code": "420700", "name": "鄂城区", "type": "2" }, {
  "code": "420800",
  "p_code": "420000",
  "name": "荆门市",
  "type": "1"
}, { "code": "420801", "p_code": "420800", "name": "市辖区", "type": "2" }, {
  "code": "420802",
  "p_code": "420800",
  "name": "东宝区",
  "type": "2"
}, { "code": "420804", "p_code": "420800", "name": "掇刀区", "type": "2" }, {
  "code": "420821",
  "p_code": "420800",
  "name": "京山县",
  "type": "2"
}, { "code": "420822", "p_code": "420800", "name": "沙洋县", "type": "2" }, {
  "code": "420881",
  "p_code": "420800",
  "name": "钟祥市",
  "type": "2"
}, { "code": "420900", "p_code": "420000", "name": "孝感市", "type": "1" }, {
  "code": "420901",
  "p_code": "420900",
  "name": "市辖区",
  "type": "2"
}, { "code": "420902", "p_code": "420900", "name": "孝南区", "type": "2" }, {
  "code": "420921",
  "p_code": "420900",
  "name": "孝昌县",
  "type": "2"
}, { "code": "420922", "p_code": "420900", "name": "大悟县", "type": "2" }, {
  "code": "420923",
  "p_code": "420900",
  "name": "云梦县",
  "type": "2"
}, { "code": "420981", "p_code": "420900", "name": "应城市", "type": "2" }, {
  "code": "420982",
  "p_code": "420900",
  "name": "安陆市",
  "type": "2"
}, { "code": "420984", "p_code": "420900", "name": "汉川市", "type": "2" }, {
  "code": "421000",
  "p_code": "420000",
  "name": "荆州市",
  "type": "1"
}, { "code": "421001", "p_code": "421000", "name": "市辖区", "type": "2" }, {
  "code": "421002",
  "p_code": "421000",
  "name": "沙市区",
  "type": "2"
}, { "code": "421003", "p_code": "421000", "name": "荆州区", "type": "2" }, {
  "code": "421022",
  "p_code": "421000",
  "name": "公安县",
  "type": "2"
}, { "code": "421023", "p_code": "421000", "name": "监利县", "type": "2" }, {
  "code": "421024",
  "p_code": "421000",
  "name": "江陵县",
  "type": "2"
}, { "code": "421081", "p_code": "421000", "name": "石首市", "type": "2" }, {
  "code": "421083",
  "p_code": "421000",
  "name": "洪湖市",
  "type": "2"
}, { "code": "421087", "p_code": "421000", "name": "松滋市", "type": "2" }, {
  "code": "421100",
  "p_code": "420000",
  "name": "黄冈市",
  "type": "1"
}, { "code": "421101", "p_code": "421100", "name": "市辖区", "type": "2" }, {
  "code": "421102",
  "p_code": "421100",
  "name": "黄州区",
  "type": "2"
}, { "code": "421121", "p_code": "421100", "name": "团风县", "type": "2" }, {
  "code": "421122",
  "p_code": "421100",
  "name": "红安县",
  "type": "2"
}, { "code": "421123", "p_code": "421100", "name": "罗田县", "type": "2" }, {
  "code": "421124",
  "p_code": "421100",
  "name": "英山县",
  "type": "2"
}, { "code": "421125", "p_code": "421100", "name": "浠水县", "type": "2" }, {
  "code": "421126",
  "p_code": "421100",
  "name": "蕲春县",
  "type": "2"
}, { "code": "421127", "p_code": "421100", "name": "黄梅县", "type": "2" }, {
  "code": "421181",
  "p_code": "421100",
  "name": "麻城市",
  "type": "2"
}, { "code": "421182", "p_code": "421100", "name": "武穴市", "type": "2" }, {
  "code": "421200",
  "p_code": "420000",
  "name": "咸宁市",
  "type": "1"
}, { "code": "421201", "p_code": "421200", "name": "市辖区", "type": "2" }, {
  "code": "421202",
  "p_code": "421200",
  "name": "咸安区",
  "type": "2"
}, { "code": "421221", "p_code": "421200", "name": "嘉鱼县", "type": "2" }, {
  "code": "421222",
  "p_code": "421200",
  "name": "通城县",
  "type": "2"
}, { "code": "421223", "p_code": "421200", "name": "崇阳县", "type": "2" }, {
  "code": "421224",
  "p_code": "421200",
  "name": "通山县",
  "type": "2"
}, { "code": "421281", "p_code": "421200", "name": "赤壁市", "type": "2" }, {
  "code": "421300",
  "p_code": "420000",
  "name": "随州市",
  "type": "1"
}, { "code": "421301", "p_code": "421300", "name": "市辖区", "type": "2" }, {
  "code": "421302",
  "p_code": "421300",
  "name": "曾都区",
  "type": "2"
}, { "code": "421381", "p_code": "421300", "name": "广水市", "type": "2" }, {
  "code": "422800",
  "p_code": "420000",
  "name": "恩施土家族苗族自治州",
  "type": "1"
}, { "code": "422801", "p_code": "422800", "name": "恩施市", "type": "2" }, {
  "code": "422802",
  "p_code": "422800",
  "name": "利川市",
  "type": "2"
}, { "code": "422822", "p_code": "422800", "name": "建始县", "type": "2" }, {
  "code": "422823",
  "p_code": "422800",
  "name": "巴东县",
  "type": "2"
}, { "code": "422825", "p_code": "422800", "name": "宣恩县", "type": "2" }, {
  "code": "422826",
  "p_code": "422800",
  "name": "咸丰县",
  "type": "2"
}, { "code": "422827", "p_code": "422800", "name": "来凤县", "type": "2" }, {
  "code": "422828",
  "p_code": "422800",
  "name": "鹤峰县",
  "type": "2"
}, { "code": "429000", "p_code": "420000", "name": "省直辖行政单位", "type": "1" }, {
  "code": "429004",
  "p_code": "429000",
  "name": "仙桃市",
  "type": "2"
}, { "code": "429005", "p_code": "429000", "name": "潜江市", "type": "2" }, {
  "code": "429006",
  "p_code": "429000",
  "name": "天门市",
  "type": "2"
}, { "code": "429021", "p_code": "429000", "name": "神农架林区", "type": "2" }, {
  "code": "430000",
  "p_code": "100000",
  "name": "湖南省",
  "type": "0"
}, { "code": "430100", "p_code": "430000", "name": "长沙市", "type": "1" }, {
  "code": "430101",
  "p_code": "430100",
  "name": "市辖区",
  "type": "2"
}, { "code": "430102", "p_code": "430100", "name": "芙蓉区", "type": "2" }, {
  "code": "430103",
  "p_code": "430100",
  "name": "天心区",
  "type": "2"
}, { "code": "430104", "p_code": "430100", "name": "岳麓区", "type": "2" }, {
  "code": "430105",
  "p_code": "430100",
  "name": "开福区",
  "type": "2"
}, { "code": "430111", "p_code": "430100", "name": "雨花区", "type": "2" }, {
  "code": "430121",
  "p_code": "430100",
  "name": "长沙县",
  "type": "2"
}, { "code": "430122", "p_code": "430100", "name": "望城县", "type": "2" }, {
  "code": "430124",
  "p_code": "430100",
  "name": "宁乡县",
  "type": "2"
}, { "code": "430181", "p_code": "430100", "name": "浏阳市", "type": "2" }, {
  "code": "430200",
  "p_code": "430000",
  "name": "株洲市",
  "type": "1"
}, { "code": "430201", "p_code": "430200", "name": "市辖区", "type": "2" }, {
  "code": "430202",
  "p_code": "430200",
  "name": "荷塘区",
  "type": "2"
}, { "code": "430203", "p_code": "430200", "name": "芦淞区", "type": "2" }, {
  "code": "430204",
  "p_code": "430200",
  "name": "石峰区",
  "type": "2"
}, { "code": "430211", "p_code": "430200", "name": "天元区", "type": "2" }, {
  "code": "430221",
  "p_code": "430200",
  "name": "株洲县",
  "type": "2"
}, { "code": "430223", "p_code": "430200", "name": "攸　县", "type": "2" }, {
  "code": "430224",
  "p_code": "430200",
  "name": "茶陵县",
  "type": "2"
}, { "code": "430225", "p_code": "430200", "name": "炎陵县", "type": "2" }, {
  "code": "430281",
  "p_code": "430200",
  "name": "醴陵市",
  "type": "2"
}, { "code": "430300", "p_code": "430000", "name": "湘潭市", "type": "1" }, {
  "code": "430301",
  "p_code": "430300",
  "name": "市辖区",
  "type": "2"
}, { "code": "430302", "p_code": "430300", "name": "雨湖区", "type": "2" }, {
  "code": "430304",
  "p_code": "430300",
  "name": "岳塘区",
  "type": "2"
}, { "code": "430321", "p_code": "430300", "name": "湘潭县", "type": "2" }, {
  "code": "430381",
  "p_code": "430300",
  "name": "湘乡市",
  "type": "2"
}, { "code": "430382", "p_code": "430300", "name": "韶山市", "type": "2" }, {
  "code": "430400",
  "p_code": "430000",
  "name": "衡阳市",
  "type": "1"
}, { "code": "430401", "p_code": "430400", "name": "市辖区", "type": "2" }, {
  "code": "430405",
  "p_code": "430400",
  "name": "珠晖区",
  "type": "2"
}, { "code": "430406", "p_code": "430400", "name": "雁峰区", "type": "2" }, {
  "code": "430407",
  "p_code": "430400",
  "name": "石鼓区",
  "type": "2"
}, { "code": "430408", "p_code": "430400", "name": "蒸湘区", "type": "2" }, {
  "code": "430412",
  "p_code": "430400",
  "name": "南岳区",
  "type": "2"
}, { "code": "430421", "p_code": "430400", "name": "衡阳县", "type": "2" }, {
  "code": "430422",
  "p_code": "430400",
  "name": "衡南县",
  "type": "2"
}, { "code": "430423", "p_code": "430400", "name": "衡山县", "type": "2" }, {
  "code": "430424",
  "p_code": "430400",
  "name": "衡东县",
  "type": "2"
}, { "code": "430426", "p_code": "430400", "name": "祁东县", "type": "2" }, {
  "code": "430481",
  "p_code": "430400",
  "name": "耒阳市",
  "type": "2"
}, { "code": "430482", "p_code": "430400", "name": "常宁市", "type": "2" }, {
  "code": "430500",
  "p_code": "430000",
  "name": "邵阳市",
  "type": "1"
}, { "code": "430501", "p_code": "430500", "name": "市辖区", "type": "2" }, {
  "code": "430502",
  "p_code": "430500",
  "name": "双清区",
  "type": "2"
}, { "code": "430503", "p_code": "430500", "name": "大祥区", "type": "2" }, {
  "code": "430511",
  "p_code": "430500",
  "name": "北塔区",
  "type": "2"
}, { "code": "430521", "p_code": "430500", "name": "邵东县", "type": "2" }, {
  "code": "430522",
  "p_code": "430500",
  "name": "新邵县",
  "type": "2"
}, { "code": "430523", "p_code": "430500", "name": "邵阳县", "type": "2" }, {
  "code": "430524",
  "p_code": "430500",
  "name": "隆回县",
  "type": "2"
}, { "code": "430525", "p_code": "430500", "name": "洞口县", "type": "2" }, {
  "code": "430527",
  "p_code": "430500",
  "name": "绥宁县",
  "type": "2"
}, { "code": "430528", "p_code": "430500", "name": "新宁县", "type": "2" }, {
  "code": "430529",
  "p_code": "430500",
  "name": "城步苗族自治县",
  "type": "2"
}, { "code": "430581", "p_code": "430500", "name": "武冈市", "type": "2" }, {
  "code": "430600",
  "p_code": "430000",
  "name": "岳阳市",
  "type": "1"
}, { "code": "430601", "p_code": "430600", "name": "市辖区", "type": "2" }, {
  "code": "430602",
  "p_code": "430600",
  "name": "岳阳楼区",
  "type": "2"
}, { "code": "430603", "p_code": "430600", "name": "云溪区", "type": "2" }, {
  "code": "430611",
  "p_code": "430600",
  "name": "君山区",
  "type": "2"
}, { "code": "430621", "p_code": "430600", "name": "岳阳县", "type": "2" }, {
  "code": "430623",
  "p_code": "430600",
  "name": "华容县",
  "type": "2"
}, { "code": "430624", "p_code": "430600", "name": "湘阴县", "type": "2" }, {
  "code": "430626",
  "p_code": "430600",
  "name": "平江县",
  "type": "2"
}, { "code": "430681", "p_code": "430600", "name": "汨罗市", "type": "2" }, {
  "code": "430682",
  "p_code": "430600",
  "name": "临湘市",
  "type": "2"
}, { "code": "430700", "p_code": "430000", "name": "常德市", "type": "1" }, {
  "code": "430701",
  "p_code": "430700",
  "name": "市辖区",
  "type": "2"
}, { "code": "430702", "p_code": "430700", "name": "武陵区", "type": "2" }, {
  "code": "430703",
  "p_code": "430700",
  "name": "鼎城区",
  "type": "2"
}, { "code": "430721", "p_code": "430700", "name": "安乡县", "type": "2" }, {
  "code": "430722",
  "p_code": "430700",
  "name": "汉寿县",
  "type": "2"
}, { "code": "430723", "p_code": "430700", "name": "澧　县", "type": "2" }, {
  "code": "430724",
  "p_code": "430700",
  "name": "临澧县",
  "type": "2"
}, { "code": "430725", "p_code": "430700", "name": "桃源县", "type": "2" }, {
  "code": "430726",
  "p_code": "430700",
  "name": "石门县",
  "type": "2"
}, { "code": "430781", "p_code": "430700", "name": "津市市", "type": "2" }, {
  "code": "430800",
  "p_code": "430000",
  "name": "张家界市",
  "type": "1"
}, { "code": "430801", "p_code": "430800", "name": "市辖区", "type": "2" }, {
  "code": "430802",
  "p_code": "430800",
  "name": "永定区",
  "type": "2"
}, { "code": "430811", "p_code": "430800", "name": "武陵源区", "type": "2" }, {
  "code": "430821",
  "p_code": "430800",
  "name": "慈利县",
  "type": "2"
}, { "code": "430822", "p_code": "430800", "name": "桑植县", "type": "2" }, {
  "code": "430900",
  "p_code": "430000",
  "name": "益阳市",
  "type": "1"
}, { "code": "430901", "p_code": "430900", "name": "市辖区", "type": "2" }, {
  "code": "430902",
  "p_code": "430900",
  "name": "资阳区",
  "type": "2"
}, { "code": "430903", "p_code": "430900", "name": "赫山区", "type": "2" }, {
  "code": "430921",
  "p_code": "430900",
  "name": "南　县",
  "type": "2"
}, { "code": "430922", "p_code": "430900", "name": "桃江县", "type": "2" }, {
  "code": "430923",
  "p_code": "430900",
  "name": "安化县",
  "type": "2"
}, { "code": "430981", "p_code": "430900", "name": "沅江市", "type": "2" }, {
  "code": "431000",
  "p_code": "430000",
  "name": "郴州市",
  "type": "1"
}, { "code": "431001", "p_code": "431000", "name": "市辖区", "type": "2" }, {
  "code": "431002",
  "p_code": "431000",
  "name": "北湖区",
  "type": "2"
}, { "code": "431003", "p_code": "431000", "name": "苏仙区", "type": "2" }, {
  "code": "431021",
  "p_code": "431000",
  "name": "桂阳县",
  "type": "2"
}, { "code": "431022", "p_code": "431000", "name": "宜章县", "type": "2" }, {
  "code": "431023",
  "p_code": "431000",
  "name": "永兴县",
  "type": "2"
}, { "code": "431024", "p_code": "431000", "name": "嘉禾县", "type": "2" }, {
  "code": "431025",
  "p_code": "431000",
  "name": "临武县",
  "type": "2"
}, { "code": "431026", "p_code": "431000", "name": "汝城县", "type": "2" }, {
  "code": "431027",
  "p_code": "431000",
  "name": "桂东县",
  "type": "2"
}, { "code": "431028", "p_code": "431000", "name": "安仁县", "type": "2" }, {
  "code": "431081",
  "p_code": "431000",
  "name": "资兴市",
  "type": "2"
}, { "code": "431100", "p_code": "430000", "name": "永州市", "type": "1" }, {
  "code": "431101",
  "p_code": "431100",
  "name": "市辖区",
  "type": "2"
}, { "code": "431102", "p_code": "431100", "name": "芝山区", "type": "2" }, {
  "code": "431103",
  "p_code": "431100",
  "name": "冷水滩区",
  "type": "2"
}, { "code": "431121", "p_code": "431100", "name": "祁阳县", "type": "2" }, {
  "code": "431122",
  "p_code": "431100",
  "name": "东安县",
  "type": "2"
}, { "code": "431123", "p_code": "431100", "name": "双牌县", "type": "2" }, {
  "code": "431124",
  "p_code": "431100",
  "name": "道　县",
  "type": "2"
}, { "code": "431125", "p_code": "431100", "name": "江永县", "type": "2" }, {
  "code": "431126",
  "p_code": "431100",
  "name": "宁远县",
  "type": "2"
}, { "code": "431127", "p_code": "431100", "name": "蓝山县", "type": "2" }, {
  "code": "431128",
  "p_code": "431100",
  "name": "新田县",
  "type": "2"
}, { "code": "431129", "p_code": "431100", "name": "江华瑶族自治县", "type": "2" }, {
  "code": "431200",
  "p_code": "430000",
  "name": "怀化市",
  "type": "1"
}, { "code": "431201", "p_code": "431200", "name": "市辖区", "type": "2" }, {
  "code": "431202",
  "p_code": "431200",
  "name": "鹤城区",
  "type": "2"
}, { "code": "431221", "p_code": "431200", "name": "中方县", "type": "2" }, {
  "code": "431222",
  "p_code": "431200",
  "name": "沅陵县",
  "type": "2"
}, { "code": "431223", "p_code": "431200", "name": "辰溪县", "type": "2" }, {
  "code": "431224",
  "p_code": "431200",
  "name": "溆浦县",
  "type": "2"
}, { "code": "431225", "p_code": "431200", "name": "会同县", "type": "2" }, {
  "code": "431226",
  "p_code": "431200",
  "name": "麻阳苗族自治县",
  "type": "2"
}, { "code": "431227", "p_code": "431200", "name": "新晃侗族自治县", "type": "2" }, {
  "code": "431228",
  "p_code": "431200",
  "name": "芷江侗族自治县",
  "type": "2"
}, { "code": "431229", "p_code": "431200", "name": "靖州苗族侗族自治县", "type": "2" }, {
  "code": "431230",
  "p_code": "431200",
  "name": "通道侗族自治县",
  "type": "2"
}, { "code": "431281", "p_code": "431200", "name": "洪江市", "type": "2" }, {
  "code": "431300",
  "p_code": "430000",
  "name": "娄底市",
  "type": "1"
}, { "code": "431301", "p_code": "431300", "name": "市辖区", "type": "2" }, {
  "code": "431302",
  "p_code": "431300",
  "name": "娄星区",
  "type": "2"
}, { "code": "431321", "p_code": "431300", "name": "双峰县", "type": "2" }, {
  "code": "431322",
  "p_code": "431300",
  "name": "新化县",
  "type": "2"
}, { "code": "431381", "p_code": "431300", "name": "冷水江市", "type": "2" }, {
  "code": "431382",
  "p_code": "431300",
  "name": "涟源市",
  "type": "2"
}, { "code": "433100", "p_code": "430000", "name": "湘西土家族苗族自治州", "type": "1" }, {
  "code": "433101",
  "p_code": "433100",
  "name": "吉首市",
  "type": "2"
}, { "code": "433122", "p_code": "433100", "name": "泸溪县", "type": "2" }, {
  "code": "433123",
  "p_code": "433100",
  "name": "凤凰县",
  "type": "2"
}, { "code": "433124", "p_code": "433100", "name": "花垣县", "type": "2" }, {
  "code": "433125",
  "p_code": "433100",
  "name": "保靖县",
  "type": "2"
}, { "code": "433126", "p_code": "433100", "name": "古丈县", "type": "2" }, {
  "code": "433127",
  "p_code": "433100",
  "name": "永顺县",
  "type": "2"
}, { "code": "433130", "p_code": "433100", "name": "龙山县", "type": "2" }, {
  "code": "440000",
  "p_code": "100000",
  "name": "广东省",
  "type": "0"
}, { "code": "440100", "p_code": "440000", "name": "广州市", "type": "1" }, {
  "code": "440101",
  "p_code": "440100",
  "name": "市辖区",
  "type": "2"
}, { "code": "440102", "p_code": "440100", "name": "东山区", "type": "2" }, {
  "code": "440103",
  "p_code": "440100",
  "name": "荔湾区",
  "type": "2"
}, { "code": "440104", "p_code": "440100", "name": "越秀区", "type": "2" }, {
  "code": "440105",
  "p_code": "440100",
  "name": "海珠区",
  "type": "2"
}, { "code": "440106", "p_code": "440100", "name": "天河区", "type": "2" }, {
  "code": "440107",
  "p_code": "440100",
  "name": "芳村区",
  "type": "2"
}, { "code": "440111", "p_code": "440100", "name": "白云区", "type": "2" }, {
  "code": "440112",
  "p_code": "440100",
  "name": "黄埔区",
  "type": "2"
}, { "code": "440113", "p_code": "440100", "name": "番禺区", "type": "2" }, {
  "code": "440114",
  "p_code": "440100",
  "name": "花都区",
  "type": "2"
}, { "code": "440183", "p_code": "440100", "name": "增城市", "type": "2" }, {
  "code": "440184",
  "p_code": "440100",
  "name": "从化市",
  "type": "2"
}, { "code": "440200", "p_code": "440000", "name": "韶关市", "type": "1" }, {
  "code": "440201",
  "p_code": "440200",
  "name": "市辖区",
  "type": "2"
}, { "code": "440203", "p_code": "440200", "name": "武江区", "type": "2" }, {
  "code": "440204",
  "p_code": "440200",
  "name": "浈江区",
  "type": "2"
}, { "code": "440205", "p_code": "440200", "name": "曲江区", "type": "2" }, {
  "code": "440222",
  "p_code": "440200",
  "name": "始兴县",
  "type": "2"
}, { "code": "440224", "p_code": "440200", "name": "仁化县", "type": "2" }, {
  "code": "440229",
  "p_code": "440200",
  "name": "翁源县",
  "type": "2"
}, { "code": "440232", "p_code": "440200", "name": "乳源瑶族自治县", "type": "2" }, {
  "code": "440233",
  "p_code": "440200",
  "name": "新丰县",
  "type": "2"
}, { "code": "440281", "p_code": "440200", "name": "乐昌市", "type": "2" }, {
  "code": "440282",
  "p_code": "440200",
  "name": "南雄市",
  "type": "2"
}, { "code": "440300", "p_code": "440000", "name": "深圳市", "type": "1" }, {
  "code": "440301",
  "p_code": "440300",
  "name": "市辖区",
  "type": "2"
}, { "code": "440303", "p_code": "440300", "name": "罗湖区", "type": "2" }, {
  "code": "440304",
  "p_code": "440300",
  "name": "福田区",
  "type": "2"
}, { "code": "440305", "p_code": "440300", "name": "南山区", "type": "2" }, {
  "code": "440306",
  "p_code": "440300",
  "name": "宝安区",
  "type": "2"
}, { "code": "440307", "p_code": "440300", "name": "龙岗区", "type": "2" }, {
  "code": "440308",
  "p_code": "440300",
  "name": "盐田区",
  "type": "2"
}, { "code": "440400", "p_code": "440000", "name": "珠海市", "type": "1" }, {
  "code": "440401",
  "p_code": "440400",
  "name": "市辖区",
  "type": "2"
}, { "code": "440402", "p_code": "440400", "name": "香洲区", "type": "2" }, {
  "code": "440403",
  "p_code": "440400",
  "name": "斗门区",
  "type": "2"
}, { "code": "440404", "p_code": "440400", "name": "金湾区", "type": "2" }, {
  "code": "440500",
  "p_code": "440000",
  "name": "汕头市",
  "type": "1"
}, { "code": "440501", "p_code": "440500", "name": "市辖区", "type": "2" }, {
  "code": "440507",
  "p_code": "440500",
  "name": "龙湖区",
  "type": "2"
}, { "code": "440511", "p_code": "440500", "name": "金平区", "type": "2" }, {
  "code": "440512",
  "p_code": "440500",
  "name": "濠江区",
  "type": "2"
}, { "code": "440513", "p_code": "440500", "name": "潮阳区", "type": "2" }, {
  "code": "440514",
  "p_code": "440500",
  "name": "潮南区",
  "type": "2"
}, { "code": "440515", "p_code": "440500", "name": "澄海区", "type": "2" }, {
  "code": "440523",
  "p_code": "440500",
  "name": "南澳县",
  "type": "2"
}, { "code": "440600", "p_code": "440000", "name": "佛山市", "type": "1" }, {
  "code": "440601",
  "p_code": "440600",
  "name": "市辖区",
  "type": "2"
}, { "code": "440604", "p_code": "440600", "name": "禅城区", "type": "2" }, {
  "code": "440605",
  "p_code": "440600",
  "name": "南海区",
  "type": "2"
}, { "code": "440606", "p_code": "440600", "name": "顺德区", "type": "2" }, {
  "code": "440607",
  "p_code": "440600",
  "name": "三水区",
  "type": "2"
}, { "code": "440608", "p_code": "440600", "name": "高明区", "type": "2" }, {
  "code": "440700",
  "p_code": "440000",
  "name": "江门市",
  "type": "1"
}, { "code": "440701", "p_code": "440700", "name": "市辖区", "type": "2" }, {
  "code": "440703",
  "p_code": "440700",
  "name": "蓬江区",
  "type": "2"
}, { "code": "440704", "p_code": "440700", "name": "江海区", "type": "2" }, {
  "code": "440705",
  "p_code": "440700",
  "name": "新会区",
  "type": "2"
}, { "code": "440781", "p_code": "440700", "name": "台山市", "type": "2" }, {
  "code": "440783",
  "p_code": "440700",
  "name": "开平市",
  "type": "2"
}, { "code": "440784", "p_code": "440700", "name": "鹤山市", "type": "2" }, {
  "code": "440785",
  "p_code": "440700",
  "name": "恩平市",
  "type": "2"
}, { "code": "440800", "p_code": "440000", "name": "湛江市", "type": "1" }, {
  "code": "440801",
  "p_code": "440800",
  "name": "市辖区",
  "type": "2"
}, { "code": "440802", "p_code": "440800", "name": "赤坎区", "type": "2" }, {
  "code": "440803",
  "p_code": "440800",
  "name": "霞山区",
  "type": "2"
}, { "code": "440804", "p_code": "440800", "name": "坡头区", "type": "2" }, {
  "code": "440811",
  "p_code": "440800",
  "name": "麻章区",
  "type": "2"
}, { "code": "440823", "p_code": "440800", "name": "遂溪县", "type": "2" }, {
  "code": "440825",
  "p_code": "440800",
  "name": "徐闻县",
  "type": "2"
}, { "code": "440881", "p_code": "440800", "name": "廉江市", "type": "2" }, {
  "code": "440882",
  "p_code": "440800",
  "name": "雷州市",
  "type": "2"
}, { "code": "440883", "p_code": "440800", "name": "吴川市", "type": "2" }, {
  "code": "440900",
  "p_code": "440000",
  "name": "茂名市",
  "type": "1"
}, { "code": "440901", "p_code": "440900", "name": "市辖区", "type": "2" }, {
  "code": "440902",
  "p_code": "440900",
  "name": "茂南区",
  "type": "2"
}, { "code": "440903", "p_code": "440900", "name": "茂港区", "type": "2" }, {
  "code": "440923",
  "p_code": "440900",
  "name": "电白县",
  "type": "2"
}, { "code": "440981", "p_code": "440900", "name": "高州市", "type": "2" }, {
  "code": "440982",
  "p_code": "440900",
  "name": "化州市",
  "type": "2"
}, { "code": "440983", "p_code": "440900", "name": "信宜市", "type": "2" }, {
  "code": "441200",
  "p_code": "440000",
  "name": "肇庆市",
  "type": "1"
}, { "code": "441201", "p_code": "441200", "name": "市辖区", "type": "2" }, {
  "code": "441202",
  "p_code": "441200",
  "name": "端州区",
  "type": "2"
}, { "code": "441203", "p_code": "441200", "name": "鼎湖区", "type": "2" }, {
  "code": "441223",
  "p_code": "441200",
  "name": "广宁县",
  "type": "2"
}, { "code": "441224", "p_code": "441200", "name": "怀集县", "type": "2" }, {
  "code": "441225",
  "p_code": "441200",
  "name": "封开县",
  "type": "2"
}, { "code": "441226", "p_code": "441200", "name": "德庆县", "type": "2" }, {
  "code": "441283",
  "p_code": "441200",
  "name": "高要市",
  "type": "2"
}, { "code": "441284", "p_code": "441200", "name": "四会市", "type": "2" }, {
  "code": "441300",
  "p_code": "440000",
  "name": "惠州市",
  "type": "1"
}, { "code": "441301", "p_code": "441300", "name": "市辖区", "type": "2" }, {
  "code": "441302",
  "p_code": "441300",
  "name": "惠城区",
  "type": "2"
}, { "code": "441303", "p_code": "441300", "name": "惠阳区", "type": "2" }, {
  "code": "441322",
  "p_code": "441300",
  "name": "博罗县",
  "type": "2"
}, { "code": "441323", "p_code": "441300", "name": "惠东县", "type": "2" }, {
  "code": "441324",
  "p_code": "441300",
  "name": "龙门县",
  "type": "2"
}, { "code": "441400", "p_code": "440000", "name": "梅州市", "type": "1" }, {
  "code": "441401",
  "p_code": "441400",
  "name": "市辖区",
  "type": "2"
}, { "code": "441402", "p_code": "441400", "name": "梅江区", "type": "2" }, {
  "code": "441421",
  "p_code": "441400",
  "name": "梅　县",
  "type": "2"
}, { "code": "441422", "p_code": "441400", "name": "大埔县", "type": "2" }, {
  "code": "441423",
  "p_code": "441400",
  "name": "丰顺县",
  "type": "2"
}, { "code": "441424", "p_code": "441400", "name": "五华县", "type": "2" }, {
  "code": "441426",
  "p_code": "441400",
  "name": "平远县",
  "type": "2"
}, { "code": "441427", "p_code": "441400", "name": "蕉岭县", "type": "2" }, {
  "code": "441481",
  "p_code": "441400",
  "name": "兴宁市",
  "type": "2"
}, { "code": "441500", "p_code": "440000", "name": "汕尾市", "type": "1" }, {
  "code": "441501",
  "p_code": "441500",
  "name": "市辖区",
  "type": "2"
}, { "code": "441502", "p_code": "441500", "name": "城　区", "type": "2" }, {
  "code": "441521",
  "p_code": "441500",
  "name": "海丰县",
  "type": "2"
}, { "code": "441523", "p_code": "441500", "name": "陆河县", "type": "2" }, {
  "code": "441581",
  "p_code": "441500",
  "name": "陆丰市",
  "type": "2"
}, { "code": "441600", "p_code": "440000", "name": "河源市", "type": "1" }, {
  "code": "441601",
  "p_code": "441600",
  "name": "市辖区",
  "type": "2"
}, { "code": "441602", "p_code": "441600", "name": "源城区", "type": "2" }, {
  "code": "441621",
  "p_code": "441600",
  "name": "紫金县",
  "type": "2"
}, { "code": "441622", "p_code": "441600", "name": "龙川县", "type": "2" }, {
  "code": "441623",
  "p_code": "441600",
  "name": "连平县",
  "type": "2"
}, { "code": "441624", "p_code": "441600", "name": "和平县", "type": "2" }, {
  "code": "441625",
  "p_code": "441600",
  "name": "东源县",
  "type": "2"
}, { "code": "441700", "p_code": "440000", "name": "阳江市", "type": "1" }, {
  "code": "441701",
  "p_code": "441700",
  "name": "市辖区",
  "type": "2"
}, { "code": "441702", "p_code": "441700", "name": "江城区", "type": "2" }, {
  "code": "441721",
  "p_code": "441700",
  "name": "阳西县",
  "type": "2"
}, { "code": "441723", "p_code": "441700", "name": "阳东县", "type": "2" }, {
  "code": "441781",
  "p_code": "441700",
  "name": "阳春市",
  "type": "2"
}, { "code": "441800", "p_code": "440000", "name": "清远市", "type": "1" }, {
  "code": "441801",
  "p_code": "441800",
  "name": "市辖区",
  "type": "2"
}, { "code": "441802", "p_code": "441800", "name": "清城区", "type": "2" }, {
  "code": "441821",
  "p_code": "441800",
  "name": "佛冈县",
  "type": "2"
}, { "code": "441823", "p_code": "441800", "name": "阳山县", "type": "2" }, {
  "code": "441825",
  "p_code": "441800",
  "name": "连山壮族瑶族自治县",
  "type": "2"
}, { "code": "441826", "p_code": "441800", "name": "连南瑶族自治县", "type": "2" }, {
  "code": "441827",
  "p_code": "441800",
  "name": "清新县",
  "type": "2"
}, { "code": "441881", "p_code": "441800", "name": "英德市", "type": "2" }, {
  "code": "441882",
  "p_code": "441800",
  "name": "连州市",
  "type": "2"
}, { "code": "441900", "p_code": "440000", "name": "东莞市", "type": "1" }, {
  "code": "442000",
  "p_code": "440000",
  "name": "中山市",
  "type": "1"
}, { "code": "445100", "p_code": "440000", "name": "潮州市", "type": "1" }, {
  "code": "445101",
  "p_code": "445100",
  "name": "市辖区",
  "type": "2"
}, { "code": "445102", "p_code": "445100", "name": "湘桥区", "type": "2" }, {
  "code": "445121",
  "p_code": "445100",
  "name": "潮安县",
  "type": "2"
}, { "code": "445122", "p_code": "445100", "name": "饶平县", "type": "2" }, {
  "code": "445200",
  "p_code": "440000",
  "name": "揭阳市",
  "type": "1"
}, { "code": "445201", "p_code": "445200", "name": "市辖区", "type": "2" }, {
  "code": "445202",
  "p_code": "445200",
  "name": "榕城区",
  "type": "2"
}, { "code": "445221", "p_code": "445200", "name": "揭东县", "type": "2" }, {
  "code": "445222",
  "p_code": "445200",
  "name": "揭西县",
  "type": "2"
}, { "code": "445224", "p_code": "445200", "name": "惠来县", "type": "2" }, {
  "code": "445281",
  "p_code": "445200",
  "name": "普宁市",
  "type": "2"
}, { "code": "445300", "p_code": "440000", "name": "云浮市", "type": "1" }, {
  "code": "445301",
  "p_code": "445300",
  "name": "市辖区",
  "type": "2"
}, { "code": "445302", "p_code": "445300", "name": "云城区", "type": "2" }, {
  "code": "445321",
  "p_code": "445300",
  "name": "新兴县",
  "type": "2"
}, { "code": "445322", "p_code": "445300", "name": "郁南县", "type": "2" }, {
  "code": "445323",
  "p_code": "445300",
  "name": "云安县",
  "type": "2"
}, { "code": "445381", "p_code": "445300", "name": "罗定市", "type": "2" }, {
  "code": "450000",
  "p_code": "100000",
  "name": "广西壮族自治区",
  "type": "0"
}, { "code": "450100", "p_code": "450000", "name": "南宁市", "type": "1" }, {
  "code": "450101",
  "p_code": "450100",
  "name": "市辖区",
  "type": "2"
}, { "code": "450102", "p_code": "450100", "name": "兴宁区", "type": "2" }, {
  "code": "450103",
  "p_code": "450100",
  "name": "青秀区",
  "type": "2"
}, { "code": "450105", "p_code": "450100", "name": "江南区", "type": "2" }, {
  "code": "450107",
  "p_code": "450100",
  "name": "西乡塘区",
  "type": "2"
}, { "code": "450108", "p_code": "450100", "name": "良庆区", "type": "2" }, {
  "code": "450109",
  "p_code": "450100",
  "name": "邕宁区",
  "type": "2"
}, { "code": "450122", "p_code": "450100", "name": "武鸣县", "type": "2" }, {
  "code": "450123",
  "p_code": "450100",
  "name": "隆安县",
  "type": "2"
}, { "code": "450124", "p_code": "450100", "name": "马山县", "type": "2" }, {
  "code": "450125",
  "p_code": "450100",
  "name": "上林县",
  "type": "2"
}, { "code": "450126", "p_code": "450100", "name": "宾阳县", "type": "2" }, {
  "code": "450127",
  "p_code": "450100",
  "name": "横　县",
  "type": "2"
}, { "code": "450200", "p_code": "450000", "name": "柳州市", "type": "1" }, {
  "code": "450201",
  "p_code": "450200",
  "name": "市辖区",
  "type": "2"
}, { "code": "450202", "p_code": "450200", "name": "城中区", "type": "2" }, {
  "code": "450203",
  "p_code": "450200",
  "name": "鱼峰区",
  "type": "2"
}, { "code": "450204", "p_code": "450200", "name": "柳南区", "type": "2" }, {
  "code": "450205",
  "p_code": "450200",
  "name": "柳北区",
  "type": "2"
}, { "code": "450221", "p_code": "450200", "name": "柳江县", "type": "2" }, {
  "code": "450222",
  "p_code": "450200",
  "name": "柳城县",
  "type": "2"
}, { "code": "450223", "p_code": "450200", "name": "鹿寨县", "type": "2" }, {
  "code": "450224",
  "p_code": "450200",
  "name": "融安县",
  "type": "2"
}, { "code": "450225", "p_code": "450200", "name": "融水苗族自治县", "type": "2" }, {
  "code": "450226",
  "p_code": "450200",
  "name": "三江侗族自治县",
  "type": "2"
}, { "code": "450300", "p_code": "450000", "name": "桂林市", "type": "1" }, {
  "code": "450301",
  "p_code": "450300",
  "name": "市辖区",
  "type": "2"
}, { "code": "450302", "p_code": "450300", "name": "秀峰区", "type": "2" }, {
  "code": "450303",
  "p_code": "450300",
  "name": "叠彩区",
  "type": "2"
}, { "code": "450304", "p_code": "450300", "name": "象山区", "type": "2" }, {
  "code": "450305",
  "p_code": "450300",
  "name": "七星区",
  "type": "2"
}, { "code": "450311", "p_code": "450300", "name": "雁山区", "type": "2" }, {
  "code": "450321",
  "p_code": "450300",
  "name": "阳朔县",
  "type": "2"
}, { "code": "450322", "p_code": "450300", "name": "临桂县", "type": "2" }, {
  "code": "450323",
  "p_code": "450300",
  "name": "灵川县",
  "type": "2"
}, { "code": "450324", "p_code": "450300", "name": "全州县", "type": "2" }, {
  "code": "450325",
  "p_code": "450300",
  "name": "兴安县",
  "type": "2"
}, { "code": "450326", "p_code": "450300", "name": "永福县", "type": "2" }, {
  "code": "450327",
  "p_code": "450300",
  "name": "灌阳县",
  "type": "2"
}, { "code": "450328", "p_code": "450300", "name": "龙胜各族自治县", "type": "2" }, {
  "code": "450329",
  "p_code": "450300",
  "name": "资源县",
  "type": "2"
}, { "code": "450330", "p_code": "450300", "name": "平乐县", "type": "2" }, {
  "code": "450331",
  "p_code": "450300",
  "name": "荔蒲县",
  "type": "2"
}, { "code": "450332", "p_code": "450300", "name": "恭城瑶族自治县", "type": "2" }, {
  "code": "450400",
  "p_code": "450000",
  "name": "梧州市",
  "type": "1"
}, { "code": "450401", "p_code": "450400", "name": "市辖区", "type": "2" }, {
  "code": "450403",
  "p_code": "450400",
  "name": "万秀区",
  "type": "2"
}, { "code": "450404", "p_code": "450400", "name": "蝶山区", "type": "2" }, {
  "code": "450405",
  "p_code": "450400",
  "name": "长洲区",
  "type": "2"
}, { "code": "450421", "p_code": "450400", "name": "苍梧县", "type": "2" }, {
  "code": "450422",
  "p_code": "450400",
  "name": "藤　县",
  "type": "2"
}, { "code": "450423", "p_code": "450400", "name": "蒙山县", "type": "2" }, {
  "code": "450481",
  "p_code": "450400",
  "name": "岑溪市",
  "type": "2"
}, { "code": "450500", "p_code": "450000", "name": "北海市", "type": "1" }, {
  "code": "450501",
  "p_code": "450500",
  "name": "市辖区",
  "type": "2"
}, { "code": "450502", "p_code": "450500", "name": "海城区", "type": "2" }, {
  "code": "450503",
  "p_code": "450500",
  "name": "银海区",
  "type": "2"
}, { "code": "450512", "p_code": "450500", "name": "铁山港区", "type": "2" }, {
  "code": "450521",
  "p_code": "450500",
  "name": "合浦县",
  "type": "2"
}, { "code": "450600", "p_code": "450000", "name": "防城港市", "type": "1" }, {
  "code": "450601",
  "p_code": "450600",
  "name": "市辖区",
  "type": "2"
}, { "code": "450602", "p_code": "450600", "name": "港口区", "type": "2" }, {
  "code": "450603",
  "p_code": "450600",
  "name": "防城区",
  "type": "2"
}, { "code": "450621", "p_code": "450600", "name": "上思县", "type": "2" }, {
  "code": "450681",
  "p_code": "450600",
  "name": "东兴市",
  "type": "2"
}, { "code": "450700", "p_code": "450000", "name": "钦州市", "type": "1" }, {
  "code": "450701",
  "p_code": "450700",
  "name": "市辖区",
  "type": "2"
}, { "code": "450702", "p_code": "450700", "name": "钦南区", "type": "2" }, {
  "code": "450703",
  "p_code": "450700",
  "name": "钦北区",
  "type": "2"
}, { "code": "450721", "p_code": "450700", "name": "灵山县", "type": "2" }, {
  "code": "450722",
  "p_code": "450700",
  "name": "浦北县",
  "type": "2"
}, { "code": "450800", "p_code": "450000", "name": "贵港市", "type": "1" }, {
  "code": "450801",
  "p_code": "450800",
  "name": "市辖区",
  "type": "2"
}, { "code": "450802", "p_code": "450800", "name": "港北区", "type": "2" }, {
  "code": "450803",
  "p_code": "450800",
  "name": "港南区",
  "type": "2"
}, { "code": "450804", "p_code": "450800", "name": "覃塘区", "type": "2" }, {
  "code": "450821",
  "p_code": "450800",
  "name": "平南县",
  "type": "2"
}, { "code": "450881", "p_code": "450800", "name": "桂平市", "type": "2" }, {
  "code": "450900",
  "p_code": "450000",
  "name": "玉林市",
  "type": "1"
}, { "code": "450901", "p_code": "450900", "name": "市辖区", "type": "2" }, {
  "code": "450902",
  "p_code": "450900",
  "name": "玉州区",
  "type": "2"
}, { "code": "450921", "p_code": "450900", "name": "容　县", "type": "2" }, {
  "code": "450922",
  "p_code": "450900",
  "name": "陆川县",
  "type": "2"
}, { "code": "450923", "p_code": "450900", "name": "博白县", "type": "2" }, {
  "code": "450924",
  "p_code": "450900",
  "name": "兴业县",
  "type": "2"
}, { "code": "450981", "p_code": "450900", "name": "北流市", "type": "2" }, {
  "code": "451000",
  "p_code": "450000",
  "name": "百色市",
  "type": "1"
}, { "code": "451001", "p_code": "451000", "name": "市辖区", "type": "2" }, {
  "code": "451002",
  "p_code": "451000",
  "name": "右江区",
  "type": "2"
}, { "code": "451021", "p_code": "451000", "name": "田阳县", "type": "2" }, {
  "code": "451022",
  "p_code": "451000",
  "name": "田东县",
  "type": "2"
}, { "code": "451023", "p_code": "451000", "name": "平果县", "type": "2" }, {
  "code": "451024",
  "p_code": "451000",
  "name": "德保县",
  "type": "2"
}, { "code": "451025", "p_code": "451000", "name": "靖西县", "type": "2" }, {
  "code": "451026",
  "p_code": "451000",
  "name": "那坡县",
  "type": "2"
}, { "code": "451027", "p_code": "451000", "name": "凌云县", "type": "2" }, {
  "code": "451028",
  "p_code": "451000",
  "name": "乐业县",
  "type": "2"
}, { "code": "451029", "p_code": "451000", "name": "田林县", "type": "2" }, {
  "code": "451030",
  "p_code": "451000",
  "name": "西林县",
  "type": "2"
}, { "code": "451031", "p_code": "451000", "name": "隆林各族自治县", "type": "2" }, {
  "code": "451100",
  "p_code": "450000",
  "name": "贺州市",
  "type": "1"
}, { "code": "451101", "p_code": "451100", "name": "市辖区", "type": "2" }, {
  "code": "451102",
  "p_code": "451100",
  "name": "八步区",
  "type": "2"
}, { "code": "451121", "p_code": "451100", "name": "昭平县", "type": "2" }, {
  "code": "451122",
  "p_code": "451100",
  "name": "钟山县",
  "type": "2"
}, { "code": "451123", "p_code": "451100", "name": "富川瑶族自治县", "type": "2" }, {
  "code": "451200",
  "p_code": "450000",
  "name": "河池市",
  "type": "1"
}, { "code": "451201", "p_code": "451200", "name": "市辖区", "type": "2" }, {
  "code": "451202",
  "p_code": "451200",
  "name": "金城江区",
  "type": "2"
}, { "code": "451221", "p_code": "451200", "name": "南丹县", "type": "2" }, {
  "code": "451222",
  "p_code": "451200",
  "name": "天峨县",
  "type": "2"
}, { "code": "451223", "p_code": "451200", "name": "凤山县", "type": "2" }, {
  "code": "451224",
  "p_code": "451200",
  "name": "东兰县",
  "type": "2"
}, { "code": "451225", "p_code": "451200", "name": "罗城仫佬族自治县", "type": "2" }, {
  "code": "451226",
  "p_code": "451200",
  "name": "环江毛南族自治县",
  "type": "2"
}, { "code": "451227", "p_code": "451200", "name": "巴马瑶族自治县", "type": "2" }, {
  "code": "451228",
  "p_code": "451200",
  "name": "都安瑶族自治县",
  "type": "2"
}, { "code": "451229", "p_code": "451200", "name": "大化瑶族自治县", "type": "2" }, {
  "code": "451281",
  "p_code": "451200",
  "name": "宜州市",
  "type": "2"
}, { "code": "451300", "p_code": "450000", "name": "来宾市", "type": "1" }, {
  "code": "451301",
  "p_code": "451300",
  "name": "市辖区",
  "type": "2"
}, { "code": "451302", "p_code": "451300", "name": "兴宾区", "type": "2" }, {
  "code": "451321",
  "p_code": "451300",
  "name": "忻城县",
  "type": "2"
}, { "code": "451322", "p_code": "451300", "name": "象州县", "type": "2" }, {
  "code": "451323",
  "p_code": "451300",
  "name": "武宣县",
  "type": "2"
}, { "code": "451324", "p_code": "451300", "name": "金秀瑶族自治县", "type": "2" }, {
  "code": "451381",
  "p_code": "451300",
  "name": "合山市",
  "type": "2"
}, { "code": "451400", "p_code": "450000", "name": "崇左市", "type": "1" }, {
  "code": "451401",
  "p_code": "451400",
  "name": "市辖区",
  "type": "2"
}, { "code": "451402", "p_code": "451400", "name": "江洲区", "type": "2" }, {
  "code": "451421",
  "p_code": "451400",
  "name": "扶绥县",
  "type": "2"
}, { "code": "451422", "p_code": "451400", "name": "宁明县", "type": "2" }, {
  "code": "451423",
  "p_code": "451400",
  "name": "龙州县",
  "type": "2"
}, { "code": "451424", "p_code": "451400", "name": "大新县", "type": "2" }, {
  "code": "451425",
  "p_code": "451400",
  "name": "天等县",
  "type": "2"
}, { "code": "451481", "p_code": "451400", "name": "凭祥市", "type": "2" }, {
  "code": "460000",
  "p_code": "100000",
  "name": "海南省",
  "type": "0"
}, { "code": "460100", "p_code": "460000", "name": "海口市", "type": "1" }, {
  "code": "460101",
  "p_code": "460100",
  "name": "市辖区",
  "type": "2"
}, { "code": "460105", "p_code": "460100", "name": "秀英区", "type": "2" }, {
  "code": "460106",
  "p_code": "460100",
  "name": "龙华区",
  "type": "2"
}, { "code": "460107", "p_code": "460100", "name": "琼山区", "type": "2" }, {
  "code": "460108",
  "p_code": "460100",
  "name": "美兰区",
  "type": "2"
}, { "code": "460200", "p_code": "460000", "name": "三亚市", "type": "1" }, {
  "code": "460201",
  "p_code": "460200",
  "name": "市辖区",
  "type": "2"
}, { "code": "469000", "p_code": "460000", "name": "省直辖县级行政单位", "type": "1" }, {
  "code": "469001",
  "p_code": "469000",
  "name": "五指山市",
  "type": "2"
}, { "code": "469002", "p_code": "469000", "name": "琼海市", "type": "2" }, {
  "code": "469003",
  "p_code": "469000",
  "name": "儋州市",
  "type": "2"
}, { "code": "469005", "p_code": "469000", "name": "文昌市", "type": "2" }, {
  "code": "469006",
  "p_code": "469000",
  "name": "万宁市",
  "type": "2"
}, { "code": "469007", "p_code": "469000", "name": "东方市", "type": "2" }, {
  "code": "469025",
  "p_code": "469000",
  "name": "定安县",
  "type": "2"
}, { "code": "469026", "p_code": "469000", "name": "屯昌县", "type": "2" }, {
  "code": "469027",
  "p_code": "469000",
  "name": "澄迈县",
  "type": "2"
}, { "code": "469028", "p_code": "469000", "name": "临高县", "type": "2" }, {
  "code": "469030",
  "p_code": "469000",
  "name": "白沙黎族自治县",
  "type": "2"
}, { "code": "469031", "p_code": "469000", "name": "昌江黎族自治县", "type": "2" }, {
  "code": "469033",
  "p_code": "469000",
  "name": "乐东黎族自治县",
  "type": "2"
}, { "code": "469034", "p_code": "469000", "name": "陵水黎族自治县", "type": "2" }, {
  "code": "469035",
  "p_code": "469000",
  "name": "保亭黎族苗族自治县",
  "type": "2"
}, { "code": "469036", "p_code": "469000", "name": "琼中黎族苗族自治县", "type": "2" }, {
  "code": "469037",
  "p_code": "469000",
  "name": "西沙群岛",
  "type": "2"
}, { "code": "469038", "p_code": "469000", "name": "南沙群岛", "type": "2" }, {
  "code": "469039",
  "p_code": "469000",
  "name": "中沙群岛的岛礁及其海域",
  "type": "2"
}, { "code": "500000", "p_code": "100000", "name": "重庆市", "type": "0" }, {
  "code": "500100",
  "p_code": "500000",
  "name": "重庆市",
  "type": "1"
}, { "code": "500101", "p_code": "500100", "name": "万州区", "type": "2" }, {
  "code": "500102",
  "p_code": "500100",
  "name": "涪陵区",
  "type": "2"
}, { "code": "500103", "p_code": "500100", "name": "渝中区", "type": "2" }, {
  "code": "500104",
  "p_code": "500100",
  "name": "大渡口区",
  "type": "2"
}, { "code": "500105", "p_code": "500100", "name": "江北区", "type": "2" }, {
  "code": "500106",
  "p_code": "500100",
  "name": "沙坪坝区",
  "type": "2"
}, { "code": "500107", "p_code": "500100", "name": "九龙坡区", "type": "2" }, {
  "code": "500108",
  "p_code": "500100",
  "name": "南岸区",
  "type": "2"
}, { "code": "500109", "p_code": "500100", "name": "北碚区", "type": "2" }, {
  "code": "500110",
  "p_code": "500100",
  "name": "万盛区",
  "type": "2"
}, { "code": "500111", "p_code": "500100", "name": "双桥区", "type": "2" }, {
  "code": "500112",
  "p_code": "500100",
  "name": "渝北区",
  "type": "2"
}, { "code": "500113", "p_code": "500100", "name": "巴南区", "type": "2" }, {
  "code": "500114",
  "p_code": "500100",
  "name": "黔江区",
  "type": "2"
}, { "code": "500115", "p_code": "500100", "name": "长寿区", "type": "2" }, {
  "code": "500222",
  "p_code": "500200",
  "name": "綦江县",
  "type": "2"
}, { "code": "500223", "p_code": "500200", "name": "潼南县", "type": "2" }, {
  "code": "500224",
  "p_code": "500200",
  "name": "铜梁县",
  "type": "2"
}, { "code": "500225", "p_code": "500200", "name": "大足县", "type": "2" }, {
  "code": "500226",
  "p_code": "500200",
  "name": "荣昌县",
  "type": "2"
}, { "code": "500227", "p_code": "500200", "name": "璧山县", "type": "2" }, {
  "code": "500228",
  "p_code": "500200",
  "name": "梁平县",
  "type": "2"
}, { "code": "500229", "p_code": "500200", "name": "城口县", "type": "2" }, {
  "code": "500230",
  "p_code": "500200",
  "name": "丰都县",
  "type": "2"
}, { "code": "500231", "p_code": "500200", "name": "垫江县", "type": "2" }, {
  "code": "500232",
  "p_code": "500200",
  "name": "武隆县",
  "type": "2"
}, { "code": "500233", "p_code": "500200", "name": "忠　县", "type": "2" }, {
  "code": "500234",
  "p_code": "500200",
  "name": "开　县",
  "type": "2"
}, { "code": "500235", "p_code": "500200", "name": "云阳县", "type": "2" }, {
  "code": "500236",
  "p_code": "500200",
  "name": "奉节县",
  "type": "2"
}, { "code": "500237", "p_code": "500200", "name": "巫山县", "type": "2" }, {
  "code": "500238",
  "p_code": "500200",
  "name": "巫溪县",
  "type": "2"
}, { "code": "500240", "p_code": "500200", "name": "石柱土家族自治县", "type": "2" }, {
  "code": "500241",
  "p_code": "500200",
  "name": "秀山土家族苗族自治县",
  "type": "2"
}, { "code": "500242", "p_code": "500200", "name": "酉阳土家族苗族自治县", "type": "2" }, {
  "code": "500243",
  "p_code": "500200",
  "name": "彭水苗族土家族自治县",
  "type": "2"
}, { "code": "500381", "p_code": "500300", "name": "江津市", "type": "2" }, {
  "code": "500382",
  "p_code": "500300",
  "name": "合川市",
  "type": "2"
}, { "code": "500383", "p_code": "500300", "name": "永川市", "type": "2" }, {
  "code": "500384",
  "p_code": "500300",
  "name": "南川市",
  "type": "2"
}, { "code": "510000", "p_code": "100000", "name": "四川省", "type": "0" }, {
  "code": "510100",
  "p_code": "510000",
  "name": "成都市",
  "type": "1"
}, { "code": "510101", "p_code": "510100", "name": "市辖区", "type": "2" }, {
  "code": "510104",
  "p_code": "510100",
  "name": "锦江区",
  "type": "2"
}, { "code": "510105", "p_code": "510100", "name": "青羊区", "type": "2" }, {
  "code": "510106",
  "p_code": "510100",
  "name": "金牛区",
  "type": "2"
}, { "code": "510107", "p_code": "510100", "name": "武侯区", "type": "2" }, {
  "code": "510108",
  "p_code": "510100",
  "name": "成华区",
  "type": "2"
}, { "code": "510112", "p_code": "510100", "name": "龙泉驿区", "type": "2" }, {
  "code": "510113",
  "p_code": "510100",
  "name": "青白江区",
  "type": "2"
}, { "code": "510114", "p_code": "510100", "name": "新都区", "type": "2" }, {
  "code": "510115",
  "p_code": "510100",
  "name": "温江县",
  "type": "2"
}, { "code": "510121", "p_code": "510100", "name": "金堂县", "type": "2" }, {
  "code": "510122",
  "p_code": "510100",
  "name": "双流县",
  "type": "2"
}, { "code": "510124", "p_code": "510100", "name": "郫　县", "type": "2" }, {
  "code": "510129",
  "p_code": "510100",
  "name": "大邑县",
  "type": "2"
}, { "code": "510131", "p_code": "510100", "name": "蒲江县", "type": "2" }, {
  "code": "510132",
  "p_code": "510100",
  "name": "新津县",
  "type": "2"
}, { "code": "510181", "p_code": "510100", "name": "都江堰市", "type": "2" }, {
  "code": "510182",
  "p_code": "510100",
  "name": "彭州市",
  "type": "2"
}, { "code": "510183", "p_code": "510100", "name": "邛崃市", "type": "2" }, {
  "code": "510184",
  "p_code": "510100",
  "name": "崇州市",
  "type": "2"
}, { "code": "510300", "p_code": "510000", "name": "自贡市", "type": "1" }, {
  "code": "510301",
  "p_code": "510300",
  "name": "市辖区",
  "type": "2"
}, { "code": "510302", "p_code": "510300", "name": "自流井区", "type": "2" }, {
  "code": "510303",
  "p_code": "510300",
  "name": "贡井区",
  "type": "2"
}, { "code": "510304", "p_code": "510300", "name": "大安区", "type": "2" }, {
  "code": "510311",
  "p_code": "510300",
  "name": "沿滩区",
  "type": "2"
}, { "code": "510321", "p_code": "510300", "name": "荣　县", "type": "2" }, {
  "code": "510322",
  "p_code": "510300",
  "name": "富顺县",
  "type": "2"
}, { "code": "510400", "p_code": "510000", "name": "攀枝花市", "type": "1" }, {
  "code": "510401",
  "p_code": "510400",
  "name": "市辖区",
  "type": "2"
}, { "code": "510402", "p_code": "510400", "name": "东　区", "type": "2" }, {
  "code": "510403",
  "p_code": "510400",
  "name": "西　区",
  "type": "2"
}, { "code": "510411", "p_code": "510400", "name": "仁和区", "type": "2" }, {
  "code": "510421",
  "p_code": "510400",
  "name": "米易县",
  "type": "2"
}, { "code": "510422", "p_code": "510400", "name": "盐边县", "type": "2" }, {
  "code": "510500",
  "p_code": "510000",
  "name": "泸州市",
  "type": "1"
}, { "code": "510501", "p_code": "510500", "name": "市辖区", "type": "2" }, {
  "code": "510502",
  "p_code": "510500",
  "name": "江阳区",
  "type": "2"
}, { "code": "510503", "p_code": "510500", "name": "纳溪区", "type": "2" }, {
  "code": "510504",
  "p_code": "510500",
  "name": "龙马潭区",
  "type": "2"
}, { "code": "510521", "p_code": "510500", "name": "泸　县", "type": "2" }, {
  "code": "510522",
  "p_code": "510500",
  "name": "合江县",
  "type": "2"
}, { "code": "510524", "p_code": "510500", "name": "叙永县", "type": "2" }, {
  "code": "510525",
  "p_code": "510500",
  "name": "古蔺县",
  "type": "2"
}, { "code": "510600", "p_code": "510000", "name": "德阳市", "type": "1" }, {
  "code": "510601",
  "p_code": "510600",
  "name": "市辖区",
  "type": "2"
}, { "code": "510603", "p_code": "510600", "name": "旌阳区", "type": "2" }, {
  "code": "510623",
  "p_code": "510600",
  "name": "中江县",
  "type": "2"
}, { "code": "510626", "p_code": "510600", "name": "罗江县", "type": "2" }, {
  "code": "510681",
  "p_code": "510600",
  "name": "广汉市",
  "type": "2"
}, { "code": "510682", "p_code": "510600", "name": "什邡市", "type": "2" }, {
  "code": "510683",
  "p_code": "510600",
  "name": "绵竹市",
  "type": "2"
}, { "code": "510700", "p_code": "510000", "name": "绵阳市", "type": "1" }, {
  "code": "510701",
  "p_code": "510700",
  "name": "市辖区",
  "type": "2"
}, { "code": "510703", "p_code": "510700", "name": "涪城区", "type": "2" }, {
  "code": "510704",
  "p_code": "510700",
  "name": "游仙区",
  "type": "2"
}, { "code": "510722", "p_code": "510700", "name": "三台县", "type": "2" }, {
  "code": "510723",
  "p_code": "510700",
  "name": "盐亭县",
  "type": "2"
}, { "code": "510724", "p_code": "510700", "name": "安　县", "type": "2" }, {
  "code": "510725",
  "p_code": "510700",
  "name": "梓潼县",
  "type": "2"
}, { "code": "510726", "p_code": "510700", "name": "北川羌族自治县", "type": "2" }, {
  "code": "510727",
  "p_code": "510700",
  "name": "平武县",
  "type": "2"
}, { "code": "510781", "p_code": "510700", "name": "江油市", "type": "2" }, {
  "code": "510800",
  "p_code": "510000",
  "name": "广元市",
  "type": "1"
}, { "code": "510801", "p_code": "510800", "name": "市辖区", "type": "2" }, {
  "code": "510802",
  "p_code": "510800",
  "name": "市中区",
  "type": "2"
}, { "code": "510811", "p_code": "510800", "name": "元坝区", "type": "2" }, {
  "code": "510812",
  "p_code": "510800",
  "name": "朝天区",
  "type": "2"
}, { "code": "510821", "p_code": "510800", "name": "旺苍县", "type": "2" }, {
  "code": "510822",
  "p_code": "510800",
  "name": "青川县",
  "type": "2"
}, { "code": "510823", "p_code": "510800", "name": "剑阁县", "type": "2" }, {
  "code": "510824",
  "p_code": "510800",
  "name": "苍溪县",
  "type": "2"
}, { "code": "510900", "p_code": "510000", "name": "遂宁市", "type": "1" }, {
  "code": "510901",
  "p_code": "510900",
  "name": "市辖区",
  "type": "2"
}, { "code": "510903", "p_code": "510900", "name": "船山区", "type": "2" }, {
  "code": "510904",
  "p_code": "510900",
  "name": "安居区",
  "type": "2"
}, { "code": "510921", "p_code": "510900", "name": "蓬溪县", "type": "2" }, {
  "code": "510922",
  "p_code": "510900",
  "name": "射洪县",
  "type": "2"
}, { "code": "510923", "p_code": "510900", "name": "大英县", "type": "2" }, {
  "code": "511000",
  "p_code": "510000",
  "name": "内江市",
  "type": "1"
}, { "code": "511001", "p_code": "511000", "name": "市辖区", "type": "2" }, {
  "code": "511002",
  "p_code": "511000",
  "name": "市中区",
  "type": "2"
}, { "code": "511011", "p_code": "511000", "name": "东兴区", "type": "2" }, {
  "code": "511024",
  "p_code": "511000",
  "name": "威远县",
  "type": "2"
}, { "code": "511025", "p_code": "511000", "name": "资中县", "type": "2" }, {
  "code": "511028",
  "p_code": "511000",
  "name": "隆昌县",
  "type": "2"
}, { "code": "511100", "p_code": "510000", "name": "乐山市", "type": "1" }, {
  "code": "511101",
  "p_code": "511100",
  "name": "市辖区",
  "type": "2"
}, { "code": "511102", "p_code": "511100", "name": "市中区", "type": "2" }, {
  "code": "511111",
  "p_code": "511100",
  "name": "沙湾区",
  "type": "2"
}, { "code": "511112", "p_code": "511100", "name": "五通桥区", "type": "2" }, {
  "code": "511113",
  "p_code": "511100",
  "name": "金口河区",
  "type": "2"
}, { "code": "511123", "p_code": "511100", "name": "犍为县", "type": "2" }, {
  "code": "511124",
  "p_code": "511100",
  "name": "井研县",
  "type": "2"
}, { "code": "511126", "p_code": "511100", "name": "夹江县", "type": "2" }, {
  "code": "511129",
  "p_code": "511100",
  "name": "沐川县",
  "type": "2"
}, { "code": "511132", "p_code": "511100", "name": "峨边彝族自治县", "type": "2" }, {
  "code": "511133",
  "p_code": "511100",
  "name": "马边彝族自治县",
  "type": "2"
}, { "code": "511181", "p_code": "511100", "name": "峨眉山市", "type": "2" }, {
  "code": "511300",
  "p_code": "510000",
  "name": "南充市",
  "type": "1"
}, { "code": "511301", "p_code": "511300", "name": "市辖区", "type": "2" }, {
  "code": "511302",
  "p_code": "511300",
  "name": "顺庆区",
  "type": "2"
}, { "code": "511303", "p_code": "511300", "name": "高坪区", "type": "2" }, {
  "code": "511304",
  "p_code": "511300",
  "name": "嘉陵区",
  "type": "2"
}, { "code": "511321", "p_code": "511300", "name": "南部县", "type": "2" }, {
  "code": "511322",
  "p_code": "511300",
  "name": "营山县",
  "type": "2"
}, { "code": "511323", "p_code": "511300", "name": "蓬安县", "type": "2" }, {
  "code": "511324",
  "p_code": "511300",
  "name": "仪陇县",
  "type": "2"
}, { "code": "511325", "p_code": "511300", "name": "西充县", "type": "2" }, {
  "code": "511381",
  "p_code": "511300",
  "name": "阆中市",
  "type": "2"
}, { "code": "511400", "p_code": "510000", "name": "眉山市", "type": "1" }, {
  "code": "511401",
  "p_code": "511400",
  "name": "市辖区",
  "type": "2"
}, { "code": "511402", "p_code": "511400", "name": "东坡区", "type": "2" }, {
  "code": "511421",
  "p_code": "511400",
  "name": "仁寿县",
  "type": "2"
}, { "code": "511422", "p_code": "511400", "name": "彭山县", "type": "2" }, {
  "code": "511423",
  "p_code": "511400",
  "name": "洪雅县",
  "type": "2"
}, { "code": "511424", "p_code": "511400", "name": "丹棱县", "type": "2" }, {
  "code": "511425",
  "p_code": "511400",
  "name": "青神县",
  "type": "2"
}, { "code": "511500", "p_code": "510000", "name": "宜宾市", "type": "1" }, {
  "code": "511501",
  "p_code": "511500",
  "name": "市辖区",
  "type": "2"
}, { "code": "511502", "p_code": "511500", "name": "翠屏区", "type": "2" }, {
  "code": "511521",
  "p_code": "511500",
  "name": "宜宾县",
  "type": "2"
}, { "code": "511522", "p_code": "511500", "name": "南溪县", "type": "2" }, {
  "code": "511523",
  "p_code": "511500",
  "name": "江安县",
  "type": "2"
}, { "code": "511524", "p_code": "511500", "name": "长宁县", "type": "2" }, {
  "code": "511525",
  "p_code": "511500",
  "name": "高　县",
  "type": "2"
}, { "code": "511526", "p_code": "511500", "name": "珙　县", "type": "2" }, {
  "code": "511527",
  "p_code": "511500",
  "name": "筠连县",
  "type": "2"
}, { "code": "511528", "p_code": "511500", "name": "兴文县", "type": "2" }, {
  "code": "511529",
  "p_code": "511500",
  "name": "屏山县",
  "type": "2"
}, { "code": "511600", "p_code": "510000", "name": "广安市", "type": "1" }, {
  "code": "511601",
  "p_code": "511600",
  "name": "市辖区",
  "type": "2"
}, { "code": "511602", "p_code": "511600", "name": "广安区", "type": "2" }, {
  "code": "511621",
  "p_code": "511600",
  "name": "岳池县",
  "type": "2"
}, { "code": "511622", "p_code": "511600", "name": "武胜县", "type": "2" }, {
  "code": "511623",
  "p_code": "511600",
  "name": "邻水县",
  "type": "2"
}, { "code": "511681", "p_code": "511600", "name": "华莹市", "type": "2" }, {
  "code": "511700",
  "p_code": "510000",
  "name": "达州市",
  "type": "1"
}, { "code": "511701", "p_code": "511700", "name": "市辖区", "type": "2" }, {
  "code": "511702",
  "p_code": "511700",
  "name": "通川区",
  "type": "2"
}, { "code": "511721", "p_code": "511700", "name": "达　县", "type": "2" }, {
  "code": "511722",
  "p_code": "511700",
  "name": "宣汉县",
  "type": "2"
}, { "code": "511723", "p_code": "511700", "name": "开江县", "type": "2" }, {
  "code": "511724",
  "p_code": "511700",
  "name": "大竹县",
  "type": "2"
}, { "code": "511725", "p_code": "511700", "name": "渠　县", "type": "2" }, {
  "code": "511781",
  "p_code": "511700",
  "name": "万源市",
  "type": "2"
}, { "code": "511800", "p_code": "510000", "name": "雅安市", "type": "1" }, {
  "code": "511801",
  "p_code": "511800",
  "name": "市辖区",
  "type": "2"
}, { "code": "511802", "p_code": "511800", "name": "雨城区", "type": "2" }, {
  "code": "511821",
  "p_code": "511800",
  "name": "名山县",
  "type": "2"
}, { "code": "511822", "p_code": "511800", "name": "荥经县", "type": "2" }, {
  "code": "511823",
  "p_code": "511800",
  "name": "汉源县",
  "type": "2"
}, { "code": "511824", "p_code": "511800", "name": "石棉县", "type": "2" }, {
  "code": "511825",
  "p_code": "511800",
  "name": "天全县",
  "type": "2"
}, { "code": "511826", "p_code": "511800", "name": "芦山县", "type": "2" }, {
  "code": "511827",
  "p_code": "511800",
  "name": "宝兴县",
  "type": "2"
}, { "code": "511900", "p_code": "510000", "name": "巴中市", "type": "1" }, {
  "code": "511901",
  "p_code": "511900",
  "name": "市辖区",
  "type": "2"
}, { "code": "511902", "p_code": "511900", "name": "巴州区", "type": "2" }, {
  "code": "511921",
  "p_code": "511900",
  "name": "通江县",
  "type": "2"
}, { "code": "511922", "p_code": "511900", "name": "南江县", "type": "2" }, {
  "code": "511923",
  "p_code": "511900",
  "name": "平昌县",
  "type": "2"
}, { "code": "512000", "p_code": "510000", "name": "资阳市", "type": "1" }, {
  "code": "512001",
  "p_code": "512000",
  "name": "市辖区",
  "type": "2"
}, { "code": "512002", "p_code": "512000", "name": "雁江区", "type": "2" }, {
  "code": "512021",
  "p_code": "512000",
  "name": "安岳县",
  "type": "2"
}, { "code": "512022", "p_code": "512000", "name": "乐至县", "type": "2" }, {
  "code": "512081",
  "p_code": "512000",
  "name": "简阳市",
  "type": "2"
}, { "code": "513200", "p_code": "510000", "name": "阿坝藏族羌族自治州", "type": "1" }, {
  "code": "513221",
  "p_code": "513200",
  "name": "汶川县",
  "type": "2"
}, { "code": "513222", "p_code": "513200", "name": "理　县", "type": "2" }, {
  "code": "513223",
  "p_code": "513200",
  "name": "茂　县",
  "type": "2"
}, { "code": "513224", "p_code": "513200", "name": "松潘县", "type": "2" }, {
  "code": "513225",
  "p_code": "513200",
  "name": "九寨沟县",
  "type": "2"
}, { "code": "513226", "p_code": "513200", "name": "金川县", "type": "2" }, {
  "code": "513227",
  "p_code": "513200",
  "name": "小金县",
  "type": "2"
}, { "code": "513228", "p_code": "513200", "name": "黑水县", "type": "2" }, {
  "code": "513229",
  "p_code": "513200",
  "name": "马尔康县",
  "type": "2"
}, { "code": "513230", "p_code": "513200", "name": "壤塘县", "type": "2" }, {
  "code": "513231",
  "p_code": "513200",
  "name": "阿坝县",
  "type": "2"
}, { "code": "513232", "p_code": "513200", "name": "若尔盖县", "type": "2" }, {
  "code": "513233",
  "p_code": "513200",
  "name": "红原县",
  "type": "2"
}, { "code": "513300", "p_code": "510000", "name": "甘孜藏族自治州", "type": "1" }, {
  "code": "513321",
  "p_code": "513300",
  "name": "康定县",
  "type": "2"
}, { "code": "513322", "p_code": "513300", "name": "泸定县", "type": "2" }, {
  "code": "513323",
  "p_code": "513300",
  "name": "丹巴县",
  "type": "2"
}, { "code": "513324", "p_code": "513300", "name": "九龙县", "type": "2" }, {
  "code": "513325",
  "p_code": "513300",
  "name": "雅江县",
  "type": "2"
}, { "code": "513326", "p_code": "513300", "name": "道孚县", "type": "2" }, {
  "code": "513327",
  "p_code": "513300",
  "name": "炉霍县",
  "type": "2"
}, { "code": "513328", "p_code": "513300", "name": "甘孜县", "type": "2" }, {
  "code": "513329",
  "p_code": "513300",
  "name": "新龙县",
  "type": "2"
}, { "code": "513330", "p_code": "513300", "name": "德格县", "type": "2" }, {
  "code": "513331",
  "p_code": "513300",
  "name": "白玉县",
  "type": "2"
}, { "code": "513332", "p_code": "513300", "name": "石渠县", "type": "2" }, {
  "code": "513333",
  "p_code": "513300",
  "name": "色达县",
  "type": "2"
}, { "code": "513334", "p_code": "513300", "name": "理塘县", "type": "2" }, {
  "code": "513335",
  "p_code": "513300",
  "name": "巴塘县",
  "type": "2"
}, { "code": "513336", "p_code": "513300", "name": "乡城县", "type": "2" }, {
  "code": "513337",
  "p_code": "513300",
  "name": "稻城县",
  "type": "2"
}, { "code": "513338", "p_code": "513300", "name": "得荣县", "type": "2" }, {
  "code": "513400",
  "p_code": "510000",
  "name": "凉山彝族自治州",
  "type": "1"
}, { "code": "513401", "p_code": "513400", "name": "西昌市", "type": "2" }, {
  "code": "513422",
  "p_code": "513400",
  "name": "木里藏族自治县",
  "type": "2"
}, { "code": "513423", "p_code": "513400", "name": "盐源县", "type": "2" }, {
  "code": "513424",
  "p_code": "513400",
  "name": "德昌县",
  "type": "2"
}, { "code": "513425", "p_code": "513400", "name": "会理县", "type": "2" }, {
  "code": "513426",
  "p_code": "513400",
  "name": "会东县",
  "type": "2"
}, { "code": "513427", "p_code": "513400", "name": "宁南县", "type": "2" }, {
  "code": "513428",
  "p_code": "513400",
  "name": "普格县",
  "type": "2"
}, { "code": "513429", "p_code": "513400", "name": "布拖县", "type": "2" }, {
  "code": "513430",
  "p_code": "513400",
  "name": "金阳县",
  "type": "2"
}, { "code": "513431", "p_code": "513400", "name": "昭觉县", "type": "2" }, {
  "code": "513432",
  "p_code": "513400",
  "name": "喜德县",
  "type": "2"
}, { "code": "513433", "p_code": "513400", "name": "冕宁县", "type": "2" }, {
  "code": "513434",
  "p_code": "513400",
  "name": "越西县",
  "type": "2"
}, { "code": "513435", "p_code": "513400", "name": "甘洛县", "type": "2" }, {
  "code": "513436",
  "p_code": "513400",
  "name": "美姑县",
  "type": "2"
}, { "code": "513437", "p_code": "513400", "name": "雷波县", "type": "2" }, {
  "code": "520000",
  "p_code": "100000",
  "name": "贵州省",
  "type": "0"
}, { "code": "520100", "p_code": "520000", "name": "贵阳市", "type": "1" }, {
  "code": "520101",
  "p_code": "520100",
  "name": "市辖区",
  "type": "2"
}, { "code": "520102", "p_code": "520100", "name": "南明区", "type": "2" }, {
  "code": "520103",
  "p_code": "520100",
  "name": "云岩区",
  "type": "2"
}, { "code": "520111", "p_code": "520100", "name": "花溪区", "type": "2" }, {
  "code": "520112",
  "p_code": "520100",
  "name": "乌当区",
  "type": "2"
}, { "code": "520113", "p_code": "520100", "name": "白云区", "type": "2" }, {
  "code": "520114",
  "p_code": "520100",
  "name": "小河区",
  "type": "2"
}, { "code": "520121", "p_code": "520100", "name": "开阳县", "type": "2" }, {
  "code": "520122",
  "p_code": "520100",
  "name": "息烽县",
  "type": "2"
}, { "code": "520123", "p_code": "520100", "name": "修文县", "type": "2" }, {
  "code": "520181",
  "p_code": "520100",
  "name": "清镇市",
  "type": "2"
}, { "code": "520200", "p_code": "520000", "name": "六盘水市", "type": "1" }, {
  "code": "520201",
  "p_code": "520200",
  "name": "钟山区",
  "type": "2"
}, { "code": "520203", "p_code": "520200", "name": "六枝特区", "type": "2" }, {
  "code": "520221",
  "p_code": "520200",
  "name": "水城县",
  "type": "2"
}, { "code": "520222", "p_code": "520200", "name": "盘　县", "type": "2" }, {
  "code": "520300",
  "p_code": "520000",
  "name": "遵义市",
  "type": "1"
}, { "code": "520301", "p_code": "520300", "name": "市辖区", "type": "2" }, {
  "code": "520302",
  "p_code": "520300",
  "name": "红花岗区",
  "type": "2"
}, { "code": "520303", "p_code": "520300", "name": "汇川区", "type": "2" }, {
  "code": "520321",
  "p_code": "520300",
  "name": "遵义县",
  "type": "2"
}, { "code": "520322", "p_code": "520300", "name": "桐梓县", "type": "2" }, {
  "code": "520323",
  "p_code": "520300",
  "name": "绥阳县",
  "type": "2"
}, { "code": "520324", "p_code": "520300", "name": "正安县", "type": "2" }, {
  "code": "520325",
  "p_code": "520300",
  "name": "道真仡佬族苗族自治县",
  "type": "2"
}, { "code": "520326", "p_code": "520300", "name": "务川仡佬族苗族自治县", "type": "2" }, {
  "code": "520327",
  "p_code": "520300",
  "name": "凤冈县",
  "type": "2"
}, { "code": "520328", "p_code": "520300", "name": "湄潭县", "type": "2" }, {
  "code": "520329",
  "p_code": "520300",
  "name": "余庆县",
  "type": "2"
}, { "code": "520330", "p_code": "520300", "name": "习水县", "type": "2" }, {
  "code": "520381",
  "p_code": "520300",
  "name": "赤水市",
  "type": "2"
}, { "code": "520382", "p_code": "520300", "name": "仁怀市", "type": "2" }, {
  "code": "520400",
  "p_code": "520000",
  "name": "安顺市",
  "type": "1"
}, { "code": "520401", "p_code": "520400", "name": "市辖区", "type": "2" }, {
  "code": "520402",
  "p_code": "520400",
  "name": "西秀区",
  "type": "2"
}, { "code": "520421", "p_code": "520400", "name": "平坝县", "type": "2" }, {
  "code": "520422",
  "p_code": "520400",
  "name": "普定县",
  "type": "2"
}, { "code": "520423", "p_code": "520400", "name": "镇宁布依族苗族自治县", "type": "2" }, {
  "code": "520424",
  "p_code": "520400",
  "name": "关岭布依族苗族自治县",
  "type": "2"
}, { "code": "520425", "p_code": "520400", "name": "紫云苗族布依族自治县", "type": "2" }, {
  "code": "522200",
  "p_code": "520000",
  "name": "铜仁地区",
  "type": "1"
}, { "code": "522201", "p_code": "522200", "name": "铜仁市", "type": "2" }, {
  "code": "522222",
  "p_code": "522200",
  "name": "江口县",
  "type": "2"
}, { "code": "522223", "p_code": "522200", "name": "玉屏侗族自治县", "type": "2" }, {
  "code": "522224",
  "p_code": "522200",
  "name": "石阡县",
  "type": "2"
}, { "code": "522225", "p_code": "522200", "name": "思南县", "type": "2" }, {
  "code": "522226",
  "p_code": "522200",
  "name": "印江土家族苗族自治县",
  "type": "2"
}, { "code": "522227", "p_code": "522200", "name": "德江县", "type": "2" }, {
  "code": "522228",
  "p_code": "522200",
  "name": "沿河土家族自治县",
  "type": "2"
}, { "code": "522229", "p_code": "522200", "name": "松桃苗族自治县", "type": "2" }, {
  "code": "522230",
  "p_code": "522200",
  "name": "万山特区",
  "type": "2"
}, { "code": "522300", "p_code": "520000", "name": "黔西南布依族苗族自治州", "type": "1" }, {
  "code": "522301",
  "p_code": "522300",
  "name": "兴义市",
  "type": "2"
}, { "code": "522322", "p_code": "522300", "name": "兴仁县", "type": "2" }, {
  "code": "522323",
  "p_code": "522300",
  "name": "普安县",
  "type": "2"
}, { "code": "522324", "p_code": "522300", "name": "晴隆县", "type": "2" }, {
  "code": "522325",
  "p_code": "522300",
  "name": "贞丰县",
  "type": "2"
}, { "code": "522326", "p_code": "522300", "name": "望谟县", "type": "2" }, {
  "code": "522327",
  "p_code": "522300",
  "name": "册亨县",
  "type": "2"
}, { "code": "522328", "p_code": "522300", "name": "安龙县", "type": "2" }, {
  "code": "522400",
  "p_code": "520000",
  "name": "毕节地区",
  "type": "1"
}, { "code": "522401", "p_code": "522400", "name": "毕节市", "type": "2" }, {
  "code": "522422",
  "p_code": "522400",
  "name": "大方县",
  "type": "2"
}, { "code": "522423", "p_code": "522400", "name": "黔西县", "type": "2" }, {
  "code": "522424",
  "p_code": "522400",
  "name": "金沙县",
  "type": "2"
}, { "code": "522425", "p_code": "522400", "name": "织金县", "type": "2" }, {
  "code": "522426",
  "p_code": "522400",
  "name": "纳雍县",
  "type": "2"
}, { "code": "522427", "p_code": "522400", "name": "威宁彝族回族苗族自治县", "type": "2" }, {
  "code": "522428",
  "p_code": "522400",
  "name": "赫章县",
  "type": "2"
}, { "code": "522600", "p_code": "520000", "name": "黔东南苗族侗族自治州", "type": "1" }, {
  "code": "522601",
  "p_code": "522600",
  "name": "凯里市",
  "type": "2"
}, { "code": "522622", "p_code": "522600", "name": "黄平县", "type": "2" }, {
  "code": "522623",
  "p_code": "522600",
  "name": "施秉县",
  "type": "2"
}, { "code": "522624", "p_code": "522600", "name": "三穗县", "type": "2" }, {
  "code": "522625",
  "p_code": "522600",
  "name": "镇远县",
  "type": "2"
}, { "code": "522626", "p_code": "522600", "name": "岑巩县", "type": "2" }, {
  "code": "522627",
  "p_code": "522600",
  "name": "天柱县",
  "type": "2"
}, { "code": "522628", "p_code": "522600", "name": "锦屏县", "type": "2" }, {
  "code": "522629",
  "p_code": "522600",
  "name": "剑河县",
  "type": "2"
}, { "code": "522630", "p_code": "522600", "name": "台江县", "type": "2" }, {
  "code": "522631",
  "p_code": "522600",
  "name": "黎平县",
  "type": "2"
}, { "code": "522632", "p_code": "522600", "name": "榕江县", "type": "2" }, {
  "code": "522633",
  "p_code": "522600",
  "name": "从江县",
  "type": "2"
}, { "code": "522634", "p_code": "522600", "name": "雷山县", "type": "2" }, {
  "code": "522635",
  "p_code": "522600",
  "name": "麻江县",
  "type": "2"
}, { "code": "522636", "p_code": "522600", "name": "丹寨县", "type": "2" }, {
  "code": "522700",
  "p_code": "520000",
  "name": "黔南布依族苗族自治州",
  "type": "1"
}, { "code": "522701", "p_code": "522700", "name": "都匀市", "type": "2" }, {
  "code": "522702",
  "p_code": "522700",
  "name": "福泉市",
  "type": "2"
}, { "code": "522722", "p_code": "522700", "name": "荔波县", "type": "2" }, {
  "code": "522723",
  "p_code": "522700",
  "name": "贵定县",
  "type": "2"
}, { "code": "522725", "p_code": "522700", "name": "瓮安县", "type": "2" }, {
  "code": "522726",
  "p_code": "522700",
  "name": "独山县",
  "type": "2"
}, { "code": "522727", "p_code": "522700", "name": "平塘县", "type": "2" }, {
  "code": "522728",
  "p_code": "522700",
  "name": "罗甸县",
  "type": "2"
}, { "code": "522729", "p_code": "522700", "name": "长顺县", "type": "2" }, {
  "code": "522730",
  "p_code": "522700",
  "name": "龙里县",
  "type": "2"
}, { "code": "522731", "p_code": "522700", "name": "惠水县", "type": "2" }, {
  "code": "522732",
  "p_code": "522700",
  "name": "三都水族自治县",
  "type": "2"
}, { "code": "530000", "p_code": "100000", "name": "云南省", "type": "0" }, {
  "code": "530100",
  "p_code": "530000",
  "name": "昆明市",
  "type": "1"
}, { "code": "530101", "p_code": "530100", "name": "市辖区", "type": "2" }, {
  "code": "530102",
  "p_code": "530100",
  "name": "五华区",
  "type": "2"
}, { "code": "530103", "p_code": "530100", "name": "盘龙区", "type": "2" }, {
  "code": "530111",
  "p_code": "530100",
  "name": "官渡区",
  "type": "2"
}, { "code": "530112", "p_code": "530100", "name": "西山区", "type": "2" }, {
  "code": "530113",
  "p_code": "530100",
  "name": "东川区",
  "type": "2"
}, { "code": "530121", "p_code": "530100", "name": "呈贡县", "type": "2" }, {
  "code": "530122",
  "p_code": "530100",
  "name": "晋宁县",
  "type": "2"
}, { "code": "530124", "p_code": "530100", "name": "富民县", "type": "2" }, {
  "code": "530125",
  "p_code": "530100",
  "name": "宜良县",
  "type": "2"
}, { "code": "530126", "p_code": "530100", "name": "石林彝族自治县", "type": "2" }, {
  "code": "530127",
  "p_code": "530100",
  "name": "嵩明县",
  "type": "2"
}, { "code": "530128", "p_code": "530100", "name": "禄劝彝族苗族自治县", "type": "2" }, {
  "code": "530129",
  "p_code": "530100",
  "name": "寻甸回族彝族自治县",
  "type": "2"
}, { "code": "530181", "p_code": "530100", "name": "安宁市", "type": "2" }, {
  "code": "530300",
  "p_code": "530000",
  "name": "曲靖市",
  "type": "1"
}, { "code": "530301", "p_code": "530300", "name": "市辖区", "type": "2" }, {
  "code": "530302",
  "p_code": "530300",
  "name": "麒麟区",
  "type": "2"
}, { "code": "530321", "p_code": "530300", "name": "马龙县", "type": "2" }, {
  "code": "530322",
  "p_code": "530300",
  "name": "陆良县",
  "type": "2"
}, { "code": "530323", "p_code": "530300", "name": "师宗县", "type": "2" }, {
  "code": "530324",
  "p_code": "530300",
  "name": "罗平县",
  "type": "2"
}, { "code": "530325", "p_code": "530300", "name": "富源县", "type": "2" }, {
  "code": "530326",
  "p_code": "530300",
  "name": "会泽县",
  "type": "2"
}, { "code": "530328", "p_code": "530300", "name": "沾益县", "type": "2" }, {
  "code": "530381",
  "p_code": "530300",
  "name": "宣威市",
  "type": "2"
}, { "code": "530400", "p_code": "530000", "name": "玉溪市", "type": "1" }, {
  "code": "530401",
  "p_code": "530400",
  "name": "市辖区",
  "type": "2"
}, { "code": "530402", "p_code": "530400", "name": "红塔区", "type": "2" }, {
  "code": "530421",
  "p_code": "530400",
  "name": "江川县",
  "type": "2"
}, { "code": "530422", "p_code": "530400", "name": "澄江县", "type": "2" }, {
  "code": "530423",
  "p_code": "530400",
  "name": "通海县",
  "type": "2"
}, { "code": "530424", "p_code": "530400", "name": "华宁县", "type": "2" }, {
  "code": "530425",
  "p_code": "530400",
  "name": "易门县",
  "type": "2"
}, { "code": "530426", "p_code": "530400", "name": "峨山彝族自治县", "type": "2" }, {
  "code": "530427",
  "p_code": "530400",
  "name": "新平彝族傣族自治县",
  "type": "2"
}, { "code": "530428", "p_code": "530400", "name": "元江哈尼族彝族傣族自治县", "type": "2" }, {
  "code": "530500",
  "p_code": "530000",
  "name": "保山市",
  "type": "1"
}, { "code": "530501", "p_code": "530500", "name": "市辖区", "type": "2" }, {
  "code": "530502",
  "p_code": "530500",
  "name": "隆阳区",
  "type": "2"
}, { "code": "530521", "p_code": "530500", "name": "施甸县", "type": "2" }, {
  "code": "530522",
  "p_code": "530500",
  "name": "腾冲县",
  "type": "2"
}, { "code": "530523", "p_code": "530500", "name": "龙陵县", "type": "2" }, {
  "code": "530524",
  "p_code": "530500",
  "name": "昌宁县",
  "type": "2"
}, { "code": "530600", "p_code": "530000", "name": "昭通市", "type": "1" }, {
  "code": "530601",
  "p_code": "530600",
  "name": "市辖区",
  "type": "2"
}, { "code": "530602", "p_code": "530600", "name": "昭阳区", "type": "2" }, {
  "code": "530621",
  "p_code": "530600",
  "name": "鲁甸县",
  "type": "2"
}, { "code": "530622", "p_code": "530600", "name": "巧家县", "type": "2" }, {
  "code": "530623",
  "p_code": "530600",
  "name": "盐津县",
  "type": "2"
}, { "code": "530624", "p_code": "530600", "name": "大关县", "type": "2" }, {
  "code": "530625",
  "p_code": "530600",
  "name": "永善县",
  "type": "2"
}, { "code": "530626", "p_code": "530600", "name": "绥江县", "type": "2" }, {
  "code": "530627",
  "p_code": "530600",
  "name": "镇雄县",
  "type": "2"
}, { "code": "530628", "p_code": "530600", "name": "彝良县", "type": "2" }, {
  "code": "530629",
  "p_code": "530600",
  "name": "威信县",
  "type": "2"
}, { "code": "530630", "p_code": "530600", "name": "水富县", "type": "2" }, {
  "code": "530700",
  "p_code": "530000",
  "name": "丽江市",
  "type": "1"
}, { "code": "530701", "p_code": "530700", "name": "市辖区", "type": "2" }, {
  "code": "530702",
  "p_code": "530700",
  "name": "古城区",
  "type": "2"
}, { "code": "530721", "p_code": "530700", "name": "玉龙纳西族自治县", "type": "2" }, {
  "code": "530722",
  "p_code": "530700",
  "name": "永胜县",
  "type": "2"
}, { "code": "530723", "p_code": "530700", "name": "华坪县", "type": "2" }, {
  "code": "530724",
  "p_code": "530700",
  "name": "宁蒗彝族自治县",
  "type": "2"
}, { "code": "530800", "p_code": "530000", "name": "思茅市", "type": "1" }, {
  "code": "530801",
  "p_code": "530800",
  "name": "市辖区",
  "type": "2"
}, { "code": "530802", "p_code": "530800", "name": "翠云区", "type": "2" }, {
  "code": "530821",
  "p_code": "530800",
  "name": "普洱哈尼族彝族自治县",
  "type": "2"
}, { "code": "530822", "p_code": "530800", "name": "墨江哈尼族自治县", "type": "2" }, {
  "code": "530823",
  "p_code": "530800",
  "name": "景东彝族自治县",
  "type": "2"
}, { "code": "530824", "p_code": "530800", "name": "景谷傣族彝族自治县", "type": "2" }, {
  "code": "530825",
  "p_code": "530800",
  "name": "镇沅彝族哈尼族拉祜族自治县",
  "type": "2"
}, { "code": "530826", "p_code": "530800", "name": "江城哈尼族彝族自治县", "type": "2" }, {
  "code": "530827",
  "p_code": "530800",
  "name": "孟连傣族拉祜族佤族自治县",
  "type": "2"
}, { "code": "530828", "p_code": "530800", "name": "澜沧拉祜族自治县", "type": "2" }, {
  "code": "530829",
  "p_code": "530800",
  "name": "西盟佤族自治县",
  "type": "2"
}, { "code": "530900", "p_code": "530000", "name": "临沧市", "type": "1" }, {
  "code": "530901",
  "p_code": "530900",
  "name": "市辖区",
  "type": "2"
}, { "code": "530902", "p_code": "530900", "name": "临翔区", "type": "2" }, {
  "code": "530921",
  "p_code": "530900",
  "name": "凤庆县",
  "type": "2"
}, { "code": "530922", "p_code": "530900", "name": "云　县", "type": "2" }, {
  "code": "530923",
  "p_code": "530900",
  "name": "永德县",
  "type": "2"
}, { "code": "530924", "p_code": "530900", "name": "镇康县", "type": "2" }, {
  "code": "530925",
  "p_code": "530900",
  "name": "双江拉祜族佤族布朗族傣族自治县",
  "type": "2"
}, { "code": "530926", "p_code": "530900", "name": "耿马傣族佤族自治县", "type": "2" }, {
  "code": "530927",
  "p_code": "530900",
  "name": "沧源佤族自治县",
  "type": "2"
}, { "code": "532300", "p_code": "530000", "name": "楚雄彝族自治州", "type": "1" }, {
  "code": "532301",
  "p_code": "532300",
  "name": "楚雄市",
  "type": "2"
}, { "code": "532322", "p_code": "532300", "name": "双柏县", "type": "2" }, {
  "code": "532323",
  "p_code": "532300",
  "name": "牟定县",
  "type": "2"
}, { "code": "532324", "p_code": "532300", "name": "南华县", "type": "2" }, {
  "code": "532325",
  "p_code": "532300",
  "name": "姚安县",
  "type": "2"
}, { "code": "532326", "p_code": "532300", "name": "大姚县", "type": "2" }, {
  "code": "532327",
  "p_code": "532300",
  "name": "永仁县",
  "type": "2"
}, { "code": "532328", "p_code": "532300", "name": "元谋县", "type": "2" }, {
  "code": "532329",
  "p_code": "532300",
  "name": "武定县",
  "type": "2"
}, { "code": "532331", "p_code": "532300", "name": "禄丰县", "type": "2" }, {
  "code": "532500",
  "p_code": "530000",
  "name": "红河哈尼族彝族自治州",
  "type": "1"
}, { "code": "532501", "p_code": "532500", "name": "个旧市", "type": "2" }, {
  "code": "532502",
  "p_code": "532500",
  "name": "开远市",
  "type": "2"
}, { "code": "532522", "p_code": "532500", "name": "蒙自县", "type": "2" }, {
  "code": "532523",
  "p_code": "532500",
  "name": "屏边苗族自治县",
  "type": "2"
}, { "code": "532524", "p_code": "532500", "name": "建水县", "type": "2" }, {
  "code": "532525",
  "p_code": "532500",
  "name": "石屏县",
  "type": "2"
}, { "code": "532526", "p_code": "532500", "name": "弥勒县", "type": "2" }, {
  "code": "532527",
  "p_code": "532500",
  "name": "泸西县",
  "type": "2"
}, { "code": "532528", "p_code": "532500", "name": "元阳县", "type": "2" }, {
  "code": "532529",
  "p_code": "532500",
  "name": "红河县",
  "type": "2"
}, { "code": "532530", "p_code": "532500", "name": "金平苗族瑶族傣族自治县", "type": "2" }, {
  "code": "532531",
  "p_code": "532500",
  "name": "绿春县",
  "type": "2"
}, { "code": "532532", "p_code": "532500", "name": "河口瑶族自治县", "type": "2" }, {
  "code": "532600",
  "p_code": "530000",
  "name": "文山壮族苗族自治州",
  "type": "1"
}, { "code": "532621", "p_code": "532600", "name": "文山县", "type": "2" }, {
  "code": "532622",
  "p_code": "532600",
  "name": "砚山县",
  "type": "2"
}, { "code": "532623", "p_code": "532600", "name": "西畴县", "type": "2" }, {
  "code": "532624",
  "p_code": "532600",
  "name": "麻栗坡县",
  "type": "2"
}, { "code": "532625", "p_code": "532600", "name": "马关县", "type": "2" }, {
  "code": "532626",
  "p_code": "532600",
  "name": "丘北县",
  "type": "2"
}, { "code": "532627", "p_code": "532600", "name": "广南县", "type": "2" }, {
  "code": "532628",
  "p_code": "532600",
  "name": "富宁县",
  "type": "2"
}, { "code": "532800", "p_code": "530000", "name": "西双版纳傣族自治州", "type": "1" }, {
  "code": "532801",
  "p_code": "532800",
  "name": "景洪市",
  "type": "2"
}, { "code": "532822", "p_code": "532800", "name": "勐海县", "type": "2" }, {
  "code": "532823",
  "p_code": "532800",
  "name": "勐腊县",
  "type": "2"
}, { "code": "532900", "p_code": "530000", "name": "大理白族自治州", "type": "1" }, {
  "code": "532901",
  "p_code": "532900",
  "name": "大理市",
  "type": "2"
}, { "code": "532922", "p_code": "532900", "name": "漾濞彝族自治县", "type": "2" }, {
  "code": "532923",
  "p_code": "532900",
  "name": "祥云县",
  "type": "2"
}, { "code": "532924", "p_code": "532900", "name": "宾川县", "type": "2" }, {
  "code": "532925",
  "p_code": "532900",
  "name": "弥渡县",
  "type": "2"
}, { "code": "532926", "p_code": "532900", "name": "南涧彝族自治县", "type": "2" }, {
  "code": "532927",
  "p_code": "532900",
  "name": "巍山彝族回族自治县",
  "type": "2"
}, { "code": "532928", "p_code": "532900", "name": "永平县", "type": "2" }, {
  "code": "532929",
  "p_code": "532900",
  "name": "云龙县",
  "type": "2"
}, { "code": "532930", "p_code": "532900", "name": "洱源县", "type": "2" }, {
  "code": "532931",
  "p_code": "532900",
  "name": "剑川县",
  "type": "2"
}, { "code": "532932", "p_code": "532900", "name": "鹤庆县", "type": "2" }, {
  "code": "533100",
  "p_code": "530000",
  "name": "德宏傣族景颇族自治州",
  "type": "1"
}, { "code": "533102", "p_code": "533100", "name": "瑞丽市", "type": "2" }, {
  "code": "533103",
  "p_code": "533100",
  "name": "潞西市",
  "type": "2"
}, { "code": "533122", "p_code": "533100", "name": "梁河县", "type": "2" }, {
  "code": "533123",
  "p_code": "533100",
  "name": "盈江县",
  "type": "2"
}, { "code": "533124", "p_code": "533100", "name": "陇川县", "type": "2" }, {
  "code": "533300",
  "p_code": "530000",
  "name": "怒江傈僳族自治州",
  "type": "1"
}, { "code": "533321", "p_code": "533300", "name": "泸水县", "type": "2" }, {
  "code": "533323",
  "p_code": "533300",
  "name": "福贡县",
  "type": "2"
}, { "code": "533324", "p_code": "533300", "name": "贡山独龙族怒族自治县", "type": "2" }, {
  "code": "533325",
  "p_code": "533300",
  "name": "兰坪白族普米族自治县",
  "type": "2"
}, { "code": "533400", "p_code": "530000", "name": "迪庆藏族自治州", "type": "1" }, {
  "code": "533421",
  "p_code": "533400",
  "name": "香格里拉县",
  "type": "2"
}, { "code": "533422", "p_code": "533400", "name": "德钦县", "type": "2" }, {
  "code": "533423",
  "p_code": "533400",
  "name": "维西傈僳族自治县",
  "type": "2"
}, { "code": "540000", "p_code": "100000", "name": "西藏自治区", "type": "0" }, {
  "code": "540100",
  "p_code": "540000",
  "name": "拉萨市",
  "type": "1"
}, { "code": "540101", "p_code": "540100", "name": "市辖区", "type": "2" }, {
  "code": "540102",
  "p_code": "540100",
  "name": "城关区",
  "type": "2"
}, { "code": "540121", "p_code": "540100", "name": "林周县", "type": "2" }, {
  "code": "540122",
  "p_code": "540100",
  "name": "当雄县",
  "type": "2"
}, { "code": "540123", "p_code": "540100", "name": "尼木县", "type": "2" }, {
  "code": "540124",
  "p_code": "540100",
  "name": "曲水县",
  "type": "2"
}, { "code": "540125", "p_code": "540100", "name": "堆龙德庆县", "type": "2" }, {
  "code": "540126",
  "p_code": "540100",
  "name": "达孜县",
  "type": "2"
}, { "code": "540127", "p_code": "540100", "name": "墨竹工卡县", "type": "2" }, {
  "code": "542100",
  "p_code": "540000",
  "name": "昌都地区",
  "type": "1"
}, { "code": "542121", "p_code": "542100", "name": "昌都县", "type": "2" }, {
  "code": "542122",
  "p_code": "542100",
  "name": "江达县",
  "type": "2"
}, { "code": "542123", "p_code": "542100", "name": "贡觉县", "type": "2" }, {
  "code": "542124",
  "p_code": "542100",
  "name": "类乌齐县",
  "type": "2"
}, { "code": "542125", "p_code": "542100", "name": "丁青县", "type": "2" }, {
  "code": "542126",
  "p_code": "542100",
  "name": "察雅县",
  "type": "2"
}, { "code": "542127", "p_code": "542100", "name": "八宿县", "type": "2" }, {
  "code": "542128",
  "p_code": "542100",
  "name": "左贡县",
  "type": "2"
}, { "code": "542129", "p_code": "542100", "name": "芒康县", "type": "2" }, {
  "code": "542132",
  "p_code": "542100",
  "name": "洛隆县",
  "type": "2"
}, { "code": "542133", "p_code": "542100", "name": "边坝县", "type": "2" }, {
  "code": "542200",
  "p_code": "540000",
  "name": "山南地区",
  "type": "1"
}, { "code": "542221", "p_code": "542200", "name": "乃东县", "type": "2" }, {
  "code": "542222",
  "p_code": "542200",
  "name": "扎囊县",
  "type": "2"
}, { "code": "542223", "p_code": "542200", "name": "贡嘎县", "type": "2" }, {
  "code": "542224",
  "p_code": "542200",
  "name": "桑日县",
  "type": "2"
}, { "code": "542225", "p_code": "542200", "name": "琼结县", "type": "2" }, {
  "code": "542226",
  "p_code": "542200",
  "name": "曲松县",
  "type": "2"
}, { "code": "542227", "p_code": "542200", "name": "措美县", "type": "2" }, {
  "code": "542228",
  "p_code": "542200",
  "name": "洛扎县",
  "type": "2"
}, { "code": "542229", "p_code": "542200", "name": "加查县", "type": "2" }, {
  "code": "542231",
  "p_code": "542200",
  "name": "隆子县",
  "type": "2"
}, { "code": "542232", "p_code": "542200", "name": "错那县", "type": "2" }, {
  "code": "542233",
  "p_code": "542200",
  "name": "浪卡子县",
  "type": "2"
}, { "code": "542300", "p_code": "540000", "name": "日喀则地区", "type": "1" }, {
  "code": "542301",
  "p_code": "542300",
  "name": "日喀则市",
  "type": "2"
}, { "code": "542322", "p_code": "542300", "name": "南木林县", "type": "2" }, {
  "code": "542323",
  "p_code": "542300",
  "name": "江孜县",
  "type": "2"
}, { "code": "542324", "p_code": "542300", "name": "定日县", "type": "2" }, {
  "code": "542325",
  "p_code": "542300",
  "name": "萨迦县",
  "type": "2"
}, { "code": "542326", "p_code": "542300", "name": "拉孜县", "type": "2" }, {
  "code": "542327",
  "p_code": "542300",
  "name": "昂仁县",
  "type": "2"
}, { "code": "542328", "p_code": "542300", "name": "谢通门县", "type": "2" }, {
  "code": "542329",
  "p_code": "542300",
  "name": "白朗县",
  "type": "2"
}, { "code": "542330", "p_code": "542300", "name": "仁布县", "type": "2" }, {
  "code": "542331",
  "p_code": "542300",
  "name": "康马县",
  "type": "2"
}, { "code": "542332", "p_code": "542300", "name": "定结县", "type": "2" }, {
  "code": "542333",
  "p_code": "542300",
  "name": "仲巴县",
  "type": "2"
}, { "code": "542334", "p_code": "542300", "name": "亚东县", "type": "2" }, {
  "code": "542335",
  "p_code": "542300",
  "name": "吉隆县",
  "type": "2"
}, { "code": "542336", "p_code": "542300", "name": "聂拉木县", "type": "2" }, {
  "code": "542337",
  "p_code": "542300",
  "name": "萨嘎县",
  "type": "2"
}, { "code": "542338", "p_code": "542300", "name": "岗巴县", "type": "2" }, {
  "code": "542400",
  "p_code": "540000",
  "name": "那曲地区",
  "type": "1"
}, { "code": "542421", "p_code": "542400", "name": "那曲县", "type": "2" }, {
  "code": "542422",
  "p_code": "542400",
  "name": "嘉黎县",
  "type": "2"
}, { "code": "542423", "p_code": "542400", "name": "比如县", "type": "2" }, {
  "code": "542424",
  "p_code": "542400",
  "name": "聂荣县",
  "type": "2"
}, { "code": "542425", "p_code": "542400", "name": "安多县", "type": "2" }, {
  "code": "542426",
  "p_code": "542400",
  "name": "申扎县",
  "type": "2"
}, { "code": "542427", "p_code": "542400", "name": "索　县", "type": "2" }, {
  "code": "542428",
  "p_code": "542400",
  "name": "班戈县",
  "type": "2"
}, { "code": "542429", "p_code": "542400", "name": "巴青县", "type": "2" }, {
  "code": "542430",
  "p_code": "542400",
  "name": "尼玛县",
  "type": "2"
}, { "code": "542500", "p_code": "540000", "name": "阿里地区", "type": "1" }, {
  "code": "542521",
  "p_code": "542500",
  "name": "普兰县",
  "type": "2"
}, { "code": "542522", "p_code": "542500", "name": "札达县", "type": "2" }, {
  "code": "542523",
  "p_code": "542500",
  "name": "噶尔县",
  "type": "2"
}, { "code": "542524", "p_code": "542500", "name": "日土县", "type": "2" }, {
  "code": "542525",
  "p_code": "542500",
  "name": "革吉县",
  "type": "2"
}, { "code": "542526", "p_code": "542500", "name": "改则县", "type": "2" }, {
  "code": "542527",
  "p_code": "542500",
  "name": "措勤县",
  "type": "2"
}, { "code": "542600", "p_code": "540000", "name": "林芝地区", "type": "1" }, {
  "code": "542621",
  "p_code": "542600",
  "name": "林芝县",
  "type": "2"
}, { "code": "542622", "p_code": "542600", "name": "工布江达县", "type": "2" }, {
  "code": "542623",
  "p_code": "542600",
  "name": "米林县",
  "type": "2"
}, { "code": "542624", "p_code": "542600", "name": "墨脱县", "type": "2" }, {
  "code": "542625",
  "p_code": "542600",
  "name": "波密县",
  "type": "2"
}, { "code": "542626", "p_code": "542600", "name": "察隅县", "type": "2" }, {
  "code": "542627",
  "p_code": "542600",
  "name": "朗　县",
  "type": "2"
}, { "code": "610000", "p_code": "100000", "name": "陕西省", "type": "0" }, {
  "code": "610100",
  "p_code": "610000",
  "name": "西安市",
  "type": "1"
}, { "code": "610101", "p_code": "610100", "name": "市辖区", "type": "2" }, {
  "code": "610102",
  "p_code": "610100",
  "name": "新城区",
  "type": "2"
}, { "code": "610103", "p_code": "610100", "name": "碑林区", "type": "2" }, {
  "code": "610104",
  "p_code": "610100",
  "name": "莲湖区",
  "type": "2"
}, { "code": "610111", "p_code": "610100", "name": "灞桥区", "type": "2" }, {
  "code": "610112",
  "p_code": "610100",
  "name": "未央区",
  "type": "2"
}, { "code": "610113", "p_code": "610100", "name": "雁塔区", "type": "2" }, {
  "code": "610114",
  "p_code": "610100",
  "name": "阎良区",
  "type": "2"
}, { "code": "610115", "p_code": "610100", "name": "临潼区", "type": "2" }, {
  "code": "610116",
  "p_code": "610100",
  "name": "长安区",
  "type": "2"
}, { "code": "610122", "p_code": "610100", "name": "蓝田县", "type": "2" }, {
  "code": "610124",
  "p_code": "610100",
  "name": "周至县",
  "type": "2"
}, { "code": "610125", "p_code": "610100", "name": "户　县", "type": "2" }, {
  "code": "610126",
  "p_code": "610100",
  "name": "高陵县",
  "type": "2"
}, { "code": "610200", "p_code": "610000", "name": "铜川市", "type": "1" }, {
  "code": "610201",
  "p_code": "610200",
  "name": "市辖区",
  "type": "2"
}, { "code": "610202", "p_code": "610200", "name": "王益区", "type": "2" }, {
  "code": "610203",
  "p_code": "610200",
  "name": "印台区",
  "type": "2"
}, { "code": "610204", "p_code": "610200", "name": "耀州区", "type": "2" }, {
  "code": "610222",
  "p_code": "610200",
  "name": "宜君县",
  "type": "2"
}, { "code": "610300", "p_code": "610000", "name": "宝鸡市", "type": "1" }, {
  "code": "610301",
  "p_code": "610300",
  "name": "市辖区",
  "type": "2"
}, { "code": "610302", "p_code": "610300", "name": "渭滨区", "type": "2" }, {
  "code": "610303",
  "p_code": "610300",
  "name": "金台区",
  "type": "2"
}, { "code": "610304", "p_code": "610300", "name": "陈仓区", "type": "2" }, {
  "code": "610322",
  "p_code": "610300",
  "name": "凤翔县",
  "type": "2"
}, { "code": "610323", "p_code": "610300", "name": "岐山县", "type": "2" }, {
  "code": "610324",
  "p_code": "610300",
  "name": "扶风县",
  "type": "2"
}, { "code": "610326", "p_code": "610300", "name": "眉　县", "type": "2" }, {
  "code": "610327",
  "p_code": "610300",
  "name": "陇　县",
  "type": "2"
}, { "code": "610328", "p_code": "610300", "name": "千阳县", "type": "2" }, {
  "code": "610329",
  "p_code": "610300",
  "name": "麟游县",
  "type": "2"
}, { "code": "610330", "p_code": "610300", "name": "凤　县", "type": "2" }, {
  "code": "610331",
  "p_code": "610300",
  "name": "太白县",
  "type": "2"
}, { "code": "610400", "p_code": "610000", "name": "咸阳市", "type": "1" }, {
  "code": "610401",
  "p_code": "610400",
  "name": "市辖区",
  "type": "2"
}, { "code": "610402", "p_code": "610400", "name": "秦都区", "type": "2" }, {
  "code": "610403",
  "p_code": "610400",
  "name": "杨凌区",
  "type": "2"
}, { "code": "610404", "p_code": "610400", "name": "渭城区", "type": "2" }, {
  "code": "610422",
  "p_code": "610400",
  "name": "三原县",
  "type": "2"
}, { "code": "610423", "p_code": "610400", "name": "泾阳县", "type": "2" }, {
  "code": "610424",
  "p_code": "610400",
  "name": "乾　县",
  "type": "2"
}, { "code": "610425", "p_code": "610400", "name": "礼泉县", "type": "2" }, {
  "code": "610426",
  "p_code": "610400",
  "name": "永寿县",
  "type": "2"
}, { "code": "610427", "p_code": "610400", "name": "彬　县", "type": "2" }, {
  "code": "610428",
  "p_code": "610400",
  "name": "长武县",
  "type": "2"
}, { "code": "610429", "p_code": "610400", "name": "旬邑县", "type": "2" }, {
  "code": "610430",
  "p_code": "610400",
  "name": "淳化县",
  "type": "2"
}, { "code": "610431", "p_code": "610400", "name": "武功县", "type": "2" }, {
  "code": "610481",
  "p_code": "610400",
  "name": "兴平市",
  "type": "2"
}, { "code": "610500", "p_code": "610000", "name": "渭南市", "type": "1" }, {
  "code": "610501",
  "p_code": "610500",
  "name": "市辖区",
  "type": "2"
}, { "code": "610502", "p_code": "610500", "name": "临渭区", "type": "2" }, {
  "code": "610521",
  "p_code": "610500",
  "name": "华　县",
  "type": "2"
}, { "code": "610522", "p_code": "610500", "name": "潼关县", "type": "2" }, {
  "code": "610523",
  "p_code": "610500",
  "name": "大荔县",
  "type": "2"
}, { "code": "610524", "p_code": "610500", "name": "合阳县", "type": "2" }, {
  "code": "610525",
  "p_code": "610500",
  "name": "澄城县",
  "type": "2"
}, { "code": "610526", "p_code": "610500", "name": "蒲城县", "type": "2" }, {
  "code": "610527",
  "p_code": "610500",
  "name": "白水县",
  "type": "2"
}, { "code": "610528", "p_code": "610500", "name": "富平县", "type": "2" }, {
  "code": "610581",
  "p_code": "610500",
  "name": "韩城市",
  "type": "2"
}, { "code": "610582", "p_code": "610500", "name": "华阴市", "type": "2" }, {
  "code": "610600",
  "p_code": "610000",
  "name": "延安市",
  "type": "1"
}, { "code": "610601", "p_code": "610600", "name": "市辖区", "type": "2" }, {
  "code": "610602",
  "p_code": "610600",
  "name": "宝塔区",
  "type": "2"
}, { "code": "610621", "p_code": "610600", "name": "延长县", "type": "2" }, {
  "code": "610622",
  "p_code": "610600",
  "name": "延川县",
  "type": "2"
}, { "code": "610623", "p_code": "610600", "name": "子长县", "type": "2" }, {
  "code": "610624",
  "p_code": "610600",
  "name": "安塞县",
  "type": "2"
}, { "code": "610625", "p_code": "610600", "name": "志丹县", "type": "2" }, {
  "code": "610626",
  "p_code": "610600",
  "name": "吴旗县",
  "type": "2"
}, { "code": "610627", "p_code": "610600", "name": "甘泉县", "type": "2" }, {
  "code": "610628",
  "p_code": "610600",
  "name": "富　县",
  "type": "2"
}, { "code": "610629", "p_code": "610600", "name": "洛川县", "type": "2" }, {
  "code": "610630",
  "p_code": "610600",
  "name": "宜川县",
  "type": "2"
}, { "code": "610631", "p_code": "610600", "name": "黄龙县", "type": "2" }, {
  "code": "610632",
  "p_code": "610600",
  "name": "黄陵县",
  "type": "2"
}, { "code": "610700", "p_code": "610000", "name": "汉中市", "type": "1" }, {
  "code": "610701",
  "p_code": "610700",
  "name": "市辖区",
  "type": "2"
}, { "code": "610702", "p_code": "610700", "name": "汉台区", "type": "2" }, {
  "code": "610721",
  "p_code": "610700",
  "name": "南郑县",
  "type": "2"
}, { "code": "610722", "p_code": "610700", "name": "城固县", "type": "2" }, {
  "code": "610723",
  "p_code": "610700",
  "name": "洋　县",
  "type": "2"
}, { "code": "610724", "p_code": "610700", "name": "西乡县", "type": "2" }, {
  "code": "610725",
  "p_code": "610700",
  "name": "勉　县",
  "type": "2"
}, { "code": "610726", "p_code": "610700", "name": "宁强县", "type": "2" }, {
  "code": "610727",
  "p_code": "610700",
  "name": "略阳县",
  "type": "2"
}, { "code": "610728", "p_code": "610700", "name": "镇巴县", "type": "2" }, {
  "code": "610729",
  "p_code": "610700",
  "name": "留坝县",
  "type": "2"
}, { "code": "610730", "p_code": "610700", "name": "佛坪县", "type": "2" }, {
  "code": "610800",
  "p_code": "610000",
  "name": "榆林市",
  "type": "1"
}, { "code": "610801", "p_code": "610800", "name": "市辖区", "type": "2" }, {
  "code": "610802",
  "p_code": "610800",
  "name": "榆阳区",
  "type": "2"
}, { "code": "610821", "p_code": "610800", "name": "神木县", "type": "2" }, {
  "code": "610822",
  "p_code": "610800",
  "name": "府谷县",
  "type": "2"
}, { "code": "610823", "p_code": "610800", "name": "横山县", "type": "2" }, {
  "code": "610824",
  "p_code": "610800",
  "name": "靖边县",
  "type": "2"
}, { "code": "610825", "p_code": "610800", "name": "定边县", "type": "2" }, {
  "code": "610826",
  "p_code": "610800",
  "name": "绥德县",
  "type": "2"
}, { "code": "610827", "p_code": "610800", "name": "米脂县", "type": "2" }, {
  "code": "610828",
  "p_code": "610800",
  "name": "佳　县",
  "type": "2"
}, { "code": "610829", "p_code": "610800", "name": "吴堡县", "type": "2" }, {
  "code": "610830",
  "p_code": "610800",
  "name": "清涧县",
  "type": "2"
}, { "code": "610831", "p_code": "610800", "name": "子洲县", "type": "2" }, {
  "code": "610900",
  "p_code": "610000",
  "name": "安康市",
  "type": "1"
}, { "code": "610901", "p_code": "610900", "name": "市辖区", "type": "2" }, {
  "code": "610902",
  "p_code": "610900",
  "name": "汉滨区",
  "type": "2"
}, { "code": "610921", "p_code": "610900", "name": "汉阴县", "type": "2" }, {
  "code": "610922",
  "p_code": "610900",
  "name": "石泉县",
  "type": "2"
}, { "code": "610923", "p_code": "610900", "name": "宁陕县", "type": "2" }, {
  "code": "610924",
  "p_code": "610900",
  "name": "紫阳县",
  "type": "2"
}, { "code": "610925", "p_code": "610900", "name": "岚皋县", "type": "2" }, {
  "code": "610926",
  "p_code": "610900",
  "name": "平利县",
  "type": "2"
}, { "code": "610927", "p_code": "610900", "name": "镇坪县", "type": "2" }, {
  "code": "610928",
  "p_code": "610900",
  "name": "旬阳县",
  "type": "2"
}, { "code": "610929", "p_code": "610900", "name": "白河县", "type": "2" }, {
  "code": "611000",
  "p_code": "610000",
  "name": "商洛市",
  "type": "1"
}, { "code": "611001", "p_code": "611000", "name": "市辖区", "type": "2" }, {
  "code": "611002",
  "p_code": "611000",
  "name": "商州区",
  "type": "2"
}, { "code": "611021", "p_code": "611000", "name": "洛南县", "type": "2" }, {
  "code": "611022",
  "p_code": "611000",
  "name": "丹凤县",
  "type": "2"
}, { "code": "611023", "p_code": "611000", "name": "商南县", "type": "2" }, {
  "code": "611024",
  "p_code": "611000",
  "name": "山阳县",
  "type": "2"
}, { "code": "611025", "p_code": "611000", "name": "镇安县", "type": "2" }, {
  "code": "611026",
  "p_code": "611000",
  "name": "柞水县",
  "type": "2"
}, { "code": "620000", "p_code": "100000", "name": "甘肃省", "type": "0" }, {
  "code": "620100",
  "p_code": "620000",
  "name": "兰州市",
  "type": "1"
}, { "code": "620101", "p_code": "620100", "name": "市辖区", "type": "2" }, {
  "code": "620102",
  "p_code": "620100",
  "name": "城关区",
  "type": "2"
}, { "code": "620103", "p_code": "620100", "name": "七里河区", "type": "2" }, {
  "code": "620104",
  "p_code": "620100",
  "name": "西固区",
  "type": "2"
}, { "code": "620105", "p_code": "620100", "name": "安宁区", "type": "2" }, {
  "code": "620111",
  "p_code": "620100",
  "name": "红古区",
  "type": "2"
}, { "code": "620121", "p_code": "620100", "name": "永登县", "type": "2" }, {
  "code": "620122",
  "p_code": "620100",
  "name": "皋兰县",
  "type": "2"
}, { "code": "620123", "p_code": "620100", "name": "榆中县", "type": "2" }, {
  "code": "620200",
  "p_code": "620000",
  "name": "嘉峪关市",
  "type": "1"
}, { "code": "620201", "p_code": "620200", "name": "市辖区", "type": "2" }, {
  "code": "620300",
  "p_code": "620000",
  "name": "金昌市",
  "type": "1"
}, { "code": "620301", "p_code": "620300", "name": "市辖区", "type": "2" }, {
  "code": "620302",
  "p_code": "620300",
  "name": "金川区",
  "type": "2"
}, { "code": "620321", "p_code": "620300", "name": "永昌县", "type": "2" }, {
  "code": "620400",
  "p_code": "620000",
  "name": "白银市",
  "type": "1"
}, { "code": "620401", "p_code": "620400", "name": "市辖区", "type": "2" }, {
  "code": "620402",
  "p_code": "620400",
  "name": "白银区",
  "type": "2"
}, { "code": "620403", "p_code": "620400", "name": "平川区", "type": "2" }, {
  "code": "620421",
  "p_code": "620400",
  "name": "靖远县",
  "type": "2"
}, { "code": "620422", "p_code": "620400", "name": "会宁县", "type": "2" }, {
  "code": "620423",
  "p_code": "620400",
  "name": "景泰县",
  "type": "2"
}, { "code": "620500", "p_code": "620000", "name": "天水市", "type": "1" }, {
  "code": "620501",
  "p_code": "620500",
  "name": "市辖区",
  "type": "2"
}, { "code": "620502", "p_code": "620500", "name": "秦城区", "type": "2" }, {
  "code": "620503",
  "p_code": "620500",
  "name": "北道区",
  "type": "2"
}, { "code": "620521", "p_code": "620500", "name": "清水县", "type": "2" }, {
  "code": "620522",
  "p_code": "620500",
  "name": "秦安县",
  "type": "2"
}, { "code": "620523", "p_code": "620500", "name": "甘谷县", "type": "2" }, {
  "code": "620524",
  "p_code": "620500",
  "name": "武山县",
  "type": "2"
}, { "code": "620525", "p_code": "620500", "name": "张家川回族自治县", "type": "2" }, {
  "code": "620600",
  "p_code": "620000",
  "name": "武威市",
  "type": "1"
}, { "code": "620601", "p_code": "620600", "name": "市辖区", "type": "2" }, {
  "code": "620602",
  "p_code": "620600",
  "name": "凉州区",
  "type": "2"
}, { "code": "620621", "p_code": "620600", "name": "民勤县", "type": "2" }, {
  "code": "620622",
  "p_code": "620600",
  "name": "古浪县",
  "type": "2"
}, { "code": "620623", "p_code": "620600", "name": "天祝藏族自治县", "type": "2" }, {
  "code": "620700",
  "p_code": "620000",
  "name": "张掖市",
  "type": "1"
}, { "code": "620701", "p_code": "620700", "name": "市辖区", "type": "2" }, {
  "code": "620702",
  "p_code": "620700",
  "name": "甘州区",
  "type": "2"
}, { "code": "620721", "p_code": "620700", "name": "肃南裕固族自治县", "type": "2" }, {
  "code": "620722",
  "p_code": "620700",
  "name": "民乐县",
  "type": "2"
}, { "code": "620723", "p_code": "620700", "name": "临泽县", "type": "2" }, {
  "code": "620724",
  "p_code": "620700",
  "name": "高台县",
  "type": "2"
}, { "code": "620725", "p_code": "620700", "name": "山丹县", "type": "2" }, {
  "code": "620800",
  "p_code": "620000",
  "name": "平凉市",
  "type": "1"
}, { "code": "620801", "p_code": "620800", "name": "市辖区", "type": "2" }, {
  "code": "620802",
  "p_code": "620800",
  "name": "崆峒区",
  "type": "2"
}, { "code": "620821", "p_code": "620800", "name": "泾川县", "type": "2" }, {
  "code": "620822",
  "p_code": "620800",
  "name": "灵台县",
  "type": "2"
}, { "code": "620823", "p_code": "620800", "name": "崇信县", "type": "2" }, {
  "code": "620824",
  "p_code": "620800",
  "name": "华亭县",
  "type": "2"
}, { "code": "620825", "p_code": "620800", "name": "庄浪县", "type": "2" }, {
  "code": "620826",
  "p_code": "620800",
  "name": "静宁县",
  "type": "2"
}, { "code": "620900", "p_code": "620000", "name": "酒泉市", "type": "1" }, {
  "code": "620901",
  "p_code": "620900",
  "name": "市辖区",
  "type": "2"
}, { "code": "620902", "p_code": "620900", "name": "肃州区", "type": "2" }, {
  "code": "620921",
  "p_code": "620900",
  "name": "金塔县",
  "type": "2"
}, { "code": "620922", "p_code": "620900", "name": "安西县", "type": "2" }, {
  "code": "620923",
  "p_code": "620900",
  "name": "肃北蒙古族自治县",
  "type": "2"
}, { "code": "620924", "p_code": "620900", "name": "阿克塞哈萨克族自治县", "type": "2" }, {
  "code": "620981",
  "p_code": "620900",
  "name": "玉门市",
  "type": "2"
}, { "code": "620982", "p_code": "620900", "name": "敦煌市", "type": "2" }, {
  "code": "621000",
  "p_code": "620000",
  "name": "庆阳市",
  "type": "1"
}, { "code": "621001", "p_code": "621000", "name": "市辖区", "type": "2" }, {
  "code": "621002",
  "p_code": "621000",
  "name": "西峰区",
  "type": "2"
}, { "code": "621021", "p_code": "621000", "name": "庆城县", "type": "2" }, {
  "code": "621022",
  "p_code": "621000",
  "name": "环　县",
  "type": "2"
}, { "code": "621023", "p_code": "621000", "name": "华池县", "type": "2" }, {
  "code": "621024",
  "p_code": "621000",
  "name": "合水县",
  "type": "2"
}, { "code": "621025", "p_code": "621000", "name": "正宁县", "type": "2" }, {
  "code": "621026",
  "p_code": "621000",
  "name": "宁　县",
  "type": "2"
}, { "code": "621027", "p_code": "621000", "name": "镇原县", "type": "2" }, {
  "code": "621100",
  "p_code": "620000",
  "name": "定西市",
  "type": "1"
}, { "code": "621101", "p_code": "621100", "name": "市辖区", "type": "2" }, {
  "code": "621102",
  "p_code": "621100",
  "name": "安定区",
  "type": "2"
}, { "code": "621121", "p_code": "621100", "name": "通渭县", "type": "2" }, {
  "code": "621122",
  "p_code": "621100",
  "name": "陇西县",
  "type": "2"
}, { "code": "621123", "p_code": "621100", "name": "渭源县", "type": "2" }, {
  "code": "621124",
  "p_code": "621100",
  "name": "临洮县",
  "type": "2"
}, { "code": "621125", "p_code": "621100", "name": "漳　县", "type": "2" }, {
  "code": "621126",
  "p_code": "621100",
  "name": "岷　县",
  "type": "2"
}, { "code": "621200", "p_code": "620000", "name": "陇南市", "type": "1" }, {
  "code": "621201",
  "p_code": "621200",
  "name": "市辖区",
  "type": "2"
}, { "code": "621202", "p_code": "621200", "name": "武都区", "type": "2" }, {
  "code": "621221",
  "p_code": "621200",
  "name": "成　县",
  "type": "2"
}, { "code": "621222", "p_code": "621200", "name": "文　县", "type": "2" }, {
  "code": "621223",
  "p_code": "621200",
  "name": "宕昌县",
  "type": "2"
}, { "code": "621224", "p_code": "621200", "name": "康　县", "type": "2" }, {
  "code": "621225",
  "p_code": "621200",
  "name": "西和县",
  "type": "2"
}, { "code": "621226", "p_code": "621200", "name": "礼　县", "type": "2" }, {
  "code": "621227",
  "p_code": "621200",
  "name": "徽　县",
  "type": "2"
}, { "code": "621228", "p_code": "621200", "name": "两当县", "type": "2" }, {
  "code": "622900",
  "p_code": "620000",
  "name": "临夏回族自治州",
  "type": "1"
}, { "code": "622901", "p_code": "622900", "name": "临夏市", "type": "2" }, {
  "code": "622921",
  "p_code": "622900",
  "name": "临夏县",
  "type": "2"
}, { "code": "622922", "p_code": "622900", "name": "康乐县", "type": "2" }, {
  "code": "622923",
  "p_code": "622900",
  "name": "永靖县",
  "type": "2"
}, { "code": "622924", "p_code": "622900", "name": "广河县", "type": "2" }, {
  "code": "622925",
  "p_code": "622900",
  "name": "和政县",
  "type": "2"
}, { "code": "622926", "p_code": "622900", "name": "东乡族自治县", "type": "2" }, {
  "code": "622927",
  "p_code": "622900",
  "name": "积石山保安族东乡族撒拉族自治县",
  "type": "2"
}, { "code": "623000", "p_code": "620000", "name": "甘南藏族自治州", "type": "1" }, {
  "code": "623001",
  "p_code": "623000",
  "name": "合作市",
  "type": "2"
}, { "code": "623021", "p_code": "623000", "name": "临潭县", "type": "2" }, {
  "code": "623022",
  "p_code": "623000",
  "name": "卓尼县",
  "type": "2"
}, { "code": "623023", "p_code": "623000", "name": "舟曲县", "type": "2" }, {
  "code": "623024",
  "p_code": "623000",
  "name": "迭部县",
  "type": "2"
}, { "code": "623025", "p_code": "623000", "name": "玛曲县", "type": "2" }, {
  "code": "623026",
  "p_code": "623000",
  "name": "碌曲县",
  "type": "2"
}, { "code": "623027", "p_code": "623000", "name": "夏河县", "type": "2" }, {
  "code": "630000",
  "p_code": "100000",
  "name": "青海省",
  "type": "0"
}, { "code": "630100", "p_code": "630000", "name": "西宁市", "type": "1" }, {
  "code": "630101",
  "p_code": "630100",
  "name": "市辖区",
  "type": "2"
}, { "code": "630102", "p_code": "630100", "name": "城东区", "type": "2" }, {
  "code": "630103",
  "p_code": "630100",
  "name": "城中区",
  "type": "2"
}, { "code": "630104", "p_code": "630100", "name": "城西区", "type": "2" }, {
  "code": "630105",
  "p_code": "630100",
  "name": "城北区",
  "type": "2"
}, { "code": "630121", "p_code": "630100", "name": "大通回族土族自治县", "type": "2" }, {
  "code": "630122",
  "p_code": "630100",
  "name": "湟中县",
  "type": "2"
}, { "code": "630123", "p_code": "630100", "name": "湟源县", "type": "2" }, {
  "code": "632100",
  "p_code": "630000",
  "name": "海东地区",
  "type": "1"
}, { "code": "632121", "p_code": "632100", "name": "平安县", "type": "2" }, {
  "code": "632122",
  "p_code": "632100",
  "name": "民和回族土族自治县",
  "type": "2"
}, { "code": "632123", "p_code": "632100", "name": "乐都县", "type": "2" }, {
  "code": "632126",
  "p_code": "632100",
  "name": "互助土族自治县",
  "type": "2"
}, { "code": "632127", "p_code": "632100", "name": "化隆回族自治县", "type": "2" }, {
  "code": "632128",
  "p_code": "632100",
  "name": "循化撒拉族自治县",
  "type": "2"
}, { "code": "632200", "p_code": "630000", "name": "海北藏族自治州", "type": "1" }, {
  "code": "632221",
  "p_code": "632200",
  "name": "门源回族自治县",
  "type": "2"
}, { "code": "632222", "p_code": "632200", "name": "祁连县", "type": "2" }, {
  "code": "632223",
  "p_code": "632200",
  "name": "海晏县",
  "type": "2"
}, { "code": "632224", "p_code": "632200", "name": "刚察县", "type": "2" }, {
  "code": "632300",
  "p_code": "630000",
  "name": "黄南藏族自治州",
  "type": "1"
}, { "code": "632321", "p_code": "632300", "name": "同仁县", "type": "2" }, {
  "code": "632322",
  "p_code": "632300",
  "name": "尖扎县",
  "type": "2"
}, { "code": "632323", "p_code": "632300", "name": "泽库县", "type": "2" }, {
  "code": "632324",
  "p_code": "632300",
  "name": "河南蒙古族自治县",
  "type": "2"
}, { "code": "632500", "p_code": "630000", "name": "海南藏族自治州", "type": "1" }, {
  "code": "632521",
  "p_code": "632500",
  "name": "共和县",
  "type": "2"
}, { "code": "632522", "p_code": "632500", "name": "同德县", "type": "2" }, {
  "code": "632523",
  "p_code": "632500",
  "name": "贵德县",
  "type": "2"
}, { "code": "632524", "p_code": "632500", "name": "兴海县", "type": "2" }, {
  "code": "632525",
  "p_code": "632500",
  "name": "贵南县",
  "type": "2"
}, { "code": "632600", "p_code": "630000", "name": "果洛藏族自治州", "type": "1" }, {
  "code": "632621",
  "p_code": "632600",
  "name": "玛沁县",
  "type": "2"
}, { "code": "632622", "p_code": "632600", "name": "班玛县", "type": "2" }, {
  "code": "632623",
  "p_code": "632600",
  "name": "甘德县",
  "type": "2"
}, { "code": "632624", "p_code": "632600", "name": "达日县", "type": "2" }, {
  "code": "632625",
  "p_code": "632600",
  "name": "久治县",
  "type": "2"
}, { "code": "632626", "p_code": "632600", "name": "玛多县", "type": "2" }, {
  "code": "632700",
  "p_code": "630000",
  "name": "玉树藏族自治州",
  "type": "1"
}, { "code": "632721", "p_code": "632700", "name": "玉树县", "type": "2" }, {
  "code": "632722",
  "p_code": "632700",
  "name": "杂多县",
  "type": "2"
}, { "code": "632723", "p_code": "632700", "name": "称多县", "type": "2" }, {
  "code": "632724",
  "p_code": "632700",
  "name": "治多县",
  "type": "2"
}, { "code": "632725", "p_code": "632700", "name": "囊谦县", "type": "2" }, {
  "code": "632726",
  "p_code": "632700",
  "name": "曲麻莱县",
  "type": "2"
}, { "code": "632800", "p_code": "630000", "name": "海西蒙古族藏族自治州", "type": "1" }, {
  "code": "632801",
  "p_code": "632800",
  "name": "格尔木市",
  "type": "2"
}, { "code": "632802", "p_code": "632800", "name": "德令哈市", "type": "2" }, {
  "code": "632821",
  "p_code": "632800",
  "name": "乌兰县",
  "type": "2"
}, { "code": "632822", "p_code": "632800", "name": "都兰县", "type": "2" }, {
  "code": "632823",
  "p_code": "632800",
  "name": "天峻县",
  "type": "2"
}, { "code": "640000", "p_code": "100000", "name": "宁夏回族自治区", "type": "0" }, {
  "code": "640100",
  "p_code": "640000",
  "name": "银川市",
  "type": "1"
}, { "code": "640101", "p_code": "640100", "name": "市辖区", "type": "2" }, {
  "code": "640104",
  "p_code": "640100",
  "name": "兴庆区",
  "type": "2"
}, { "code": "640105", "p_code": "640100", "name": "西夏区", "type": "2" }, {
  "code": "640106",
  "p_code": "640100",
  "name": "金凤区",
  "type": "2"
}, { "code": "640121", "p_code": "640100", "name": "永宁县", "type": "2" }, {
  "code": "640122",
  "p_code": "640100",
  "name": "贺兰县",
  "type": "2"
}, { "code": "640181", "p_code": "640100", "name": "灵武市", "type": "2" }, {
  "code": "640200",
  "p_code": "640000",
  "name": "石嘴山市",
  "type": "1"
}, { "code": "640201", "p_code": "640200", "name": "市辖区", "type": "2" }, {
  "code": "640202",
  "p_code": "640200",
  "name": "大武口区",
  "type": "2"
}, { "code": "640205", "p_code": "640200", "name": "惠农区", "type": "2" }, {
  "code": "640221",
  "p_code": "640200",
  "name": "平罗县",
  "type": "2"
}, { "code": "640300", "p_code": "640000", "name": "吴忠市", "type": "1" }, {
  "code": "640301",
  "p_code": "640300",
  "name": "市辖区",
  "type": "2"
}, { "code": "640302", "p_code": "640300", "name": "利通区", "type": "2" }, {
  "code": "640323",
  "p_code": "640300",
  "name": "盐池县",
  "type": "2"
}, { "code": "640324", "p_code": "640300", "name": "同心县", "type": "2" }, {
  "code": "640381",
  "p_code": "640300",
  "name": "青铜峡市",
  "type": "2"
}, { "code": "640400", "p_code": "640000", "name": "固原市", "type": "1" }, {
  "code": "640401",
  "p_code": "640400",
  "name": "市辖区",
  "type": "2"
}, { "code": "640402", "p_code": "640400", "name": "原州区", "type": "2" }, {
  "code": "640422",
  "p_code": "640400",
  "name": "西吉县",
  "type": "2"
}, { "code": "640423", "p_code": "640400", "name": "隆德县", "type": "2" }, {
  "code": "640424",
  "p_code": "640400",
  "name": "泾源县",
  "type": "2"
}, { "code": "640425", "p_code": "640400", "name": "彭阳县", "type": "2" }, {
  "code": "640500",
  "p_code": "640000",
  "name": "中卫市",
  "type": "1"
}, { "code": "640501", "p_code": "640500", "name": "市辖区", "type": "2" }, {
  "code": "640502",
  "p_code": "640500",
  "name": "沙坡头区",
  "type": "2"
}, { "code": "640521", "p_code": "640500", "name": "中宁县", "type": "2" }, {
  "code": "640522",
  "p_code": "640400",
  "name": "海原县",
  "type": "2"
}, { "code": "650000", "p_code": "100000", "name": "新疆维吾尔自治区", "type": "0" }, {
  "code": "650100",
  "p_code": "650000",
  "name": "乌鲁木齐市",
  "type": "1"
}, { "code": "650101", "p_code": "650100", "name": "市辖区", "type": "2" }, {
  "code": "650102",
  "p_code": "650100",
  "name": "天山区",
  "type": "2"
}, { "code": "650103", "p_code": "650100", "name": "沙依巴克区", "type": "2" }, {
  "code": "650104",
  "p_code": "650100",
  "name": "新市区",
  "type": "2"
}, { "code": "650105", "p_code": "650100", "name": "水磨沟区", "type": "2" }, {
  "code": "650106",
  "p_code": "650100",
  "name": "头屯河区",
  "type": "2"
}, { "code": "650107", "p_code": "650100", "name": "达坂城区", "type": "2" }, {
  "code": "650108",
  "p_code": "650100",
  "name": "东山区",
  "type": "2"
}, { "code": "650121", "p_code": "650100", "name": "乌鲁木齐县", "type": "2" }, {
  "code": "650200",
  "p_code": "650000",
  "name": "克拉玛依市",
  "type": "1"
}, { "code": "650201", "p_code": "650200", "name": "市辖区", "type": "2" }, {
  "code": "650202",
  "p_code": "650200",
  "name": "独山子区",
  "type": "2"
}, { "code": "650203", "p_code": "650200", "name": "克拉玛依区", "type": "2" }, {
  "code": "650204",
  "p_code": "650200",
  "name": "白碱滩区",
  "type": "2"
}, { "code": "650205", "p_code": "650200", "name": "乌尔禾区", "type": "2" }, {
  "code": "652100",
  "p_code": "650000",
  "name": "吐鲁番地区",
  "type": "1"
}, { "code": "652101", "p_code": "652100", "name": "吐鲁番市", "type": "2" }, {
  "code": "652122",
  "p_code": "652100",
  "name": "鄯善县",
  "type": "2"
}, { "code": "652123", "p_code": "652100", "name": "托克逊县", "type": "2" }, {
  "code": "652200",
  "p_code": "650000",
  "name": "哈密地区",
  "type": "1"
}, { "code": "652201", "p_code": "652200", "name": "哈密市", "type": "2" }, {
  "code": "652222",
  "p_code": "652200",
  "name": "巴里坤哈萨克自治县",
  "type": "2"
}, { "code": "652223", "p_code": "652200", "name": "伊吾县", "type": "2" }, {
  "code": "652300",
  "p_code": "650000",
  "name": "昌吉回族自治州",
  "type": "1"
}, { "code": "652301", "p_code": "652300", "name": "昌吉市", "type": "2" }, {
  "code": "652302",
  "p_code": "652300",
  "name": "阜康市",
  "type": "2"
}, { "code": "652303", "p_code": "652300", "name": "米泉市", "type": "2" }, {
  "code": "652323",
  "p_code": "652300",
  "name": "呼图壁县",
  "type": "2"
}, { "code": "652324", "p_code": "652300", "name": "玛纳斯县", "type": "2" }, {
  "code": "652325",
  "p_code": "652300",
  "name": "奇台县",
  "type": "2"
}, { "code": "652327", "p_code": "652300", "name": "吉木萨尔县", "type": "2" }, {
  "code": "652328",
  "p_code": "652300",
  "name": "木垒哈萨克自治县",
  "type": "2"
}, { "code": "652700", "p_code": "650000", "name": "博尔塔拉蒙古自治州", "type": "1" }, {
  "code": "652701",
  "p_code": "652700",
  "name": "博乐市",
  "type": "2"
}, { "code": "652722", "p_code": "652700", "name": "精河县", "type": "2" }, {
  "code": "652723",
  "p_code": "652700",
  "name": "温泉县",
  "type": "2"
}, { "code": "652800", "p_code": "650000", "name": "巴音郭楞蒙古自治州", "type": "1" }, {
  "code": "652801",
  "p_code": "652800",
  "name": "库尔勒市",
  "type": "2"
}, { "code": "652822", "p_code": "652800", "name": "轮台县", "type": "2" }, {
  "code": "652823",
  "p_code": "652800",
  "name": "尉犁县",
  "type": "2"
}, { "code": "652824", "p_code": "652800", "name": "若羌县", "type": "2" }, {
  "code": "652825",
  "p_code": "652800",
  "name": "且末县",
  "type": "2"
}, { "code": "652826", "p_code": "652800", "name": "焉耆回族自治县", "type": "2" }, {
  "code": "652827",
  "p_code": "652800",
  "name": "和静县",
  "type": "2"
}, { "code": "652828", "p_code": "652800", "name": "和硕县", "type": "2" }, {
  "code": "652829",
  "p_code": "652800",
  "name": "博湖县",
  "type": "2"
}, { "code": "652900", "p_code": "650000", "name": "阿克苏地区", "type": "1" }, {
  "code": "652901",
  "p_code": "652900",
  "name": "阿克苏市",
  "type": "2"
}, { "code": "652922", "p_code": "652900", "name": "温宿县", "type": "2" }, {
  "code": "652923",
  "p_code": "652900",
  "name": "库车县",
  "type": "2"
}, { "code": "652924", "p_code": "652900", "name": "沙雅县", "type": "2" }, {
  "code": "652925",
  "p_code": "652900",
  "name": "新和县",
  "type": "2"
}, { "code": "652926", "p_code": "652900", "name": "拜城县", "type": "2" }, {
  "code": "652927",
  "p_code": "652900",
  "name": "乌什县",
  "type": "2"
}, { "code": "652928", "p_code": "652900", "name": "阿瓦提县", "type": "2" }, {
  "code": "652929",
  "p_code": "652900",
  "name": "柯坪县",
  "type": "2"
}, { "code": "653000", "p_code": "650000", "name": "克孜勒苏柯尔克孜自治州", "type": "1" }, {
  "code": "653001",
  "p_code": "653000",
  "name": "阿图什市",
  "type": "2"
}, { "code": "653022", "p_code": "653000", "name": "阿克陶县", "type": "2" }, {
  "code": "653023",
  "p_code": "653000",
  "name": "阿合奇县",
  "type": "2"
}, { "code": "653024", "p_code": "653000", "name": "乌恰县", "type": "2" }, {
  "code": "653100",
  "p_code": "650000",
  "name": "喀什地区",
  "type": "1"
}, { "code": "653101", "p_code": "653100", "name": "喀什市", "type": "2" }, {
  "code": "653121",
  "p_code": "653100",
  "name": "疏附县",
  "type": "2"
}, { "code": "653122", "p_code": "653100", "name": "疏勒县", "type": "2" }, {
  "code": "653123",
  "p_code": "653100",
  "name": "英吉沙县",
  "type": "2"
}, { "code": "653124", "p_code": "653100", "name": "泽普县", "type": "2" }, {
  "code": "653125",
  "p_code": "653100",
  "name": "莎车县",
  "type": "2"
}, { "code": "653126", "p_code": "653100", "name": "叶城县", "type": "2" }, {
  "code": "653127",
  "p_code": "653100",
  "name": "麦盖提县",
  "type": "2"
}, { "code": "653128", "p_code": "653100", "name": "岳普湖县", "type": "2" }, {
  "code": "653129",
  "p_code": "653100",
  "name": "伽师县",
  "type": "2"
}, { "code": "653130", "p_code": "653100", "name": "巴楚县", "type": "2" }, {
  "code": "653131",
  "p_code": "653100",
  "name": "塔什库尔干塔吉克自治县",
  "type": "2"
}, { "code": "653200", "p_code": "650000", "name": "和田地区", "type": "1" }, {
  "code": "653201",
  "p_code": "653200",
  "name": "和田市",
  "type": "2"
}, { "code": "653221", "p_code": "653200", "name": "和田县", "type": "2" }, {
  "code": "653222",
  "p_code": "653200",
  "name": "墨玉县",
  "type": "2"
}, { "code": "653223", "p_code": "653200", "name": "皮山县", "type": "2" }, {
  "code": "653224",
  "p_code": "653200",
  "name": "洛浦县",
  "type": "2"
}, { "code": "653225", "p_code": "653200", "name": "策勒县", "type": "2" }, {
  "code": "653226",
  "p_code": "653200",
  "name": "于田县",
  "type": "2"
}, { "code": "653227", "p_code": "653200", "name": "民丰县", "type": "2" }, {
  "code": "654000",
  "p_code": "650000",
  "name": "伊犁哈萨克自治州",
  "type": "1"
}, { "code": "654002", "p_code": "654000", "name": "伊宁市", "type": "2" }, {
  "code": "654003",
  "p_code": "654000",
  "name": "奎屯市",
  "type": "2"
}, { "code": "654021", "p_code": "654000", "name": "伊宁县", "type": "2" }, {
  "code": "654022",
  "p_code": "654000",
  "name": "察布查尔锡伯自治县",
  "type": "2"
}, { "code": "654023", "p_code": "654000", "name": "霍城县", "type": "2" }, {
  "code": "654024",
  "p_code": "654000",
  "name": "巩留县",
  "type": "2"
}, { "code": "654025", "p_code": "654000", "name": "新源县", "type": "2" }, {
  "code": "654026",
  "p_code": "654000",
  "name": "昭苏县",
  "type": "2"
}, { "code": "654027", "p_code": "654000", "name": "特克斯县", "type": "2" }, {
  "code": "654028",
  "p_code": "654000",
  "name": "尼勒克县",
  "type": "2"
}, { "code": "654200", "p_code": "650000", "name": "塔城地区", "type": "1" }, {
  "code": "654201",
  "p_code": "654200",
  "name": "塔城市",
  "type": "2"
}, { "code": "654202", "p_code": "654200", "name": "乌苏市", "type": "2" }, {
  "code": "654221",
  "p_code": "654200",
  "name": "额敏县",
  "type": "2"
}, { "code": "654223", "p_code": "654200", "name": "沙湾县", "type": "2" }, {
  "code": "654224",
  "p_code": "654200",
  "name": "托里县",
  "type": "2"
}, { "code": "654225", "p_code": "654200", "name": "裕民县", "type": "2" }, {
  "code": "654226",
  "p_code": "654200",
  "name": "和布克赛尔蒙古自治县",
  "type": "2"
}, { "code": "654300", "p_code": "650000", "name": "阿勒泰地区", "type": "1" }, {
  "code": "654301",
  "p_code": "654300",
  "name": "阿勒泰市",
  "type": "2"
}, { "code": "654321", "p_code": "654300", "name": "布尔津县", "type": "2" }, {
  "code": "654322",
  "p_code": "654300",
  "name": "富蕴县",
  "type": "2"
}, { "code": "654323", "p_code": "654300", "name": "福海县", "type": "2" }, {
  "code": "654324",
  "p_code": "654300",
  "name": "哈巴河县",
  "type": "2"
}, { "code": "654325", "p_code": "654300", "name": "青河县", "type": "2" }, {
  "code": "654326",
  "p_code": "654300",
  "name": "吉木乃县",
  "type": "2"
}, { "code": "659000", "p_code": "650000", "name": "省直辖行政单位", "type": "1" }, {
  "code": "659001",
  "p_code": "659000",
  "name": "石河子市",
  "type": "2"
}, { "code": "659002", "p_code": "659000", "name": "阿拉尔市", "type": "2" }, {
  "code": "659003",
  "p_code": "659000",
  "name": "图木舒克市",
  "type": "2"
}, { "code": "659004", "p_code": "659000", "name": "五家渠市", "type": "2" }, {
  "code": "710000",
  "p_code": "100000",
  "name": "台湾省",
  "type": "0"
}, { "code": "810000", "p_code": "100000", "name": "香港特别行政区", "type": "0" }, {
  "code": "820000",
  "p_code": "100000",
  "name": "澳门特别行政区",
  "type": "0"
}];
},{}],18:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '40907' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[18,17])
//# sourceMappingURL=/area.fd56c7e8.map