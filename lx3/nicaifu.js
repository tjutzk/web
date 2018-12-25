window.onload = function(){
    let ohide = document.getElementById('hide');
    let ototalmoney = document.getElementById('totalmoney');
    ohide.onclick = function(){
        ohide.style.display = 'none';
        ototalmoney.style.display = '';
    }
}