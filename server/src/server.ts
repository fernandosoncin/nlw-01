import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

//Rota: endereço completo da requisição
//Recurso: qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Req Param: Parâmetros que vem na própria rota que identificam o recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais(filtros, pagination...)
//Request Body: Parâmetros para criação/atualização de informações



