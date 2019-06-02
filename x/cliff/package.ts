export namespace Package {
    export async function install(names: string[]): Promise<Deno.ProcessStatus> {
        // TODO(cm) handle different platforms with a platform test.
        // TODO(cm) whether to use "sudo" should be a parameter or some kind of self-test
        return Deno.run({args: ["sudo", "apt-get", "install", "-y"].concat(names)}).status();
        
    }
}


