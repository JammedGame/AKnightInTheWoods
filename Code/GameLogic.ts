export { GameLogic };

import Engineer from "./Engineer";

import { MainMenu } from "./MainMenu";
import { GameScene } from "./GameScene";
import { Arena1 } from "./Scenes/Arena1";
import { ForestTrailOne } from "./ForestTrailOne";
import { TournamentCampOne } from "./TournamentCampOne";

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
        let Route1 = new ForestTrailOne();
        let Camp1 = new TournamentCampOne();
        this._Game.AddScene(ArenaD1);
        this._Game.AddScene(Route1);
        this._Game.AddScene(Camp1);
    }
    public Run() : void
    {
        this._Runner.SwitchScene("Menu");
        this._Runner.Run();
    }
}