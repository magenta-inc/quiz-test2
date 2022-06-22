// let Question = [
// ["JavaScriptで「Hello World」を正しく表示されないのはどれ？",
// "1. document.write('Hello World');",
// "2. document.write(Hello World);",
// "3. document.write('Hello World')",
// "1"],
// ["JavaScriptで【document.write(5 + 4);】を実行したらどうなる？",
// "1. 5 + 4);",
// "2. エラーになる",
// "3. 9",
// "3"],
// ["JavaScriptで余りを求めるのは？",
// "1. /",
// "2. %",
// "3. @",
// "2"]
// ];
// // 初期変数定義
// // 問題を表示するオブジェクトを取得する
// let Q = document.getElementById('_question');
// // 問題を表示するオブジェクトを取得する
// let A1 = document.getElementById('_ans1');
// let A2 = document.getElementById('_ans2');
// let A3 = document.getElementById('_ans3');
// // 正解数を保持する値
// let Correct = 0;
// // 現在の問題数
// let Qcnt = 0;
// // 問題を画面に表示する処理
// function Q_Set() {
// Q.textContent = Question[Qcnt][0];
// A1.textContent = Question[Qcnt][1];
// A2.textContent = Question[Qcnt][2];
// A3.textContent = Question[Qcnt][3];
// };
// // 画面に表示
// Q_Set();
// // 回答ボタンを押したときの処理
// function Answer_Check(ans) {
// if(ans == Question[Qcnt][4]) {
// alert("正解");
// Correct++;
// } else {
// alert("不正解");
// }
// Qcnt++;
// if (Qcnt == Question.length) {
// Q.textContent = "問題は以上です。正解数は" + Correct + "でした。";
// A1.textContent = "";
// A2.textContent = "";
// A3.textContent = "";
// } else {
// // 画面に表示
// Q_Set();
// }
// }

// $(function() {
//     $(function() {
//         $('#submit').attr('disabled', 'disabled');
//             $('#answer').click(function() {
//             if ( $(this).prop('value') == false ) {
//                 $('#submit').attr('disabled', 'disabled');
//             } else {
//                 $('#submit').removeAttr('disabled');
//             }
//         });
//     });
// });


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
        button.disabled = null;
      } else {
        // ボタンにdisabledを設定する
        button.disabled = "disabled";
      }
    })
}

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