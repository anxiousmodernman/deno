

export class Git {
    private repo: string;
    constructor(repo: string) {
        this.repo = repo;

    }

    public clone(): this {
        return this;
    }

}