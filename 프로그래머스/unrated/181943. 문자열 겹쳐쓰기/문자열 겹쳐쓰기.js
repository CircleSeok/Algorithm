function solution(my_string, overwrite_string, s) {
    const prefix = my_string.substring(0, s);
    const suffix = my_string.substring(s + overwrite_string.length);
    const result = prefix + overwrite_string + suffix;
    return result;
}