let str = prompt("Enter string");

function audit(str) {
  let divider;
  for (; true; ) {
    divider = prompt("Enter divider");
    if (!str.includes(divider)) {
      alert("Incorrect divider");
      continue;
    } else break;
  }
  return divider;
}

let div = audit(str);

function result(str, div) {
  let tmp = [];
  let tmpDiv;
  for (; true; ) {
    tmpDiv = str.search(div);
    if (tmpDiv !== -1) {
      tmp.push(str.substring(0, tmpDiv));
      str = str.slice(tmpDiv + 1);
    } else if (tmpDiv === -1) {
      tmp.push(str);
      break;
    }
  }
  return tmp;
}

document.write(`String: ${str}<br>Result: ${result(str, div)}`);
