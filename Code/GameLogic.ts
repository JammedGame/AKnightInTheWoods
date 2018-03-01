export { GameLogic };

import * as Engineer from "engineer-js";

import { MainMenu } from "./MainMenu";
import { GameScene } from "./Scenes/GameScene";
import { Arena1 } from "./Scenes/Arena1";
import { Path1 } from "./Scenes/Path1";
import { Camp1 } from "./Scenes/Camp1";

class GameLogic
{
    private _Game:any;
    private _Runner:any;
    public constructor()
    {
        this._Game = new Engineer.Game();
        this._Game.Name = "AKnightInTheWoods";
        this._Runner = new Engineer.Runner(this._Game, Engineer.DrawEngineType.ThreeJS);
        this._Runner.SetResolution(new Engineer.Vertex(1920, 1080, 0));
        let _Menu:any = new MainMenu(this._Runner, this._Game);
        this._Game.AddScene(_Menu);
        let ArenaD1 = new Arena1();
        let PathD1 = new Path1();
        let CampD1 = new Camp1();
        this._Game.AddScene(ArenaD1);
        this._Game.AddScene(PathD1);
        this._Game.AddScene(CampD1);
    }
    public Run() : void
    {
        this._Runner.SwitchScene("Menu");
        this._Runner.Run();
    }
}