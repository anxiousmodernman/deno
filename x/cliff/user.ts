import { Resource } from "./core.ts";

export class User implements Resource<UserInfo> {
    private name: string;
    private _uid: number;
    private _gid: number;
    private _home: string;
    private _shell: string;
    private _group: string;
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
            group: this._group,
        };
    }

    update(): UserInfo {
        return undefined;
    }
}

export interface UserInfo {
     name: string;
     uid: number;
     gid: number;
     group: string;
     home: string;
     shell: string;
}

export function getUsers(passwordFile: string): UserInfo[] {
    let users: UserInfo[] = [];
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(Deno.readFileSync(passwordFile));
    let lines = text.split("\n");
    for (let line of lines) {
        let [ username, _, uid, gid, primaryGroup, home, shell ] = line.split(":");
        let u = { name: username, uid: Number(uid), gid: Number(gid), group: primaryGroup, home: home, shell: shell };
        users.push(u);
    }
    return users;
}
