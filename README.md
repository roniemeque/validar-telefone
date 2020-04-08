# Validador de telefones BR

Valida telefones fixos e celulares brasileiros. Checa tamanho, repetições inválidas, presença de DDD, nono dígito e outros.

**Aviso: Ainda em construção e muito cru - PRs são bem-vindos**

A função retorna `true` ou `false` para o telefone que for passado para ela

Exemplo de uso:

```javascript
import validator from "validar-telefone";

validator("(17) 99399-9393"); // true
validator("(17) 3399-9393"); // true
validator(""); // false
validator("aa"); // false
validator("9999-9999"); // false
validator("(17) 99399-9393", { permitirCelular: false }); // false
validator("(17) 29399-9393"); // false
validator("(17) 99999-9393"); // false
```

## Opções

```javascript
validator(telefone, options);
```

| Opção                     | Default | Descrição                                                        |
| ------------------------- | ------- | ---------------------------------------------------------------- |
| `mostrarLogs`             | `false` | Ajuda a entender o porque do resultado da validação              |
| `validarTamanho`          | `true`  |
| `codigoAreaPresente`      | `true`  | DDD pode estar presente                                          |
| `codigoAreaPossivel`      | `false` | DDD deve estar presente                                          |
| `codigoPaisPresente`      | `false` | Código de país pode estar presente                               |
| `codigoPaisPossivel`      | `false` | Código de país deve estar presente                               |
| `permitirCelular`         | `true`  |
| `bloquearPadroesIncomuns` | `true`  | Bloquear números que contenham 99999 ou outros padrões estranhos |

## TODO

- [x] verificar tamanhos
- [x] verificar repetições
- [x] verificar nono-dígito
- [ ] permitir customização das validações
- [ ] melhorar validação de padrões estranhos
- [ ] permitir validação de lista de telefones
