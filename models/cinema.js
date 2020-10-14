const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  return this.films.map(({title}) => title);
};

// Cinema.prototype.findFilmByTitle = function(){
//   return this.films.find(({title}) => title)
// };

Cinema.prototype.findFilmByTitle = function(movieTitle){
  return this.films.find(({title}) => title === movieTitle)
};

Cinema.prototype.filterByGenre = function(movieGenre){
  return this.films.filter(({genre}) => genre === movieGenre);
};

Cinema.prototype.filterByYear = function(movieYear){
  return this.films.filter(({year}) => year === movieYear);
};

Cinema.prototype.filterByLength = function(movieLength){
  return this.films.every(({length}) => length > movieLength);
};




module.exports = Cinema;
