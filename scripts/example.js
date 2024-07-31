// É usado para garantir que o seu código trate corretamente as quebras de linha de acordo com o sistema operacional em que está rodando. 

os.EOL;

// É usada para determinar o número de unidades de processamento disponíveis no sistema, que podem ser núcleos de CPU ou threads de hardware. 

os.availableParallelism();

// É usado para identificar a arquitetura do processador.

os.arch();

// Essas constantes são valores que representam parâmetros do sistema operacional, como códigos de erro, opções de configuração e outros valores relacionados à operação do sistema.

os.constants();

// É usada para obter detalhes sobre os núcleos de CPU disponíveis no sistema, incluindo informações como o modelo da CPU, a velocidade em MHz, e os tempos de atividade do processador (user, nice, sys, idle, e irq).

os.cpus();

// Fornece o caminho para o arquivo "null" do sistema operacional. Esse arquivo especial descarta todos os dados escritos nele e não retorna nada ao ser lido. É equivalente ao /dev/null em sistemas Unix-like (Linux, macOS) e ao NUL em sistemas Windows.

os.devNull();

// Retorna uma string que indica a ordem de bytes (endianness) da CPU do sistema operacional. A ordem de bytes pode ser "BE" (Big-Endian) ou "LE" (Little-Endian).

os.endianness();

// Retorna a quantidade de memória livre no sistema em bytes. Isso é útil para monitorar o uso da memória e garantir que seu aplicativo não está consumindo mais memória do que o disponível, o que pode causar problemas de desempenho ou falhas.

// a função os.freemem() no módulo (os) do Node.js se refere à quantidade de memória RAM livre disponível no sistema.

os.freemem();

// É usada para obter a prioridade de um processo específico no sistema operacional. Se um ID de processo (pid) for fornecido, a função retorna a prioridade desse processo; se não for fornecido, ela retorna a prioridade do processo atual.

os.getPriority();

// Retorna o diretório inicial (home) do usuário atual. 

os.homedir();

// Retorna o nome do host (ou nome da máquina) do sistema operacional. O nome do host é uma string que identifica o computador na rede.

os.hostname();

// Retorna a média de carga do sistema para os últimos 1, 5 e 15 minutos. A média de carga é uma medida de quão ocupado está o processador do sistema e pode ajudar a entender o desempenho do sistema e identificar possíveis sobrecargas.

os.loadavg()

// É usada para obter a arquitetura da máquina do processador em que o Node.js está sendo executado.

os.machine()

// Retorna uma lista de interfaces de rede disponíveis no sistema. Cada interface de rede tem informações detalhadas, como endereços IP associados e outros dados relacionados à rede.

os.networkInterfaces()

// Retorna uma string que identifica o sistema operacional em que o Node.js está sendo executado. Essa informação é útil para adaptar o comportamento do seu código com base no sistema operacional.

os.platform()

// Retorna uma string que representa a versão do sistema operacional em que o Node.js está sendo executado. Essa informação pode ser útil para adaptar o comportamento do código com base na versão específica do sistema operacional.

os.release();

// É usada para definir a prioridade de execução de um processo. A prioridade pode influenciar a quantidade de recursos que o sistema operacional aloca para o processo, afetando seu desempenho em comparação com outros processos.

os.setPriority();

// Retorna o caminho para o diretório temporário do sistema operacional onde arquivos temporários podem ser armazenados. Este diretório é utilizado para armazenar arquivos temporários que não precisam ser persistidos e que podem ser removidos quando não forem mais necessários.

os.tmpdir()

// Retorna a quantidade total de memória RAM disponível no sistema em bytes. Essa informação é útil para entender a capacidade total de memória do sistema e pode ser usada para otimizar o desempenho de aplicativos ou realizar diagnósticos.

os.totalmem()

// Retorna o tipo de sistema operacional em que o Node.js está sendo executado. Essa função fornece uma descrição geral do sistema operacional, o que pode ser útil para adaptar o comportamento do código com base no tipo de sistema.

os.type();

// Retorna o tempo, em segundos, que o sistema está em funcionamento desde o último boot. Essa métrica pode ser útil para monitorar a estabilidade e a duração do tempo de atividade do sistema.

os.uptime();

// Retorna informações sobre o usuário atualmente logado no sistema. Essas informações podem incluir o nome de usuário, o diretório inicial e o ID do usuário, entre outros detalhes.

os.userInfo()

// Retorna uma string com a versão do sistema operacional.

os.version();