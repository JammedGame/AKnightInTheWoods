import { GameScene } from "./GameScene";

export {Dialog}

class Dialog {
    private _DivDialog:HTMLElement;
    private _Option1:HTMLElement;

    public constructor()
    {
        //this._DivDialog = document.getElementById("dialog-overlay");
       // this._Option1 = document.getElementById("dialog-info-1");
        //this._DivDialog.style.display = "block";
        //this._Option1.addEventListener("click", this.SetDialog.bind(this));
    }

    public SetDialog(Text:string):void
    {
        this._Option1.innerHTML = Text;
    }
}
