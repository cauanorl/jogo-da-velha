
game = {
   init: function() {
      this.casheSelectors()
      this.createDiv([
         this.$firstLine,
         this.$secondLine,
         this.$thirdLine
      ])

   },

   casheSelectors: function() {
      this.$firstLine = document.querySelector('#first-line')
      this.$secondLine = document.querySelector('#second-line')
      this.$thirdLine = document.querySelector('#third-line')
   },

   gameButtonsSelector: function() {
      this.$div1 = document.querySelectorAll('#divGame')

   },

   createDiv: function(values) {
      for (let value of values) {
         value.innerHTML += `
            <div id='divGame' class='game'></div>
            <div  id='divGame' class='game'></div>
            <div id='divGame' class='game'></div>
         `
      }
   }
}


game.init()