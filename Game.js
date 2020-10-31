const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("help"),
    MOVE: Symbol("move"),
    ROOM: Symbol("room"),
    SEE:Symbol("see"),
    OPEN:Symbol("open"),
    FORWARD:Symbol("forward")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a dark and rainy night. Bang! You have a flat tire. Too bad you don't have a spare. Do you WAIT or GO to the spooky mansion for help?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                }else{
                    sReply ="On the door is a large knocker. Do you KNOCK or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you GO in or RUN back to the car?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;

            case GameState.BUTLER:
                if(sInput.toLowerCase().match("run")){
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;

                }else{
                    sReply = "You seem to have walked in to a party. The host offers for help. Do you take the HELP or IGNORE?";
                    this.stateCur = GameState.HELP;
    
                }
                break;

            case GameState.HELP:
                 if(sInput.toLowerCase().match("help")){
                    sReply = "He can take help to save his life. so he has an option to MOVE or IGNORE and go back to the car"
                    this.stateCur = GameState.MOVE;
    
                 }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
        
                }
                break;

            case GameState.MOVE:
                 if(sInput.toLowerCase().match("move")){
                     sReply = "ENTER the scary room or RUN BACK"
                    this.stateCur = GameState.ROOM;
       
                }else{
                     sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
           
                }
                break;

            case GameState.ROOM:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "There he see the mysterius blood stains. He has an option to SEE the blood stains or MOVE back "
                    this.stateCur = GameState.SEE;
          
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
              
                }
            break;
            case GameState.SEE:
                if(sInput.toLowerCase().match("see")){
                    sReply = "Then suddenly the door close and lights get off. He try to turn ON the light or Open the door  "
                    this.stateCur = GameState.OPEN;
          
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
              
                }
            break;

            case GameState.OPEN:
                if(sInput.toLowerCase().match("on")){
                    sReply = "The lights were not turning on he started hearing the sounds. He can move FORWARD the sounds or try to OPEN the door again   "
                    this.stateCur = GameState.FORWARD;
          
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
              
                }
            break;

            case GameState.FORWARD:
                if(sInput.toLowerCase().match("forward")){
                    sReply = "As he move forward he saw a person that offer him the TOAST "
                    this.stateCur = GameState.TOAST;
          
                }else{
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep WAITING or do you GO to the house?";
                    this.stateCur = GameState.FLAT;
              
                }
            break;
            

            case GameState.TOAST:
                if(sInput.toLowerCase().match("toast")){
                    sReply = "you enter a new world of adventure ... game over";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
        }
        return([sReply]);
    }
}