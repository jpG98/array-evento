const mapas = ["Penhascos Uivantes", "Dirtmouth", "Pico de Cristal", "Caminho Verde", "Encruzilhada Esquecida", "Terra do Descanso", "Jardins da Rainha", "Cânion da Névoa", "Ermos Fúngicos", "Cidade das Lágrimas", "Borda do Reino", "Ninho Profundo", "Hidrovia Real", "A Colmeia", "Bacia Antiga"];

const amuletos = ["Coração Inquebrável", "Corte Rápido", "Força Inquebrável", "Ninho de Flukes", "Bênção de Joni", "Canção das Larvas", "Foco Profundo", "Elegia da Larvamosca", "Sangue da Colmeia", "Foco Rápido", "Bússola Caprichosa", "Devorador de Almas", "Marca de Orgulho", "Núcleo de Sangue Vital", "Mestre da Esquiva"];

function todosmap() {
    const randomIndex = Math.floor(Math.random() * mapas.length);
    const mapasElement = document.getElementById("mapas");
    mapasElement.innerHTML = mapas[randomIndex];
  }

function todosamuletos() {
    const randomIndex = Math.floor(Math.random() * amuletos.length);
    const amuletosElement = document.getElementById("amuletos");
    amuletosElement.innerHTML = amuletos[randomIndex];
  }
