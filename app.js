var app = new Vue({
    el: '#app',
    data: {
        movies: [
            {title: 'Star Wars',year: 1975,genre: 'Sci-Fi'},
            {title: 'Back to the Future',year: 1975,genre: 'Sci-Fi'},
            {title: 'Rambo - First BLood',year: 1986,genre: 'Action'},
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
            this.movies.push(this.model);
            this.model = {
                title: '',
                year: '',
                genre: ''
            };
        },
        deleteMovie(movie){
            let index = this.movies.indexOf(movie)
            this.movies.splice(index, 1)
        }
    },
    created() {
        console.log()
    },
})