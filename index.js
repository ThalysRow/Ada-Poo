class Conta {
    #numeroConta;
    #saldo;
    nomeUsuario;
    profissaoUsuario;

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
    }

    criarConta() {
        console.log('Conta criada com sucesso!');
    }

    checarExtrato() {
        console.log(`
        Extrato de hoje:
        Número da conta: ${this.#numeroConta}.
        Saldo atual: R$ ${this.#saldo.toFixed(2)}.
        Nome do usuário: ${this.nomeUsuario}.
        Profissão: ${this.profissaoUsuario}.
        `);
    }

    solicitarEmprestimo(valor) {
        console.log(`Foi solicitado um empréstimo de: R$ ${valor.toFixed(2)}.`);
    }

    static imprimirInstrucoes() {
        console.log(`
        Funcionalidades disponíveis:
        1- Criar uma nova conta.
        2- Checar extrato.
        3- Solicitar empréstimo.
        `);
    }

    getSaldo() {
        return this.#saldo;
    }
}

class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, limiteChequeEspecial, taxaManutencao) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#limiteChequeEspecial = limiteChequeEspecial;
        this.#taxaManutencao = taxaManutencao;
        ContaCorrente.contasCorrente.push(numeroConta);
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        this.#limiteChequeEspecial = novoLimite;
        console.log(`O novo limite do Cheque Especial é: R$ ${novoLimite.toFixed(2)}`);
    }

    calcularTaxaManutencao() {
        console.log(`A taxa de manutenção da conta corrente é de: R$ ${this.#taxaManutencao.toFixed(2)}.`);
    }

    static listarTodasContasCorrente() {
        console.log("Contas corrente criadas:");
        ContaCorrente.contasCorrente.forEach(numeroConta => console.log(numeroConta));
    }
}

class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, taxaJuros, limiteSaques) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#taxaJuros = taxaJuros;
        this.#limiteSaques = limiteSaques;
    }

    calcularJuros() {
        const juros = super.getSaldo() * (this.#taxaJuros / 100);
        console.log(`Juros da Conta Poupança é de: R$ ${juros.toFixed(2)}`);
    }

    gerenciarLimiteSaques(novoLimite) {
        this.#limiteSaques = novoLimite;
        console.log(`O novo limite de saques é: ${novoLimite}`);
    }

    static verificarMelhorInvestimento() {
        console.log("Melhores investimentos para contas poupança:");
        ContaPoupanca.melhoresInvestimentos.forEach(item => console.log(item));
    }
}