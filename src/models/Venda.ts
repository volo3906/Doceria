export class Venda {
  private id: number;
  private clienteId: number;
  private doceId: number;
  private quantidade: number;
  private valorTotal: number;
  private dataVenda: string;

  constructor(
    id: number,
    clienteId: number,
    doceId: number,
    quantidade: number,
    valorTotal: number,
    dataVenda: string
  ) {
    this.id = id;
    this.clienteId = clienteId;
    this.doceId = doceId;
    this.quantidade = quantidade;
    this.valorTotal = valorTotal;
    this.dataVenda = dataVenda;
  }

  getId(): number {
    return this.id;
  }

  getClienteId(): number {
    return this.clienteId;
  }

  getDoceId(): number {
    return this.doceId;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValorTotal(): number {
    return this.valorTotal;
  }

  getDataVenda(): string {
    return this.dataVenda;
  }

  exibirDetalhes(): void {
    console.log(`[Venda ID: ${this.id}] Data: ${this.dataVenda}`);
    console.log(` -> Cliente ID : ${this.clienteId}`);
    console.log(` -> Doce ID    : ${this.doceId}`);
    console.log(` -> Quantidade : ${this.quantidade} unid.`);
    console.log(` -> Total Pago : R$ ${this.valorTotal.toFixed(2)}`);
  }
}
