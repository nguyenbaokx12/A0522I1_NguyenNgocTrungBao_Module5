import { Teacher } from "./teacher";

export interface Student {
    id?: number;
    name?: string;
    group?: string;
    subject?: string;
    teacher?: Teacher;
    email?: string;
    phone?: number;
}