import { GameScene } from "./GameScene";
import { Tile } from "engineer-js";
import Engineer from "./Engineer";
import { Vertex } from "three";
import { Dialog } from "./Dialog";

export {Curio}

class Curio {
    private _GameScene:GameScene;
    private _CurioColl:Engineer.TileCollection = new Engineer.TileCollection(null, []);
    private _Curio:Engineer.Tile = new Engineer.Tile();
    private _Dialog:Dialog;
    
    public constructor(GameScene:GameScene, ImgName:string, Position:Engineer.Vertex)
    {
        this._GameScene = GameScene;
        this.GenerateTiles(ImgName,Position);
    }

    private GenerateTiles(ImgName:string, Position:Engineer.Vertex) : void
    {
        for(let i = 0; i < 1; i++) this._CurioColl.Images.push("Resources/Curios/"+ImgName+".png");     
        this._Curio.Name = "Digit";
        this._Curio.Collection = this._CurioColl;
        this._Curio.Index = 0;
        this._Curio.Fixed = false;
        this._Curio.Trans.Scale = new Engineer.Vertex(200, 200, 1);
        this._Curio.Trans.Translation = Position;
        this._Curio.Events.MouseClick.push(this.MClick.bind(this));
        this._GameScene.AddSceneObject(this._Curio);
    }
    public MClick()
    {
        this._Dialog.SetDialog("Dialog test");
    }

}
