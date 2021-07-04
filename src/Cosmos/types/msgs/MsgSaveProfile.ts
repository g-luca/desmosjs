import { IMsg } from "./IMsg";

export class MsgSaveProfile extends IMsg {
    public static type = "cosmos-sdk/MsgSaveProfile";
    private dtag: string;
    private nickname: string;
    private bio: string;
    private profile_picture: string;
    private cover_picture: string;
    private creator: string;


    constructor($dtag: string, $nickname: string, $bio: string, $profile_picture: string, $cover_picture: string, $creator: string) {
        super();
        this.dtag = $dtag;
        this.nickname = $nickname;
        this.bio = $bio;
        this.profile_picture = $profile_picture;
        this.cover_picture = $cover_picture;
        this.creator = $creator;
    }


    /**
     * Getter $dtag
     * @return {string}
     */
    public get $dtag(): string {
        return this.dtag;
    }

    /**
     * Getter $nickname
     * @return {string}
     */
    public get $nickname(): string {
        return this.nickname;
    }

    /**
     * Getter $bio
     * @return {string}
     */
    public get $bio(): string {
        return this.bio;
    }

    /**
     * Getter $profile_picture
     * @return {string}
     */
    public get $profile_picture(): string {
        return this.profile_picture;
    }

    /**
     * Getter $cover_picture
     * @return {string}
     */
    public get $cover_picture(): string {
        return this.cover_picture;
    }

    /**
     * Getter $creator
     * @return {string}
     */
    public get $creator(): string {
        return this.creator;
    }


}