import Tag from "./tag";

export default interface Category {
    id: string;
    name: string;
    tags: Array<Tag>;
}

