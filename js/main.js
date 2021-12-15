
game = {
   init: function() {
      this.casheSelectors()
      this.createDiv([
         this.$firstLine,
         this.$secondLine,
         this.$thirdLine
      ])
      this.gameButtonsSelector()
      this.bindEvents()

   },

   bindEvents: function() {
      for (let div of this.$divs) {
         div.addEventListener('click', event => {
            if (!this.finish) {

               if (event.target.outerText === '') {
                  const index = parseInt(event.target.dataset.value)
                  
                  this.changeActual()
                  event.target.innerText = this.actual
                  
                  this.listGame[index - 1] = this.actual
                  if (this.victoryCondition()) {
                     this.gameFinish()
                  }
               }
            }
         })
      }
   },

   casheSelectors: function() {
      this.$firstLine = document.querySelector('#first-line')
      this.$secondLine = document.querySelector('#second-line')
      this.$thirdLine = document.querySelector('#third-line')
   },

   gameButtonsSelector: function() {
      this.$divs = document.querySelectorAll('#divGame')
      this.listGame = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      this.actual = 'O'
      this.finish = false
   },

   createDiv: function(values) {
      let count = 0
      for (let value of values) {
         value.innerHTML += `
            <div id='divGame' class='game' data-value="${count+1}"></div>
            <div id='divGame' class='game' data-value="${count+2}"></div>
            <div id='divGame' class='game' data-value="${count+3}"></div>
         `
         count += 3
      }
   },

   changeActual: function() {
      if (this.actual === 'O') {
         this.actual = 'X'
         return
      }
      else {
         this.actual = 'O'
         return
      }
   },

   victoryCondition: function() {
      /*
      [0] [3] [6]
      [1] [4] [7]
      [2] [5] [8]
      */

      const win = this.listGame
      let end = false
      
      for (let count = 0; count < 9; count += 3) {
         if (win[count] === win[count+1] && win[count+1] === win[count+2]) {
            end = true
        }  
      }
      for (let count = 0;count < 3;count++) {
         if (win[count] === win[count+3] && win[count+3] === win[count+6]) {
            end = true
         }
      }
      if (win[0] === win[4] && win[4] === win[8]) {
         end = true
      }
      else if (win[2] === win[4] && win[4] === win[6]) {
         end = true
      }

      if (end) {
         
         return true
      }
   },

   gameFinish: function() {
      this.finish = true
   }
}

game.init()