function solution(my_string, indices) {
    indices.sort((a, b) => a - b);

    for (let i = indices.length - 1; i >= 0; i--) {
        const indexToRemove = indices[i];
        my_string = my_string.slice(0, indexToRemove) + my_string.slice(indexToRemove + 1);
    }

    return my_string;
}