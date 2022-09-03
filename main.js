import { Home } from "./home.js";
fetch('https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?skip=0&limit=9').then((res)=>{
    return res.json()
}).then((res)=>{
    // console.log('res', res);


    let homePage = new Home(res);
   homePage.render()

});

// val = document.getElementById("search").value;

// 	fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?searchStr=${val}&skip=0&limit=9`)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((res) => {
// 			let hom = new Giphy(res);
// 			giphyPage.render();
// 		});


// let val = document.getElementById("search").value;
// console.log(val)

// 	function test(){ val = document.getElementById("search").value;

// 	fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?searchStr=${val}&skip=0&limit=9`)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((res) => {
// 			let homePage = new Home(res);
// 			homePage.render();
// 		});
//     }
//     if(document.getElementById("search") !== ''){
//         test();
//     }
let value;
document.getElementById("search").addEventListener("input", e =>{
     value = e.target.value
    console.log(value)
    fetch(`https://solo.ge/api/developers/items/common/608aaad7ae3b47ff23daa433?searchStr=${value}&skip=0&limit=9`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let homePage = new Home(res);
			homePage.render();
		});
})
    


let checkList = document.getElementById('city-title');
checkList.getElementsByClassName('select-items')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
let checkStatus = document.getElementById('status-title');
checkStatus.getElementsByClassName('select-items')[0].onclick = function(evt) {
  if (checkStatus.classList.contains('visible'))
  checkStatus.classList.remove('visible');
  else
  checkStatus.classList.add('visible');
}