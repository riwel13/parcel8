let e=document.querySelector("#bookmarkList"),t=document.querySelector("#bookmarkInput");document.querySelector(".addBookmarkBtn");let a=[];function l(t){e.innerHTML=t.map((e,t)=>`<li data-index="${t}"> 
        <a href="${e}"> ${e} </a> 
<div class="button-div">
        <button class="delete"> delete </button> 
        <button class="edit"> edit </button> 
</div>
        </li>`).join("")}function o(){localStorage.setItem("bookmarks",JSON.stringify(a))}l(a=JSON.parse(localStorage.getItem("bookmarks"))||[]),t.addEventListener("change",e=>{if(n){a[r]=e.target.value,o(),l(a),e.target.value="",n=!1;return}a.push(e.target.value),o(),l(a),e.target.value=""});let n=!1,r=null;e.addEventListener("click",e=>{let i=e.target.closest("li");r=Number(i.dataset.index),e.target.classList.contains("delete")&&(i.remove(),a.splice(r,1),o(),l(a)),e.target.classList.contains("edit")&&(t.value=a[r],n=!0)});
//# sourceMappingURL=parcel8.c44aab65.js.map
