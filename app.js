var app = new Vue({
    el: '#app',
    data: {
        movies: [
            {title: 'Star Wars',year: 1975, genre: 'Sci-Fi'},
            {title: 'Back to the Future',year: 1975, genre: 'Sci-Fi'},
            {title: 'Rambo - First Blood',year: 1986, genre: 'Action'},
        ],
        model:{
            title: '',
            year: '',
            genre: ''
        }
    },
    computed: {
        listMovies: function(){
            return this.movies.sort((a, b) => { return a.year - b.year})
        }
    },
    methods: {
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        saveNew(){
            if(this.model.title && this.model.genre){
                let actualYear = new Date().getFullYear();
                if(this.model.year && this.model.year >= 1895 && this.model.year <= actualYear){
                    let exist = false;
                    for(var i in this.movies){
                        if(this.movies[i].title == this.model.title && this.movies[i].genre == this.model.genre && this.movies[i].year == this.model.year){
                            exist = true;
                            break;
                        }
                    }
                    if(!exist){
                        this.movies.push(this.model);
                        this.model = {
                            title: '',
                            year: '',
                            genre: ''
                        };
                    }else{
                        alert("No puedes añadir la misma película dos veces, favor validar.");
                    }
                }else{
                    alert("Debes indicar un año valido, recuerda que la fecha debe ser desde el año 1895 y no puede ser mayor al año "+actualYear);
                }
            }else{
                alert("Debes indicar el titulo de la película y su género para poder añadirla a la lista.");
            }
        },
        deleteMovie(movie){
            let index = this.movies.indexOf(movie)
            this.movies.splice(index, 1)
        }
    },
})