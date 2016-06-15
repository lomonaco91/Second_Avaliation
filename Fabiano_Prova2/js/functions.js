var createTable = {

  //Inserindo Linhas
  insertLine: function(){
    var table = document.getElementById("table_prod").innerHTML

    //Coletando a quantidade de linhas usando lenght
    var numberRows = table.rows.lenght

    //Inserindo Linhas - onde irá ficar os dados dos PRODUTOS
    var row = table.insertRow(numberRows);

  }
};
