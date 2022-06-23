const correct='せいかい！';
const incorrect = 'ざんねん！';

window.onload = function(){
    // テキストボックスのDOMを取得
    const username = document.getElementById("answer");
    // 活性/非活性を切り替えるボタンのDOMを取得
    const mybutton = document.getElementById("button");
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

let element = document.getElementById('submit_btn');
element.insertAdjacentHTML('beforeend', '<button type="submit" value="Click" class="form_btn" id="button" disabled="disabled">キャンペーンの応募はこちら</button>');