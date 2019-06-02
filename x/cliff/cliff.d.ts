
export = User;

declare class User {
    constructor(name: string);
    uid(uid: number): this;
    gid(gid: number): this;
    create(): UserInfo;
    delete(): void;
    info(): UserInfo;
    update(): UserInfo;
}

interface UserInfo {
    name: string;
    uid: number;
    gid: number;
    group: string;
    home: string;
    shell: string;
}

declare function getUsers(passwordFile: string): UserInfo[];