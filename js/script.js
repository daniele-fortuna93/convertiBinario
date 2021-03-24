var app = new Vue (
  {
    el: '#root',
    data: {
      inputValue: '',
      risultato: ''
    },
    methods:{
      oneZero:  function  (){
        let array = this.inputValue;
        array = array.split('');
        let x = 0;
        let j = 0;
        for (let i = array.length - 1; i >= 0 ; i--) {
          if ( array[i] == 1 ) {
            x += Math.pow(2,j);
          }
          j++;
        }
        this.risultato = x;
        return this.risultato;
      },
      soloBinario: function(evt){
        var charCode = evt.keyCode;
        if  ( charCode < 48 || charCode > 49 ){
          this.inputValue = '';
          return alert('Inserisci un carattere vaido!');
        }
      }
    }
  }
);
