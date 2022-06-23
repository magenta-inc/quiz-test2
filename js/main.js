new Promise(function (resolve, reject){
  try {
    setTimeout(()=>{
      console.log("非同期処理")
      resolve()
    }, 1000)
  } catch (e) {
    reject()
  }
})

const correct='せいかい！';
const incorrect = 'ざんねん！';

window.onload = function(){
    // テキストボックスのDOMを取得
    const username = document.getElementById("answer");
    // 活性/非活性を切り替えるボタンのDOMを取得
    const button = document.getElementById("submit");
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
        button.disabled = "disabled";
      }
    })
}


// if (text.answer.value === 'やさい') {
//   console.log(select);
//   console.log(correct);
// // 正解はB
// } else(text.answer.value === '') {
//   console.log(select);
//   console.log(incorrectt);
// } 

// function isString(value) {
//     if (typeof value === "string" || value instanceof String) {
//       return true;
//     } else {
//       return false;
//     }
// }

// $(function(){

//     $('.form_btn').on('click', function() {

//         const inputs = $('.input').each(function(index, element){
//             return element.value;  // valueを取り出す
//         }).get();  // 標準的な配列に変換

//         console.log(answer);
//     });
// });