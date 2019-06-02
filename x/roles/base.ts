
import { User, getUsers, GitRepo, Package } from "https://deno.coleman.codes/x/cliff/mod.ts"



async function main(): Promise<void> {
  const home = Deno.env()["HOME"];
  Deno.chdir(home);

  const redoxDeps = ["cmake", "make", "nasm", "qemu", "pkg-config", "libfuse-dev", 
    "wget", "gperf", "libhtml-parser-perl", "autoconf", "flex", "autogen"];
  
  Package.install(redoxDeps);

  let sled = new GitRepo("git@github.com:spacejam/sled.git").clone();
  // careful, redox is like several gigs
  let redox = new GitRepo("https://gitlab.redox-os.org/redox-os/redox.git").clone({ recurseSubmodules: true });
  
  await Promise.all([sled, redox]);

}

main();