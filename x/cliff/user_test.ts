import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getUsers, UserInfo } from "./user.ts";


test({
    name: "parse /etc/passwd",
    fn(): void {
        let users = getUsers("x/cliff/.testfixtures/etc_passwd");
        let user: UserInfo = users[0];
        assertEquals(user, { name: "root", uid: 0, gid: 0, group: "root", home: "/root", shell: "/bin/bash" });
    }
});

runTests();