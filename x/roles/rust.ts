import { Rustup } from "../cliff/rust.ts"
async function main() {
    let p = await Rustup.install();
}

main();