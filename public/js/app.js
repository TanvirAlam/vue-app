Vue.prototype.$http = axios;

new Vue ({
    el: '#app',

    data: {
      skills: []
    },
    mounted() {
        //Make an ajax requested to our server
        //facth, ajax jquery
        //axios
        //axios.get('/skills').then(response => this.skills = response.data);
        this.$http.get('/skills').then(response => this.skills = response.data);

        //Vue resource
        //this.$http.post('/skills', {})
    }
});