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

// Cinema.prototype.filterByGenre = function(movieGenre){
//   return this.films.filter(({genre}) => genre === movieGenre);
// };

Cinema.prototype.filterByYear = function(movieYear){
  return this.films.filter(({year}) => year === movieYear);
};

Cinema.prototype.filterByLength = function(movieLength){
  return this.films.every(({length}) => length > movieLength);
};

Cinema.prototype.totalLength = function(){
  return this.films.reduce((acc, film) => acc + film.length,0);
};

Cinema.prototype.filmsByProperty = function(filmProperty, filmValue){
  // return this.films.filter(({property}) => property === filmProperty);
  const filmFound = this.films.filter(film.property =>{

  });
  return filmFound
};

module.exports = Cinema;