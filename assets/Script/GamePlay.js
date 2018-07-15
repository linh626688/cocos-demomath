
cc.Class({
    extends: cc.Component,
    
	properties: {

        _randomMath: 0,
        _result: 0,
        _time: 0,

        btnTrue: cc.Button,
        btnFalse: cc.Button,
 
        scoreUp: cc.Label,
        timeBar: cc.ProgressBar

    },
     buttonTrue() {
        Global.score++;
        this.loadDataGame()
    },

    buttonFalse() {
        Global.score--;
        this.loadDataGame()
    },
     scoreDisplay(score) {
        this.scoreUp.string = "Score: " + score;
    },

	loadDataGame() {
            this.time = 20;
		 this.scoreDisplay(Global.score);
    },
    resetProgressBar() {

        this.timeBar.progress = 1;
        this.time = 20;
    },
	 start() {
        // Global.gamePlay = this;
        this.loadDataGame();
    },
     updateGame(dt) {

    },

    update(dt) {
         this.time -= dt;
        this.timeBar.progress = (20 - this.time) / 2;
    }
});  