function envio(){
    let marcaDoCarro = document.getElementById('marca').value
    let modeloDoCarro = document.getElementById('modelo').value

    const carro = {
        marca: marcaDoCarro,
         modelo: modeloDoCarro
    };

    localStorage.setItem('carros', JSON.stringify(carro))
}
console.log('Marca e Modelo Armazenado!')