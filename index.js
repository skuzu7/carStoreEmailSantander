import enviarEmail from './envia-email.js';
import listaClientes from './data.js';
import { verificarDiaDaSemana, montarCorpoEmail } from './utils.js';

// Função principal para enviar e-mails aos clientes
function enviarEmailClientes() {
  // Verifica se hoje é segunda-feira antes de enviar os e-mails
  if (!verificarDiaDaSemana()) {
    console.log('Os e-mails são enviados apenas às segundas-feiras.');
    return;
  }

  // Itera sobre a lista de clientes e envia e-mails para aqueles que aceitam marketing
  listaClientes.forEach(({ email, aceitaMarketing }) => {
    if (aceitaMarketing) {
      const corpoEmail = montarCorpoEmail();
      const resultado = enviarEmail(email, 'Novidades da CarStore', corpoEmail);
      console.log(resultado.message);
    }
  });
}

enviarEmailClientes();
