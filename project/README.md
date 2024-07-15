Projeto Creatus - Backend

Bem-vindo ao projeto Creatus Backend, desenvolvido com NestJS e integrado com MongoDB usando Prisma para operações de banco de dados. Este projeto implementa um sistema de autenticação com tokens JWT e utiliza o algoritmo bcrypt para criptografia segura de senhas.

Funcionalidades e Regras
1. Criação de Novos Usuários
Método: POST
Rota: /users
Descrição: Para criar um novo usuário, envie um corpo de requisição no formato JSON com os campos name, email, password e level do usuário que está sendo criado.

2. Leitura de Todos os Usuários
Método: GET
Rota: /users
Descrição: Retorna todos os usuários cadastrados no sistema.

3. Leitura de um Usuário Específico
Método: GET
Rota: /users/:id
Descrição: Retorna os dados de um usuário específico com base no ID fornecido na rota.

4. Modificação de um Usuário
Método: PUT
Rota: /users/:id
Descrição: Atualiza os dados de um usuário específico. O corpo da requisição deve conter os campos nome, email, senha e nível, modificando as informações conforme necessário.

5. Exclusão de um Usuário
Método: DELETE
Rota: /users/:id
Descrição: Remove um usuário do sistema com base no ID fornecido na rota. Retorna as informações do usuário deletado.

6. Login de Usuário
Método: POST
Rota: /login
Descrição: Para realizar o login, envie um corpo de requisição no formato JSON com os campos email e senha do usuário. Em caso de sucesso no login, você receberá um token JWT correspondente ao seu login.

Protocolos Http
Todas as funcionalidades acima utilizam o protocolo Http para tratamento de erros.

Tratamento de Senha
Para garantir a segurança dos usuários, o sistema utiliza o algoritmo bcrypt para realizar o hashing das senhas antes de armazená-las no banco de dados. Isso garante que as senhas sejam armazenadas de forma segura e não reversível.


Arquitetura
O projeto adota uma arquitetura de camadas composta por Controller, Service e Repository, cada uma desempenhando um papel específico no fluxo de dados e na lógica de negócios.

Controller: Responsável pelo controle das rotas da aplicação. Ele recebe as requisições HTTP, delega o processamento das mesmas para os serviços apropriados e retorna as respostas adequadas. 

Service: Encarregado de implementar a lógica de negócios da aplicação. Aqui residem as regras de negócio, validações e processamento dos dados recebidos dos controllers. Os serviços são reutilizáveis e podem ser chamados por diferentes controllers conforme necessário, centralizando a lógica de aplicação.

Repository: Responsável pela comunicação direta com o banco de dados. Ele abstrai as operações de consulta, inserção, atualização e exclusão (CRUD) dos dados. 


Funcionalidades não Implementadas / Melhorias Futuras
Uma nova rota privada será implementada, permitindo acesso apenas a usuários logados com nível de acesso igual ou superior a 4. Esta rota terá como principal funcionalidade a geração de relatórios em formato PDF baseados nos dados do banco de dados.

Para implementar esta nova rota, serão necessários os seguintes passos:
1. Armazenamento do Token JWT em Cookie: Após um login bem-sucedido, o JWT Token será armazenado em um cookie. Isso permitirá que o sistema mantenha a informação de que o usuário está logado de maneira segura e eficiente.

2. Sistema de Autenticação Baseado em Cookie: Será desenvolvido um novo sistema de autenticação que usará as informações presentes no cookie para validar e manter a sessão do usuário. Além disso, esse sistema determinará o nível de acesso do usuário para autorizar o acesso à rota privada.

3. Implementação do Algoritmo de Geração de PDF: A rota privada será configurada com um algoritmo responsável por consultar o banco de dados e gerar relatórios em formato PDF. Os dados recuperados serão utilizados para criar o conteúdo do relatório conforme necessário.


Conclusão
O projeto foi desenvolvido para oferecer uma solução robusta e segura utilizando tecnologias modernas e práticas recomendadas. A integração do NestJS com MongoDB através do Prisma proporciona uma base sólida para operações de banco de dados eficientes e escaláveis. O sistema de autenticação baseado em tokens JWT garante a segurança das comunicações entre cliente e servidor, enquanto o uso do bcrypt para hashing de senhas assegura a proteção dos dados dos usuários.

Com uma arquitetura bem definida de Controller, Service e Repository, o código é organizado e modular, facilitando a manutenção e expansão do sistema. Cada camada desempenha um papel específico, desde o roteamento de requisições HTTP até a manipulação de lógica de negócios e interação com o banco de dados.
