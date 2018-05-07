const array = window._area;

const $ = selector => document.getElementById(selector);

const createDOM = (opt, tag) => {
  const dom = document.createElement(tag);
  dom.innerHTML = opt.name;
  dom.value = opt.code;
  return dom;
};

let province = [];
let city = [];
let county = [];

array.map((item, index) => {
  item.type === "0" && item.p_code === "100000" && province.push(item);
  item.type === "1" && city.push(item);
  item.type === "2" && county.push(item);
});

const $province = $("province");
const $city = $("city");
const $county = $("county");

province.map((item, index) => {
  let option = createDOM(item, "option");
  $province.appendChild(option);
});

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

    _city.map((i, idx) => {
      let option = createDOM(i, "option");
      $city.appendChild(option);
    });
  },
  false
);

$city.addEventListener(
  "change",
  function(e) {
    let val = e.target.value;
    let _county = [];
    $county.innerHTML = "";

    for (const item of county) {
      item.p_code === val && _county.push(item);
    }

    _county.map((i, idx) => {
      let option = createDOM(i, "option");
      $county.appendChild(option);
    });
  },
  false
);
