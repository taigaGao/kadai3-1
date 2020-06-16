window.onload = function () {
    // タスクリストの作成(配列)
    const taskList = [];
    // タスクを記述するテーブルタグ(tbody)のIDを取得(タスクリスト)
    const listArea = document.getElementById('listarea');
    // タスクを格納する連想配列を作成する関数
    // inputボタンの値を受け取る
    const addTask = (taskValue) => {
        const task = {
            id: taskList.length,
            comment: taskValue,
            state: 0
        };
        taskList.push(task);
    }
    // 「作業中」ボタンの追加
    const addWorkBtn = () => {
        const makeTd = document.createElement('td');
        const makeBtn = document.createElement('button');
        listArea.lastElementChild.appendChild(makeTd).appendChild(makeBtn);
        listArea.lastElementChild.lastElementChild.lastElementChild.textContent = '作業中';
    };
    // 「削除」ボタンの追加
    const addRemoveBtn = () => {
        const makeTd = document.createElement('td');
        const makeBtn = document.createElement('button');
        listArea.lastElementChild.appendChild(makeTd).appendChild(makeBtn);
        listArea.lastElementChild.lastElementChild.lastElementChild.textContent = '削除';
    };
    // 追加ボタンが押下された時の処理
    const addEvent = () => {
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
        taskList.forEach(value => {
            const tr = document.createElement('tr');
            listArea.appendChild(tr);
            const tdId = document.createElement('td');
            listArea.lastElementChild.appendChild(tdId).textContent = value.id;
            const tdTask = document.createElement('td');
            listArea.lastElementChild.appendChild(tdTask);
            listArea.lastElementChild.lastElementChild.textContent = value.comment;
            addWorkBtn();
            addRemoveBtn();
            }
        );
    };
    // 追加ボタンが押下された時の処理
    document.getElementById("addbtn").addEventListener('click',addEvent);
}