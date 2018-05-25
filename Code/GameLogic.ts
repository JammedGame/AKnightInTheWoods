export { GameLogic };

import * as Engineer from "engineer-js";

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
        this._Game = new Engineer.Game();
        this._Game.Data["GO"] = JSON.parse(JSON.stringify(DefaultGameObject));
        this._Game.Name = "AKnightInTheWoods";
        this._Runner = new Engineer.Runner(this._Game, Engineer.DrawEngineType.ThreeJS);
        this._Runner.SetResolution(new Engineer.Vertex(1920, 1080, 0));
        let _Menu:any = new MainMenu(this._Runner, this._Game);
        this._Game.Attach(_Menu);
        SceneFactory.GenerateAll();
    }
    public Run() : void
    {
        this._Runner.SwitchScene("Menu");
        this._Runner.Run();
    }
}