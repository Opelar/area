const areaArray = window._area;

// get id
const $ = selector => document.getElementById(selector);

// create options
const createOption = (opt, tag) => {
  const dom = document.createElement(tag);
  dom.innerHTML = opt.name;
  dom.value = opt.code;
  dom.setAttribute("data-type", opt.type);
  dom.setAttribute("data-code", opt.code);
  dom.setAttribute("data-name", opt.name);
  return dom;
};

// 存储所有省市区数据
let province = [];
let city = [];
let county = [];

areaArray.forEach((item, index) => {
  item.type === "0" && item.p_code === "100000" && province.push(item);
  item.type === "1" && city.push(item);
  item.type === "2" && county.push(item);
});

// select dom
const $province = $("province");
const $city = $("city");
const $county = $("county");

// init add province
province.forEach((item, index) => {
  let option = createDOM(item, "option");
  $province.appendChild(option);
});

// province change
$province.addEventListener(
  "change",
  function(e) {
    let val = e.target.value;
    $city.innerHTML = "";
    $county.innerHTML = "";
    let _city = [];

    for (const item of city) {
      item.p_code === val && _city.push(item);
    }

    _city.forEach((i, idx) => {
      let optionDOM = createOption(i, "option");
      $city.appendChild(optionDOM);

      if (idx === 0) {
        let code = i.code;

        for (const j of county) {
          if (code === j.p_code) {
            let optDOM = createOption(j, "option");
            $county.appendChild(optDOM);
          }
        }
      }
    });
  },
  false
);

// city change
$city.addEventListener(
  "change",
  function(e) {
    let val = e.target.value;
    let _county = [];
    $county.innerHTML = "";

    for (const item of county) {
      item.p_code === val && _county.push(item);
    }

    _county.forEach((i, idx) => {
      let optionDOM = createDOM(i, "option");
      $county.appendChild(optionDOM);
    });
  },
  false
);

// 获取选择的数据
$("btn").addEventListener(
  "click",
  function(e) {
    let province = $province.value;
    let city = $city.value;
    let county = $county.value;
    $("result").innerHTML = province + " " + city + " " + county;
  },
  false
);
