import { FormEvent } from "react";

export interface IUserForm {
    username: string;
    setUserName: (name: string) => void;
    handleSubmit: (e: FormEvent) => void;
}