export namespace Rustup {
    export async function install(): Promise<void> {

        // "curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain \"nightly\""
        let opts1: Deno.RunOptions = { 
            args: ["curl", "https://sh.rustup.rs", "-sSf"],
            stdout: "piped"
        };
        let p1 = Deno.run(opts1);
        let opts2: Deno.RunOptions = { 
            args: ["sh", "-s", "--", "-y", "--default-toolchain", "nightly"],
            stdin: "piped"
        };
        let p2 = Deno.run(opts2);
        await Deno.copy(p2.stdin, p1.stdout)
    }
}

export namespace Cargo {
    export async function build(path: string): Promise<Deno.Process> {
        let opts: Deno.RunOptions = { args: ["cargo", "build", "--manifest-path", path]}
        return Deno.run(opts);
    }
}