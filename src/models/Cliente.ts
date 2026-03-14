export class Cliente {
  private id: number;
  private nome: string;
  private cpf: string;
  private telefone: string;

  constructor(id: number, nome: string, cpf: string, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  getId(): number {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }

  getTelefone(): string {
    return this.telefone;
  }

  setNome(novoNome: string): void {
    this.nome = novoNome;
  }

  setTelefone(novoTelefone: string): void {
    this.telefone = novoTelefone;
  }

  exibirDetalhes(): void {
    console.log(`[Cliente ID: ${this.id}] ${this.nome} | CPF: ${this.cpf} | Tel: ${this.telefone}`);
  }
}
