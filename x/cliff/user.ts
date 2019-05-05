import {Resource} from "./core.ts";

export class User implements Resource<UserInfo> {
    private name: string;
    private _uid: number;
    private _gid: number;
    private _home: string;
    private _shell: string;
    applied: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    public uid(uid: number): this {
        this._uid = uid;
        return this;
    }

    public gid(gid: number): this {
        this._gid = gid;
        return this;
    }

    create(): UserInfo {
        return undefined;
    }

    delete(): void {
    }

    info(): UserInfo {
        return {
            name: this.name,
            gid: this._gid,
            uid: this._uid,
            home: this._home,
            shell: this._shell,
        };
    }

    update(): UserInfo {
        return undefined;
    }
}

export class UserInfo {
    constructor(
        public name: string,
        public uid: number,
        public gid: number,
        public home: string,
        public shell: string
    ) {
        this.name = name;
        this.home = home;
        this.uid = uid;
        this.gid = gid;
        this.shell = shell;
    }
}

export function getUsers(passwordFile: string): UserInfo[] {
    let users: UserInfo[] = [];
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(Deno.readFileSync(passwordFile));
    let lines = text.split("\n");
    for (let line of lines) {
        let [ username, _, uid, gid, primaryGroup, home, shell ] = line.split(":");
        let u = new UserInfo(username, Number(uid), Number(gid), home, shell);
        users.push(u);
    }
    return users;
}