interface Pessoa {
    firstName: string;
    lastName: string;
    fullName(): string;
}

const professor: Pessoa = {
    firstName : "Josildo",
    lastName: "Silva",
    fullName(): string {
        return "Prof. "+this.firstName + " " + this.lastName;
    }
}

export {professor,Pessoa}