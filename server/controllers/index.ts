import { Router, Request, Response } from 'express';


export const movie = async (req: Request, res: Response) => {
    return res.status(200).json("ok");
}
