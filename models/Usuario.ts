export class Usuario {
    private id: number;
    private nome: string;

    public constructor(id?: number, nome?: string) {
        this.id = typeof id !== 'undefined' ? id : 0;
        this.nome = typeof nome !== 'undefined' ? nome : '';
    }

    public setId(id: number){
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
}