

export class GitRepo {
    private remoteUrl: string;
    constructor(remoteUrl: string) {
        this.remoteUrl = remoteUrl;
    }

    public async clone(opts?: CloneOpts): Promise<Deno.Process> {
        let runOpts: Deno.RunOptions = {
            args: ["git", "clone", this.remoteUrl]
        } 
        if (opts) {
            if (opts.recurseSubmodules) {
                runOpts.args.push("--recurse-submodules")
            }
            if (opts.dest) {
                runOpts.args.push(opts.dest)
            }
        }

        let result = Deno.run(runOpts);
        return result;
    }

}

export interface CloneOpts {
    dest?: string;
    recurseSubmodules?: boolean;
    // TODO(cm): named origin 
}