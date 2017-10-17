<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $lista = array();
        $dados = R::find('categoria');
        if(isset($_GET['retornarImagem']) && $_GET['retornarImagem']=="sim"){
            foreach($dados as $key => $value){
                $img = R::findOne('imagem_categoria', 'categoria_id=?', [$value['id']]);
                
                $dados[$key]['imagem'] = "data:image/".$value['tipo'].";base64, ". base64_encode($img['imagem']);
            }
            
        }
        
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>