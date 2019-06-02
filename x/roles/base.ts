
import { User, getUsers } from "https://deno.coleman.codes/x/cliff/user.ts"
import { GitRepo } from "https://deno.coleman.codes/x/cliff/git.ts"


async function main(): Promise<void> {
  const home = Deno.env()["HOME"];
  await new GitRepo("git@github.com:spacejam/sled.git").clone();
  await new GitRepo("https://gitlab.redox-os.org/redox-os/redox.git").clone({ recurseSubmodules: true });

}

main();