import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import httpProxy from 'express-http-proxy'
import { getHost, getUrl } from './utils';

dotenv.config();

const app: Express = express();

app.use(cors())

const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/*', httpProxy(getHost, {
    proxyReqPathResolver(req) {
        return getUrl(req);
    }
}))


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});