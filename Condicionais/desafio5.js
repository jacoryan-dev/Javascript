
             let valor_etiqueta = 100;
             let forma_de_pagamento = 2; //[1-Crédito, 2 - débito, 3 - dinheiro ou pix]
             let valor_final;

             if(forma_de_pagamento === 2){
                valor_final = valor_etiqueta * 0.9;
                console.log('Você recebeu 10% de desconto! Valor total a pagar: R$' + valor_final);
             }else if(forma_de_pagamento === 3 ){
                valor_final = valor_etiqueta * 0.85;
                console.log('Você recebeu 15% de desconto! Valor total a pagar: R$' + valor_final);
             }else if(forma_de_pagamento === 1){
                valor_final = valor_etiqueta * 1.10
                alert('Valor total a pagar: R$' + valor_final);

             }

             


