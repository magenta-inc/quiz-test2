const correct='せいかい！';
const incorrect = 'ざんねん！';
let link = document.getElementById('link');
let url = 'https://www.google.com/';
link.setAttribute('href', url);

window.onload = function(){
    // テキストボックスのDOMを取得
    const username = document.getElementById("answer");
    // 活性/非活性を切り替えるボタンのDOMを取得
    const mybutton = document.getElementById("link");
    // 入力テキストのキーアップイベント
    username.addEventListener('keyup', function() {
      // テキストボックスに入力された値を取得
      const text = username.value;
      console.log(text);
      // テキストが入力されている場合
      if(text==='やさい') {
        // ボタンのdisabled属性を取り除く
        console.log(correct);
        var sampleArea = document.getElementById("result");
        sampleArea.innerHTML = "せいかい！";
        button.disabled = null;
      } else {
        console.log(incorrect);
        var sampleArea = document.getElementById("result");
        sampleArea.innerHTML = "ざんねん！";
        // ボタンにdisabledを設定する
        mybutton.disabled = "disabled";
      }
    })
}

$('a.form_btn').click(function() { 
  if(text==='やさい') {
    return true;
  } else {
    return false;
  } 
});