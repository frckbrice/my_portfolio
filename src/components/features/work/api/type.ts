export interface WorkType {
    num: string,
    category: string,
    title: string,
    description: string,
    stack: {
        name: string
    }[],
    image: string,
    live: string,
    github: string
}
