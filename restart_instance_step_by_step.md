### Passos para Configurar a Instância Após Reinício

---
1. **Obter Novo IP Público**:
   - Após iniciar a instância, vá para o painel do AWS EC2 e copie o novo IP público da instância.

2. **Atualizar o Registro A no DNS**:
   - Acesse o provedor do seu domínio.
   - Encontre o registro do tipo **A** que aponta para o IP antigo.
   - Atualize o registro com o novo IP da instância.
   - Salve as alterações e aguarde a propagação.

3. **Conectar à Instância via SSH**:
   ```bash
   ssh -i "seu_arquivo.pem" ec2-user@novo-ip
   ```

4. **Iniciar o Servidor Nginx** (se ele não iniciar automaticamente):
   ```bash
   sudo systemctl start nginx
   ```

5. **Instalar Dependências (se necessário)**:
   - No diretório `/server`, instale os requisitos do projeto:
     ```bash
     pip install -r /caminho/do/seu/app/server/requirements.txt
     ```

6. **Iniciar o Gunicorn**:
   - Navegue até o diretório `/server` e inicie o Gunicorn:
     ```bash
     cd /caminho/do/seu/app/server
     nohup gunicorn --workers 3 --bind 0.0.0.0:5000 run:app &
     ```

7. **Verificar se o Aplicativo está Rodando**:
   - Teste se a API está funcionando:
     ```bash
     curl http://127.0.0.1:5000
     ```
   - Acesse o frontend pelo domínio para confirmar se tudo está funcionando.

8. **Monitorar Logs** (opcional):
   - Verifique os logs para assegurar que não há erros:
     ```bash
     sudo tail -f /var/log/nginx/error.log
     tail -f nohup.out
     ```

---