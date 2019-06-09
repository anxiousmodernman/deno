import { Rustup } from "../cliff/rust.ts"
async function main() {
    console.log("installing rust");
    let p = await Rustup.install();
    console.log("DONE DONE DONE! WOOOO!")
}

main();