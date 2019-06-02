
// import { User, getUsers } from "https://deno.coleman.codes/x/cliff/user.ts"
// import { GitRepo } from "https://deno.coleman.codes/x/cliff/git.ts"
import { User, getUsers, GitRepo } from "https://deno.coleman.codes/x/cliff/mod.ts"

const redoxDeps = ["cmake", "make", "nasm", "qemu", "pkg-config", "libfuse-dev", 
  "wget", "gperf", "libhtml-parser-perl", "autoconf", "flex autogen"]

async function main(): Promise<void> {
  const home = Deno.env()["HOME"];
  await new GitRepo("git@github.com:spacejam/sled.git").clone();
  // careful, redox is like several gigs
  await new GitRepo("https://gitlab.redox-os.org/redox-os/redox.git").clone({ recurseSubmodules: true });

}

main();