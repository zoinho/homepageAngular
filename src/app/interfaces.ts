export interface Education  {
    icon: string[],
    startDate: number,
    endDate: number,
    universityName: string,
    faculty: string,
    discipline: string,
    degree: string
}

export interface Experience {
    startYear:number,
    endYear: number,
    companyName: string,
    position: string,
    responsibilities: string
}
export interface Hobbies {
    iconUrl: string,
    description: string
}

export interface Skills {
    iconUrl:string,
    name:string,
    level:number
}