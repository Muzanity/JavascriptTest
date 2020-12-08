
//Through trial and error I discovered that in order to get this to come out the correct way I needed to first make all the names 
//the same casing first. Then I needed to filter the unique names with a Set which from my research a set is mainly intended to
//filter out duplicates. Then I needed to go back and set the names to title case. I could not get it to work the same way I did
//in exercise two so I had to go a more messy route by first lower casing each letter beginning at index 1 until the length of the work was finished...then 
//capitalizing the first letter of every name.

const names = ['Ben', 'ben', 'Frank', 'TOM', 'Edward', 'EDward', 'burt', 'GeNE', 'MorgAn', 'ShAun', 'SteVen'];

for (var i = 0; i < names.length; i++) {
    names[i] = names[i].toLowerCase();
}
let singleNames = [...new Set(names)];

for (var i = 0; i < singleNames.length; i++) {
    var partialName = singleNames[i].substring(1, singleNames[i].length);
    singleNames[i] = singleNames[i].charAt(0).toUpperCase() + partialName;

}

singleNames.sort();

