import {Resource} from "./core";

export class User implements Resource<UserInfo> {
    private name: string;
    private _uid: number;
    private _gid: number;
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
        };
    }

    update(): UserInfo {
        return undefined;
    }
}

/*
 * UserInfo is only accessible when the companion class User has been applied
 * This type lets us access members by their common sense names.
 */
export interface UserInfo {
    uid: number;
    gid: number;
    name: string;
}

function getUsers(passwordFile: string): [UserInfo] {
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(Deno.readFileSync(passwordFile));

    return [];
}