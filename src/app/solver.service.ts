export class SolverService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger
  ) { }

  solve(sudokuPuzzle:any){
    console.log('called solve()!');
  }
  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
