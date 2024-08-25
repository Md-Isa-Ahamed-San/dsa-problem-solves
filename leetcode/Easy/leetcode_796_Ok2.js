let rotateString = (s, goal) => {
    let k = s.length;
    for (let i = 1; i <= k; i++) {
        ///rotate = mazher part + ager part
        let rotated = s.substring(i) + s.substring(0, i);
        if (goal === rotated) {
            console.log("true");
            return true;
        }
    }
    console.log("false");
    return false;
}


  rotateString("abcde", "cdeab");
