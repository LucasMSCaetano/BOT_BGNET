const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    },
    webVersionCache: {
        type: "remote",
        remotePath:
          "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
      }
});

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

    // Fiz esse tratamento pensando em facilitar o envio de mensagens dos clientes que agora podem enviar tudo maiusculo, minusculo ou "mesclado" que o nosso bot vai compreender.  
    // Remover acentos - [Artur] - https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
    //const tratando_string = msg.body.toLowerCase();
    const tratando_string = msg.body.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    
    


    switch (tratando_string){ //switch case simples, dependendo agora apenas do cliente para escolher as opções existentes e caso ele não escolha 
        case "menu":
        case "!menu":
        case "opa":
        case "bom dia":
        case "boa tarde":
        case "boa noite":
        case "oi":
        case "ola":
            msg.reply(`Olá, eu sou o novo bot BGNet 🤖\n\nPor gentileza, identifique de qual batalhão você está falando!\n\nDigite *_BPEB_* para tratar de assuntos no Batalhão de PolÍcia do Exército.\n\n Digite *_BGP_* para tratar de assuntos no batalhão de Guarda Presidencial.`);
        break;

        case "bpeb":
        case "!bpeb":
        case "bpeb!":
            msg.reply('\nCerto, identifiquei que você está localizado no *BPEB*.\n\nSuas opções de ação são:\n\n*Digite 1 - Compra (necessário ser filiado ao grêmio)*\n\n\n*Digite 2 - Filiação/Grêmio*\n\n\n*Digite 3 - Trocas ou Suporte Voucher*\n\n\n*Digite 4 - Suporte Técnico*\n\n\n*Digite 5 - Outros*');
        break;

        case "1":
        case "!1":
            //msg.reply('Você escolheu a *_opção 1 Referente a Compra/Venda no batalhão BPEB_*\n\nNo momento não estamos realizando venda de novos Vouchers. Pedimos que aguardem novas informações.');
            //msg.reply('Você escolheu a *_opção 1 Referente a Compra/Venda no batalhão BPEB_*\n\nNós conseguimos permissão para continuar durante os trâmites legais. Não é possivel prever a duração deste período, por isso estamos vendendo o plano de 3 Mb de 10 dias por R$10,00.\n\nAceitamos:\n\nPIX: 32.999.022/0001-01\nPicPay: @BGNet\n\nBasta enviar o comprovante assim que enviar o pagamento.\n\nIremos responder com o voucher assim que possível.');
            msg.reply('Você escolheu a *_opção 1 Referente a Compra/Venda no batalhão BPEB_*\n\nPara comprar um voucher é *_OBRIGATÓRIO_* que você seja filiado ao grêmio, para mais informações de como se filiar, digite *_!2_*.\n\nPara receber o voucher basta enviar o *COMPROVANTE DE PAGAMENTO E O CPF CADASTRADO NO GRÊMIO* assim que enviar o pagamento.\n\nOs planos disponíveis são: \n*1,5 Mb:* R$20,00 - _30 dias_\n*3 Mb:* R$ 30,00 - _30 dias_\n*3 Mb:* R$ 5,00 - _1 dia_\n\nPara pagamentos aceitamos:\n\nPIX: 32.999.022/0001-01\nPicPay: @BGNet\n\nIremos responder com o voucher assim que possível. O atendimento é por ordem de chegada.');        
            break;

        case "2":
        case "!2":
            msg.reply('Você escolheu a *_opção 2 Referente a Filiação/Grêmio no batalhão BPEB_*\n\nAgora para comprar um voucher de internet no BPEB é obrigatório que você seja filiado no grêmio, seguem os contatos para que você resolva essas questões:\n\n\n1º Ten Junior: *(61) 99859-0409*\n3º Sgt Bandeira: *(61) 99193-4866*');        
            break;

        case "3":
        case "!3":
            msg.reply('Você escolheu a *_opção 3 Referente a Trocas ou Suporte Voucher no batalhão BPEB_*\n\nInforme o que está acontecendo com o seu voucher. \nEnvie o número do seu voucher, comprovante de pagamento e número de celular de quem realizou a compra.');
        break;

        case "4":
        case "!4":
            msg.reply('Você escolheu a *_opção 4 Referente a Suporte Técnico no batalhão BPEB_*\n\nInforme sua localização (companhia, andar, prédio) e qual o problema.\n\nPreferencialmente também envie a localização exata pelo WhatsApp.\n\n_*NÃO SERÃO TRATADOS ASSUNTOS SOBRE VOUCHER*_, *para isso digite !3*');
        break;

        case "5":
        case "!5":
            msg.reply('Você escolheu a *_opção 5 Referente a Outros no batalhão BPEB_*\n\nNos informe o máximo de detalhes da sua situação.');
        break;

        //------------------------------------------------------------------------------------------------------------------------------->

        case "bgp":
        case "!bgp":    
        case "bgp!":
            msg.reply('\nCerto, identifiquei que você está localizado no *BGP*.\n\nSuas opções de ação são:\n\n*Digite 6 - Compra*\n\n\n*Digite 7 - Trocas ou Suporte Voucher*\n\n\n*Digite 8 - Suporte Técnico*\n\n\n*Digite 9 - Outros*');
        break;

        case "6":
        case "!6":
            msg.reply('Você escolheu a *_opção 6 Referente a Compra/Venda no batalhão BGP_*.\n\n\nNós possuímos os seguintes planos:\n\n-> 1,5 Mb: R$ 20,00\n-> 3Mb : R$ 30,00\n\nAceitamos:\n\nPIX: 32.999.022/0001-01\nPicPay: @BGNet\n\nBasta enviar o comprovante assim que enviar o pagamento.\n\nIremos responder com o voucher assim que possível.');
        break;
        
        case "7":
        case "!7":
            msg.reply('Você escolheu a *_opção 7 Referente a Trocas ou  Suporte Voucher no batalhão BGP_*.\n\nInforme o que está acontecendo com o seu voucher. \n\nEnvie o número do seu voucher, comprovante de pagamento, últimos 4 dígitos do cartão (se aplicável) e data de compra.');
        break;

        case "8":
        case "!8":
            msg.reply('Você escolheu a *_opção 8 Referente a Suporte Técnico no batalhão BGP_*.\n\nInforme sua localização (companhia, andar, prédio) e qual o problema. \n\nPreferencialmente também envie a localização exata pelo WhatsApp.\n\n _*NÃO SERÃO TRATADOS ASSUNTOS SOBRE VOUCHER*_, *para isso digite !6*');
        break;

        case "9":
        case "!9":
            msg.reply('Você escolheu a *_opção 9 Referente a Outros no batalhão BGP_*\n\nNos informe o máximo de detalhes para o seu problema.');
        break;

        
    }
});

client.initialize();
