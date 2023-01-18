const money = document.getElementById("money");
const enter = document.getElementById("enter");
const enterzero = document.getElementById("enterzero");
const amogus = document.getElementById("amogus");
const banner = document.getElementById("banner");
const bannerzero = document.getElementById("bannerzero");
const bannerthree = document.getElementById("bannerthree");
const bannerfour = document.getElementById("bannerfour");
const prachyvhrsti = document.getElementById("prachyvhrsti");
const drahokamy = document.getElementById("drahokamy");
const zlatarybka = document.getElementById("zlatarybka");
const tutovka = document.getElementById("tutovka");
const modrydiamant = document.getElementById("modrydiamant");
const splnenysen = document.getElementById("splnenysen");
const cernaperla = document.getElementById("cernaperla");
const stoctyrmil = document.getElementById("stoctyrmil");
const gameclear = document.getElementById("gameclear");
const generalbutton = document.getElementById("generalbutton");
const prachyvhrstimain = document.getElementById("prachyvhrstimain");
const drahokamymain = document.getElementById("drahokamymain");
const zlatarybkamain = document.getElementById("zlatarybkamain");
const tutovkamain = document.getElementById("tutovkamain");
const modrydiamantmain = document.getElementById("modrydiamantmain");
const splnenysenmain = document.getElementById("splnenysenmain");
const cernaperlamain = document.getElementById("cernaperlamain");
const stoctyrmain = document.getElementById("stoctyrmain");
const moneyformat = document.getElementById("moneyformat");
const getback = document.getElementById("getback");
const homelessgame = document.getElementById("homelessgame");
const getbacktwo = document.getElementById("getbacktwo");
const bannertwo = document.getElementById("bannertwo");
const homeless = document.getElementById("homeless");
const take = document.getElementById("take");
const trash = document.getElementById("trash");
const buyitems = document.getElementById("buyitems");
const getbackthree = document.getElementById("getbackthree");
const shopcart = document.getElementById("shopcart");
const buycart = document.getElementById("buycart");
const debugcart = document.getElementById("debugcart");
const standardcar = document.getElementById("standardcar");
const buystandardcar = document.getElementById("buystandardcar");
const debugstandardcar = document.getElementById("debugstandardcar");
const bettercar = document.getElementById("bettercar");
const buybettercar = document.getElementById("buybettercar");
const debugbettercar = document.getElementById("debugbettercar");
const tieronehouse = document.getElementById("tieronehouse");
const buytieronehouse = document.getElementById("buytieronehouse");
const debugtieronehouse = document.getElementById("debugtieronehouse");
const tiertwohouse = document.getElementById("tiertwohouse");
const buytiertwohouse = document.getElementById("buytiertwohouse");
const debugtiertwohouse = document.getElementById("debugtiertwohouse");
const tierthreehouse = document.getElementById("tierthreehouse");
const buytierthreehouse = document.getElementById("buytierthreehouse");
const debugtierthreehouse = document.getElementById("debugtierthreehouse");
const tierfourhouse = document.getElementById("tierfourhouse");
const buytierfourhouse = document.getElementById("buytierfourhouse");
const debugtierfourhouse = document.getElementById("debugtierfourhouse");
const dealerstore = document.getElementById("dealerstore");
const getbackfour = document.getElementById("getbackfour");
const buybabucko = document.getElementById("buybabucko");
const buydoutnicek = document.getElementById("buydoutnicek");
const homelessdeal = document.getElementById("homelessdeal");
const taketwo = document.getElementById("taketwo");
const trashtwo = document.getElementById("trashtwo");
const takethree = document.getElementById("takethree");
const trashthree = document.getElementById("trashthree");
const ericdeal = document.getElementById("ericdeal");
const finish = document.getElementById("finish");

enterzero.onclick = () => {
  amogus.style.display = "none";
  enter.style.display = "block";
  banner.style.display = "block";
  enterzero.style.display = "none";
  bannerzero.style.display = "none";
  money.style.display = "block";
  homelessgame.style.display = "block";
  buyitems.style.display = "block";
  dealerstore.style.display = "block";
};
getback.onclick = () => {
  amogus.style.display = "none";
  enter.style.display = "none";
  banner.style.display = "block";
  prachyvhrstimain.style.display = "none";
  drahokamymain.style.display = "none";
  zlatarybkamain.style.display = "none";
  tutovkamain.style.display = "none";
  modrydiamantmain.style.display = "none";
  splnenysenmain.style.display = "none";
  cernaperlamain.style.display = "none";
  stoctyrmain.style.display = "none";
  enter.style.display = "block";
  banner.style.display = "block";
  amogus.style.display = "none";
  winningamount.style.display = "none";
  homelessgame.style.display = "block";
  getback.style.display = "none";
  money.style.color = "yellow";
  buyitems.style.display = "block";
  dealerstore.style.display = "block";
  if (doutnicekfix == 1) {
    dealerstore.style.display = "none";
  }
};
let babuckoprice = 5000;
let babuckofix = 0;
let doutnicekfix = 0;
let doutnicekprice = 15000;
homelessgame.onclick = () => {
  getbacktwo.style.display = "block";
  banner.style.display = "none";
  enter.style.display = "none";
  homelessgame.style.display = "none";
  bannertwo.style.display = "block";
  winningamount.style.display = "block";
  homeless.style.display = "block";
  buyitems.style.display = "none";
  winningamount.innerHTML = "Vybírejte popelnici";
  winningamount.style.color = "gray";
  dealerstore.style.display = "none";
  if ((babuckofix < 1, doutnicekfix < 1)) {
    take.style.display = "block";
    trash.style.display = "block";
  }
  if (babuckofix == 1) {
    taketwo.style.display = "block";
    trashtwo.style.display = "block";
    take.style.display = "none";
    trash.style.display = "none";
  }
  if (doutnicekfix == 1) {
    takethree.style.display = "block";
    trashthree.style.display = "block";
    taketwo.style.display = "none";
    trashtwo.style.display = "none";
    take.style.display = "none";
    trash.style.display = "none";
  }
};
buybabucko.onclick = () => {
  if (babuckoprice <= cash) {
    babuckofix += 1;
    cash -= babuckoprice;
    buybabucko.style.display = "none";
    buydoutnicek.style.display = "block";
    winningamount.innerHTML =
      "Koupil/a jste babůčko, zlepšili se Vám dropy z popelnice";
    winningamount.style.color = "green";
    money.innerHTML = cash + " Kč";
    homelessdeal.style.left = "250px";
  }
  if (babuckoprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    babuckofix == 0;
  }
};
buydoutnicek.onclick = () => {
  if (doutnicekprice <= cash) {
    doutnicekfix += 1;
    cash -= doutnicekprice;
    buydoutnicek.style.display = "none";
    winningamount.innerHTML =
      "Koupil/a jste doutníček, zlepšili se Vám o hodně dropy z popelnice";
    winningamount.style.color = "green";
    money.innerHTML = cash + " Kč";
    homelessdeal.style.left = "250px";
  }
  if (doutnicekprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    doutnicekfix == 0;
  }
};
getbacktwo.onclick = () => {
  banner.style.display = "block";
  getbacktwo.style.display = "none";
  enter.style.display = "block";
  homelessgame.style.display = "block";
  bannertwo.style.display = "none";
  winningamount.style.display = "none";
  take.style.display = "none";
  homeless.style.display = "none";
  buyitems.style.display = "block";
  trash.style.display = "none";
  dealerstore.style.display = "block";
  taketwo.style.display = "none";
  takethree.style.display = "none";
  trashtwo.style.display = "none";
  trashthree.style.display = "none";
  if (doutnicekfix == 1) {
    dealerstore.style.display = "none";
  }
};
let cash = 20;
let prachyvhrstiprice = 20;
let drahokamyprice = 300;
let zlatarybkaprice = 50;
let tutovkaprice = 75;
let modrydiamantprice = 300;
let splnenysenprice = 100;
let cernaperlaprice = 50;
let stoctyrmilprice = 200;

let prachyvhrstiprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 200, 200,
  200, 100, 100, 100, 100, 100, 500, 500, 1000, 2000, 5000, 20000,
];
let drahokamyprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 5000, 5000, 5000, 5000, 5000, 5000,
  5000, 5000, 5000, 5000, 5000, 5000, 15000, 15000, 15000, 15000, 15000, 15000,
  15000, 15000, 15000, 15000, 15000, 15000, 15000, 50000, 50000, 50000, 50000,
  50000, 50000, 50000, 50000, 100000, 100000, 100000, 100000, 100000, 100000,
  100000, 100000, 300000, 300000, 300000, 300000, 300000, 300000, 300000,
  1000000,
];
let zlatarybkaprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 50000, 50000,
  100000, 400000, 1000000,
];
let tutovkaprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 5000, 5000,
  5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000,
  5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000,
  5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 2000,
  2000, 2000, 2000, 2000, 2000, 10000, 10000, 10000, 10000, 20000, 20000, 50000,
  100000, 100000, 200000, 500000, 1000000,
];
let modrydiamantprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500,
  500, 500, 500, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 10000, 10000, 10000, 10000, 10000, 10000,
  10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000,
  10000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000,
  300000, 300000, 1000000, 1000000, 1000000,
];
let splnenysenprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 500, 500, 5000000,
];
let cernaperlaprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
  50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
  75, 75, 75, 75, 75, 75, 75, 75, 75, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 50000, 50000, 50000, 50000, 50000, 50000,
  50000, 1000000,
];
let stoctyrmilprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 400, 400, 400, 400, 400, 400, 400, 400,
  400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400,
  400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400,
  400, 400, 400, 400, 400, 400, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000,
  2000, 2000, 2000, 2000, 2000, 2000, 50000, 50000, 50000, 50000, 50000, 50000,
  100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
  100000, 100000, 100000, 240000, 240000, 240000, 10000000,
];
enter.onclick = () => {
  prachyvhrstimain.style.display = "block";
  drahokamymain.style.display = "block";
  zlatarybkamain.style.display = "block";
  tutovkamain.style.display = "block";
  modrydiamantmain.style.display = "block";
  splnenysenmain.style.display = "block";
  cernaperlamain.style.display = "block";
  stoctyrmain.style.display = "block";
  enter.style.display = "none";
  banner.style.display = "none";
  amogus.style.display = "block";
  winningamount.style.display = "block";
  getback.style.display = "block";
  homelessgame.style.display = "none";
  money.style.color = "white";
  buyitems.style.display = "none";
  winningamount.innerHTML = "Kupte los";
  winningamount.style.color = "yellow";
  dealerstore.style.display = "none";
};

prachyvhrsti.onclick = () => {
  if (prachyvhrstiprice <= cash) {
    cash -= prachyvhrstiprice;
    let randomprachyvhrst =
      prachyvhrstiprize[Math.floor(Math.random() * prachyvhrstiprize.length)];
    cash += randomprachyvhrst;

    money.innerHTML = cash + " Kč";

    winningamount.innerHTML = "Vyhrál/a jste " + randomprachyvhrst + " Kč";
    winningamount.style.color = "green";

    if (randomprachyvhrst == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomprachyvhrst == 0) winningamount.style.color = "red";
  }
};

drahokamy.onclick = () => {
  if (drahokamyprice <= cash) {
    cash -= drahokamyprice;
    let randomdrahokamy =
      drahokamyprize[Math.floor(Math.random() * drahokamyprize.length)];
    cash += randomdrahokamy;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomdrahokamy + " Kč";
    winningamount.style.color = "green";

    if (randomdrahokamy == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomdrahokamy == 0) winningamount.style.color = "red";
  }
};

zlatarybka.onclick = () => {
  if (zlatarybkaprice <= cash) {
    cash -= zlatarybkaprice;
    let randomzlatarybka =
      zlatarybkaprize[Math.floor(Math.random() * zlatarybkaprize.length)];
    cash += randomzlatarybka;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomzlatarybka + " Kč";
    winningamount.style.color = "green";

    if (randomzlatarybka == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomzlatarybka == 0) winningamount.style.color = "red";
  }
};
tutovka.onclick = () => {
  if (tutovkaprice <= cash) {
    cash -= tutovkaprice;
    let randomtutovka =
      tutovkaprize[Math.floor(Math.random() * tutovkaprize.length)];
    cash += randomtutovka;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomtutovka + " Kč";
    winningamount.style.color = "green";

    if (randomtutovka == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomtutovka == 0) winningamount.style.color = "red";
  }
};
modrydiamant.onclick = () => {
  if (modrydiamantprice <= cash) {
    cash -= modrydiamantprice;
    let randomodrydiamant =
      modrydiamantprize[Math.floor(Math.random() * modrydiamantprize.length)];
    cash += randomodrydiamant;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomodrydiamant + " Kč";
    winningamount.style.color = "green";

    if (randomodrydiamant == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomodrydiamant == 0) winningamount.style.color = "red";
  }
};
splnenysen.onclick = () => {
  if (splnenysenprice <= cash) {
    cash -= splnenysenprice;
    let randomsplnenysen =
      splnenysenprize[Math.floor(Math.random() * splnenysenprize.length)];
    cash += randomsplnenysen;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomsplnenysen + " Kč";
    winningamount.style.color = "green";

    if (randomsplnenysen == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomsplnenysen == 0) winningamount.style.color = "red";
  }
};
cernaperla.onclick = () => {
  if (cernaperlaprice <= cash) {
    cash -= cernaperlaprice;
    let randomcernaperla =
      cernaperlaprize[Math.floor(Math.random() * cernaperlaprize.length)];
    cash += randomcernaperla;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomcernaperla + " Kč";
    winningamount.style.color = "green";

    if (randomcernaperla == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomcernaperla == 0) winningamount.style.color = "red";
  }
};
stoctyrmil.onclick = () => {
  if (stoctyrmilprice <= cash) {
    cash -= stoctyrmilprice;
    let randomstoctyrmil =
      stoctyrmilprize[Math.floor(Math.random() * stoctyrmilprize.length)];
    cash += randomstoctyrmil;

    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Vyhrál/a jste " + randomstoctyrmil + " Kč";
    winningamount.style.color = "green";

    if (randomstoctyrmil == 0) winningamount.innerHTML = "Nic jste nevyhrál/a";
    if (randomstoctyrmil == 0) winningamount.style.color = "red";
  }
};

let trashprize = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
  1, 4, 2, 5, 10,
];
let trashprizetwo = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2,
  2, 4, 8, 10, 20,
];
let trashprizethree = [
  100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 400, 800, 1000,
  2000,
];

take.onclick = () => {
  homeless.style.left = "800px";
  if ((cash) => 0) {
    let trashvalue = trashprize[Math.floor(Math.random() * trashprize.length)];
    cash += trashvalue;
    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Nalezl/a jste " + trashvalue + " Kč";
    winningamount.style.color = "green";
    if (trashvalue == 0) winningamount.innerHTML = "Nic jste nenalezl/a";
    if (trashvalue == 0) winningamount.style.color = "red";
  }
};

taketwo.onclick = () => {
  homeless.style.left = "800px";
  if ((cash) => 0) {
    let trashvaluetwo =
      trashprizetwo[Math.floor(Math.random() * trashprizetwo.length)];
    cash += trashvaluetwo;
    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Nalezl/a jste " + trashvaluetwo + " Kč";
    winningamount.style.color = "green";
    if (trashvaluetwo == 0) winningamount.innerHTML = "Nic jste nenalezl/a";
    if (trashvaluetwo == 0) winningamount.style.color = "red";
  }
};

takethree.onclick = () => {
  homeless.style.left = "800px";
  if ((cash) => 0) {
    let trashvaluethree =
      trashprizethree[Math.floor(Math.random() * trashprizethree.length)];
    cash += trashvaluethree;
    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Nalezl/a jste " + trashvaluethree + " Kč";
    winningamount.style.color = "green";
    if (trashvaluethree == 0) winningamount.innerHTML = "Nic jste nenalezl/a";
    if (trashvaluethree == 0) winningamount.style.color = "red";
  }
};

let cartfix = 0;
let cartprice = 7000;
let standardcarfix = 0;
let standardcarprice = 700000;
let bettercarfix = 0;
let bettercarprice = 10000000;
let tieronehousefix = 0;
let tieronehouseprice = 10000;
let tiertwohousefix = 0;
let tiertwohouseprice = 500000;
let tierthreehousefix = 0;
let tierthreehouseprice = 10000000;
let tierfourhousefix = 0;
let tierfourhouseprice = 100000000;

take.onmouseout = () => {
  homeless.style.left = "300px";
};
taketwo.onmouseout = () => {
  homeless.style.left = "300px";
};
takethree.onmouseout = () => {
  homeless.style.left = "300px";
};
buyitems.onclick = () => {
  bannerthree.style.display = "block";
  getbackthree.style.display = "block";
  banner.style.display = "none";
  enter.style.display = "none";
  homelessgame.style.display = "none";
  buyitems.style.display = "none";
  winningamount.style.display = "block";
  winningamount.innerHTML = "Koupit item za: -" + " Kč";
  buycart.style.display = "block";
  winningamount.style.color = "gray";
  buytieronehouse.style.display = "block";
  dealerstore.style.display = "none";

  if (cartfix == 1) {
    shopcart.style.display = "block";
    buycart.style.display = "none";
  }
  if (cartfix < 1) {
    shopcart.style.display = "none";
    buycart.style.display = "block";
  }
  if ((standardcarfix < 1, cartfix == 1)) {
    shopcart.style.display = "block";
    buycart.style.display = "none";
    buystandardcar.style.display = "block";
  }

  if (standardcarfix == 1) {
    buystandardcar.style.display = "none";
    buycart.style.display = "none";
    shopcart.style.display = "none";
    standardcar.style.display = "block";
    buybettercar.style.display = "block";
  }

  if (bettercarfix == 1) {
    buybettercar.style.display = "none";
    buycart.style.display = "none";
    shopcart.style.display = "none";
    standardcar.style.display = "none";
    bettercar.style.display = "block";
  }
  if (tieronehousefix == 1) {
    buytieronehouse.style.display = "none";
    tieronehouse.style.display = "block";
    buytiertwohouse.style.display = "block";
  }
  if (tieronehousefix < 1) {
    buytieronehouse.style.display = "block";
    tieronehouse.style.display = "none";
  }
  if ((tieronehousefix == 1, tiertwohousefix == 1)) {
    buytiertwohouse.style.display = "none";
    tieronehouse.style.display = "none";
    tiertwohouse.style.display = "block";
    buytierthreehouse.style.display = "block";
  }

  if ((tieronehousefix == 1, tiertwohousefix == 1, tierthreehousefix == 1)) {
    buytierthreehouse.style.display = "none";
    tiertwohouse.style.display = "none";
    tierthreehouse.style.display = "block";
    buytierfourhouse.style.display = "block";
  }
  if (
    (tieronehousefix == 1,
    tiertwohousefix == 1,
    tierthreehousefix == 1,
    tierfourhousefix == 1)
  ) {
    tierthreehouse.style.display = "none";
    buytierfourhouse.style.display = "none";
    tierfourhouse.style.display = "block";
  }
  if ((tierfourhousefix == 1, bettercarfix == 1)) {
    finish.style.display = "block";
  }
};
getbackthree.onclick = () => {
  bannerthree.style.display = "none";
  getbackthree.style.display = "none";
  banner.style.display = "block";
  enter.style.display = "block";
  homelessgame.style.display = "block";
  buyitems.style.display = "block";
  winningamount.style.display = "none";
  shopcart.style.display = "none";
  buycart.style.display = "none";
  buystandardcar.style.display = "none";
  standardcar.style.display = "none";
  bettercar.style.display = "none";
  buybettercar.style.display = "none";
  buytieronehouse.style.display = "none";
  tieronehouse.style.display = "none";
  buytiertwohouse.style.display = "none";
  tiertwohouse.style.display = "none";
  buytierthreehouse.style.display = "none";
  tierthreehouse.style.display = "none";
  buytierfourhouse.style.display = "none";
  tierfourhouse.style.display = "none";
  dealerstore.style.display = "block";
  finish.style.display = "none";
  if (doutnicekfix == 1) {
    dealerstore.style.display = "none";
  }
};
buycart.onclick = () => {
  if (cartprice <= cash) {
    cartfix += 1;
    cash -= cartprice;
    shopcart.style.display = "block";
    buycart.style.display = "none";
    money.innerHTML = cash + " Kč";
    winningamount.innerHTML = "Koupil/a jste nákupní vozík";
    winningamount.style.color = "green";
    buystandardcar.style.display = "block";
  }

  if (cartprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    cartfix == 0;
  }
};
buycart.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML = "Koupit nákupní vozík za " + cartprice + " Kč";
};
buystandardcar.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML = "Koupit osobní auto za " + standardcarprice + " Kč";
};
buybettercar.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML = "Koupit lepší auto za " + bettercarprice + " Kč";
};
buytieronehouse.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML =
    "Koupit tier 1 barák za " + tieronehouseprice + " Kč";
};
buytiertwohouse.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML =
    "Koupit tier 2 barák za " + tiertwohouseprice + " Kč";
};
buytierthreehouse.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML =
    "Koupit tier 3 barák za " + tierthreehouseprice + " Kč";
};
buytierfourhouse.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML =
    "Koupit tier 4 barák za " + tierfourhouseprice + " Kč";
};


buystandardcar.onclick = () => {
  if (standardcarprice <= cash) {
    standardcarfix += 1;
    cash -= standardcarprice;
    shopcart.style.display = "none";
    standardcar.style.display = "block";
    winningamount.innerHTML = "Koupil/a jste osobní auto";
    winningamount.style.color = "green";
    buystandardcar.style.display = "none";
    buybettercar.style.display = "block";
    money.innerHTML = cash + " Kč";

    if (standardcarprice > cash) {
      winningamount.innerHTML = "Nemáte dostatek penízek :C";
      winningamount.style.color = "red";
      standardcarfix == 0;
    }
  }
  buybettercar.onclick = () => {
    if (bettercarprice <= cash) bettercarfix += 1;
    cash -= bettercarprice;
    standardcar.style.display = "none";
    bettercar.style.display = "block";
    winningamount.innerHTML = "Koupil/a jste lepší auto";
    winningamount.style.color = "green";
    buybettercar.style.display = "none";
    money.innerHTML = cash + " Kč";
  };

  if (bettercarprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    bettercarfix == 0;
  }
};
buybettercar.onmouseout = () => {
  if ((bettercarfix == 1) & (tierfourhousefix == 1)) {
    finish.style.display = "block";
  }
};

buytierfourhouse.onmouseout = () => {
  if ((bettercarfix == 1) & (tierfourhousefix == 1)) {
    finish.style.display = "block";
  }
};

buytieronehouse.onclick = () => {
  if (tieronehouseprice <= cash) {
    tieronehousefix += 1;
    cash -= tieronehouseprice;
    buytieronehouse.style.display = "none";
    winningamount.innerHTML = "Koupil/a jste hliněný barák";
    winningamount.style.color = "green";
    tieronehouse.style.display = "block";
    money.innerHTML = cash + " Kč";
    buytiertwohouse.style.display = "block";
  }

  if (tieronehouseprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    tieronehousefix == 0;
  }
};
buytiertwohouse.onclick = () => {
  if (tiertwohouseprice <= cash) {
    tiertwohousefix += 1;
    cash -= tiertwohouseprice;
    buytiertwohouse.style.display = "none";
    tieronehouse.style.display = "none";

    winningamount.innerHTML = "Koupil/a jste železný barák";
    winningamount.style.color = "green";
    tiertwohouse.style.display = "block";
    money.innerHTML = cash + " Kč";
    buytierthreehouse.style.display = "block";
  }

  if (tiertwohouseprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    tiertwohousefix == 0;
  }
};
buytierthreehouse.onclick = () => {
  if (tierthreehouseprice <= cash) {
    tierthreehousefix += 1;
    cash -= tierthreehouseprice;
    buytierthreehouse.style.display = "none";
    tiertwohouse.style.display = "none";
    winningamount.innerHTML = "Koupil/a jste zlatý barák";
    winningamount.style.color = "green";
    tierthreehouse.style.display = "block";
    money.innerHTML = cash + " Kč";
    buytierfourhouse.style.display = "block";
  }

  if (tierthreehouseprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    tierthreehousefix == 0;
  }
};
buytierfourhouse.onclick = () => {
  if (tierfourhouseprice <= cash) {
    tierfourhousefix += 1;
    cash -= tierfourhouseprice;
    buytierfourhouse.style.display = "none";
    tierthreehouse.style.display = "none";

    winningamount.innerHTML = "Koupil/a jste diamantový barák";
    winningamount.style.color = "green";
    tierfourhouse.style.display = "block";
    money.innerHTML = cash + " Kč";
  }
  if (tierfourhouseprice > cash) {
    winningamount.innerHTML = "Nemáte dostatek penízek :C";
    winningamount.style.color = "red";
    tierfourhousefix == 0;
  }
};
buybabucko.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML = "Koupit babůčko za " + babuckoprice + " Kč";
};

buydoutnicek.onmouseover = () => {
  winningamount.style.color = "white";
  winningamount.innerHTML = "Koupit doutníček za " + doutnicekprice + " Kč";
};
dealerstore.onclick = () => {
  enter.style.display = "none";
  banner.style.display = "none";
  homelessgame.style.display = "none";
  buyitems.style.display = "none";
  dealerstore.style.display = "none";
  bannerfour.style.display = "block";
  getbackfour.style.display = "block";
  buybabucko.style.display = "block";
  winningamount.style.display = "block";
  winningamount.style.color = "gray";
  winningamount.innerHTML = "Nakupujte u dealera";
  homelessdeal.style.display = "block";
  ericdeal.style.display = "block";

  if (babuckofix == 1) {
    buybabucko.style.display = "none";
    buydoutnicek.style.display = "block";
  }
};
getbackfour.onclick = () => {
  enter.style.display = "block";
  banner.style.display = "block";
  homelessgame.style.display = "block";
  buyitems.style.display = "block";
  dealerstore.style.display = "block";
  bannerfour.style.display = "none";
  getbackfour.style.display = "none";
  winningamount.style.display = "none";
  buybabucko.style.display = "none";
  buydoutnicek.style.display = "none";
  homelessdeal.style.display = "none";
  ericdeal.style.display = "none";
  if (doutnicekfix == 1) {
    dealerstore.style.display = "none";
  }
};
let payall = 1000000000;
finish.onmouseover = () => {
winningamount.innerHTML = "Zaplatit všechny dluhy: " + payall + " Kč"


}
finish.onclick = () => {
  if (payall <= cash) {
    finish.style.display = "none";
    winningamount.style.width = "800px";
    winningamount.style.left = "30%";
    winningamount.style.top = "30%";
    winningamount.style.color = "green";

    winningamount.innerHTML =
      "Zaplatil/a jste všechny dluhy a tím jste dohrál/a Sazka Simulátor - Michal Carska blahopřeje!";
    take.style.display = "none";
    trash.style.display = "none";
    buyitems.style.display = "none";
    getbackthree.style.display = "none";
    shopcart.style.display = "none";
    buycart.style.display = "none";
    debugcart.style.display = "none";
    standardcar.style.display = "none";
    buystandardcar.style.display = "none";
    debugstandardcar.style.display = "none";
    bettercar.style.display = "none";
    buybettercar.style.display = "none";
    debugbettercar.style.display = "none";
    tieronehouse.style.display = "none";
    buytieronehouse.style.display = "none";
    debugtieronehouse.style.display = "none";
    tiertwohouse.style.display = "none";
    buytiertwohouse.style.display = "none";
    debugtiertwohouse.style.display = "none";
    tierthreehouse.style.display = "none";
    buytierthreehouse.style.display = "none";
    debugtierthreehouse.style.display = "none";
    tierfourhouse.style.display = "none";
    buytierfourhouse.style.display = "none";
    debugtierfourhouse.style.display = "none";
    dealerstore.style.display = "none";
    getbackfour.style.display = "none";
    buybabucko.style.display = "none";
    buydoutnicek.style.display = "none";
    homelessdeal.style.display = "none";
    taketwo.style.display = "none";
    trashtwo.style.display = "none";
    takethree.style.display = "none";
    trashthree.style.display = "none";
    ericdeal.style.display = "none";
    finish.style.display = "none";
    money.style.display = "none";
    bannerzero.style.display = "block";
  }
  if (payall <= cash) {
    finish.style.display = "none";
    winningamount.style.width = "800px";
    winningamount.style.left = "30%";
    winningamount.style.top = "30%";
    winningamount.style.color = "green";

    winningamount.innerHTML =
      "Zaplatil/a jste všechny dluhy a tím jste dohrál/a Sazka Simulátor - Michal Carska blahopřeje!";

    bannerthree.style.display = "none";
    winningamount.style.display = "block";
    enter.style.display = "none";
    amogus.style.display = "none";
    banner.style.display = "none";

    bannerfour.style.display = "none";
    prachyvhrsti.style.display = "none";
    drahokamy.style.display = "none";
    zlatarybka.style.display = "none";
    tutovka.style.display = "none";
    modrydiamant.style.display = "none";
    splnenysen.style.display = "none";
    cernaperla.style.display = "none";
    stoctyrmil.style.display = "none";
    gameclear.style.display = "none";
    generalbutton.style.display = "none";
    prachyvhrstimain.style.display = "none";
    drahokamymain.style.display = "none";
    zlatarybkamain.style.display = "none";
    tutovkamain.style.display = "none";
    modrydiamantmain.style.display = "none";
    splnenysenmain.style.display = "none";
    cernaperlamain.style.display = "none";
    stoctyrmain.style.display = "none";
    moneyformat.style.display = "none";
    getback.style.display = "none";
    homelessgame.style.display = "none";
    getbacktwo.style.display = "none";
    bannertwo.style.display = "none";
    homeless.style.display = "none";
  }

  if (payall > cash) {
    winningamount.innerHTML = "Nemás dostatek peněz na zaplacení dluhů :(";
    winningamount.style.color = "red";
  }
};
