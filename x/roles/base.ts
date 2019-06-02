
import { User, getUsers } from "https://deno.coleman.codes/x/cliff/user.ts"
import { GitRepo } from "https://deno.coleman.codes/x/cliff/git.ts"


async function main(): Promise<void> {
  const home = Deno.env()["HOME"];
  let r = await new GitRepo("git@github.com:spacejam/sled.git").clone();
}

main();