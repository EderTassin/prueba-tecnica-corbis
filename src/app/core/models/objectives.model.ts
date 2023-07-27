import { Perspective } from "./perspective.model";

export interface Objectives {
    id: number,
    code: string,
    name: string,
    description: string,
    perspective: Perspective;
}