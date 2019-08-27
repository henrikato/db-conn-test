import { testarConexao } from './../utils/testarConexao';

export const TestarConexao = (req, res) => {
    let { host, porta, user, senha, base, timeout } = req.body;

    testarConexao(host, porta, user, senha, base, timeout, (err) => {
        if(err){ 
            return res.status(500).json({
                mensagem: "Erro ao conectar ao servidor",
                erro: err.message
            });
        }
        return res.status(200).json({
            mensagem: "Conectado ao Servidor",
            erro: null
        });
    });
}