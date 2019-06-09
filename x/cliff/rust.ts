export namespace Rustup {
    export async function install(): Promise<[Deno.ProcessStatus, Deno.ProcessStatus]> {

        // "curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain \"nightly\""
        let opts1: Deno.RunOptions = { 
            args: ["curl", "https://sh.rustup.rs", "-sSf"],
            stdout: "piped",
        };
        let p1 = Deno.run(opts1);
        let opts2: Deno.RunOptions = { 
            args: ["sh", "-s", "--", "-y", "--default-toolchain", "nightly"],
            stdin: "piped",
        };
        let p2 = Deno.run(opts2);
        // do we await this?
        Deno.copy(p2.stdin, p1.stdout);
        return Promise.all([p1.status(), p2.status()]);
    }
}

export namespace Cargo {
    // Path to the cargo binary. This can be overidden.
    export let bin = Deno.env()["HOME"] + "/.cargo/bin/cargo";
    // Build takes a full-qualified path to a Cargo.toml
    export async function build(path: string): Promise<Deno.ProcessStatus> {
        let opts: Deno.RunOptions = { args: [bin, "build", "--manifest-path", path]}
        return Deno.run(opts).status();
    }
}

