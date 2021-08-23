var nofilterdata = data;

// Build Table
//Get a reference to the table body
var tbody = d3.select("tbody");

console.log(nofilterdata)

// First 20 records - get data needed from json
var budget = [];
var revenue = [];
var similarity = [];
var title = [];
var genres = [];
var director = [];
var release = [];
var runtime = [];

for (var i=0; i<20; i++) {
  title.push(nofilterdata[i].title);
  genres.push(nofilterdata[i].genres);
  director.push(nofilterdata[i].director);
  release.push(nofilterdata[i].release_date);
  runtime.push(nofilterdata[i].runtime);
  budget.push(nofilterdata[i].budget);
  revenue.push(nofilterdata[i].revenue);
}

var row;
for (var i=0; i<20; i++) {
  row = tbody.append("tr");
  row.append("td").text(title[i]);
  row.append("td").text(genres[i]);
  row.append("td").text(director[i]);
  row.append("td").text(release[i]);
  row.append("td").text(runtime[i]);
  row.append("td").text(budget[i]);
  row.append("td").text(revenue[i]);
}
//object1 = JSON.parse(nofilterdata);

// var newData = [];
// object1.forEach(obj => { 
// newData.push({"title": obj.title, "genres": obj.genres, "director": obj.director, "cast": obj.cast, "release_date": obj.release_date, 
//             "runtime": obj.runtime, "budget": obj.budget, "revenue": obj.revenue});  
// });
// console.log(newData);

// newData.forEach(obj => {
//   var row = tbody.append("tr");
//   Object.entries(obj).forEach(([key, value]) => row.append("td").text(value));
// });  


// var newData = [];
// slicedArray.forEach(obj => { 
// newData.push({"title": obj.title, "genres": obj.genres, "director": obj.director, "cast": obj.cast, "release_date": obj.release_date, 
//             "runtime": obj.runtime, "budget": obj.budget, "revenue": obj.revenue});  
// });
// console.log(newData);

