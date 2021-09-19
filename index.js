const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

// Função responsável por gerar o qrcode que irá nos autenticar no wpp.
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true}); // Caso você não coloque o objeto small: true, o qrcode que irá ser gerado vem em um tamanho enorme hahahahaha!
});

// Função responsável por nos certificar que o nosso bot está pronto para execução.
client.on('ready', () => {
    console.log('O bot já está pronto!');
});


// Função responsável por trocar mensagens com o seu cliente.
client.on('message', msg =>{
    const tratando_string = msg.body.toLowerCase(); // Fiz esse tratamento pensando em facilitar o envio de mensagens dos clientes que agora podem enviar tudo maiusculo, minusculo ou "mesclado" que o nosso bot vai compreender.  


    switch (tratando_string){ //switch case simples, dependendo agora apenas do cliente para escolher as opções existentes e caso ele não escolha 
        case "menu":
        case "!menu":
            msg.reply(`Olá eu sou o novo bot BGNet 🤖\n\nPor gentileza, identifique de qual batalhão você está falando!\n\nDigite *_BPEB_* para tratar de assuntos no Batalhão de PolÍcia do Exército.\n\n Digite *_BGP_* para tratar de assuntos no batalhão de Guarda Presidencial.`);
        break;

        case "bpeb":
        case "!bpeb":
            msg.reply('\nCerto, identifiquei que você está localizado no *BPEB*.\n\nSuas opções de ação são:\n\n*Digite 1 - Compra*\n\n\n*Digite 2 - Trocas ou Suporte Voucher*\n\n\n*Digite 3 - Suporte Técnico*\n\n\n*Digite 4- Outros*');
        break;

        case "1":
        case "!1":
            msg.reply('Você escolheu a *_opção 1 Referente a Compra/Venda no batalhão BPEB_*\n\nNós conseguimos permissão para continuar durante os trâmites legais. Não é possivel prever a duração deste período, por isso estamos vendendo o plano de 3 Mb de 10 dias por R$10,00.\n\nAceitamos:\n\nPIX: 32.999.022/0001-01\nPicPay: @BGNet\n\nBasta enviar o comprovante assim que enviar o pagamento.\n\nIremos responder com o voucher assim que possível.');
        break;

        case "2":
        case "!2":
            msg.reply('Você escolheu a *_opção 2 Referente a Trocas ou Suporte Voucher no batalhão BPEB_*\n\nInforme o que está acontecendo com o seu voucher. \nEnvie o número do seu voucher, comprovante de pagamento e número de celular de quem realizou a compra.');
        break;

        case "3":
        case "!3":
            msg.reply('Você escolheu a *_opção 3 Referente a Suporte Técnico no batalhão BPEB_*\n\nInforme sua localização (companhia, andar, prédio) e qual o problema.\n\nPreferencialmente também envie a localização exata pelo WhatsApp.\n\n_*NÃO SERÃO TRATADOS ASSUNTOS SOBRE VOUCHER*_, *para isso digite !2*');
        break;

        case "4":
        case "!4":
            msg.reply('Você escolheu a *_opção 4 Referente a Outros no batalhão BPEB_*\n\nNos informe o máximo de detalhes da sua situação.');
        break;

        //------------------------------------------------------------------------------------------------------------------------------->

        case "bgp":
        case "!bgp":    
            msg.reply('\nCerto, identifiquei que você está localizado no *BGP*.\n\nSuas opções de ação são:\n\n*Digite 5 - Compra*\n\n\n*Digite 6 - Trocas ou Suporte Voucher*\n\n\n*Digite 7 - Suporte Técnico*\n\n\n*Digite 8- Outros*');
        break;

        case "5":
        case "!5":
            msg.reply('Você escolheu a *_opção 5 Referente a Compra/Venda no batalhão BGP_*.\n\n\nNós possuímos os seguintes planos:\n\n-> 1,5 Mb: R$ 20,00\n-> 3Mb : R$ 30,00\n\nAceitamos:\n\nPIX: 32.999.022/0001-01\nPicPay: @BGNet\n\nBasta enviar o comprovante assim que enviar o pagamento.\n\nIremos responder com o voucher assim que possível.');
        break;
        
        case "6":
        case "!6":
            msg.reply('Você escolheu a *_opção 6 Referente a Trocas ou  Suporte Voucher no batalhão BGP_*.\n\nInforme o que está acontecendo com o seu voucher. \n\nEnvie o número do seu voucher, comprovante de pagamento, últimos 4 dígitos do cartão (se aplicável) e data de compra.');
        break;

        case "7":
        case "!7":
            msg.reply('Você escolheu a *_opção 7 Referente a Suporte Técnico no batalhão BGP_*.\n\nInforme sua localização (companhia, andar, prédio) e qual o problema. \n\nPreferencialmente também envie a localização exata pelo WhatsApp.\n\n _*NÃO SERÃO TRATADOS ASSUNTOS SOBRE VOUCHER*_, *para isso digite !6*');
        break;

        case "8":
        case "!8":
            msg.reply('Você escolheu a *_opção 8 Referente a Outros no batalhão BGP_*\n\nNos informe o máximo de detalhes para o seu problema.');
        break;

        
    }
});

client.initialize();
