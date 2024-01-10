function solution(my_string, is_suffix) {
    const suffixLength = is_suffix.length;
    if (suffixLength > my_string.length) {
        return 0;
    }

    const suffix = my_string.slice(-suffixLength);
    return suffix === is_suffix ? 1 : 0;
}