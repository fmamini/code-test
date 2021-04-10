///////// Given a string, find the first missing character ////////////////////////
const str = "raychat";
const missingCharacter = str => {
    const s = str.toLowerCase();
    for (let i = 97; ; i++) {
        if (s.includes(String.fromCharCode(i))) {
            continue;
        };
        return alert("first missing character is :" + " " + String.fromCharCode(i));
    };
    return false;
};
missingCharacter(str);

////////////////////// Given an array of integers, return how many of them contain an even number of digits////////

const Numbers = (nums) => nums.map(num => ({
    num,
    length: num.toString().length,
    status: num % 2 === 0 ? "even" : "odd"
}));
const checkNum = (numbers) => {
    const res = Numbers(numbers)
    res.map(item => console.log(item.num + " " + "has", item.length + " " + "digits", item.status))
}
checkNum([12, 345, 2, 6, 7896])
