 document.addEventListener('DOMContentLoaded', function() {
            // Carrega a página de produtos por padrão
            loadProdutosPage();
            
            // Configura os listeners dos links do menu
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = this.getAttribute('href').substring(1);
                    
                    // Atualiza o título da página
                    document.getElementById('page-title').textContent = 'IPlast';
                    
                    // Remove a classe active de todos os links
                    document.querySelectorAll('.sidebar a').forEach(a => {
                        a.classList.remove('active');
                    });
                    
                    // Adiciona a classe active ao link clicado
                    this.classList.add('active');
                    
                    // Carrega o conteúdo apropriado
                    if (target === 'produtos') {
                        loadProdutosPage();
                    } else if (target === 'funcionarios') {
                        loadFuncionariosPage();
                    } else if (target === 'clientes') {
                        loadClientesPage();
                    }
                });
            });
            
            // Funções para carregar cada página
            function loadProdutosPage() {
                document.getElementById('page-title').textContent += ' - Produtos';
                document.getElementById('content-area').innerHTML = `
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Novo Produto</h5>
                            <button class="btn btn-primary" onclick="openCadastroProdutoModal()">+ Novo Produto</button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Vl. Custo</th>
                                            <th>Vl. Final</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Amos</td>
                                            <td>Amos bancos</td>
                                            <td>R$2,00</td>
                                            <td>R$10,00</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Feijão</td>
                                            <td>Feijão preto</td>
                                            <td>R$10,00</td>
                                            <td>R$25,00</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            function loadFuncionariosPage() {
                document.getElementById('page-title').textContent += ' - Funcionários';
                document.getElementById('content-area').innerHTML = `
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Novo Funcionário</h5>
                            <button class="btn btn-primary" onclick="openCadastroFuncionarioModal()">+ Novo Funcionário</button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Email</th>
                                            <th>Telefone</th>
                                            <th>Logradouro</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>João</td>
                                            <td>000.000.000-00</td>
                                            <td>joao@gmail.com</td>
                                            <td>(19) 99999-9999</td>
                                            <td>Rua Afonso</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>João</td>
                                            <td>000.000.000-00</td>
                                            <td>joao@gmail.com</td>
                                            <td>(19) 99999-9999</td>
                                            <td>Rua Afonso</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            function loadClientesPage() {
                document.getElementById('page-title').textContent += ' - Clientes';
                document.getElementById('content-area').innerHTML = `
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>Novo Cliente</h5>
                            <button class="btn btn-primary" onclick="openCadastroClienteModal()">+ Novo Cliente</button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>E-mail</th>
                                            <th>Logradouro</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Julio Pedro</td>
                                            <td>111.111.111-11</td>
                                            <td>josopedro@gmail.com</td>
                                            <td>Rua Orásia</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Pedro Zero</td>
                                            <td>222.222.222-22</td>
                                            <td>pedorzero@gmail.com</td>
                                            <td>Rua Orásia de cima</td>
                                            <td class="table-actions">
                                                <a href="#" class="btn btn-sm btn-warning">Editar</a>
                                                <a href="#" class="btn btn-sm btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // Funções para abrir modais de cadastro
            window.openCadastroProdutoModal = function() {
                document.getElementById('cadastroModalLabel').textContent = 'Cadastre um produto';
                document.getElementById('modal-body-content').innerHTML = `
                    <form id="produtoForm">
                        <div class="mb-3">
                            <label for="nomeProduto" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeProduto" required>
                        </div>
                        <div class="mb-3">
                            <label for="descricaoProduto" class="form-label">Descrição</label>
                            <textarea class="form-control" id="descricaoProduto" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="valorCusto" class="form-label">Valor de custo</label>
                            <input type="number" step="0.01" class="form-control" id="valorCusto" required>
                        </div>
                        <div class="mb-3">
                            <label for="valorVenda" class="form-label">Valor de venda</label>
                            <input type="number" step="0.01" class="form-control" id="valorVenda" required>
                        </div>
                    </form>
                `;
                
                // Configura o botão de salvar
                document.getElementById('save-btn').onclick = function() {
                    // Aqui viria a lógica para salvar o produto
                    alert('Produto cadastrado com sucesso!');
                    const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroModal'));
                    modal.hide();
                };
                
                // Mostra o modal
                const modal = new bootstrap.Modal(document.getElementById('cadastroModal'));
                modal.show();
            };
            
            window.openCadastroFuncionarioModal = function() {
                document.getElementById('cadastroModalLabel').textContent = 'Cadastre um Funcionário';
                document.getElementById('modal-body-content').innerHTML = `
                    <form id="funcionarioForm">
                        <div class="mb-3">
                            <label for="nomeFuncionario" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeFuncionario" required>
                        </div>
                        <div class="mb-3">
                            <label for="cpfFuncionario" class="form-label">CPF</label>
                            <input type="text" class="form-control" id="cpfFuncionario" required>
                        </div>
                        <div class="mb-3">
                            <label for="emailFuncionario" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailFuncionario" required>
                        </div>
                        <div class="mb-3">
                            <label for="telefoneFuncionario" class="form-label">Telefone</label>
                            <input type="tel" class="form-control" id="telefoneFuncionario" required>
                        </div>
                        <div class="mb-3">
                            <label for="logradouroFuncionario" class="form-label">Logradouro</label>
                            <input type="text" class="form-control" id="logradouroFuncionario" required>
                        </div>
                    </form>
                `;
                
                // Configura o botão de salvar
                document.getElementById('save-btn').onclick = function() {
                    // Aqui viria a lógica para salvar o funcionário
                    alert('Funcionário cadastrado com sucesso!');
                    const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroModal'));
                    modal.hide();
                };
                
                // Mostra o modal
                const modal = new bootstrap.Modal(document.getElementById('cadastroModal'));
                modal.show();
            };
            
            window.openCadastroClienteModal = function() {
                document.getElementById('cadastroModalLabel').textContent = 'Cadastre um Cliente';
                document.getElementById('modal-body-content').innerHTML = `
                    <form id="clienteForm">
                        <div class="mb-3">
                            <label for="nomeCliente" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeCliente" required>
                        </div>
                        <div class="mb-3">
                            <label for="cpfCliente" class="form-label">CPF</label>
                            <input type="text" class="form-control" id="cpfCliente" required>
                        </div>
                        <div class="mb-3">
                            <label for="emailCliente" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="emailCliente" required>
                        </div>
                        <div class="mb-3">
                            <label for="logradouroCliente" class="form-label">Logradouro</label>
                            <input type="text" class="form-control" id="logradouroCliente" required>
                        </div>
                    </form>
                `;
                
                // Configura o botão de salvar
                document.getElementById('save-btn').onclick = function() {
                    // Aqui viria a lógica para salvar o cliente
                    alert('Cliente cadastrado com sucesso!');
                    const modal = bootstrap.Modal.getInstance(document.getElementById('cadastroModal'));
                    modal.hide();
                };
                
                // Mostra o modal
                const modal = new bootstrap.Modal(document.getElementById('cadastroModal'));
                modal.show();
            };
        });