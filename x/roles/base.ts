
import { User, getUsers } from "https://deno.coleman.codes/x/cliff/user.ts"
import { GitRepo } from "https://deno.coleman.codes/x/cliff/git.ts"


function gitClone(repo: string): Promise<void> {
  let result = await Deno.run({ })
}


async function main(): Promise<void> {
  let u = new User("coleman");
  
  Deno.run({ "args": ["ls"]});
}

main();