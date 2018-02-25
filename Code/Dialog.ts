export { Dialog }

import { GameScene } from "./GameScene";
import * as Engineer from "engineer-js";

class Dialog
{
    public static Single:Dialog;
    public Shown:boolean = false;
    private _DivDialog:HTMLElement;
    private _Title:HTMLElement;
    private _Option1:HTMLElement;
    private _Option2:HTMLElement;
    private _Option3:HTMLElement;
    private _Character:any;
    private _GameObject:any;
    public constructor() 
    {
        Dialog.Single = this;
    }
    public SetDialog(Text:string):void
    {
        this._Option1.innerHTML = Text;
    }
    public ShowDialog(Character:string, Chat:number)
    {
        let Char = this.FindCharacter(Character);
        if(!Char) return;
        this._Character = Char;
        let ChatO = Char.Chats[Chat];
        this.SetValues(ChatO);
        this.Show();
        //this._Option1.addEventListener("click", this.SetDialog.bind(this));
    }
    private SetValues(Chat:any)
    {
        this._Title = document.getElementById("dialog-title");
        this._Option1 = document.getElementById("dialog-choice1");
        this._Option2 = document.getElementById("dialog-choice2");
        this._Option3 = document.getElementById("dialog-choice3");
        this._Title.innerHTML = Chat.Text;
        this._Option1.innerHTML = Chat.Options[0].Text;
        if(Chat.Options.length > 1) this._Option2.innerHTML = Chat.Options[1].Text;
        if(Chat.Options.length > 2) this._Option3.innerHTML = Chat.Options[2].Text;
    }
    private Show()
    {
        this.Shown = true;
        this._DivDialog = document.getElementById("dialog-overlay");
        this._DivDialog.style.display = "block";
    }
    private FindCharacter(Character:string) : any
    {
        this._GameObject = Engineer.Runner.Current.Game.Data["GO"];
        for(let i in this._GameObject.Characters)
        {
            if(this._GameObject.Characters[i].Name == Character)
            {
                return this._GameObject.Characters[i];
            }
        }
        return null;
    }
}
