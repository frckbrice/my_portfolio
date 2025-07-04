export interface WorkType {
    num: string,
    category: string,
    title: string,
    description: string,
    stack: {
        name: string
    }[],
    topics?: string[],
    image: string,
    live: string,
    github: string
}
