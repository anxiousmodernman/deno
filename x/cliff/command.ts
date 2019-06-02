
export class Command {
    private cmd: string;
    private args: string[];
    private opts: CommandOpts;
    constructor(cmd: string, args?: string[], opts?: CommandOpts) {
        this.cmd = cmd;
        this.args = args ? args : null;
        this.opts = opts ? opts : null;

    }
}

// We can't use the standard library RunOpts because args in that interface
// are required.
export interface CommandOpts {
    cwd?: string;
    env?: {
      [key: string]: string;
    };
    stdout?: ProcessStdio;
    stderr?: ProcessStdio;
    stdin?: ProcessStdio;
}

type ProcessStdio = "inherit" | "piped" | "null";