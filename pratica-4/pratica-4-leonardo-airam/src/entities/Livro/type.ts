enum Genero {
    FiccaoCientifica = 'Ficção Científica',
    Fantasia = 'Fantasia',
    Romance = 'Romance',
    Misterio = 'Mistério',
    Suspense = 'Suspense',
    Terror = 'Terror',
    Aventura = 'Aventura',
    NaoFiccao = 'Não Ficção',
    Biografia = 'Biografia',
    Historia = 'História',
    Autoajuda = 'Auto ajuda',
    Poesia = 'Poesia',
    Ciencia = 'Ciência',
    Filosofia = 'Filosofia',
    Cronica = 'Crônica',
    Drama = 'Drama',
    Outro = 'Outro',
};

interface ILivro extends IEntityBase{
    titulo: string;
    autor: string;
    genero: Genero;
};

export {
    Genero,
    ILivro,
}