window.onload = function () {
    // タスクリストの作成(配列)
    const taskList = [];

    // タスクを記述するテーブルタグ(tbody)のIDを取得(タスクリスト)
    const listArea = document.getElementById('listarea');

    // タスクを格納する連想配列を作成する関数
    // inputボタンの値を受け取る
    const addTask = (taskValue) => {
        const task = {
            'ID':taskList.length,
            'コメント':taskValue,
            '状態':0
        };
        taskList.push(task);
    }
    

    // 追加ボタンが押下された時の処理
    document.getElementById("addbtn").onclick = () => {
        // タスクリストのタイトル部分以外を削除
        while (listArea.childNodes[2]) {
            listArea.removeChild(listArea.childNodes[2] );
        };

        // 追加するタスクの内容を取得
        const taskValue = document.getElementById('task').value;

        // タスクの内容(taskValue)をタスクの追加関数(addTask)に渡す
        addTask(taskValue);

        // フォームの内容をからにする
        document.getElementById('task').value = '';

        // タスクリスト(配列)が所持する全タスクをhtmlに追加する
        for (let i = 0; i < taskList.length; i++) {
            const tr = document.createElement('tr');
            listArea.appendChild(tr);

            const td_id = document.createElement('td');
            listArea.lastElementChild.appendChild(td_id).textContent = taskList[i]['ID'];

            const td_task = document.createElement('td');
            listArea.lastElementChild.appendChild(td_task);
            listArea.lastElementChild.lastElementChild.textContent = taskList[i]['コメント'];
            
            const td_state = document.createElement('td');
            const td_stateBtn = document.createElement('button');
            listArea.lastElementChild.appendChild(td_state).appendChild(td_stateBtn);
            listArea.lastElementChild.lastElementChild.lastElementChild.textContent = '作業中';
            
            const td_remove = document.createElement('td');
            const td_removeBtn = document.createElement('button');
            listArea.lastElementChild.appendChild(td_remove).appendChild(td_removeBtn);
            listArea.lastElementChild.lastElementChild.lastElementChild.textContent = '削除';
        }
    };

}