function solution(todo_list, finished) {
    let arry = [];

    for (let i = 0; i < todo_list.length; i++) {
        if (!finished[i]) {
            arry.push(todo_list[i]);
        }
    }

    return arry;
}