let s = "anagram",
  t = "nagaram";
// if (s.length < t.length) return false;
// for (const ch of s) {
//   if (!t.includes(ch)) return false;
//   t = t.replace(ch, "");
// }
// OTHER SOLN
if (s.length !== t.length) return false;

var letters = new Array(26).fill(0);

// save
for (i = 0; i < s.length; i++) {
  l = s.charCodeAt(i) - 97;
  letters[l]++;
}

// check
for (i = 0; i < t.length; i++) {
  l = t.charCodeAt(i) - 97;
  if (letters[l] === 0) return false;
  letters[l]--;
}
return true;
