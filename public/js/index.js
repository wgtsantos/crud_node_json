const listarPtable = document.getElementById("listarProdutos");

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/paginas');
    const produtos = await response.json();
    listarProdutos(produtos);
});

const listarProdutos = (produtos) => {
    
    listarPtable.innerHTML = '';

    produtos.forEach(produto => {
        let col = document.createElement('div');
        col.classList.add('col');

        let card = document.createElement('div');
        card.classList.add('card', 'border-secondary');
        card.style.width = '16rem';
        col.appendChild(card);

        let img = document.createElement('img');
        img.src = produto.img_produto; 
        img.classList.add('card-img-top', 'img-fluid', 'img-thumbnail');
        img.alt = produto.nome;
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-secondary');
        card.appendChild(cardBody);

        let h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = produto.nome;
        cardBody.appendChild(h5);

        let valor = document.createElement('p');
        valor.classList.add('card-text');
        valor.innerHTML = `<strong>Valor:</strong> R$ ${produto.valor.toFixed(2)}`;
        cardBody.appendChild(valor);

        let fab = document.createElement('p');
        fab.classList.add('card-text');
        fab.innerHTML = `<strong>Fabricante:</strong> ${produto.fabricante}`;
        cardBody.appendChild(fab);

        let qtde = document.createElement('p');
        qtde.classList.add('card-text');
        qtde.innerHTML = `<strong>Quantidade:</strong> ${produto.quantidade}`;
        cardBody.appendChild(qtde);

        let divButtonGroup = document.createElement('div');
        divButtonGroup.classList.add('button-group');
        cardBody.appendChild(divButtonGroup);

        let btnCurtir = document.createElement('a');
        btnCurtir.classList.add('btn', 'btn-success', 'me-3');
        btnCurtir.href = '#';
        btnCurtir.textContent = 'CURTIR';
        divButtonGroup.appendChild(btnCurtir);

        // let btnExcluir = document.createElement('button');
        // btnExcluir.classList.add('btn', 'btn-danger', 'me-3');
        // btnExcluir.textContent = 'EXCLUIR';
        // btnExcluir.dataset.id = produto.id;
        // btnExcluir.dataset.name = produto.nome;
        // divButtonGroup.appendChild(btnExcluir);

        listarPtable.appendChild(col);

    });
};


const delProduto = async (id) => {
    await fetch(`/api/paginas/${id}`, {
        method: 'DELETE',
    });
    
    alert("Produto Excluído com Sucesso!");
    window.location.href = 'listar.html';
};

document.addEventListener('click', (e) => {
    let result = e.target.classList.contains('btn-danger');
    if (result) {
        const id_ex = e.target.getAttribute('data-id');
        const nome_ex = e.target.getAttribute('data-name');
        let ok = confirm(`Tem certeza que deseja excluir este produto: ${nome_ex}?`);
        if (ok) {
            delProduto(id_ex);
        } else {
            window.location.href = 'listar.html';
        }
        
    } 
    
});