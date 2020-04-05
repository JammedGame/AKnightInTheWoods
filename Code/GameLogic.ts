export { GameLogic };

import * as TBX from "toybox-engine";

import { MainMenu } from "./MainMenu";
import { GameScene } from "./Scenes/GameScene";
import { DefaultGameObject } from "./GameObject";
import { SceneFactory } from "./Scenes/SceneFactory";

class GameLogic
{
    private _Game:any;
    private _Runner:any;
    public constructor()
    {
        TBX.Settings.GlobalFontFamily = "'Comic Sans MS' sans-serif";
        this._Game = new TBX.Game();
        this._Game.Data["GO"] = JSON.parse(JSON.stringify(DefaultGameObject));
        this._Game.Name = "AKnightInTheWoods";
        this._Runner = new TBX.Runner(this._Game, TBX.DrawEngineType.ThreeJS);
        this._Runner.SetResolution(new TBX.Vertex(1920, 1080, 0));
        let _Menu:any = new MainMenu(this._Runner, this._Game);
        this._Game.Attach(_Menu);
        
    }
    public Run() : void
    {
        TBX.Reader.Read("/Assets/Scenes.json").then(Data =>
        {
            this._Game.Data["GO"].Scenes = JSON.parse(Data).Scenes;
            SceneFactory.GenerateAll();
            TBX.Reader.Read("/Assets/Characters.json").then(Data =>
            {
                this._Game.Data["GO"].Characters = JSON.parse(Data).Characters;
                this._Runner.SwitchScene("Menu");
                this._Runner.Run();
            });
        });
    }
}