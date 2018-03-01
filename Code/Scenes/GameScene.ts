export { GameScene };

import * as Engineer from "engineer-js";

import { Player } from "./../Player";
import { Movement } from "./Movement";

import { Tooltip } from "./../Tooltip";
import { Transition } from "./../Transition";
import { Character } from "./../Characters/Character";

import { Raccoon } from "./../Characters/Raccoon";
import { Bob } from "./../Characters/Bob";
import { Jim } from "./../Characters/Jim";
import { Wolf } from "./../Characters/Wolf";
import { Fox } from "./../Characters/Fox";
import { Rabbit } from "./../Characters/Rabbit";
import { Owl } from "./../Characters/Owl";
import { Tortoise } from "./../Characters/Tortoise";

class GameScene extends Engineer.Scene2D
{
    protected _XSize:number;
    protected _FixedScene:boolean;
    protected _Background:Engineer.Tile;
    protected _Player:Player;
    protected _Movement:Movement;
    protected _Tooltip:Tooltip;
    protected _Characters:Character[];
    protected _Transitions:Transition[];
    public get Player():Player { return this._Player; }
    public set Player(value:Player) { this._Player = value; }
    public constructor()
    {
        super();
        this._XSize = 1920;
        this._FixedScene = false;
        this._Characters = [];
        this._Transitions = [];
        this._Tooltip = new Tooltip(this);
    }
    protected GenerateBackground() : void
    {
        this.BackColor = Engineer.Color.FromRGBA(0, 0, 0, 255);
        let Backs:Engineer.ImageCollection = new Engineer.ImageCollection(null, ["Resources/Textures/Backgrounds/"+this.Name+".png"]);
        let Back:Engineer.Tile = new Engineer.Tile();
        Back.Name = "Back";
        Back.Collection = Backs;
        Back.Index = 0;
        Back.Trans.Scale = new Engineer.Vertex(this._XSize, 1080, 1);
        Back.Trans.Translation = new Engineer.Vertex((this._XSize / 2), 540, 0);
        this._Background = Back;
        this.AddSceneObject(this._Background);
    }
    protected CreateCharacter(Name:string, Position:any, Size:any, Chat:number, Flip?:boolean) : void
    {
        let Char:Character;
        if(Name == "Raccoon") Char = new Raccoon();
        else if(Name == "Bob") Char = new Bob();
        else if(Name == "Jim") Char = new Jim();
        else if(Name == "Wolf") Char = new Wolf();
        else if(Name == "Fox") Char = new Fox();
        else if(Name == "Rabbit") Char = new Rabbit();
        else if(Name == "Owl") Char = new Owl();
        else if(Name == "Tortoise") Char = new Tortoise();
        Char.Fixed = this._FixedScene;
        Char.Data["Chat"] = Chat;
        if(Flip) Char.Flip();
        if(!Position.Z) Position.Z = 0.8;
        Char.Init(new Engineer.Vertex(Position.X, Position.Y, Position.Z), new Engineer.Vertex(Size.X, Size.Y, 1));
        this._Characters.push(Char);
        this.AddSceneObject(Char);
    }
    protected CreateTransition(Type:string, Destination:string, Tooltip:string, Position:any)
    {
        let Trans = new Transition(null, Type, Destination, Tooltip);
        if(!Position.Z) Position.Z = 0.7;
        Trans.Init(new Engineer.Vertex(Position.X, Position.Y, Position.Z));
        this._Transitions.push(Trans);
        this.AddSceneObject(Trans);
        console.log(Trans);
    }
}