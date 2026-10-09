const namee = "anil"
const repoCount = 4

// console.log(name + repoCount + "Value");  halka outdated bhayo yo wala concept

console.log(`Hello My Name Is ${namee} And My Repo Count is ${repoCount}`);


const gameName = new String(`anil-l-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf(`i`));

const newString = gameName.substring(0, 4) // The `substring()` method is used to extract characters from the 
// starting index up to, but not including, the given ending index.

// console.log(newString);

const anotherString = gameName.slice(5, 0)
console.log(anotherString);

const newStringone = "    anill    "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('anil'));

console.log(gameName.split('-'));





//*******************String Practices *******************/

// length , Touppercase(), Tolowercase()

// let name = "Anil Pandey"
// console.log(name.length);  // length le string ma kati ota characters chhan bhanera ganchha. Space pani count hunchha.

// let name = "Anil Pandey"
// console.log(name.toUpperCase());  // Yo method le string ko sabai letters lai Capital Letters ma convert garcha.

// let name = "Anil pandey"
// console.log(name.toLowerCase()); // toUpperCase() le string ko sabai letters lai capital letters ma convert garcha.

// let name = "    Anil Pandey   " 
// console.log(name.trim());  // trim() ko kaam string ko suru ra antyama bhayeko extra whitespace hataunu ho. Bichma bhayeko space bhane hataudaina.

// let name = "My name is Anil "
// console.log(name.includes("anil"));  // ncludes() ko kaam string bhitra kunai word wa character chha ki chhaina bhanera check garnu ho, chha bhane true ra chhaina bhane false dinchha.
 
// let name = "Anil Pandey"
// console.log(name.indexOf("P")); // indexOf() ko kaam string bhitra kunai character wa word pahilo patak aayeko index (position) patta lagaunu ho.

// let name = "JavaScript";
// console.log(name.slice(0, 4)); // slice() ko kaam string ko starting index dekhi ending index bhanda aghisamma ka characters nikalnu ho.


// let name = "I like Java";
// console.log(name.replace("Java", "JavaScript")); // replace() ko kaam string bhitrako euta word wa character lai arko word wa character le replace garnu ho.

// let name = "apple,banana,mango";
// console.log(name.split(","));  // split() ko kaam string lai tukra-tukra parera array ma convert garnu ho.

// let name = "JavaScript"
// console.log(name.charAt(4)); // charAt() ko kaam diyeko index ma bhayeko character nikalnu ho.


 






