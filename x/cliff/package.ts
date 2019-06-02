export namespace Package {
    export async function install(names: string[]): Promise<Deno.ProcessStatus> {
        // TODO(cm) handle different platforms with a platform test
            return Deno.run({args: ["apt-get", "install", "-y"].concat(names)}).status();
        
    }
}


