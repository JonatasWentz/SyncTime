 window.onload = function() {
            for (let i = 1; i <= 7; i++) {
                const ul = document.getElementById("tarefas" + i);
                const tarefasArmazenadas = localStorage.getItem("tarefas" + i);

                if (tarefasArmazenadas) {
                    ul.innerHTML = tarefasArmazenadas;
                }
            }
        };

        function adicionarTarefas() {
            for (let i = 1; i <= 7; i++) {
                const input = document.querySelector("input[name='day" + i + "']");
                const ul = document.getElementById("tarefas" + i);

                if (input.value.trim() !== '') {
                    const li = document.createElement('li');
                    li.textContent = input.value;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Apagar';
                    deleteButton.style.marginLeft = '10px';
                    deleteButton.addEventListener('click', function () {
                        ul.removeChild(li);
                        // Atualiza as tarefas armazenadas localmente
                        atualizarTarefasLocalStorage(i);
                    });

                    li.appendChild(deleteButton);
                    ul.appendChild(li);
                    input.value = ''; // Limpa o campo de entrada

                    // Armazena as tarefas localmente
                    atualizarTarefasLocalStorage(i);
                }
            }
        }

        function atualizarTarefasLocalStorage(i) {
            const ul = document.getElementById("tarefas" + i);
            localStorage.setItem("tarefas" + i, ul.innerHTML);
        }

        function limparTarefas() {
            for (let i = 1; i <= 7; i++) {
                const ul = document.getElementById("tarefas" + i);
                ul.innerHTML = '';
                localStorage.removeItem("tarefas" + i);
            }
        }