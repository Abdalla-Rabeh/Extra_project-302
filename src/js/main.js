//  Fun Loading WebSite
Loading = () =>{
window.addEventListener("load", () => {
    let Loader = document.querySelector(".Loader");
    setTimeout(() => {
    Loader.classList.add('Loader-none');
    }, 3000);
});
}
Loading()  



