function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    } else {
      if (
        str1.split("").sort().join("") === str2.split("").sort().join("")
      ) {
        return "Anagram";
      } else {
        return "Not Anagram";
      }
    }
  }
  
  console.log(anagram("hello", "olleh"));
  console.log(anagram("rokak", "konar"));