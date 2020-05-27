# Recuparacao de senha - DONE! SUCESS! s2

**RF**

- O usuario deve poder recuperar sua senha, informando o seu e-mail;
- O usuario deve receber um e-mail com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envio de e-mails em producao;
- O envio de e-mail deve acontecer em segundo plano;

**RN**

- O link enviado por e-mail, para resetar senha, deve retar em 2h;
- O usuario precisara confirmar a nova senha ao reseta-la;

# Atualizacao do perfil

**RF**

- O usurio deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuario nao pode alterar seu e-mail para um já utilizado no app;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**RNF**

- Os agendamentos do prestadores no dia devem ser armazenados em cache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviados em tempo-real utilizando socket.io;

**RN**

- A notificacao de ter um status de lida e nao-lida para que o prestador possa controlar;

# Agendamentos de servicos

**RF**

- O usuario deve poder listar todos os prestadores de serviços cadastrados;
- O usuario deve poder listar os dias de um mes, com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um novo prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h;
- Os agendamentos deve estar disponiveis entre 8h as 18h (Primeiro horario as 8h e ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar serviços consigo mesmo;

# Tips

- Think on macro functions first ('#'). Basic the pages.
- Think on micro fonctions second ('\*\*\*\*')
- RF = Requisitos Funcionais
  - Eh exatamente as funcoes que vamos ter dentro da macro tema
  - Exemplo: O usuario vai poder recuperar a senha utilizando o e-mail antigo dele
- RNF = Requisitos NAO Funcionais
  - Nao ligadas com a regra de negocio
  - Qual lib vamos utilizar
  - Requisitos voltados para camada tecnica
- RN = Regras de negocio
  - A RN deve sempre estar relacionada a um requisito funcional;
