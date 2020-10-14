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

module.exports = Cinema;
