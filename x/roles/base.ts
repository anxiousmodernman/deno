
import { User, getUsers } from "https://deno.coleman.codes/x/cliff/user.ts"


async function main(): Promise<void> {
  let u = new User("coleman");
  
  Deno.run({ "args": ["ls"]});
}

main();