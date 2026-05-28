console.log("Sistema iniciado")


const API_URL = "https://dummyjson.com/products"

let listaProdutos = []

let favoritos = JSON.parse(
    localStorage.getItem("favoritos")
) || []
let carrinho = []
async function carregarProdutos() {

    try {

        const resposta = await fetch(API_URL)

        const dados = await resposta.json()

        listaProdutos = dados.products

        renderProdutos(listaProdutos)

        renderFavoritos()

    } catch (erro) {

        console.error("Erro:", erro)
    }
}

function renderProdutos(lista) {

    const areaProdutos =
        document.getElementById("produtos")

    areaProdutos.innerHTML = ""

    lista.forEach(produto => {

        const estaFavorito =
            favoritos.includes(produto.id)

        areaProdutos.innerHTML += `
        
            <div class="col-md-4">

                <div class="
                    card
                    card-produto
                    h-100
                    ${estaFavorito ? "favorito" : ""}
                ">

                    <img
                        src="${produto.thumbnail}"
                        class="card-img-top imagem-produto"
                        alt="${produto.title}"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${produto.title}
                        </h5>

                        <p>
                            Categoria:
                            ${produto.category}
                        </p>

                        <p class="fw-bold">
                            R$ ${produto.price}
                        </p>

                        <button
                            class="btn btn-warning"
                            onclick="toggleFavorito(${produto.id})"
                        >
                        <button
    class="btn btn-success mt-2"
    onclick="adicionarCarrinho(${produto.id})"
>
    🛒 Adicionar
</button>
                            ${estaFavorito
                ? "💔 Remover"
                : "⭐ Favoritar"
            }

                        </button>

                    </div>

                </div>

            </div>
        `
    })
}

function toggleFavorito(id) {

    if (favoritos.includes(id)) {

        favoritos =
            favoritos.filter(
                favorito => favorito !== id
            )

    } else {

        favoritos.push(id)
    }

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    )

    renderProdutos(listaProdutos)

    renderFavoritos()
}

function adicionarCarrinho(id) {

    const produto =
        listaProdutos.find(produto =>
            produto.id === id
        )

    carrinho.push(produto)

    renderCarrinho()
}

function renderFavoritos() {

    const areaFavoritos =
        document.getElementById("favoritos")

    areaFavoritos.innerHTML = ""

    const produtosFavoritos =
        listaProdutos.filter(produto =>
            favoritos.includes(produto.id)
        )

    produtosFavoritos.forEach(produto => {

        areaFavoritos.innerHTML += `

            <div class="col-md-4">

                <div class="
                    card
                    card-produto
                    favorito
                    h-100
                ">

                    <img
                        src="${produto.thumbnail}"
                        class="card-img-top imagem-produto"
                    >

                    <div class="card-body">

                        <h5>
                            ${produto.title}
                        </h5>

                        <p class="fw-bold">
                            R$ ${produto.price}
                        </p>

                    </div>

                </div>

            </div>
        `
    })
}

function renderCarrinho() {

    const areaCarrinho =
        document.getElementById("carrinho")

    areaCarrinho.innerHTML = ""

    carrinho.forEach(produto => {

        areaCarrinho.innerHTML += `

            <div class="col-md-4">

                <div class="card h-100">

                    <img
                        src="${produto.thumbnail}"
                        class="card-img-top imagem-produto"
                    >

                    <div class="card-body">

                        <h5>
                            ${produto.title}
                        </h5>

                        <p class="fw-bold">
                            R$ ${produto.price}
                        </p>

                    </div>

                </div>

            </div>
        `
    })
}

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Carrinho vazio!")

        return
    }

    alert("✅ Compra realizada com sucesso!")

    carrinho = []

    renderCarrinho()
}

document
    .getElementById("busca")
    .addEventListener("input", function (evento) {

        const texto =
            evento.target.value.toLowerCase()

        const produtosFiltrados =
            listaProdutos.filter(produto =>

                produto.title
                    .toLowerCase()
                    .includes(texto)
            )

        renderProdutos(produtosFiltrados)
    })

carregarProdutos()