const timFull = [
    "Naruto",
    "Sasuke",
    "Luffy",
    "Zoro",
    "Doflaming",
    "Itachi",
    "Deidara",
    "Kaido",
];

const timProtagonis = timFull.slice(0, 4);
const timAntagonis = timFull.slice(4, 8);
const leaderTimProtagonis = timProtagonis[0];
const leaderTimAntagonis = timAntagonis[0];
console.log(`${leaderTimProtagonis} adalah leader tim protagonis`);
console.log(timProtagonis);
console.log(`${leaderTimAntagonis} adalah leader tim antagonis`);
console.log(timAntagonis);
//document write HTML
document.write(
    `<h2>Team Protagonis</h2><p>${leaderTimProtagonis} adalah leader tim protagonis</p></h2>`
);
timProtagonis.forEach((element) => {
    document.write(`<li>${element}</li>`);
});

document.write(
    `<h2>Team Antagogis</h2><p>${leaderTimAntagonis} adalah leader tim antagonis</p>`
);
timAntagonis.forEach((element) => {
    document.write(`<li>${element}</li>`);
});
