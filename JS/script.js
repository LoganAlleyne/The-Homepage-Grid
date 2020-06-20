var articles = [
  { title: "Star Ocean review", columns: 2 },
  { title: "Lego Star Wars review", columns: 2 },
  { title: "Prison Architect Review", columns: 1 },
  { title: "Inside Review", columns: 2 },
  { title: "Umbrella Corps review", columns: 2 },
  { title: "Dino Dini's Kick Off review", columns: 3 },
  { title: "Trials of the Dragon review", columns: 1 },
  { title: "Mighty No. 9 review", columns: 1 },
  { title: "Edge of Nowhere review", columns: 2 },
  { title: "Guilty Gear Xrd Revelator review", columns: 1 },
  { title: "Sherlock Holmes review", columns: 2 },
  { title: "Mirrors Edge Catalyst review", columns: 3 },
  { title: "Kirby: Planet Robobot review", columns: 3 },
  { title: "Dangerous Golf Review", columns: 1 },
  { title: "Teenage Mutant Turles review", columns: 1 },
  { title: "The Warcraft Movie review", columns: 2 },
  { title: "Overwatch Review", columns: 2 },
  { title: "The Witcher 3 review", columns: 2 },
];

//Function to find the first article with one column in the array return & remove it
function findOne() {
  for (i = 0; i < articles.length; i++) {
    let temp = articles[i];
    if (articles[i].columns === 1) {
      articles.splice(i, 1);
      return temp;
    }
  }
  return null;
}

//Function to find the first article with two columns in the array return & remove it
function findTwo() {
  for (i = 0; i < articles.length; i++) {
    let temp = articles[i];
    if (articles[i].columns === 2) {
      articles.splice(i, 1);
      return temp;
    }
  }
  return null;
}

//Function to find the first article with three columns in the array return & remove it
function findThree() {
  for (i = 0; i < articles.length; i++) {
    let temp = articles[i];
    if (articles[i].columns === 3) {
      articles.splice(i, 1);
      return temp;
    }
  }
}

//Adds the article to the grid and applies a class based on value of the columns
function addToGrid(article) {
  if (article == null) {
    return;
  } else {
    let div = document.createElement("div");
    div.innerHTML = article.title;
    div.className = `span-${article.columns}`;

    document.getElementById("landingContent").appendChild(div);
  }
}

function checkArticles(articles) {
  if (articles.length === 0) {
    return;
  } else {
    if (articles[0].columns === 3) {
      addToGrid(findThree());
    } else if (articles[0].columns === 2) {
      let temp = findOne();
      if (temp == null) {
        let temp2 = findTwo();
        temp2.columns = 3;
        addToGrid(temp2);
      } else {
        addToGrid(findTwo());
        addToGrid(temp);
      }
    } else if (articles[0].columns === 1) {
      addToGrid(findOne());
      addToGrid(findTwo());
    }
    checkArticles(articles);
  }
}

checkArticles(articles);
