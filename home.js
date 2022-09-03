import { Base } from "./base.js";
export class Home extends Base {
  constructor(res) {
    super();
     this.res = res;
    //  console.log(this.res)
  }


getImage() {
    console.log(this.res.data)
let list = this.res.data.items.map((obj) => {
return `<div class="house">
<img src="https://ramad.bog.ge/s3/solo/${obj.image.url}" alt="">
<div class="house-title">
<h4>${obj.projectName}</h4>
</div>
<p>${obj.priceLabel}</p>
<h5>${obj.address}</h5>
<span>გაიგეთ მეტი</span>
</div>`;
});



return list.join("");
return list;


}
render() {
    this.setContent('house', this.getImage());
    
}}