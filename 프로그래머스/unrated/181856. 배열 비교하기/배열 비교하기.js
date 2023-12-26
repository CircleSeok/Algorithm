function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    
    }
    let sumArr1 = 0;
    let sumArr2 = 0;


    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
        sumArr2 += arr2[i];
    }

    if (sumArr1 > sumArr2) {
        return 1;
    } else if (sumArr1 < sumArr2) {
        return -1;
    } else {
        return 0;
    }
    
}